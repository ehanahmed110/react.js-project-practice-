import React from "react";
import { createContext, useReducer } from "react";
import Reducer from "./ProductReducer";
import { FETCH_ERROR, FETCH_SUCCESS, SET_LOADING_TRUE } from "./type";

const initial = {
  cart: [],
  product: [],
  loading: true,
  error: null,
};

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initial);
  async function GetData() {
    try {
      dispatch({ type: SET_LOADING_TRUE });
      const url = "https://fakestoreapi.com/products";
      let response = await fetch(url);
      let data = await response.json();

      dispatch({ type: FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
      console.error("Fetch error:", error);
    }
  }

  return (
    <CartContext.Provider value={{ state, dispatch, GetData }}>
      {children}
    </CartContext.Provider>
  );
}
