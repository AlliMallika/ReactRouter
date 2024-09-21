import React from 'react'

export const Product = () => {
  // This is Product component
    const productList = [
        { id: 1, product_name: 'Mobile', price: '15000' },
        { id: 2, product_name: 'Headphone', price: '500' },
        { id: 3, product_name: 'Laptop', price: '50000' },
        { id: 4, product_name: 'Smartwatch', price: '8000' },
        { id: 5, product_name: 'Tablet', price: '20000' },
        { id: 6, product_name: 'Bluetooth Speaker', price: '3000' },
        { id: 7, product_name: 'Camera', price: '25000' },
        { id: 8, product_name: 'Charger', price: '1500' },
        { id: 9, product_name: 'Gaming Console', price: '40000' },
        { id: 10, product_name: 'Wireless Mouse', price: '1200' }
    ];
    
  return (
    <div>
        <ul>
        {productList.map((data)=>(
            <li key={data.id}>{data.product_name}</li>
            ))}
        </ul>    
    </div>
  )
}
