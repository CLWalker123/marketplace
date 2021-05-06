import { ItemAction, FETCH_ITEMS } from './actions';
import { Item } from './types';

export interface ItemState {
  pending: boolean;
  error: string | null;
  items: Record<string, Item>;
}

export const initialState = {
  pending: false,
  error: null,
  items: {},
};

const reducer = (state: ItemState = initialState, action: ItemAction) => {
  switch (action.type) {
    case (FETCH_ITEMS.PENDING):
      return {
        ...state,
        pending: true,
        error: null,
      }
    case (FETCH_ITEMS.SUCCESS):
      return {
        ...state,
        pending: false,
        items: action.items,
      }
    case (FETCH_ITEMS.FAILURE):
      return {
        ...state,
        pending: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default reducer;
