import React from 'react';
import { users } from '@/app/lib/userAction';

export default function AdminPanelUsers() {
  return (
    <div className='bg-gray-100 rounded-lg shadow-md p-8 m-3'>
      <div className='bg-white rounded-lg p-12 w-100'>
        <h1 className='text-3xl font-bold'>Users List</h1>
        <div className='overflow-y-auto h-[300px] relative'>
          <div className='flex justify-end p-4 sticky top-0 bg-white z-10'>
            <input
              type='text'
              placeholder='Buscar...'
              className='border border-gray-300 p-2 rounded-md'
            />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
            {users.map((user) => (
              <div
                key={user.id}
                className='bg-white rounded-lg p-4 shadow-md relative'
              >
                <h2 className='text-xl font-semibold'>{user.name}</h2>
                <p className='text-sm'>{user.email}</p>
                {user.role !== 'admin' && (
                  <a
                    href={`#/edit/${user.id}`}
                    className='text-blue-500 text-sm px-2 py-1 rounded inline-block mt-2'
                  >
                    Editar usuario
                  </a>
                )}

                {/* Barra de opciones */}
                <div className='absolute top-2 right-2 flex space-x-2'>
                  <select className='px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white'>
                    <option value=''>{user.role}</option>
                    <option value=''>
                      {user.role === 'user' ? 'admin' : 'user'}
                    </option>
                  </select>
                  <button
                    className='text-white bg-red-500 px-2 py-1 rounded'
                    type='button'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
