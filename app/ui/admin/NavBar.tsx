import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-primary">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className="text-white grow flex justify-evenly">
          <Link
            href="/"
            className="hover:underline decoration-white underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/destination"
            className="hover:underline decoration-white underline-offset-4"
          >
            Destinations
          </Link>
          <Link
            href="/reservation"
            className="hover:underline decoration-white underline-offset-4"
          >
            Reservations
          </Link>
          <Link
            href="/itinerary"
            className="hover:underline decoration-white underline-offset-4"
          >
            Itineraries
          </Link>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-white mr-2">(Employee name)</p>
            <button className="bg-secondary p-2 rounded-md font-bold hover:bg-[#ffdd35] ease-in duration-200 hover:text-red-600">
              Log out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
