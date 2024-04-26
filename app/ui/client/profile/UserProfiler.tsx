'use client';
// En Profile.tsx
import { useState, useEffect } from 'react';
import { fetchProfileData } from '@/app/lib/data';
import useToken from '@/app/ui/hooks/useAuthToken';
import Image from 'next/image';

interface Profile {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
}
function Profile() {
  const [user, setUser] = useState<Profile | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  return (
    <div className='bg-white p-4 rounded-lg shadow-md w-72 h-screen'>
      <div className='flex flex-col items-center'>
        <Image
          src={user?.photoURL ?? ''}
          alt={user?.displayName ?? ''}
          className='w-35 h-35 rounded-full mb-2'
          width={200}
          height={200}
        />{' '}
        <div className='text-center mt-2'>
          <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
          <p className='text-lg text-gray-600'>{user?.email}</p>
        </div>
      </div>

      {/* <div className='mt-4'>
        <p className='text-lg text-gray-700'>io</p>
      </div> */}
    </div>
  );
}

export default Profile;
{
  /* <h1>Perfil</h1>
      <p>Nombre: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
      <p>UID: {user?.uid}</p>
      <Image
        src={user?.photoURL ?? ''}
        alt={user?.displayName ?? ''}
        width={200}
        height={200}
      /> */
}
