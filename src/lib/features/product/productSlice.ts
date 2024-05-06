import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "@/d.types";
import {} from "@reduxjs/toolkit";

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
}
const initialState = {
  products: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<string>) => {
      state.selectedProduct =
        state.products.find(
          (product: Product) => product.id === action.payload
        ) ?? null;
    },
  },
  extraReducers: () => {},
});

export const { setProducts, setSelectedProduct } = productSlice.actions;

export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
