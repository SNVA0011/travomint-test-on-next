import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
const Bread = (props) => {
    return (
        <div className="dubaiback breadcrumb-classic p-0">
            <Container>
                <Row className="align-items-center text-center">
                    <Col xs={12}>
                      <h1 className="font-bold text-white mb-4">{props.title}</h1> 
                        <ul className="breadcrumb-st text-white text-center font-semibold">
                        {props.html} 
                        </ul> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bread