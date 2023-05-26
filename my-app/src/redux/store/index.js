import { createStore, combineReducers, applyMiddleware } from  "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { productsReducer } from "../reducers/productsReducer";
import { favoriteReducer } from "../reducers/favoriteReducer";
import { openModalReducer } from "../reducers/openModalReducer";
import { currentProductReducer } from "../reducers/currentProductReducer";
import { cartReducer } from "../reducers/cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    favorites: favoriteReducer,
    open: openModalReducer,
    current: currentProductReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)) );
export const persistor = persistStore(store);