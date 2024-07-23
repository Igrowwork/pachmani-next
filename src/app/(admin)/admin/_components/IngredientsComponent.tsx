import React, { useState, ChangeEvent } from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { IoAddCircleOutline } from 'react-icons/io5';

interface Ingredient {
  name: string;
  images: File[];
}

interface State {
  ingredients: Ingredient[];
}

const IngredientsComponent: React.FC = () => {
  const [isVal1, setIsVal1] = useState<State>({ ingredients: [{ name: '', images: [] }] });

  const handleArrayChange1 = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const updatedIngredients = [...isVal1.ingredients];
    updatedIngredients[index].name = value;
    setIsVal1({ ...isVal1, ingredients: updatedIngredients });
  };

  const handleImageChange1 = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const files = Array.from(e.target.files || []);
    const updatedIngredients = [...isVal1.ingredients];
    updatedIngredients[index].images.push(...files);
    setIsVal1({ ...isVal1, ingredients: updatedIngredients });
  };

  const handleAddArrayItem1 = () => {
    const updatedIngredients = [...isVal1.ingredients, { name: '', images: [] }];
    setIsVal1({ ...isVal1, ingredients: updatedIngredients });
  };

  const handleRemoveArrayItem1 = (index: number) => {
    const updatedIngredients = isVal1.ingredients.filter((_, i) => i !== index);
    setIsVal1({ ...isVal1, ingredients: updatedIngredients });
  };

  const handleRemoveImage1 = (ingredientIndex: number, imageIndex: number) => {
    const updatedIngredients = [...isVal1.ingredients];
    updatedIngredients[ingredientIndex].images.splice(imageIndex, 1);
    setIsVal1({ ...isVal1, ingredients: updatedIngredients });
  };

  return (
    <div className="col-span-2">
      <label
        htmlFor="description"
        className="block text-sm text-gray-700 font-medium"
      >
        Ingredients
      </label>
      {isVal1.ingredients.map((ingredient, index) => (
        <div key={index} className="relative my-4">
          
          <label
            htmlFor={`ingredientImages${index}`}
            className="block text-sm text-gray-700 font-medium mt-2"
          >
            Ingredient Images {index + 1}*
          </label>
          <input
            type="file"
            id={`ingredientImages${index}`}
            multiple
            onChange={(e) => handleImageChange1(e, index)}
            className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5"
            required
          />
          {ingredient.images.length > 0 && (
            <div className="mt-2">
              {ingredient.images.map((image, imageIndex) => (
                <div key={imageIndex} className="relative inline-block mr-2">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Ingredient ${index + 1} Image ${imageIndex + 1}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage1(index, imageIndex)}
                    className="absolute right-0 top-0 text-red-500 bg-white rounded-full p-1"
                  >
                    <RxCrossCircled className="text-xl" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={() => handleRemoveArrayItem1(index)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500 px-2 py-1 rounded-full"
          >
            <RxCrossCircled className="text-2xl" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddArrayItem1}
        className="w-full flex justify-center mt-2"
      >
        <IoAddCircleOutline className="text-2xl text-primaryMain" />
      </button>
    </div>
  );
};

export default IngredientsComponent;
