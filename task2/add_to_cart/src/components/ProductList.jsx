import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Spner } from './spner';

export function ProductList() {
    const{state,dispatch,GetData} = useContext(CartContext);
   useEffect(()=>{
    GetData();
   },[])
     if (state.loading) return <Spner/>
  if (state.error) return <p className="text-red-500">{error}</p>;
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

              {state.product.map((product) => (
            //   <ProductCard key={product.id} product={product} />
                    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition" key={product.id}>
                       <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain" />
                       <h3 className="font-semibold">{product.title.slice(0, 40)}...</h3>
                       <p className="text-sm text-gray-600 mb-2">${product.price}</p>
                       <button
                         className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" key={product.id}
                         onClick={() => {
                            dispatch({ type: "ADD_TO_CART", payload: product });
                            alert("Item added to cart!");
                        }}
                         >
                         Add to Cart
                       </button>
                    </div>
                ))}
           </div>

        </>
    )
}
