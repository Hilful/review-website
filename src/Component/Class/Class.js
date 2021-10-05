import React, {  useEffect, useState } from 'react';


import Product from '../Product/Product';
import './Class.css'

const Class = () => {
    const [product,setProduct] = useState([]);
    
    
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])
  
    return ( 
        // All courses are collected one by one and are transmitted to Product with key and product      
            <div className="card-body">
                 <h1>Our offered Course List :</h1>
                <div className="card">
                {
                    product.map(product=><Product key={product.name} product={product} />)
                }
                </div>
             </div>
    );
};

export default Class;
