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

      <div className='flex justify-center items-center mt-5'>
        <h1 className='text-4xl font-bold m-10 text-blue-500'>Our Services</h1>
      </div>
      <div className='flex justify-center'>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='https://s3-alpha-sig.figma.com/img/0ed8/08c7/9d85389d7b485430efab02096f282d9a?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QP9IDdom74nEduv~0mEB8DgY-unvJOEuygHNk9GfbS6RkB5QvPkMDWDa3CfoGlJm2ES4~OpzqYcmcpWb~6WUlmminFYTPJe5ATCXul32PG3jCuEM5sne5taf~S2xz0vvYgg3DWqIWtEunSIl2ZD2vXPuIkQX-YeQfbd8KgKrII-D1B53BgVE5WWJbBbRLfqRd-I1733xIzwogNr6kIhuIgVoi61lp670~KZx~oDLJAkfJEsxnQHaNomL6fdDj4RjilssKhjRQyK98OwEKkJsi3UceZQqTDEfowFCDiWyqDIiCCt1yJfy3hgGohezQ~sYzVoq0Zi3PeoXeGYCva3fJg__'
            alt='Service Avatar 1'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Itineraries
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='https://s3-alpha-sig.figma.com/img/d1f3/c533/0788ca6d5a99e55465a0cee5f952a8aa?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q96sHd~o3lAbiQx8C-FnOWvYsBYVNy3SKcq-EDd0ykM92S5~z3ThHf-gQrkM8-HPkA-J9NNvwDBHyw2teLfhC8q-PH7tXqUC0clDEnhjczpIehl57BZZEZqEprPxQ28xd~6ibEocWZyNDkDm-jFforezH6t6b8kOh5aADTlAb4AQ3iLLDxj69h1~ImXUDu9cF8HJrw7OYGjwt8cbodAy1xnk9tEZHEKDnSQmbSC97gqSb8URUP8a7cZNr2dEfawiri0zLQyyiecSqDY4du9ME2NcIdsqSLePOn0QjWahmOT6ZTskkgLz0-6KPCY3owTS4ShNnGVlMW7AXg7vLVTEDA__'
            alt='Service Avatar 2'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Flight reservation
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='https://s3-alpha-sig.figma.com/img/9d12/cc63/7fc4bc88d0690953dcb670b2eb425e57?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kj3t4XZaZWo0lOQ2cuAVmivgSXSH9VnnagKdOfoIrNrDBpoGqjBuzd46GMbDFPgg6n2I0fyhlQTfG5O9iaN1MrdhtKWkiQfFGsb9Xrr1QL29TU5JjUPhy5NyY9OMmwP8wQmel4kfXY03INkzXIXYXOBrVgyeNzfpTZajroNheJ1sy3k-KRnuMsaU3aLOBK-z~~VvF0-H20SuymvjrlvmpojypTcDrZyPJLVQrTcQ8apIVtWQ0cWDogJkDOzUoyzrgY8p2y3dlTktZyFTR8jI-jd-VyNpV~g27z-e1x2Pxmh43c6tE6bfFHu-cH~LoHTwoWhkzL9GCGErBalRialdsQ__'
            alt='Service Avatar 3'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Car rental
          </p>
        </div>
        <div className='text-center'>
          <img
            className='w-48 h-48 rounded-full object-cover m-2'
            src='https://s3-alpha-sig.figma.com/img/35f7/be1d/030dc49c172496068c731e8ca6b3ad61?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XLzSq1k5Iq9D2yEqIP9sMuIiUZy983jOM9-VvualB2P3H96pCpj0L93OIOW~AzTX5q9-muOaZupI5zMYstnI-CiWCr0dRdW8e2ZYXy1JJCwu-rqEreO6zzOWWjbuQMKxz-PtlVEGFLHxYKevdJpYNvYg0HLdkjhreWJ05kRfhFAwqpn9cZjGIHUmqlYsr2oODt0N1slL2u3A-KgyvbIDoFhOHqAE90vGnP69UYt-9nwlO63mdetyjaGAjETBIDTZQAV5oHEDOWEgkfx~hOOVb3hfYRXgCuX8q1hsR~oFS8CflqKL6ud27Yjt~G23LqjrDxT4WQzKwI7KhvzMRPGVtQ__'
            alt='Service Avatar 4'
          />
          <p className='text-sm mt-2 font-bold text-gray-500 text-2x1'>
            Hotel reservation
          </p>
        </div>
      </div>
    </>
  );
}
