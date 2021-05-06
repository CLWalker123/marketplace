import { api } from '../../fetch';

export const fetchUserDetails = (userId: string) => {
  return api('GET', 'users');
}