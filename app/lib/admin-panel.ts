import { baseUrl } from './data';

export async function GetDestination() {
  try {
    const res = await fetch(`${baseUrl}/destination`);

    if (!res.ok) {
      throw new Error(`Failed to fetch destinations. Status: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    return null;
  }
}

export async function GetReservation() {
  try {
    const res = await fetch(`${baseUrl}/reservation`);

    if (!res.ok) {
      throw new Error(`Failed to fetch reservations. Status: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return null;
  }
}
