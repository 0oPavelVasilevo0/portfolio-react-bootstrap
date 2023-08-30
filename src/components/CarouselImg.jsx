import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import img from "./../img/veb-razrabotchik-918x516.jpg"
import ImgWindow from './ImgWindow';

const CarouselImg = () => {
 
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
              <img
                //   className="d-block w-100"
                  className="img-fluid"
                  src={img}
                  alt="First slide"
              />
              {/* <ImgWindow text="First slide" /> */}
              <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="img-fluid"
                  src={img}
                  alt="First slide"
              />
              {/* <ImgWindow text="Second slide" /> */}
              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                  className="img-fluid"
                  src={img}
                  alt="First slide"
              />
              {/* <ImgWindow text="Third slide" /> */}
              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  )
}

export default CarouselImg