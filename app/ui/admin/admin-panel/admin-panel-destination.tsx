'use client';
import { GetDestination } from '@/app/lib/admin-panel';
import { useEffect, useState } from 'react';
import { Destination } from '@/app/lib/definitions';

export default function AdminPanelDestination() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const destinationsData = await GetDestination();
        console.log('Datos de destinos:', destinationsData);
        setDestinations(destinationsData);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
      <div className='h-[400px] max-w-[300px] p-4 border border-gray-300 rounded shadow-md ml-4 overflow-y-auto'>
        <div className='sticky top-0 bg-white p-4 border-b border-gray-300 z-10'>
          <h2 className='text-xl font-semibold mb-4'>Destinos</h2>
        </div>
        <div className='md:grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4'>
          {destinations.map((destination, index) => (
            <div
              key={index}
              className='border border-gray-300 rounded p-4 shadow-md mb-4 flex flex-col flex-shrink-0 items-start justify-between'
            >
              <div className='flex items-center justify-between mb-2 '>
                <h3 className='text-lg font-semibold'>{destination.country}</h3>
                <span className='text-sm text-orange-700 font-bold ml-1'>
                  ${destination.price}
                </span>
              </div>
              <p className='text-sm mt-2'>{destination.city}</p>
              <p className='text-sm'>{destination.description}</p>
              <p className='text-sm'>Score: {destination.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
