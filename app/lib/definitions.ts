export type Destination = {
  id: string;
  country: string;
  city: string;
  price: number;
  description: string;
  score: number;
  image?: string;
};

export type Reservation = {
  id: string;
  date: Date;
  completed: boolean;
  employee: string;
  destination: Destination;
  passengers: number;
};
