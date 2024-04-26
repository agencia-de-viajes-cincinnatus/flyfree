import { fetchDestinations } from "@/app/lib/data";
import DestinationCard from "@/app/ui/admin/destination/DestinationCard";

export default async function Page() {
  const destinations = await fetchDestinations();

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl my-6">Destinations</h1>
      <div className="grid grid-cols-3 gap-4">
        {destinations?.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
