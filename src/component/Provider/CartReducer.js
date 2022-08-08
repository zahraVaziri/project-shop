import React from 'react'

const CartReducer = (state,action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const updateCart = [...state.cart]
            const index = updateCart.findIndex(item => item.id === action.payload.id)

            if(index <0){
                updateCart.push({...action.payload,quntity:1})
            }else{
                const updateItem = updateCart[index]
                updateItem.quntity++
                updateCart[index]=updateCart
            }
            return {...state,cart:updateCart}
    
        default:
            return state
            
    }
  
}

export default CartReducer
