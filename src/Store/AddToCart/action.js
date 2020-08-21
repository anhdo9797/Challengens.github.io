//action type

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOTE_PRODUCT = "REMOTE_PRODUCT";

//action

const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
const removeProduct = (payload) => ({ type: REMOTE_PRODUCT, payload });

const cartAction = {
  addToCart,
  removeProduct,
};

export default cartAction;
