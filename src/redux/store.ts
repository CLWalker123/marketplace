import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer, { initialState } from './rootReducer';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancer,
);

export default store;
