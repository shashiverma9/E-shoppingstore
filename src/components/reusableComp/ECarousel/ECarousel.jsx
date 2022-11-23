import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const ECarousel = (props) => {

    const {image}=props;
  return (<>
  <Carousel>
    {image.map((item,index)=>{
       return(
       <Carousel.Item interval={1000} key={index}>
         <img
          className="d-block w-100"
          src={item.img}
          alt=''
        />
        </Carousel.Item>
       ) 
    })}

  </Carousel>
  </>
  )
}

export default ECarousel