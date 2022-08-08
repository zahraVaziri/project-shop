import React from 'react'
import { useActionCart } from '../../component/Provider/CartProvider'
import * as data from '../../data'
const Home = () => {
  const dispatch = useActionCart()
  const addProducts= (product)=>{
    dispatch({type:'ADD_TO_CART',payload:product})
  }
  return (
    <div className='product-app'>
      {data.products.map((item)=>{
        return (
          <div style={{margin:'10px'}}>
            <img src={item.img} alt={item.name}/>
            <div className='product-desc'>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={()=>addProducts(item)}>ADD</button>
            </div>
            
          </div>
        )
      })}
    </div>
  )
}

export default Home
