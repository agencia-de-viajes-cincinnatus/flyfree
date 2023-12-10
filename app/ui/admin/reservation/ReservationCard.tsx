import { Reservation } from "@/app/lib/definitions";
import { DeleteReservation, UpdateReservation } from "./buttons";

export default function ReservationCard({
  reservation,
}: {
  reservation: Reservation;
}) {
  const { id, date, completed, employee, destination } = reservation;

  return (
    <div className="rounded-xl bg-[#EDEDED] py-8 px-10 mb-6 shadow-md">
      <div className="grow">
        <h3 className="text-xl font-bold">{destination.city}</h3>
        <p className="text-lg text-neutral-500">{destination.country}</p>
        <p>{destination.description}</p>
        <p className="text-yellow-600">$ {destination.price}</p>
        <p>Date: {new Date(date).toISOString().split("T")[0]}</p>
      </div>
      <div className="flex gap-2 mt-3">
        <UpdateReservation id={id} />
        <DeleteReservation id={id} />
      </div>
    </div>
  );
}
