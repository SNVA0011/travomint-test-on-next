import React from "react";
import c1 from "../../../public/Image/c1.png";
import c2 from "../../../public/Image/c2.png";
import c3 from "../../../public/Image/c3.png";
import c4 from "../../../public/Image/c4.gif";
import c5 from "../../../public/Image/c5.png";
import c6 from "../../../public/Image/c6.png";
import c7 from "../../../public/Image/c7.png";
import iata from "../../../public/Image/iata.png";
import a2 from "../../../public/Image/a2.jpg";
import a3 from "../../../public/Image/a3.png";
import a4 from "../../../public/Image/sabre.png";
import a5 from "../../../public/Image/a5.png";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Partner = () => {
    return (
        <div className="our-deals we-woredwithtop">
            <Container>
                <div className="design-one">

                    {/* <span className="text-center font-medium text-gray-500 mb-2 caveat-font">We work with</span> */}
                    <p className="text-left text-2xl lg:text-4xl font-bold rounded-xl text-black inline-block w-100 text-center weworkwith">We work with world top connection for flight</p>

                    <div className="w-100">
                        <Row className="design-one">
                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={iata} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={a4} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={a3} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={a5} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={a2} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={c1} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={c2} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={c3} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={c4} />
                                </div>
                            </Col>

                            <Col xs={6} md={3} xl={2} xxl>
                                <div className="col-md-4cu d-flex align-items-center justify-content-center flex-column">
                                    <Image alt="props" src={c5} />
                                </div>
                            </Col>

                        </Row>
                    </div>

                </div>
            </Container>

        </div>
    )
};
export default Partner;