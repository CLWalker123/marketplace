import { Dispatch } from 'redux';
import { fetchAllItems as fetchAllItemsApi } from './api';
import { Item } from './types';

type FetchAllItemsAction = {
  type: typeof FETCH_ITEMS.PENDING
} | {
  type: typeof FETCH_ITEMS.SUCCESS,
  items: Record<string, Item>,
} | {
  type: typeof FETCH_ITEMS.FAILURE,
  error: string,
};

export type ItemAction = FetchAllItemsAction;

export const FETCH_ITEMS = {
  PENDING: 'FETCH_ITEMS_PENDING',
  SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FAILURE: 'FETCH_ITEMS_FAILURE',
} as const;

export const fetchAllItems = () => async (dispatch: Dispatch) => {
  dispatch({ type: FETCH_ITEMS.PENDING })
  try {
    const items = await fetchAllItemsApi();
    dispatch({ type: FETCH_ITEMS.SUCCESS, items });
  } catch (error) {
    dispatch({ type: FETCH_ITEMS.FAILURE })
  }
}
