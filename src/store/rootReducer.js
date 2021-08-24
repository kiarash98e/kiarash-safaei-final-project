import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from '../Reducers/productItem';
import couponReducer from '../Reducers/Coupon';
import filterReducer from '../Reducers/filter';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products','coupon','filters'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  coupon: couponReducer,
  filters: filterReducer
});

export default persistReducer(persistConfig, rootReducer);
