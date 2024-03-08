import React from 'react';
import { fetchProfileData } from '@/app/lib/data';
export default async function UserProfiler() {
  const user = await fetchProfileData();
  console.log(user);
  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-72 h-screen'>
      <div className='flex flex-col items-center'>
        <img src='' alt='Avatar' className='w-35 h-35 rounded-full mb-2' />
        <div className='text-center mt-2'>
          <h2 className='text-xl font-semibold'>uo</h2>
          <p className='text-lg text-gray-600'>uo</p>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-lg text-gray-700'>io</p>
      </div>
    </div>
  );
}
