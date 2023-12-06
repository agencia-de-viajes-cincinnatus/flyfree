import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
            <div>
                <Link href="/">Home</Link>
                <Link href="/">Destinations</Link>
                <Link href="/">Reservations</Link>
                <Link href="/">Itineraries</Link>
            </div>
            <div>
                <button>Log out</button>
            </div>
        </div>
    )
}