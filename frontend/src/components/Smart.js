
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
  
export default function Smart() {
  return (
    <div style={{top:'0'}}>

      <MDBCarousel showControls showIndicators delay={1000}>
        <MDBCarouselItem 
        
            className="d-block w-100" 
            src={require('../pages/imgs/slide1.jpg')}
            itemId={1}
            alt="Image One"/>
       
     
        <MDBCarouselItem 
           className="d-block w-100 " 
             src={require('../pages/imgs/slide2.jpeg')}
            alt="Image Three"
            itemId={3}
        />
        <MDBCarouselItem
             className="d-block w-100 h-auto" 
             src={require('../pages/imgs/slide4.png')}
            alt="Image Four"
            itemId={4}/>
         

        <MDBCarouselItem 
     itemId={5}
             className="d-block w-100 " 
             src={require('../pages/imgs/slide5.png')}
            alt="Image Four"/>
      </MDBCarousel>
    </div>
  );
}