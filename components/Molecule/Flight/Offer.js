import React from "react";
import googlePlay from "../../../public/Image/google-play.png";
import apple from "../../../public/Image/apple.png";
import downloadApp from "../../../public/Image/download-app.jpg";
import QrAnd from "../../../public/Image/android-travomint.svg";
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Offer = () => {
    return (
        <>

            <Container className="spacing-b downloadApp download-superapp">
              
                <Row className="align-items-center">
                        <Col xs={12} xl={6}>
                            <div className="fooTopSct">
                            <h2 className="font-700 text-black">Download Travomint App Now!</h2>
                            <p className="text-black">Get Flight Booking super app, join 100 Million+ happy travellers!</p>

                            <span className="subcribe_msg-area">
                            <div className="input-group input-group-lg"> 
                                <input type="phone" name="" id="" className="form-control" placeholder="Enter Your Phone Number"/>
                                <span className="input-group-btn">
                                <input type="submit" name="submit"  value="Get App link"  className="btn btn-default"/>
                                </span>
                            </div> 
                            </span> 
                            <p className="usecode">Use code <span>TRAVO1000</span> and get upto <span>Rs 1000 off</span> on your first domestic flight booking</p>
                            </div>
                        </Col>
                        <Col xs={12} xl={1}></Col>

                        <Col  xs={12} xl={5} className="app-btn">
                            <h4 className="text-center">More Way to Download travomint App</h4>
                            <ul className="p-0 m-0">

                                <li className="qr-code row">
                                    <div className="col-sm-6 col-12 qr-code-img text-right">


                                        <Image alt="props" src={QrAnd} width={182} height={182}></Image>
                                    </div>
                                    <div className="col-sm-6 col-12 started">
                                        <div className="download android">
                                            <div className="d-flex">
                                                <div className="appimg pr-4">
                                                    <Image src={googlePlay} alt="Google Play" width={40} height={40} />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="df">Download from</span>
                                                    <span className="dfn">Google Play</span>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="download apple">
                                            <div className="d-flex">
                                                <div className="appimg pr-4">
                                                    <Image src={apple} alt="apple ios" width={40} height={40} />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="df">Download from</span>
                                                    <span className="dfn">App Store</span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </li>



                            </ul>
                        </Col>


                    </Row>
            </Container>







        </>
    )
}

export default Offer;