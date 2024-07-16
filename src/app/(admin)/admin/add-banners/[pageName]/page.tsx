"use client";

import { useParams } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import api from "@/lib/axios";
import { Carousel } from "@/lib/types/banner";
import { Loader } from "lucide-react";

const Page: React.FC = () => {
  const params = useParams();
  const pageName = params.pageName as string;
  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pageName) {
      const fetchData = async () => {
        try {
          const response = await api.get(`carousel/pages/name/${pageName}`);
          setCarousels(response.data.page.carousels);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setError("Error fetching page data");
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [pageName]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleUpload = async () => {
    if (!selectedFiles || selectedFiles.length !== 2) {
      console.error(
        "Please select exactly two files: one for desktop and one for mobile."
      );
      return;
    }

    try {
      const uploadDesktopRes = await uploadImage(selectedFiles[0]);
      const uploadMobileRes = await uploadImage(selectedFiles[1]);

      const newCarousel: Carousel = {
        desktopUrl: uploadDesktopRes.data.url,
        mobileUrl: uploadMobileRes.data.url,
        desktopFileId: uploadDesktopRes.data.fileId,
        mobileFileId: uploadMobileRes.data.fileId,
      };

      const res = await api.put(`carousel/pages/name/${pageName}`, {
        carousels: [...carousels, newCarousel],
        pageName,
      });

      setCarousels((prevState) => [...prevState, newCarousel]);
      setSelectedFiles(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Failed to upload images:", error);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("heroImage", file);

    return axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/cloudinary/upload-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const handleRemoveThumbnail = async (
    desktopFileId: string,
    mobileFileId: string
  ) => {
    try {
      setLoading(true);
      await api.delete(`cloudinary/delete-image`, {
        data: { fileId: desktopFileId },
      });
      await api.delete(`cloudinary/delete-image`, {
        data: { fileId: mobileFileId },
      });
      const updatedCarousels = carousels.filter(
        (carousel) =>
          carousel.desktopFileId !== desktopFileId &&
          carousel.mobileFileId !== mobileFileId
      );
      setCarousels(updatedCarousels);
      await api.put(`carousel/pages/name/${pageName}`, {
        carousels: updatedCarousels,
        pageName,
      });
      setLoading(false);
    } catch (error) {
      console.error("Failed to delete thumbnails:", error);
      setLoading(false);
    }
  };

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    const dragIndex = Number(event.dataTransfer.getData("index"));
    if (dragIndex === dropIndex) return;

    const updatedCarousels = [...carousels];
    const [draggedItem] = updatedCarousels.splice(dragIndex, 1);
    updatedCarousels.splice(dropIndex, 0, draggedItem);

    setCarousels(updatedCarousels);

    const updateCarouselsOrder = async () => {
      try {
        await api.put(`carousel/pages/name/${pageName}`, {
          carousels: updatedCarousels,
          pageName: pageName,
        });
      } catch (error) {
        console.error("Failed to update carousel order:", error);
      }
    };
    updateCarouselsOrder();
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">{pageName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {carousels?.map((carousel, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl overflow-hidden shadow-md border p-4"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}
          >
            <div className="relative h-64 w-full md:h-64 md:w-64">
              <Image
                src={carousel.desktopUrl}
                alt={`Desktop view ${carousel.desktopFileId}`}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="relative h-96 w-full md:h-64 md:w-64">
              <Image
                src={carousel.mobileUrl}
                alt={`Mobile view ${carousel.mobileFileId}`}
                layout="fill"
                className="object-cover"
              />
            </div>
            <button
              onClick={() =>
                handleRemoveThumbnail(
                  carousel.desktopFileId,
                  carousel.mobileFileId
                )
              }
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
          id="fileInput"
        />
        <button
          onClick={handleUploadButtonClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
        >
          Select and Upload Images
        </button>
        {selectedFiles && (
          <button
            onClick={handleUpload}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Upload Selected Images
          </button>
        )}
      </div>
    </div>
  );
  
};

export default Page;
