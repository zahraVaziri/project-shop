import { useCart } from '../../component/Provider/CartProvider'

const Cart = () => {
  const cartState = useCart()
  return (
    <main>
    {cartState.cart.length ? (
    cartState.cart.map(item => <p>{item.name}</p>)):(
      <p> item not </p>
    )
     }
  </main>
  )
}

export default Cart
