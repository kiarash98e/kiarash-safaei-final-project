import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from '../Reducers/productItem';
import couponReducer from '../Reducers/Coupon';
import filterReducer from '../Reducers/filter';
import toastReducer from '../Reducers/toast'
import authReducer from '../Reducers/auth'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['products','coupon','filters','toast','auth'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  coupon: couponReducer,
  filters: filterReducer,
  toast: toastReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
