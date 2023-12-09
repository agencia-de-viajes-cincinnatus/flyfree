import { fetchDestinationById } from "@/app/lib/data";
import EditDestinationForm from "@/app/ui/admin/Edit-destination-form";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Edit",
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const destination = await fetchDestinationById(id);

    if (!destination.country) {
        notFound();
    }
    

    return (
        <div className="container mx-auto">
            <EditDestinationForm destination={destination} />
        </div>
    )
}
