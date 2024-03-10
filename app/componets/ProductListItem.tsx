'use client'
import React, { useEffect, useState } from 'react';

interface Product {
    product_id: number;
    product_name: string;
    description:string;
    price:string;
    stock_quantity:number;
}
const ProductListItem = ({ product }: { product: Product }) => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        console.log(product);
        alert(
        `Product Name: ${product.product_name},
         Desc: ${product.description},
         Price: ${product.price}, 
         Stock Avaiable: ${product.stock_quantity}`
        )
     };
    return (
        <li key={product.product_id}>
           <button onClick={handleClick}> {product.product_name}</button>
        </li>
    );
};

export default ProductListItem;
