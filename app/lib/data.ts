import { Destination } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

const baseUrl = "http://localhost:3000/api";

export async function fetchDestinations(): Promise<Destination[]> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/destination`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Failed to fetch destinations");
  }
}

export async function fetchDestinationById(id: string): Promise<Destination> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/destination/${id}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Failed to fetch destination");
  }
}
