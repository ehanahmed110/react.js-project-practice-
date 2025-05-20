import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRef } from "react";
import {useReactToPrint} from 'react-to-print';
// import { Spner } from "./spner";

export default function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  //for print--------------
  const componentRef = useRef();
  const HandlePrint = useReactToPrint({
    contentRef : componentRef
  }) 
   //  if (state.loading) return <Spner/>
  if (state.error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="p-6 md:flex">
      <div className="p-6 md:w-[80%]">
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
        {state.cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-semibold">{item.title.slice(0, 40)}</h3>
                  <p>${item.price}</p>
                  <p>
                    Quantity:{item.quantity}
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newQty = parseInt(value, 10);
                        if (!isNaN(newQty) && newQty >= 1) {
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: newQty },
                          });
                        }
                      }}
                      className="w-16 ml-2 px-2 py-1 border rounded"
                    />
                    
                  </p>
                  <div className="flex space-x-10 mt-4">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                      // key={item.id}
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: item });
                        alert("Item removed from cart!");
                      }}
                      
                    >
                      Remove
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                      // key={item.id}
                      onClick={() => {
                        dispatch({ type: "ADD_PRODUCT", payload: item });
                        alert("Are you sure you want to add again item!");
                      }}
                    >
                      ADD+
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
                      // key={item.id}
                      onClick={() => {
                        dispatch({ type: "LESS_PRODUCT", payload: item });
                        alert("Are you sure you want to remove from item!");
                      }}
                    >
                      LESS-
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#000000d5] md:w-[30%] text-white p-4" >
              <button onClick={HandlePrint}>Print</button>
        <div ref={componentRef} className="bg-[#000000d5] text-white rounded-lg p-2">
        <h2 className="text-xl font-bold mb-4 text-center shadow">
          Cart Summary
        </h2>
        {state.cart.map((itm) => (
          <div className="mb-2" key={itm.id}>
            <div>
              <h3 className="font-semibold">{itm.title.slice(0, 30)}</h3>
              <p>Price: ${itm.price}</p>
              <p>Quantity: {itm.quantity}</p>
              <p>Total Price: ${itm.price * itm.quantity}</p>
            </div>
            <hr className="mt-2" />
          </div>
        ))}
        <div className="mt-4 border-t pt-4 text-lg font-bold text-center">
          Grand Total: $
          {state.cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </div>
      </div>
      </div>

    </div>
  );
}
