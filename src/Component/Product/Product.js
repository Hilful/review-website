import React from 'react';
import  './Product.css'
const Product = (props) => {
    const {name,img,price} =props.product;
    return (
       // Section containing details that we brought from props as name price and image are dynamically shown in the section below
        
        <div className="cardSection">
            <img className="service" src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price: Tk {price}</h5>
                <button className="buy">Enroll Now</button>
        </div>
        
    );
};

export default Product;