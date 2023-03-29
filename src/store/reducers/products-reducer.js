import { ADD_PRODUCT, GET_PRODUCTS } from "../actions/products-action";

export const productsReducer = (state = [], action) => {
    switch (action.type) {
      case GET_PRODUCTS:
        return [...action.payload]; //متعدلش ع ال state
      case ADD_PRODUCT:
        return [...state, action.payload]; //متعدلش ع ال state
  
      default:
        return state;
    }
  };