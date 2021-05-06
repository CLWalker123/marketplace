import { combineReducers } from "redux";
import itemReducer, {
  ItemState,
  initialState as itemInitialState
} from '../components/item/reducers';

export type ReduxState = {
  item: ItemState,
};

export const initialState = {
  item: itemInitialState,
}

const rootReducer = combineReducers({
  item: itemReducer
});

export default rootReducer;
