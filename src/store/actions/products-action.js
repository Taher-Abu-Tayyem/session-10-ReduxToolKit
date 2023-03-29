export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

export const addProduct = (product) => {
    return {
      type: ADD_PRODUCT,
      payload: product,
    };
  };
  
  export  const getProducts = (products) => {
    return {
      type: GET_PRODUCTS,
      payload: products,
    };
  };

  export const fetchProducts = () => {
    return async (dispatch) => {
      const res = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      const data = await res.json();
      console.log(data);
      dispatch(getProducts(data));
    };
  };