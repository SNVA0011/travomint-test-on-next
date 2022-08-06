import React, { useState } from "react";
import back from "../../../public/Image/dubaibanner.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {

       
  return (
    <>
      <div
        className="dubaiback visaprocess">
        <Container>
          <Row className="align-items-center">
          <Col xs={12} md={10} lg={9} xl={6}>
          <h1 className="text-5xl font-bold text-white">Online Dubai Visa</h1>

          <div className="border-blue-600 border-8 mt-4 processing-time">
            <div className="grid grid-cols-2 bg-blue-600 border-2 border-white px-4 py-2">
              <div className="text-left">
                <h4 className="text-xl text-gray-800">Processing Time</h4>
                <h1 className="text-3xl font-bold ">Up to 72 hours</h1>
              </div>
              <div className="text-right">
                <h4 className="text-xl text-gray-800">Starting From</h4>
                <h1 className="text-3xl font-bold ">
                  <i className="fa fa-rupee-sign"></i> 3,999/-
                </h1>
              </div>
            </div>
          </div>
          </Col>
   
          
          </Row>
        </Container>
 
      
      </div>
    </>
  );
};

export default Hero;
