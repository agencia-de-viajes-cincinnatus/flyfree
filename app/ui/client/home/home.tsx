'use client';
import React from 'react';
import NavBar from '../NavBar';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log('Buscando:', searchQuery);
  };
  return (
    <>
      <NavBar />
      <div className='container mx-auto p-8 bg-primary text-white'>
        <div className='flex items-center'>
          <div className='w-1/2 pr-4'>
            <h1 className='text-4xl font-bold m-10 text-yellow-500'>
              TRAVEL IS TO LIVE
            </h1>
            <p className='text-lg m-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              quis consequat nisi. Aliquam hendrerit sapien sapien, id ultrices
              quam euismod at. Suspendisse rutrum, lorem quis scelerisque
              sagittis, odio velit tincidunt mi, efficitur aliquam ipsum nibh at
              libero. Curabitur fermentum interdum egestas.
            </p>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Buscar...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='border rounded p-2 mr-2 bg-white ml-10'
              />
              <button
                onClick={handleSearch}
                className='bg-orange-500 text-white p-2 rounded'
              >
                Buscar
              </button>
            </div>
          </div>
          <div className='w-1/2'>
            <img
              src='https://s3-alpha-sig.figma.com/img/66f8/1455/612bb4ea5bc92dd5b3b5638d6ce02f13?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dBK3oTHZIgDen6Kpperf7ruwFq4asUNivcKTic7PHl6lrifKizMXW0r8KFpfhO-9YQESVnxRaywPkcCRxBqM2isMycNn4aZ4PxEl62bRAm~kQhIEmBnUbH0yrlGLmBDuCv37pJgMCsu-zugnxna3IjxXNpLD72ciq4oETNvOkfms5f~I-UJKEf5TZJVlFjxVfoDN6CqqzDzxwYKAMxF3IWaIMXWUF77zhZ5gjwLu0SAhpVT4a5cunlW4pWcLaUzmJ6Mj4PZgyXWUmtaEHv-O7aJ0Mp52Yeq2DH3yDyS~YZ2HL8UgKBp72j0S2AP5PI08kjzn2BSqlDA-R7MyEu0NOg__'
              alt='Image'
            />
          </div>
        </div>
      </div>
    </>
  );
}
