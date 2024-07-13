'use client'
import React, { useState } from 'react';

const initialImages = [
  { id: '1', url: 'https://via.placeholder.com/80' },
  { id: '2', url: 'https://via.placeholder.com/90' },
  { id: '3', url: 'https://via.placeholder.com/100' },
];

const ImageDragDrop: React.FC = () => {
  const [images, setImages] = useState(initialImages);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.dataTransfer.setData('index', index.toString());
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    const dragIndex = Number(event.dataTransfer.getData('index'));
    if (dragIndex === dropIndex) return;

    const reorderedImages = [...images];
    const [draggedImage] = reorderedImages.splice(dragIndex, 1);
    reorderedImages.splice(dropIndex, 0, draggedImage);

    setImages(reorderedImages);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex space-x-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDrop={(event) => handleDrop(event, index)}
          onDragOver={handleDragOver}
          className="w-32 h-32 border border-gray-300"
        >
          <img src={image.url} alt={`Image ${image.id}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageDragDrop;
