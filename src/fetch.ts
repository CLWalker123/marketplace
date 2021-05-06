import itemData from '../data/item-data.json';
import userData from '../data/user-data.json';

export const api = (method: 'GET'| 'POST' | 'DELETE', resource: 'items' | 'users') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (resource) {
        case 'items':
          resolve(itemData);
          break;
        case 'users':
          resolve(userData);
          break;
      }
      }, 1000)
  })
}

