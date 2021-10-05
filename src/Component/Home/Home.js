import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Subject from '../Subject/Subject';
import './Home.css';
import img1 from'../../images/Carosol_1.jpg';
import img2 from'../../images/Carosol_2.jpg';
import img3 from'../../images/Carosol_3.jpg'


const Home = () => {

  // Courses are fetched from subjects.json in this part
    const [school,setSchool] = useState([]);
    const selectedSchool = school.slice(5,9);
    useEffect(()=>{
        fetch('./subjects.JSON')
        .then(res=>res.json())
        .then(data=>setSchool(data))

    },[])
    
    return (
        
        
           <div>
             {/* First section of home containing section for carousel */}
              <div className="firstSection">
                              <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img1}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Campus offering largest natural field </h3>
                      <p>Natural View of Campus Field </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img2}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Get Close to Nature</h3>
                      <p>UIU cares about our nature and UIU vouches to conserve the natural terrain</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={img3}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>World Class Library</h3>
                      <p>Students have the privilege of accessing the library as per their need.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </div>
            
            {/* Second section where we send properties to Subject */}
            <div className="main-body">
                <h1>Our Offered Courses are:</h1>  
                <div className="home">
                {
                    selectedSchool.map(school => <Subject key={school.name} school={school} />)
                }
                </div>
            </div>
           </div>
            
        
        
        
    );
};

export default Home;