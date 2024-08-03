import React from 'react';
import ManCategory from '../assets/Images/men.avif';
import WomenCategorie from '../assets/Images/women.avif';
import KidsCategory from '../assets/Images/kids.avif';

const CategorySection = () => {
  const categories = [
    {
      title: 'Men',
      imageUrl: ManCategory,
    },
    {
      title: 'Women',
      imageUrl: WomenCategorie,
    },
    {
      title: 'Kids',
      imageUrl: KidsCategory,
    },
  ];

  return (
    <div className='cursor-pointer gap-6 container mx-auto grid grid-cols-1 sm:grid-cols-3'>
      {categories.map((category, index) => (
        <div key={index} className='relative cursor-pointer h-64 transform transition-transform duration-300 hover:scale-105'>
          <img src={category.imageUrl} alt='image-category' className='w-full h-full object-cover rounded-lg shadow-md' />
          <div className='absolute top-20 right-12 text-right'>
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='text-gray-600'>View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
