"use client"

import { Icons } from '@/app/icons';
import { Label } from '@/components/ui/label';
import api from '@/lib/axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Review {
  text: string;
  rating: number;
}

interface Variant {
  packSize: number;
  price: number;
  stock: number;
  unit: string;
  discount: number;
}

interface ProductState {
  productName: string;
  description: string;
  category: string;
  highlights: string[];
  reviews: Review[];
  productHeroImages: string[];
  detailedImages: string[];
  ingredients: string[];
  howToUse: string[];
  variants: Variant[];
}

const initialProductState: ProductState = {
  productName: '',
  description: '',
  category: '',
  highlights: [''],
  reviews: [{ text: '', rating: 0 }],
  productHeroImages: [''],
  detailedImages: [''],
  ingredients: [''],
  howToUse: [''],
  variants: [{ packSize: 0, price: 0, stock: 0, unit: '', discount: 0 }],
};

const AddProducts: React.FC = () => {
  const [isVal, setIsVal] = useState<ProductState>(initialProductState);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleAddArrayItem = (arrayName: keyof ProductState, defaultValue: any = '') => {
    setIsVal({
      ...isVal,
      [arrayName]: [...(isVal[arrayName] as any[]), defaultValue],
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  const handleResetImage = () => {
    setSelectedImage(null);
    setImageFile(null);
  };

  const isFetch = async () => {
    try{
        const res = await api.post("product" , isVal)
        console.log(res,"add product")
    }
    catch(err){
        console.log(err , "error")
    }
}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(isVal);
    isFetch();
    // setIsVal(initialProductState)
  };

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-8'>
      <div>
        <h3 className="text-sm text-[#332F32] font-medium">Product Name*</h3>
        <input
            type="text"
            name="productName"
            value={isVal.productName}
            onChange={handleChange}
            className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder="Please Enter Your Product Name"
            required
        />
      </div>
      <div>
        <h3 className="text-sm text-[#332F32] font-medium">Category Name*</h3>
        <input
            type="text"
            name="category"
            value={isVal.category}
            onChange={handleChange}
            className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder="Please Enter Your Category Name"
            required
        />
      </div>
      <div className='col-span-2'>
        <h3 className="text-sm text-[#332F32] font-medium">Description*</h3>
        <textarea
            name="description"
            value={isVal.description}
            onChange={handleChange}
            className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder="Please Enter Your Description Name"
            required
        />
      </div>
    <div className='col-span-2'>
      {isVal.highlights.map((highlight, index) => (
        <div key={index}>
        <h3 className="text-sm text-[#332F32] font-medium">Highlights Name*</h3>
        <input
            type="text"
            value={highlight}
            onChange={(e) => handleArrayChange(e, index, 'highlights')}
            className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
            placeholder={`Please Enter Your Highlight ${index + 1}`}
            required
        />
      </div>
      ))}
    <div>
      <button type="button" onClick={() => handleAddArrayItem('highlights')} className='bg-primaryMain mt-4 text-white p-2 rounded-sm'>
        Add Highlight
      </button>
    </div>
    </div>

        <div className='col-span-'>
          {isVal.productHeroImages.map((image, index) => (
       
            <div key={index}>
                <h3 className="text-sm text-[#332F32] font-medium">Product Hero Image*</h3>
                {/* <input
                    type="text"
                    value={image}
                    onChange={(e) => handleArrayChange(e, index, 'productHeroImages')}
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder={`Product Hero Image ${index + 1}`}
                    required
                /> */}
                <div className="h-32 w-32 rounded-2xl border-[1px] border-dashed border-[#4C535F] bg-[#EDF2F6] p-2">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Car Logo"
                onClick={handleResetImage}
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              <div className="grid w-full max-w-sm items-center justify-items-center gap-1.5">
                <Label
                  htmlFor="picture"
                  className="grid items-center justify-items-center gap-4 p-4 text-center text-[#4C535F]"
                >
                  <Icons.userGallery />
                  Upload your logo
                </Label>
                <input
                  id="picture"
                  type="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>
            </div>
            
          ))}
          {/* <button type="button" onClick={() => handleAddArrayItem('productHeroImages')} className='bg-primaryMain mt-4 text-white p-2 rounded-sm'>
            Add Product Hero Image
          </button> */}
        </div>

          <div className='col-span-2'>
            {isVal.detailedImages.map((image, index) => (
              <div key={index}>
                  <h3 className="text-sm text-[#332F32] font-medium">Detailed Image*</h3>
                  <input
                      type="file"
                      value={image}
                      onChange={(e) => handleArrayChange(e, index, 'detailedImages')}
                      className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                      placeholder={`Detailed Image ${index + 1}`}
                      required
                  />
              </div>
            ))}
            <button type="button" onClick={() => handleAddArrayItem('detailedImages')} className='bg-primaryMain text-white p-2 rounded-sm'>
              Add Detailed Image
            </button>

          </div>
          <div className='col-span-2'>
            {isVal.ingredients.map((ingredient, index) => (
              <div key={index}>
                  <h3 className="text-sm text-[#332F32] font-medium">Detailed Image*</h3>
                  <input
                      type="file"
                      value={ingredient}
                      onChange={(e) => handleArrayChange(e, index, 'ingredients')}
                      className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                      placeholder={`Ingredient ${index + 1}`}
                      required
                  />
              </div>
            ))}
            <button type="button" onClick={() => handleAddArrayItem('ingredients')} className='bg-primaryMain mt-4 text-white p-2 rounded-sm'>
              Add Ingredient
            </button>

          </div>
          <div className='col-span-2'>
              {isVal.howToUse.map((step, index) => (
                <div key={index}>
                <h3 className="text-sm text-[#332F32] font-medium">Detailed Image*</h3>
                <input
                    type="file"
                    value={step}
                    onChange={(e) => handleArrayChange(e, index, 'howToUse')}
                    className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
                    placeholder={`Ingredient ${index + 1}`}
                    required
                />
            </div>
              ))}
              <button type="button" onClick={() => handleAddArrayItem('howToUse')} className='bg-primaryMain mt-4 text-white p-2 rounded-sm'>
                Add How To Use Step
              </button>

          </div>
          {isVal.variants.map((variant, index) => (
        <div key={index}>
          <div className='flex gap-2'>
            <div>Pack size</div>
            <input
              type="number"
              value={variant.packSize}
              onChange={(e) => handleArrayChange(e, index, 'variants', 'packSize')}
              placeholder={`Pack Size ${index + 1}`}
            />
          </div>

          <div className='flex gap-2'>
            <div>Price</div>
            <input
              type="number"
              value={variant.price}
              onChange={(e) => handleArrayChange(e, index, 'variants', 'price')}
              placeholder={`Price ${index + 1}`}
            />
          </div>
          
          <div className='flex gap-2'>
            <div>Stock</div>
            <input
              type="number"
              value={variant.stock}
              onChange={(e) => handleArrayChange(e, index, 'variants', 'stock')}
              placeholder={`Stock ${index + 1}`}
            />
          </div>
          
          <div className='flex gap-2'>
            <div>Unit</div>
          <input
            type="text"
            value={variant.unit}
            onChange={(e) => handleArrayChange(e, index, 'variants', 'unit')}
            placeholder={`Unit ${index + 1}`}
          />
          </div>
          
          <div className='flex gap-2'>
            <div>Discount</div>
            <input
              type="number"
              value={variant.discount}
              onChange={(e) => handleArrayChange(e, index, 'variants', 'discount')}
              placeholder={`Discount ${index + 1}`}
            />
            
          </div>
        </div>
      ))}
      <button type="button" onClick={() => handleAddArrayItem('variants', { packSize: 0, price: 0, stock: 0, unit: '', discount: 0 })}>
        Add Variant
      </button>


      <div className='w-full flex justify-end col-span-2'>
        <button type="submit" className='bg-primaryMain text-white p-2 rounded-sm w-44'>Submit</button>
      </div>
    </form>
  );
};

export default AddProducts;





// "use client"

// import { Icons } from '@/app/icons'
// import { Label } from '@/components/ui/label'
// import api from '@/lib/axios'
// import React, { useState } from 'react'

// export default function AddProducts() {
//     const [isVal ,setIsVal] = useState({
//         name:'',
//         category:'',
//         brand:'',
//         description:'',
//         profilepic:'',
//     })
//     const handleChange = (e : any) => {
//         setIsVal({
//             ...isVal,
//             [e.target.name]:e.target.value
            
//         })
//     }
//     const handleSubmit = (e : any) => {
//         e.preventDefault();
//         console.log(isVal)
//     }
    // const isFetch = async () => {
    //     try{
    //         const res = await api.post("product")
    //         console.log(res,"add product error")
    //     }
    //     catch(err){
    //         console.log(err , "error add product")
    //     }
    // }
        
//   return (
//     <div >
//         <form onSubmit={handleSubmit}>
//         <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl'>
//         <h1 className='text-[#1C2A53] text-xl font-medium flex justify-between items-center'>Add New Product</h1>
//         <div className='my-6 grid gap-y-6'>
            // <div>
            //     <h3 className="text-sm text-[#332F32] font-medium">Product Name*</h3>
            //     <input
            //     type="text"
            //     name="name"
            //     value={isVal.name}
            //     onChange={handleChange}
            //     className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
            //     placeholder="Please Enter Your Product Name"
            //     required
            //     />
            // </div>
//             <div className='grid grid-cols-2 gap-6'>
//                 <div>
//                     <h3 className="text-sm text-[#332F32] font-medium">Category*</h3>
//                     <input
//                     type="text"
//                     name="category"
//                     value={isVal.category}
//                     onChange={handleChange}
//                     className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
//                     placeholder="Please Enter Your Category"
//                     required
//                     />
//                 </div>
//                 <div>
//                     <h3 className="text-sm text-[#332F32] font-medium">Brand*</h3>
//                     <input
//                     type="text"
//                     name="brand"
//                     value={isVal.brand}
//                     onChange={handleChange}
//                     className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
//                     placeholder="Please Enter Your Brand Name"
//                     required
//                     />
//                 </div>
//                 </div>
                
//             <div>
//                 <h3 className="text-sm text-[#332F32] font-medium">Description*</h3>
//                 <textarea
//                 name="description"
//                 value={isVal.description}
//                 onChange={handleChange}
//                 className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5 h-28 resize-none"
//                 placeholder="Please Enter Your Description Name"
//                 required
//                 />
//             </div>
//             <button className='bg-primaryMain text-xl  font-medium w-44 p-2 text-white rounded-sm'>Continue</button>
//         </div>
//         </div>

//         <div className='shadow-[0px_8px_32px_0px_rgba(51,38,174,0.08)] bg-white p-8 rounded-2xl mt-8'>
//             <h1 className='text-[#1C2A53] text-xl font-medium flex justify-between items-center'>Upload Images</h1>
//             <div className='grid grid-cols-3 gap-4 my-6'>
//                 <div className='w-full p-8 bg-[#fff] rounded-2xl border-[1px] border-primaryMain border-dashed'>
//                     <div className="grid w-full items-center justify-items-center gap-1.5">
//                         <Label htmlFor="picture" className='grid justify-items-center items-center p-3 text-center gap-x-4 gap-y-2 text-secondary-main'>
//                             <Icons.userGallery />
//                             Drag & drop files here or <span className='text-primaryMain block'> attach file</span> 
//                         </Label>
//                         <input id="picture" type="file" className='hidden' />
//                     </div>
//                 </div>
//             </div>
//         <div  className='grid grid-cols-2 gap-6'>    
//             <div>
//                     <h3 className="text-sm text-[#332F32] font-medium">Category*</h3>
//                     <input
//                     type="text"
//                     name=""
//                     className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
//                     placeholder="Please Enter Your Category"
//                     required
//                     />
//                 </div>
//                 <div>
//                     <h3 className="text-sm text-[#332F32] font-medium">Gender*</h3>
//                     <input
//                     type="text"
//                     name=""
//                     className="border border-[#625D60] outline-none p-2.5 rounded-lg w-full mt-1.5"
//                     placeholder="Please Enter Your Category"
//                     required
//                     />
//                 </div>
//             </div>           
//             <button className='bg-primaryMain text-xl  font-medium w-44 p-2 text-white rounded-sm mt-10 '>Add product</button>
//         </div>
       

//         </form>

//     </div>
//   )
// }
