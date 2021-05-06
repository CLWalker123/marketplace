import { api } from '../../fetch';

export const fetchAllItems = async () => {
  return await api('GET', 'items');
}
