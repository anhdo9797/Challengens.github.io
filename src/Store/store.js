import { combineReducers, createStore } from "redux";
import cartReducer from "./AddToCart/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
