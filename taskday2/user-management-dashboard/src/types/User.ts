export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  role?: 'Admin' | 'User' | 'Customer'; 
}

export type SortField = 'name' | 'email';
export type SortDirection = 'asc' | 'desc';
export type Role = 'All' | 'Admin' | 'User' | 'Customer';

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}