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
    // <div className='flex flex-col  '>
    //   <div className='h-[400px] max-w-[450px] p-4 border border-gray-300 rounded shadow-md ml-4 overflow-y-auto'>
    //     <div className='sticky top-0 bg-white p-4 border-b border-gray-300 z-10'>
    //       <h2 className='text-xl font-semibold mb-4'>Destinations List</h2>
    //     </div>
    //     <div className='md:grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4'>
    //       {destinations.map((destination, index) => (
    //         <div
    //           key={index}
    //           className='border border-gray-300 rounded p-4 shadow-md mb-4 flex flex-col flex-shrink-0 items-start justify-between'
    //         >
    //           <div className='flex items-center justify-between mb-2 '>
    //             <h3 className='text-lg font-semibold'>{destination.country}</h3>
    //             <span className='text-sm text-orange-700 font-bold ml-1'>
    //               ${destination.price}
    //             </span>
    //           </div>
    //           <p className='text-sm mt-2'>{destination.city}</p>
    //           <p className='text-sm'>Description: {destination.description}</p>
    //           <p className='text-sm'>Score: {destination.score}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className='bg-gray-100 rounded-lg shadow-md p-8 m-3'>
      <div className='bg-white rounded-lg p-12 w-100'>
        <h1 className='text-3xl font-bold'>Destination List</h1>
        <div className='overflow-y-auto h-[300px]  relative'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
            {destinations.map((destination, index) => (
              <div
                key={index}
                className='bg-white rounded-lg p-4 shadow-md relative'
              >
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='text-xl font-semibold'>
                    {destination.country}
                  </h2>
                  <span className='text-sm text-orange-700 font-bold ml-2'>
                    ${destination.price}
                  </span>
                </div>
                <p className='text-sm mt-2'>{destination.city}</p>
                <p className='text-sm'>
                  Description: {destination.description}
                </p>
                <p className='text-sm'>Score: {destination.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
