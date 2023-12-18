'use client';
import { GetDestination } from '@/app/lib/admin-panel';
import { useEffect, useState } from 'react';
import { Destination } from '@/app/lib/definitions';

interface AdminPanelProps {
  id: string;
  country: string;
  city: string;
  price: number;
  description: string;
  score: number;
  image?: string;
}

export default function AdminPanel() {
  const [destination, setDestination] = useState<AdminPanelProps>();

  useEffect(() => {
    const getDestination = async () => {
      const destination = await GetDestination();
      setDestination(destination);
    };
    getDestination();
  }, []);

  console.log(destination);

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <h2>Destination</h2>
        <div>
          <h3>Country</h3>
          <p>{destination?.country}</p>
        </div>
        <div>
          <h3>City</h3>
          <p>{destination?.city}</p>
        </div>
        <div>
          <h3>Price</h3>
          <p>{destination?.price}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{destination?.description}</p>
        </div>
        <div>
          <h3>Score</h3>
          <p>{destination?.score}</p>
        </div>
        {/* <div>
          <h3>Image</h3>
          <p>{destination?.image}</p>
        </div> */}
      </div>
    </div>
  );
}
