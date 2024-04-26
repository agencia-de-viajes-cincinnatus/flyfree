import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteDestination } from "@/app/lib/destinationActions";

export function UpdateDestination({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/destinations/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteDestination({ id }: { id: string }) {
  const deleteDestinationWithId = deleteDestination.bind(null, id);

  return (
    <>
      <form action={deleteDestinationWithId}>
        <button className="rounded-md border p-2 hover:bg-red-400">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}
