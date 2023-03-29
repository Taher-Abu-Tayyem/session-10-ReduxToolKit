 //import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, fetchProducts } from "../store/actions/products-action"

 
 const Products = () => {
    const products =useSelector(state =>state.products)
    const dispatch=useDispatch()
    console.log(products)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
   return (
     <>
         <h1>Products</h1>
         <button onClick={()=>dispatch(addProduct({name:2,city:'product2'}))}>addProduct</button>
         {
            products.map(product => (<h2 key={product.name}>{product.city}</h2>))
         }
     </>
   )
 }
 
 export default Products