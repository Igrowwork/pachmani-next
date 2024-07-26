"use client"

import api from '@/lib/axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AddBlogs() {
    const router = useRouter();
    const [isData , setIsData] = useState({
        title:'',
        author:'',
        content:''
    })
    
    const handleChange = (e : any) => {
        setIsData({
            ...isData ,
            [e.target.name] : e.target.value 
        })
    }


    const isFetch = async () => {
        try{
            const res = await api.post("/blogs" , isData);
            // console.log(res.data, "aa gya");
            // setIsVal(res?.data?.data)
        }
        catch(err){
            console.log(err , " error hai");
        }
    }
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log(isData);
        isFetch().finally(() => {
            setIsData({
                title:'',
                author:'',
                content:''
            });
        });
        router.push("/admin/blogs")

    }
  return (
    <div className='p-6 bg-white rounded-lg shadow-md w-full'>
      <div className="">
        <h1 className="text-xl font-medium text-[#1C2A53]">Add New Blogs</h1>
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
                value={isData.author}
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
                value={isData.title}
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
            value={isData.content}
            onChange={handleChange}
            required
            />
        </div>

        <button type='submit' className='bg-primaryMain text-white p-2 w-44 rounded-md'>Submit</button>
        
      </form>
    </div>
  )
}
