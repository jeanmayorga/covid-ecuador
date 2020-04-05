export type Loading = boolean;

export interface User {
  userId: string;
  email: string;
}

export interface Cases {
  updatedAt: string;
  provinces: Province[] | [];
}

export interface Province {
  name: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

// Marbe
/*
  In case that we are going to use
  cities in the app..
*/
export interface City {
  name: string;
}
