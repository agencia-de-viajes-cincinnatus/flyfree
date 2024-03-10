'use client';
import React from 'react';
import { Input } from '@/app/ui/input';
import { Button } from '@/app/ui/button';
import Image from 'next/image';
import { loginUser } from '@/app/lib/action';
import { useFormState, useFormStatus } from 'react-dom';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

export default function LoginForm() {
  const [state, dispatch] = useFormState(loginUser, undefined);
  return (
    <div className='mx-auto max-w-md rounded-md bg-gradient-to-tr  from-gray-50 to-gray-95 p-6 shadow-md ml-0'>
      <div className='flex justify-center items-center h-[45vh] '>
        <div className='mb-6'>
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
            Contraceña
          </label>
          <Input
            type='password'
            name='password'
            id='password'
            className='mt-1 w-full rounded-md  border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring'
          />
        </div>

        <div>
          <Button
            type='submit'
            className='w-full rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring mt-4'
          >
            Sign in
          </Button>
        </div>
      </form>
      {state === 'PasswordsMismatch' && (
        <div className='flex items-center mt-4'>
          <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
          <p className='text-sm text-red-500 ml-2'>
            contraseñas o email no coinciden
          </p>
        </div>
      )}
      <div className='flex justify-between mt-4'>
        <a href='#' className='text-sm text-blue-900 hover:underline'>
          Olvidaste tu contraseña?
        </a>
        <a href='./register' className='text-sm text-blue-900 hover:underline'>
          Crear cuenta
        </a>
      </div>
    </div>
  );
}
