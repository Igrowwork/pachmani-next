"use client";

import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AddBlogs({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const updateBlog = async () => {
    try {
      const res = await api.patch(`/blogs/${params.id}`, {
        title: blogData.title,
        author: blogData.author,
        content: blogData.content,
      });
      // console.log(res.data, "aa gya");
      // setIsVal(res?.data?.data)
    } catch (err) {
      console.log(err, " error hai");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(blogData);
    updateBlog();
    router.push("/admin/blogs")
  };

  useEffect(() => {
    async function getBlog() {
      const {data} = await api.patch(`/blogs/${params.id}`);
      setBlogData(data.data);
    }
    getBlog()
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="">
        <h1 className="text-xl font-medium text-[#1C2A53]">Update Blogs</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-6 col-span-2">
          <label
            htmlFor="productName"
            className="block text-sm text-[#332F32] font-medium"
          >
            Author Name*
          </label>
          <input
            type="text"
            name="author"
            value={blogData.author}
            className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder="Please Enter Your Author Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-6 col-span-2">
          <label
            htmlFor="productName"
            className="block text-sm text-[#332F32] font-medium"
          >
            Title Name*
          </label>
          <input
            type="text"
            name="title"
            value={blogData.title}
            className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder="Please Enter Your title Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="my-6 col-span-2">
          <label
            htmlFor="description"
            className="block text-sm text-[#332F32] font-medium"
          >
            Description
          </label>
          <textarea
            name="content"
            className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5 h-32 resize-none"
            placeholder="Please Enter Your Description"
            value={blogData.content}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primaryMain text-white p-2 w-44 rounded-md"
        >
          Update
        </button>
      </form>
    </div>
  );
}
