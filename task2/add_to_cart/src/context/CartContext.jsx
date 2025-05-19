import React from "react";
import { createContext, useReducer } from "react";
import Reducer from "./ProductReducer";
import { FETCH_ERROR, FETCH_SUCCESS, SET_LOADING_TRUE } from "./type";
import axios from "axios";

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
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;

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
