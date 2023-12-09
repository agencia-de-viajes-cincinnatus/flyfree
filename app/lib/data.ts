import { Destination } from "./definitions";

const baseUrl = "http://localhost:3000/api";

export async function fetchDestinations(): Promise<Destination[]> {
    try {
        const res = await fetch(`${baseUrl}/destination`)
        const json = await res.json();
        return json;
    } catch (error) {
        throw new Error('Failed to fetch destinations')
    }
}