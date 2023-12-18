import { baseUrl } from './data';

export async function GetDestination() {
  try {
    const res = await fetch(`${baseUrl}/destination`);
    console.log(res);
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
