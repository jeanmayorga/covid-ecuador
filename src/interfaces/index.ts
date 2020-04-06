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
  Name: string;
  slug: string;
}

// Marbe
/*
  In case that we are going to use
  cities in the app..
*/
export interface City {
  name: string;
}
