import { Destination } from "@/app/lib/definitions";
import { DeleteDestination, UpdateDestination } from "./buttons";
import { fetchDestinationImage } from "@/app/lib/data";
import Image from "next/image";

export default async function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const { id, city, country, description, price, score, image } = destination;

  const destinationImage = await fetchDestinationImage(image as string);
  console.log(destinationImage);
  

  return (
    <div className="rounded-xl bg-[#EDEDED] mb-6 shadow-md flex">
      <div className="py-8 px-10 w-2/4">
        <div className="grow">
          <h3 className="text-xl font-bold">{city}</h3>
          <p className="text-lg text-neutral-500">{country}</p>
          <p>{description}</p>
          <p className="text-yellow-600">$ {price}</p>
          <p>Score: {score}</p>
        </div>
        {/* <Image src={`${destinationImage.url}`} width={100} height={100} alt={city} /> */}
        <div className="flex gap-2 mt-3">
          <UpdateDestination id={id} />
          <DeleteDestination id={id} />
        </div>
      </div>
      <div className="w-2/4">
        <img
        className="rounded-r-xl object-cover h-full"
          src={`${destinationImage.url}`}
          alt={city}
        />
      </div>
    </div>
  );
}
