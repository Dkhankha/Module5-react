import React from 'react'
import CartContext from './Cart-Context'

const CartProvider = (props) => {
  const addItemToCartHandler = () => {}

  const removeItemfromCartHandler = () => {

  }
   const cartContext = {
    items:[],
    totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler
   }
  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartProvider