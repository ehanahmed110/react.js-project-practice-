import { ADD_PRODUCT, ADD_TO_CART, FETCH_ERROR, FETCH_SUCCESS, LESS_PRODUCT, REMOVE_FROM_CART, SET_LOADING_TRUE, UPDATE_QUANTITY } from "./type";

function Reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
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
      case SET_LOADING_TRUE:
        return{
            ...state,loading:true,error:null
        }; 
    case FETCH_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: "something went wrong",
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case LESS_PRODUCT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
      case UPDATE_QUANTITY:
  return {
    ...state,
    cart: state.cart.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: action.payload.quantity }
        : item
    ),
  };
    default:
      return state;
  }
}

export default Reducer;
