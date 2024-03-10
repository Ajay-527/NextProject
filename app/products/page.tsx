
import React from 'react'
import ProductListItem from '../componets/ProductListItem';

interface Product{
  product_id: number;
  product_name: string;
  description:string;
  price:string;
  stock_quantity:number;
}
const ProductsData = async () => {

    const res= await fetch('http://localhost:3001/product/all')
    const productlist:Product[]=await res.json();

  return (
    <>
    <h1>Product List</h1>
    <ul>
      {
       productlist.map(Product=> 
       <ProductListItem product={Product}/>
      )}
    </ul>
    </>
  )
}

export default ProductsData
