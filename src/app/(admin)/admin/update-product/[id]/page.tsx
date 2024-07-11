"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import api from "@/lib/axios";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

interface Review {
  text: string;
  rating: number;
}

interface Variant {
  _id?: string;
  packSize: number;
  price: number;
  stock: number;
  unit: string;
  discount: number;
}

interface ProductImage {
  fileId: string;
  url: string;
}

interface ProductState {
  productName: string;
  description: string;
  category: string;
  highlights: string[];
  reviews: Review[];
  ingredients: string[];
  howToUse: string[];
  variants: Variant[];
  thumbnail?: ProductImage;
  images?: ProductImage[];
}

const initialProductState: ProductState = {
  productName: "",
  description: "",
  category: "",
  highlights: [""],
  reviews: [{ text: "", rating: 1 }],
  ingredients: [""],
  howToUse: [""],
  variants: [{ packSize: 0, price: 0, stock: 0, unit: "", discount: 0 }],
  thumbnail: undefined,
  images: [],
};

const categories = ["hairCare", "skincare", "mens"];

const UpdateProducts: React.FC = () => {
  const [isVal, setIsVal] = useState<ProductState>(initialProductState);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setIsVal({
      ...isVal,
      [name]: value,
    });
  };

  const handleArrayChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    arrayName: keyof ProductState,
    fieldName?: keyof Review | keyof Variant
  ) => {
    const newArray = [...(isVal[arrayName] as any[])];
    if (fieldName) {
      newArray[index][fieldName] = e.target.value;
    } else {
      newArray[index] = e.target.value;
    }
    setIsVal({
      ...isVal,
      [arrayName]: newArray,
    });
  };

  const handleAddArrayItem = (
    arrayName: keyof ProductState,
    defaultValue: any = ""
  ) => {
    setIsVal({
      ...isVal,
      [arrayName]: [...(isVal[arrayName] as any[]), defaultValue],
    });
  };

  const handleRemoveArrayItem = (
    arrayName: keyof ProductState,
    index: number
  ) => {
    const newArray = [...(isVal[arrayName] as any[])];
    newArray.splice(index, 1);
    setIsVal({
      ...isVal,
      [arrayName]: newArray,
    });
  };

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleRemoveThumbnail = async () => {
    try {
      setIsLoading(true);
      if (isVal.thumbnail?.fileId) {
        await api.delete(`/cloudinary/delete-image`, {
          data: { fileId: isVal.thumbnail.fileId },
        });
        setIsVal((prevState) => ({
          ...prevState,
          thumbnail: undefined,
        }));
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to delete thumbnail:", error);
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImages([...newImages, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveImage = async (index: number) => {
    try {
      setIsLoading(true);
      const image = isVal.images![index];
      if (image.fileId) {
        await api.delete(`/cloudinary/delete-image`, {
          data: { fileId: image.fileId },
        });
        setIsVal((prevState) => ({
          ...prevState,
          images: prevState.images?.filter((_, i) => i !== index),
        }));
      } else {
        setNewImages(newImages.filter((_, i) => i !== index));
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to delete image:", error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (thumbnailFile) {
        const formData = new FormData();
        formData.append("heroImage", thumbnailFile);
        try {
          const uploadRes = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/cloudinary/upload-image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          isVal.thumbnail = {
            fileId: uploadRes.data.fileId,
            url: uploadRes.data.url,
          };
        } catch (uploadError) {
          console.error("Failed to upload thumbnail:", uploadError);
          toast({ title: "Failed to upload thumbnail" });
          setIsLoading(false);
          return;
        }
      }

      if (newImages.length > 0) {
        const imageUploadPromises = newImages.map((file) => {
          const formData = new FormData();
          formData.append("heroImage", file);
          return axios.post(`${process.env.NEXT_PUBLIC_URL}/api/cloudinary/upload-image`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        });
        const imageUploadResponses = await Promise.all(imageUploadPromises);
        const uploadedImages = imageUploadResponses.map((res) => ({
          fileId: res.data.fileId,
          url: res.data.url,
        }));
        isVal.images = [...(isVal.images || []), ...uploadedImages];
      }

      await api.patch(`/product/${params.id}`, isVal);
      setIsLoading(false);
      toast({ title: "Product is updated successfully" });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleUpdateVariant = async (index: number, variantData: Variant) => {
    try {
      setIsLoading(true);
      const variantId = isVal.variants[index]._id;
      const res = await api.patch(`product/variant/${variantId}`, variantData);
      const updatedVariant = res.data.variant;
      setIsVal((prevState) => {
        const newVariants = [...prevState.variants];
        newVariants[index] = updatedVariant;
        return {
          ...prevState,
          variants: newVariants,
        };
      });
      setIsLoading(false);
      toast({ title: "Variant updated successfully" });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const handleRemoveVariant = async (index: number) => {
    const variant = isVal.variants[index];
    if (variant._id) {
      // Existing variant, remove from backend
      try {
        setIsLoading(true);
        await api.delete(`/product/variant/${params.id}/${variant._id}`);
        setIsVal((prevState) => {
          const newVariants = [...prevState.variants];
          newVariants.splice(index, 1);
          return {
            ...prevState,
            variants: newVariants,
          };
        });
        setIsLoading(false);
        toast({ title: "Variant removed successfully" });
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    } else {
      // New variant, just remove from state
      setIsVal((prevState) => ({
        ...prevState,
        variants: prevState.variants.filter((_, i) => i !== index),
      }));
    }
  };

  const handleAddVariant = async (index: number, variantData: Variant) => {
    try {
      setIsLoading(true);
      const res = await api.post(`product/variant/${params.id}`, variantData);
      const newVariant = res.data.variant;
      setIsVal((prevState) => {
        const newVariants = [...prevState.variants];
        newVariants[index] = newVariant;
        return {
          ...prevState,
          variants: newVariants,
        };
      });
      setIsLoading(false);
      toast({ title: "Variant added successfully" });
    } catch (err) {
      setIsLoading(false);
      console.log(err, "failed to update the variant");
    }
  };

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const { data } = await api.get(
        `${process.env.NEXT_PUBLIC_URL}/api/product/${params.id}`
      );
      setIsVal(data.product);
      setLoading(false);
    }
    getProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin w-8 h-8"></Loader>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-md">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold text-center mb-6">Update Product</h1>
      </div>

      <div>
        <label htmlFor="productName" className="block text-sm text-gray-700 font-medium">Product Name*</label>
        <input
          type="text"
          name="productName"
          value={isVal.productName}
          onChange={handleChange}
          className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
          placeholder="Please Enter Your Product Name"
          required
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm text-gray-700 font-medium">Category Name*</label>
        <select
          name="category"
          value={isVal.category}
          onChange={handleChange}
          className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
          required
        >
          <option value="" disabled>Please Select Your Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="col-span-2">
        <label htmlFor="description" className="block text-sm text-gray-700 font-medium">Description*</label>
        <textarea
          name="description"
          value={isVal.description}
          onChange={handleChange}
          className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
          placeholder="Please Enter Your Description"
          required
        />
      </div>

      <div className="col-span-2">
        {isVal.highlights.map((highlight, index) => (
          <div key={index} className="relative">
            <label htmlFor={`highlight${index}`} className="block text-sm text-gray-700 font-medium">Highlight {index + 1}*</label>
            <input
              type="text"
              id={`highlight${index}`}
              value={highlight}
              onChange={(e) => handleArrayChange(e, index, "highlights")}
              className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
              placeholder={`Please Enter Highlight ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveArrayItem("highlights", index)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              <RxCross2 />
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem("highlights")} className="bg-blue-500 text-white p-2 rounded mt-4">
          Add Highlight
        </button>
      </div>

      <div className="col-span-2">
        {isVal.ingredients.map((ingredient, index) => (
          <div key={index} className="relative">
            <label htmlFor={`ingredient${index}`} className="block text-sm text-gray-700 font-medium">Ingredient {index + 1}*</label>
            <input
              type="text"
              id={`ingredient${index}`}
              value={ingredient}
              onChange={(e) => handleArrayChange(e, index, "ingredients")}
              className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
              placeholder={`Ingredient ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveArrayItem("ingredients", index)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              <RxCross2 />
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem("ingredients")} className="bg-blue-500 text-white p-2 rounded mt-4">
          Add Ingredient
        </button>
      </div>

      <div className="col-span-2">
        {isVal.howToUse.map((step, index) => (
          <div key={index} className="relative">
            <label htmlFor={`howToUse${index}`} className="block text-sm text-gray-700 font-medium">How To Use Step {index + 1}*</label>
            <input
              type="text"
              id={`howToUse${index}`}
              value={step}
              onChange={(e) => handleArrayChange(e, index, "howToUse")}
              className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
              placeholder={`How To Use Step ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveArrayItem("howToUse", index)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded-full"
            >
              <RxCross2 />
            </button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem("howToUse")} className="bg-blue-500 text-white p-2 rounded mt-4">
          Add How To Use Step
        </button>
      </div>

      <div className="col-span-2">
        <label htmlFor="thumbnail" className="block text-sm text-gray-700 font-medium">Product Thumbnail*</label>
        <input type="file" name="thumbnail" onChange={handleThumbnailChange} className="border border-gray-300 outline-none p-2.5 rounded-lg w-1/2 mt-1.5" />
        {thumbnailFile ? (
          <div className="h-32 w-32 rounded-2xl border-dashed border-gray-300 bg-gray-100 mt-2 relative">
            <Image src={URL.createObjectURL(thumbnailFile)} alt="Selected Thumbnail" layout="fill" objectFit="cover" className="rounded-2xl" />
            <button type="button" onClick={() => setThumbnailFile(null)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
              <RxCross2 />
            </button>
          </div>
        ) : (
          isVal.thumbnail && (
            <div className="h-32 w-32 rounded-2xl border-dashed border-gray-300 bg-gray-100 mt-2 relative">
              <Image src={isVal.thumbnail.url} alt="Thumbnail" layout="fill" objectFit="cover" className="rounded-2xl" />
              <button type="button" onClick={handleRemoveThumbnail} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                <RxCross2 />
              </button>
            </div>
          )
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="images" className="block text-sm text-gray-700 font-medium">Product Images</label>
        <input type="file" name="images" onChange={handleImageChange} className="border border-gray-300 outline-none p-2.5 rounded-lg w-1/2 mt-1.5" multiple />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {isVal.images?.map((image, index) => (
            <div key={index} className="relative h-32 w-32">
              <Image src={image.url} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-2xl" />
              <button type="button" onClick={() => handleRemoveImage(index)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                <RxCross2 />
              </button>
            </div>
          ))}
          {newImages.map((file, index) => (
            <div key={index} className="relative h-32 w-32">
              <Image src={URL.createObjectURL(file)} alt={`New Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-2xl" />
              <button type="button" onClick={() => handleRemoveImage(index)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                <RxCross2 />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-2">
        {isVal.variants?.map((variant, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4 relative">
            <h3 className="text-lg font-medium mb-2">Variant {index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`packSize${index}`} className="block text-sm text-gray-700 font-medium">Pack Size*</label>
                <input
                  type="number"
                  id={`packSize${index}`}
                  value={variant.packSize}
                  onChange={(e) => handleArrayChange(e, index, "variants", "packSize")}
                  className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
                  placeholder={`Pack Size ${index + 1}`}
                  required
                />
              </div>
              <div>
                <label htmlFor={`price${index}`} className="block text-sm text-gray-700 font-medium">Price*</label>
                <input
                  type="number"
                  id={`price${index}`}
                  value={variant.price}
                  onChange={(e) => handleArrayChange(e, index, "variants", "price")}
                  className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
                  placeholder={`Price ${index + 1}`}
                  required
                />
              </div>
              <div>
                <label htmlFor={`stock${index}`} className="block text-sm text-gray-700 font-medium">Stock*</label>
                <input
                  type="number"
                  id={`stock${index}`}
                  value={variant.stock}
                  onChange={(e) => handleArrayChange(e, index, "variants", "stock")}
                  className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
                  placeholder={`Stock ${index + 1}`}
                  required
                />
              </div>
              <div>
                <label htmlFor={`unit${index}`} className="block text-sm text-gray-700 font-medium">Unit*</label>
                <input
                  type="text"
                  id={`unit${index}`}
                  value={variant.unit}
                  onChange={(e) => handleArrayChange(e, index, "variants", "unit")}
                  className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
                  placeholder={`Unit ${index + 1}`}
                  required
                />
              </div>
              <div>
                <label htmlFor={`discount${index}`} className="block text-sm text-gray-700 font-medium">Discount*</label>
                <input
                  type="number"
                  id={`discount${index}`}
                  value={variant.discount}
                  onChange={(e) => handleArrayChange(e, index, "variants", "discount")}
                  className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
                  placeholder={`Discount ${index + 1}`}
                  required
                />
              </div>
            </div>
            <button type="button" onClick={() => handleRemoveVariant(index)} className="absolute right-2 top-2 bg-red-500 text-white px-2 py-1 rounded-full">
              <RxCross2 />
            </button>
            {variant._id ? (
              <button type="button" onClick={() => handleUpdateVariant(index, variant)} className="absolute right-2 top-10 bg-blue-500 text-white px-2 py-1 rounded-full">
                Update
              </button>
            ) : (
              <button type="button" onClick={() => handleAddVariant(index, variant)} className="absolute right-2 top-10 bg-green-500 text-white px-2 py-1 rounded-full">
                Submit
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem("variants", { packSize: 0, price: 0, stock: 0, unit: "", discount: 0 })} className="bg-blue-500 text-white p-2 rounded mt-4">
          Add Variant
        </button>
      </div>

      <div className="w-full flex justify-end col-span-2">
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-44 flex items-center justify-center gap-1">
          {isLoading && <Loader className="w-4 h-4 animate-spin" />}
          <p>Submit</p>
        </button>
      </div>
    </form>
  );
};

export default UpdateProducts;
