'use client';
import React from 'react';
import { baseUrl } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import { Reservation } from '@/app/lib/definitions';
import { GetReservation } from '@/app/lib/admin-panel';

export default function AdminPanelReservation() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const reservationsData = await GetReservation();

        setReservations(reservationsData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);
  return (
    // <div className='flex flex-col  '>
    //   <div className='h-[400px] max-w-[450px] p-4 border border-gray-300 rounded shadow-md ml-4 overflow-y-auto'>
    //     <div className='sticky top-0 bg-white p-4 border-b border-gray-300 z-10'>
    //       <h2 className='text-xl font-semibold mb-4'>Reservation List</h2>
    //     </div>
    //     <div className='md:grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4'>
    //       {reservations.map((reservation) => (
    //         <div
    //           key={reservation.id}
    //           className='border border-gray-300 rounded p-4 shadow-md mb-4'
    //         >
    //           <p className='text-lg mb-2 font-semibold'>
    //             Date: {new Date(reservation.date).toISOString().split('T')[0]}
    //           </p>
    //           <span className='text-sm text-orange-700 font-bold ml-1'>
    //             ${reservation.destination.price}
    //           </span>
    //           <p className='text-sm mb-2'>
    //             City: {reservation.destination.city}
    //           </p>
    //           {/* Puedes agregar más información aquí según sea necesario */}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <>
      <div className='bg-gray-100 rounded-lg shadow-md p-8 m-3'>
        <div className='bg-white rounded-lg p-12 w-100'>
          <h1 className='text-3xl font-bold'>Reservation List</h1>
          <div className='overflow-y-auto h-[300px]  relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
              {reservations.map((reservation) => {
                const totalPrice =
                  reservation.destination.price * reservation.passengers;
                const formattedPrice = totalPrice.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                });

                return (
                  <div
                    key={reservation.id}
                    className='bg-white rounded-lg p-4 shadow-md relative'
                  >
                    {/* Fecha y Precio en la parte superior derecha */}
                    <div className='flex justify-between items-start mb-2'>
                      <h2 className='text-xl font-semibold'>
                        {' '}
                        {new Date(reservation.date).toISOString().split('T')[0]}
                      </h2>
                      <span
                        className={`text-sm text-orange-700 font-bold ${
                          formattedPrice.length > 10 ? 'text-xs' : ''
                        }`}
                      >
                        ${formattedPrice}
                      </span>
                    </div>
                    <p className='text-sm'>
                      City: {reservation.destination.city}
                    </p>
                    <p className='text-sm'>
                      Description: {reservation.destination.description}
                    </p>
                    <p className='text-sm'>
                      Score: {reservation.destination.score}
                    </p>
                    <p className='text-sm'>
                      Country: {reservation.destination.country}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
