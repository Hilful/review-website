
import React from 'react';
import { Button } from 'react-bootstrap';
import './Subject.css'
const Service = (props) => {
    const {name,img,price} =props.school;
    return (
       // Section containing details that we brought from props as name price and image
        <div>
          <img className="subject" src={img} alt="" />
          <h1>{name}</h1>
          <h5>Price:Tk {price}</h5>
          <Button variant="outline-success">Enroll Now</Button>
        
        </div>
    );
};

export default Service;

