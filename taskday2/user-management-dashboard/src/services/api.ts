import { User } from '../types/User';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const users = await response.json();
    
    const roles: ('Admin' | 'User' | 'Customer')[] = ['Admin', 'User', 'Customer'];
    
    return users.map((user: User) => ({
      ...user,
      role: roles[Math.floor(Math.random() * roles.length)]
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};