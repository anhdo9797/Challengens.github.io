const { ADD_TO_CART } = require("./action");

const initialState = {
  listProducts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        listProducts: [...state.listProducts, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
