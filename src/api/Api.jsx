import axios from 'axios'
import React from 'react'

export const  ProdcutsData  = async () => {
    const prodcut = await axios.get("https://fakestoreapi.com/products")
  return prodcut
}
