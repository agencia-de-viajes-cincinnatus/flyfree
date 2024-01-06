import React from 'react';

export default function UserProfiler() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://placekitten.com/200/200', // Una imagen de gato como avatar ficticio
  };
  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-72 h-screen'>
      <div className='flex flex-col items-center'>
        <img
          src={user.avatar}
          alt='Avatar'
          className='w-35 h-35 rounded-full mb-2'
        />
        <div className='text-center mt-2'>
          <h2 className='text-xl font-semibold'>{user.name}</h2>
          <p className='text-lg text-gray-600'>{user.email}</p>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-lg text-gray-700'>{user.bio}</p>
      </div>
    </div>
  );
}
