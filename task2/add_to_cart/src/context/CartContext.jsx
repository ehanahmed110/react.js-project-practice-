import React from "react";
import { createContext, useReducer } from "react";



const initial={
   cart: [],
};

function Reducer(state,action){
  switch (action.type) {
    case "ADD_TO_CART":
      // return {
      //    ...state, cart: [...state.cart, action.payload]
      // };
      const exists = state.cart.find((item) => item.id === action.payload.id);
      if (exists) {
        // If item exists, just increase quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Else, add item with quantity = 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
     case "ADD_PRODUCT":
       return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
      case "LESS_PRODUCT":
        return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          //.filter((item) => item.quantity = 0), // remove if quantity is 0
      };
    default:
      return state;
  }
}

export const CartContext = createContext();

export function CartProvider({ children }){
const[state,dispatch] = useReducer(Reducer,initial)
 return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}