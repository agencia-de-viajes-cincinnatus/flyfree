import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='bg-primary'>
      <nav className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={100} height={100} priority />
        </Link>
        <div className='text-white grow flex justify-evenly'>
          <Link
            href='/'
            className='hover:text-tertiary font-bold text-lg ease-in duration-100'
          >
            Home
          </Link>
          <Link
            href=''
            className='hover:text-tertiary font-bold text-lg ease-in duration-100'
          >
            Manage
          </Link>
          <Link
            href=''
            className='hover:text-tertiary font-bold text-lg ease-in duration-100'
          >
            Destinations
          </Link>
          <Link
            href=''
            className='hover:text-tertiary font-bold text-lg ease-in duration-100'
          >
            Reservations
          </Link>
          <Link
            href=''
            className='hover:text-tertiary font-bold text-lg ease-in duration-100'
          >
            Itineraries
          </Link>
        </div>
        <div>
          <div className='flex items-center'>
            <p className='text-white mr-2'>(Employee name)</p>
            <button className='bg-secondary p-2 rounded-md font-bold hover:bg-[#ffdd35] ease-in duration-200 hover:text-red-600'>
              Log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
