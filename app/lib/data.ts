import { Destination, Reservation } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export const baseUrl = 'http://localhost:3000/api';

export const travels = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placekitten.com/200/200',
    city: 'Bogotá',
    country: 'Colombia',
    date: '2021-10-10',
    time: '10:00',
    duration: '1:00',
    price: '100000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placekitten.com/200/200',
    city: 'Bogotá',
    country: 'Colombia',
    date: '2021-10-10',
    time: '10:00',
    duration: '1:00',
    price: '100000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placekitten.com/200/200',
    city: 'Bogotá',
    country: 'Colombia',
    date: '2021-10-10',
    time: '10:00',
    duration: '1:00',
    price: '100000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '4',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://placekitten.com/200/200',
    city: 'Bogotá',
    country: 'Colombia',
    date: '2021-10-10',
    time: '10:00',
    duration: '1:00',
    price: '100000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

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

export async function fetchDestinationImage(imageName: string) {
  noStore();
  try {
    const res = await fetch(`${baseUrl}/destination/image/${imageName}`);
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error("Failed to fetch destination image");
  }
}

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
