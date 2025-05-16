import React, { useEffect } from "react";
import { createContext, useReducer } from "react";



const initial={
   cart: [],
   product:[],
   loading:true,
   error:null
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
      };
      case "FETCH_SUCCESS":
        return{
        ...state,
        product:action.payload,loading:false
        };
      case "FETCH_ERROR":
        return{
          ...state,
          loading:false,error:"something went wrong"
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
  useEffect(()=>{
   GetData();
  },[]);
  async function GetData(){
  try{
         const url = "https://fakestoreapi.com/products";
         let response = await fetch(url);
         let data = await response.json();
      
       dispatch({type:"FETCH_SUCCESS",payload:data})
  }catch(error){
        dispatch({type:"FETCH_ERROR"});
        console.error('Fetch error:', error);
  }
   };

 return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}