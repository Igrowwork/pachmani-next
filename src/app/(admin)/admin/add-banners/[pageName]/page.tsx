"use client";

import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "@/lib/axios";

interface Carousel {
  category: string;
  fileId: string;
  url: string;
}

const Page: React.FC = () => {
  const params = useParams();
  const pageName = params.pageName as string;

  const [carousels, setCarousels] = useState<Carousel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (pageName) {
      const fetchData = async () => {
        try {
          const response = await api.get(`carousel/pages/name/hairecare`);
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
      setSelectedFile(event.target.files[0]);
      handleUpload(event.target.files[0]);
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("heroImage", file);

    try {
      const uploadRes = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/cloudinary/upload-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const newCarousel: Carousel = {
        category: pageName,
        fileId: uploadRes.data.fileId,
        url: uploadRes.data.url,
      };

      const res = await api.put(`carousel/pages/name/haircare`, {
        carousels: [...carousels, newCarousel],
        pageName: 'haircare',
      });

      setCarousels((prevState) => [...prevState, newCarousel]);
      setSelectedFile(null);
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  const handleRemoveThumbnail = async (fileId: string) => {
    try {
      setLoading(true);
      await api.delete(`/api/cloudinary/delete-image`, {
        data: { fileId },
      });

      setCarousels((prevState) =>
        prevState.filter((carousel) => carousel.fileId !== fileId)
      );
      setLoading(false);
    } catch (error) {
      console.error("Failed to delete thumbnail:", error);
      setLoading(false);
    }
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.dataTransfer.setData("index", index.toString());
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    const dragIndex = Number(event.dataTransfer.getData("index"));
    if (dragIndex === dropIndex) return;

    const updatedCarousels = [...carousels];
    const [draggedItem] = updatedCarousels.splice(dragIndex, 1);
    updatedCarousels.splice(dropIndex, 0, draggedItem);

    setCarousels(updatedCarousels);

    // Optional: Call the API to persist the new order
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
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
            className="relative h-64 w-full rounded-xl overflow-hidden shadow-md border"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}
          >
            <Image
              src={carousel.url}
              alt={carousel.fileId}
              layout="fill"
              className="object-cover"
            />
            <button
              onClick={() => handleRemoveThumbnail(carousel.fileId)}
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
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Upload Image
        </label>
      </div>
    </div>
  );
};

export default Page;
