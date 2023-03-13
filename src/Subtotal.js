import React from 'react'
import "./Subtotal.css";
function Subtotal({allItems}) {
    const prices = allItems.map((item) => item.price);
    console.log(prices);
    let total = 0;
    if(allItems.length > 0) {
        for(let i = 0; i < prices.length; i++) {
            total += prices[i];
        }
    }else {
        total = 0;
    }
  return (
    <div className = "subtotal">
        <div>Subtotal ({allItems.length} items) ${total}</div>
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal