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
        console.log('Datos de reservaciones:', reservationsData);
        setReservations(reservationsData);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };
    fetchReservations();
  }, []);
  return (
    <div className='flex flex-col  '>
      <div className='h-[400px] max-w-[550px] p-4 border border-gray-300 rounded shadow-md ml-4 overflow-y-auto'>
        <div className='sticky top-0 bg-white p-4 border-b border-gray-300 z-10'>
          <h2 className='text-xl font-semibold mb-4'>Reservation List</h2>
        </div>
        <div className='md:grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4'>
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className='border border-gray-300 rounded p-4 shadow-md mb-4'
            >
              <p className='text-lg mb-2 font-semibold'>
                Date: {new Date(reservation.date).toISOString().split('T')[0]}
              </p>
              <p className='text-sm mb-2'>
                City: {reservation.destination.city}
              </p>
              {/* Puedes agregar más información aquí según sea necesario */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
