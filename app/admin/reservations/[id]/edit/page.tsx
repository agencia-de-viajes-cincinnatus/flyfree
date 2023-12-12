import { fetchDestinations, fetchReservationById } from "@/app/lib/data";
import EditReservationForm from "@/app/ui/admin/Edit-reservation-form";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const reservation = await fetchReservationById(id);
  const destinations = await fetchDestinations();

  if (!reservation.date) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <EditReservationForm
        reservation={reservation}
        destinations={destinations}
      />
    </div>
  );
}
