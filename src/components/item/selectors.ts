import { ReduxState } from '../../redux/rootReducer';


export const itemPendingSelector = ({ item }: ReduxState) => item.pending;
export const itemErrorSelector = ({ item }: ReduxState) => item.error;
export const itemsSelector = ({ item }: ReduxState) => item.items;
export const generateItemFromItemIdSelector = (itemId: string) =>
  ({ item }: ReduxState) => item.items[itemId];
