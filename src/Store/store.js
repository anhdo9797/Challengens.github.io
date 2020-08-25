import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./AddToCart/reducer";
import reducerAuth from "./Authentication/reducer";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: reducerAuth,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
