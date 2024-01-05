import React from 'react';
import { travels } from '@/app/lib/data';

export default function HistoriTravelCardProfile() {
  return (
    <div>
      {travels.map((travel, index) => (
        <div key={index} className='bg-gray-100 rounded-lg shadow-md p-6 mb-4'>
          <div className='flex justify-between'>
            <div className='flex'>
              <div className='mr-4'>
                <img
                  className='w-16 h-16 rounded-full object-cover'
                  src={travel.avatar}
                  alt='travel'
                />
              </div>
              <div>
                <h1 className='font-bold text-xl'>{travel.city}</h1>
                <p className='text-gray-500 text-sm'>{travel.country}</p>
              </div>
            </div>
            <div>
              <p className='text-gray-500 text-sm'>{travel.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
