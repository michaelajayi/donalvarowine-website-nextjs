import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, CartItems, Product } from "@/d.types";

import toast from "react-hot-toast";

const initialState: { cartItems: CartItems } = {
  cartItems: [],
};

function isProductInCart(cartItems: CartItems, product: Product) {
  return cartItems.some((cartItem) => cartItem.product.id === product.id);
}

function isValidQuantity(bottleQty: number, boxQty: number): boolean {
  return bottleQty >= 0 && boxQty >= 0;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      //   console.log("Payload from slice", action.payload);

      const productIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );

      if (productIndex !== -1) {
        // Product is already in the cart, update it
        if (isValidQuantity(action.payload.bottleQty, action.payload.boxQty)) {
          state.cartItems[productIndex] = action.payload;
          toast.success("Cart updated successfully!");
        } else {
          toast.error("Invalid quantity!");
        }
      } else {
        // Product is not in the cart, add it
        if (
          isValidQuantity(action.payload.bottleQty, action.payload.bottleQty)
        ) {
          state.cartItems.push(action.payload);
          toast.success("Product added to cart successfully!");
        } else {
          toast.error("Invalid quantity");
        }
      }
    },
    incrementQuantity: (
      state,
      action: PayloadAction<{ id: string; isBottle: boolean }>
    ) => {
      const { id, isBottle } = action.payload;
      const productIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === id
      );

      if (productIndex !== -1) {
        if (isBottle) {
          state.cartItems[productIndex].bottleQty += 1;
        } else {
          state.cartItems[productIndex].boxQty += 1;
        }
      }
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{ id: string; isBottle: boolean }>
    ) => {
      const { id, isBottle } = action.payload;
      const productIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product.id === id
      );

      if (productIndex !== -1) {
        const cartItem = state.cartItems[productIndex];

        if (isBottle) {
          if (cartItem.bottleQty > 1) {
            cartItem.bottleQty -= 1;
          } else {
            state.cartItems.splice(productIndex, 1);
            toast.success(`${cartItem.product.title} removed from cart!`);
          }
        } else {
          if (cartItem.boxQty > 1) {
            cartItem.boxQty -= 1;
          } else {
            state.cartItems.splice(productIndex, 1);
            toast.success(`${cartItem.product.title} removed from cart!`);
          }
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: () => {},
});

export const { addToCart, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
