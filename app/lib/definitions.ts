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

export type Login = {
  id: string;
  username: string;
  password: string;
};

export type Register = {
  id: string;
  username: string;
  email: string;
  password: string;
};
