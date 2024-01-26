'use client';
import React from 'react';
import NavBar from '../NavBar';
import { useState } from 'react';
import FormHome from './form/form-home';
import Footer from './footer/footer';
import Image from 'next/image';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log('Buscando:', searchQuery);
  };
  return (
    <>
      <NavBar />
      <div className='container mx-auto p-8 bg-primary text-white max-w-full'>
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
            <img src='./ilustration.png' alt='Image' />
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center mt-5'>
        <h1 className='text-4xl font-bold m-10 text-blue-500'>Our Services</h1>
      </div>
      <div className='flex justify-center'>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='./itineraries.png'
            alt='Service Avatar 1'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Itineraries
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='./flight.png'
            alt='Service Avatar 2'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Flight reservation
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='./car-rental.png'
            alt='Service Avatar 3'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Car rental
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='./hotel.png'
            alt='Service Avatar 4'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Hotel reservation
          </p>
        </div>
      </div>
      <div className='w-full mt-20'>
        <img src='./banner.png' alt='' />
      </div>
      <FormHome />
      <Footer />
    </>
  );
}
