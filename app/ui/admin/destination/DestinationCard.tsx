import { Destination } from "@/app/lib/definitions";
import { DeleteInvoice, UpdateDestination } from "./buttons";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  const { id, city, country, description, price, score } = destination;

  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6 shadow-md">
      <div className="grow">
        <h3 className="text-xl font-bold">{city}</h3>
        <p className="text-lg text-neutral-500">{country}</p>
        <p>{description}</p>
        <p className="text-yellow-600">$ {price}</p>
        <p>Score: {score}</p>
      </div>
      <div className="flex gap-2 mt-3">
        <UpdateDestination id={id} />
        <DeleteInvoice id={id} />
      </div>
    </div>
  );
}
