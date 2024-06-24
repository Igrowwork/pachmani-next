import { Icons } from '@/app/icons'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function AddProducts() {
  return (
    <div >
        <form>
        <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl'>
        <h1 className='text-[#1C2A53] text-xl font-medium flex justify-between items-center'>Add New Product</h1>
        <div className='my-6 grid gap-y-6'>
            <div>
                <h3 className="text-sm text-[#332F32] font-medium">Product Name*</h3>
                <input
                type="text"
                name=""
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                placeholder="Please Enter Your Product Name"
                required
                />
            </div>
            <div className='grid grid-cols-2 gap-6'>
                <div>
                    <h3 className="text-sm text-[#332F32] font-medium">Category*</h3>
                    <input
                    type="text"
                    name=""
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder="Please Enter Your Category"
                    required
                    />
                </div>
                <div>
                    <h3 className="text-sm text-[#332F32] font-medium">Brand*</h3>
                    <input
                    type="text"
                    name=""
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder="Please Enter Your Brand Name"
                    required
                    />
                </div>
                </div>
                
            <div>
                <h3 className="text-sm text-[#332F32] font-medium">Description*</h3>
                <textarea
                name=""
                className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 h-28 resize-none"
                placeholder="Please Enter Your Description Name"
                required
                />
            </div>
            <button className='bg-primaryMain text-xl  font-medium w-44 p-2 text-white rounded-sm'>Continue</button>
        </div>
        </div>

        <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl mt-8'>
            <h1 className='text-[#1C2A53] text-xl font-medium flex justify-between items-center'>Upload Images</h1>
            <div className='grid grid-cols-3 gap-4 my-6'>
                <div className='w-full p-8 bg-[#fff] rounded-2xl border-[1px] border-primaryMain border-dashed'>
                    <div className="grid w-full items-center justify-items-center gap-1.5">
                        <Label htmlFor="picture" className='grid justify-items-center items-center p-3 text-center gap-x-4 gap-y-2 text-secondary-main'>
                            <Icons.userGallery />
                            Drag & drop files here or <span className='text-primaryMain block'> attach file</span> 
                        </Label>
                        <input id="picture" type="file" className='hidden' />
                    </div>
                </div>
            </div>
        <div  className='grid grid-cols-2 gap-6'>    
            <div>
                    <h3 className="text-sm text-[#332F32] font-medium">Category*</h3>
                    <input
                    type="text"
                    name=""
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder="Please Enter Your Category"
                    required
                    />
                </div>
                <div>
                    <h3 className="text-sm text-[#332F32] font-medium">Gender*</h3>
                    <input
                    type="text"
                    name=""
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder="Please Enter Your Category"
                    required
                    />
                </div>
            </div>           
            <button className='bg-primaryMain text-xl  font-medium w-44 p-2 text-white rounded-sm mt-10 '>Add product</button>
        </div>
       

        </form>

    </div>
  )
}
