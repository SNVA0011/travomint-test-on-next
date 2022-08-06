import React, { useState } from "react";


const HeaderB = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="grid grid-cols-1">
        {/* <Carousel
activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog2}
          alt="First slide"
        />
        <Carousel.Caption className="top-40 left" >
          <h3 className="text-7xl">{props.title}</h3>
          <p className="text-2xl">{props.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog1}
          alt="Second slide"
        />

        <Carousel.Caption className="top-28 right" >
          <h3 className="text-8xl">{props.title2}</h3>
          <p className="text-3xl">{props.description2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={blog1}
          alt="Third slide"
        />

        <Carousel.Caption className="top-28 right" >
          <h3 className="text-7xl">{props.title1}</h3>
          <p className="text-2xl">
          {props.description1}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      </div>
    </>
  );
};

export default HeaderB;
