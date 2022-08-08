
const CartReducer = (state,action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const updateCart = [...state.cart]
            const index = updateCart.findIndex(item => item.id === action.payload.id)

            if(index < 0){
                updateCart.push({...action.payload,quantity: 1})
            }else{
                const updateItem = {...updateCart[index]}
                updateItem.quantity++
                updateCart[index]=updateCart
            }
            return {...state,cart:updateCart}
    
        default:
            return state
            
    }
  
}

export default CartReducer
