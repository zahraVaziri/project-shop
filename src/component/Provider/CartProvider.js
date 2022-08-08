import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContaxt = createContext()
const cartDispachContext = createContext()


const initialState = {
    cart:[],
    total: 0
}
const CartProvider = ({children})=>{
    const [cart,dispatch] = useReducer(CartReducer,initialState)
    return(
        <CartContaxt.Provider value={cart}>
            <cartDispachContext.Provider value={dispatch}>
                {children}
            </cartDispachContext.Provider>
        </CartContaxt.Provider>
    )
}

export default CartProvider

export const useCart = () => useContext(CartContaxt)
export const useActionCart = () => useContext(cartDispachContext)