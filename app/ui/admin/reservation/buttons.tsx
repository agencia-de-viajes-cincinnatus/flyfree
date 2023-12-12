import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteReservation } from "@/app/lib/reservationActions";

export function UpdateReservation({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/reservations/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteReservation({ id }: { id: string }) {
  const deleteReservationWithId = deleteReservation.bind(null, id);

  return (
    <>
      <form action={deleteReservationWithId}>
        <button className="rounded-md border p-2 hover:bg-red-400">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}
