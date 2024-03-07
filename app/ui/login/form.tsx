import React from 'react';
import { Input } from './input';
import { Button } from './button';
import Image from 'next/image';

export default function LoginForm() {
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
      <form className='flex-col flex'>
        <div>
          <label htmlFor='' className='block text-sm font-medium text-gray-700'>
            Correo Electronico
          </label>
          <Input
            type='text'
            name='username'
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
