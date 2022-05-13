import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../store/CartSlice'

const Products = () => {
    const [Products,setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProduct()
    },[])

    const handleProduct = (item)=>{
       dispatch(add(item))
    }

  return (
    <div className="productsWrapper">
    {Products.map((item)=>(
         <div className="card" key={item.id}>
         <img src={item.image} alt="" />
         <h4>{item.title}</h4>
         <h5>${item.price}</h5>
         <button className="btn" onClick={()=>handleProduct(item)}>
             Add to cart
         </button>
     </div>
    ))}
    </div>
  )
}

export default Products