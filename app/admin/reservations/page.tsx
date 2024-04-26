import { fetchReservation } from "@/app/lib/data";
import ReservationCard from "@/app/ui/admin/reservation/ReservationCard";

export default async function Page() {
  const reservations = await fetchReservation();

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl my-6">Reservation</h1>
      <div className="grid grid-cols-3 gap-4">
        {reservations?.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
}
