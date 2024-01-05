import { Destination, Reservation } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

const baseUrl = 'http://localhost:3000/api';

export async function fetchDestinations(): Promise<Destination[]> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/destination`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error('Failed to fetch destinations');
  }
}

export async function fetchDestinationById(id: string): Promise<Destination> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/destination/${id}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error('Failed to fetch destination');
  }
}

// export async function fetchDestinationImage(imageName: string) {
//   noStore();
//   try {
//     const res = await fetch(`${baseUrl}/destination/image/${imageName}`);
//     const imageBlob = await res.blob();
//     const imageObjectUrl = URL.createObjectURL(imageBlob);

//     return imageObjectUrl;
//   } catch (error) {
//     throw new Error("Failed to fetch destination image");
//   }
// }

export async function fetchReservation(): Promise<Reservation[]> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/reservation`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error('Failed to fetch reservation');
  }
}

export async function fetchReservationById(id: string): Promise<Reservation> {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/reservation/${id}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error('Failed to fetch reservation');
  }
}
