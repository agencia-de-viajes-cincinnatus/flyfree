import React from 'react';
import { travels } from '@/app/lib/data';

export default function PreferensTravelCardProfile() {
  return (
    <div>
      {travels.map((travel, index) => (
        <div key={index} className='bg-gray-100 rounded-lg shadow-md p-4 mb-4'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='mr-4'>
                <img
                  className='w-30 h-25 rounded-lg object-cover'
                  src={travel.avatar}
                  alt='travel'
                />
              </div>
              <div>
                <h1 className='font-bold text-lg'>{travel.city}</h1>
                <p className='text-gray-500 text-sm'>{travel.country}</p>
                <p className='text-gray-700 text-sm'>{travel.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
