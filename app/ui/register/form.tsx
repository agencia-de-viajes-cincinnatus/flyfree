'use client';
import React from 'react';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import { registerUser } from '@/app/lib/action';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function RegisterForm() {
  const [state, dispatch] = useFormState(registerUser, undefined);

  return (
    <div className='mx-auto max-w-md rounded-md bg-gradient-to-tr  from-gray-50 to-gray-95 p-6 shadow-md ml-0'>
      <div className='flex justify-center items-center h-[25vh] '>
        <div className='mb-4'>
          <Image
            src='/logo.png'
            alt='logo'
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        </div>
      </div>
      <form action={dispatch} className='flex-col flex'>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Nombre Completo del Usuario
          </label>
          <Input
            type='text'
            name='username'
            id='username'
            className='mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Correo Electronico
          </label>
          <Input
            type='text'
            name='email'
            id='email'
            className='mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Rol
          </label>
          <Input
            type='text'
            name='rol'
            id='rol'
            className='mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Contraseña
          </label>
          <Input
            type='password'
            name='password'
            id='password'
            className='mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Confirmar Contraceña
          </label>
          <Input
            type='password'
            name='validatepassword'
            id='validatepassword'
            className='mt-1 w-full rounded-md border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>
        <div
          className='flex h-8 items-end space-x-1'
          aria-live='polite'
          aria-atomic='true'
        >
          {state === 'PasswordsMismatch' && (
            <>
              <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
              <p className='text-sm text-red-500'>Contraceña no coincide</p>
            </>
          )}
        </div>
        <div>
          <Button
            type='submit'
            className='w-full rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring mt-4'
          >
            Sign up
          </Button>
        </div>
      </form>

      <div className='flex justify-between mt-4'>
        <a href='./login' className='text-sm text-blue-900 hover:underline'>
          Ya tengo una cuenta
        </a>
      </div>
    </div>
  );
}
