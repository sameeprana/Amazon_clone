import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const products = createSlice({
  name: "product",
  initialState: { data: [], status: STATUS.IDLE },
  reducers: {
    setProducts(state: any, action: any) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    searchProduct(state, action) {
      const searchTerm = action.payload;
      state.data = state.data.filter((product: any) =>
        product.name.includes(searchTerm)
      );
    },
  },
});

export const { setProducts, setStatus } = products.actions;
export default products.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(dispatch: any) {
    dispatch(setStatus(STATUS.LOADING));
    const productData = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const productsWithQuantity = res.data.map((product: any) => ({
          ...product,
          quantity: 0,
          price: product.price * 40,
        }));
        dispatch(setProducts(productsWithQuantity));
        dispatch(setStatus(STATUS.IDLE));
      })
      .catch((err) => {
        console.log("ERROR");
        dispatch(setStatus(STATUS.ERROR));
      });
  };
}
