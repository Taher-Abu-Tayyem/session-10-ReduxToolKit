import  {applyMiddleware, combineReducers, createStore}  from 'redux';
import thunk from 'redux-thunk';
import { bankReducer } from './reducers/bank-reducer';
import { productsReducer } from './reducers/products-reducer';

const appReducer = combineReducers({
    bank: bankReducer,
    products: productsReducer,
  });
export const store = createStore(appReducer,applyMiddleware(thunk));