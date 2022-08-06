import React, { useState } from "react";
import logo from "../../public/Image/logo.png";
import cardIn from "../../public/Image/cardIn-logos.png";
import godaddy from "../../public/Image/godaddy.gif";
import footerBG from "../../public/Image/footer-bg2.png";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authCode, domain, testapi } from "../static/static";
import loader from "../../public/Image/load2.gif";
import Lottie from "react-lottie";
import Details from "../Animation/97203-loader.json";

const Footer = () => {
  const [emails, setEmails] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState({});
  const [button, setButton] = useState(true);
  const [buttonstatus, setButtonStatus] = useState("subscribe");

  const details = {
    loop: true,
    autoplay: true,
    animationData: Details,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function checkEmail(e) {
    setEmails(e.target.value);
    const regExmail =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,8}(.[a-z{0,8}])?/g;
    if (regExmail.test(emails)) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const RealTimeDate =
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getDate() +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  function subscribeNow() {
    setButtonStatus("load");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      date: RealTimeDate,
      emailId: emails,
      siteId: 6,
      status: "active",
      url: "www.travomint.com",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${testapi}/subscribe2?authcode=${authCode}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.baseResponse.messege == "success") {
          setButtonStatus("subscribed");
        }
        setButton(true);

        setStatus(result.baseResponse.messege);
        setData(result.response);
      })
      .catch((error) => console.log("error"));
  }

  return (
    <footer className="footer-classic overflow-hidden">
      <div className="text-black bg-gray-100 whytravomint">
        <Container>
          <span className="text-2xl font-bold mb-2 d-block">
            Why choose Travomint?
          </span>
          <p className="text-base font-medium mb-0 text-gray-500">
            Travomint.com, a leading travel portal with no third-party
            association, offers extraordinary deals and discounts on booking.
            You will get remarkable offers and coupon codes on flight tickets,
            making your flight ticket the cheapest on the lookout. By using{" "}
            <a href="https://www.Travomint.com">www.Travomint.com</a>, you will
            agree that Travomint is not accountable for any loss - direct or
            indirect. In case of queries, reach us directly at our Toll-Free
            Number.{" "}
          </p>
        </Container>
      </div>

      <div className="text-center text-gray-100  footer footer-set text-white">
        <Container className="footer-list-container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-12 col-xs-12 uilist-footer">
              <h5 className="footer-title-ul">About Travomint</h5>

              <ul className="d-flex  align-items-start  justify-content-start link-new m-0 mt-15  p-0 flex-column">
                <li>
                  <Link href="/about-us">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> About
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/#">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Career
                    </a>
                  </Link>
                </li> */}

                {/* <li>
                  <Link href="/#">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Client Testimonial
                    </a>
                  </Link>
                </li> */}

                {/* <li>
                  <Link href="/#">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Newsletter
                    </a>
                  </Link>
                </li> */}

                <li>
                  <Link href="/blog">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/media">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> Media
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/faq">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> Faq
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Contact
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/flights">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Airlines
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-xl-4 col-md-6 col-12 col-xs-12 uilist-footer">
              <h5 className="footer-title-ul">Legal</h5>

              <ul className="d-flex align-items-start justify-content-start link-new m-0 p-0  flex-column">
                <li>
                  <Link href="/privacy">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Privacy policy
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/#">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Cookies policy
                    </a>
                  </Link>
                </li> */}

                <li>
                  <Link href="/terms">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> Terms
                      & Condition
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <Link href="/#">
                    <a>
                      <FontAwesomeIcon icon="fa-solid fa-chevron-right" />{" "}
                      Connection Protection
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-xl-4 col-12 col-xs-12">
              <h5 className=" footer-title-ul">Connect With Us</h5>

              <div className="subscribe-footerbox">
                <input
                  type="text"
                  className="form-control input-news text-center"
                  placeholder="Email"
                  onChange={(e) => checkEmail(e)}
                />
                <div className="w-100">
                  <button
                    disabled={button}
                    className="btn btn-primary btn-block mt-2"
                    onClick={() => subscribeNow()}
                  >
                    {buttonstatus == "subscribe" ? (
                      <span className="mr-2">
                        Subscribe{" "}
                        <FontAwesomeIcon icon="fa-solid fa-paper-plane" />{" "}
                      </span>
                    ) : (
                      ""
                    )}
                    {buttonstatus == "load" ? (
                      <span>
                        {" "}
                        <Lottie options={details} height={40} width={460} />
                      </span>
                    ) : (
                      ""
                    )}
                    {buttonstatus == "subscribed" ? (
                      <span className="text-sm font-normal">
                        Thanks For Subscribing <b>Travomint</b>
                      </span>
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>

              <div className="footer-social_media">
                <ul className="p-0 m-0">
                  <li className="d-inline-block align-top">
                    <a
                      href="https://www.facebook.com/Travomint-596172133907937/"
                      target="_blank"
                      className="facebook"
                    >
                      <i className="fab fa-facebook"></i>{" "}
                    </a>
                  </li>
                  <li className="d-inline-block align-top">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/travomint/"
                      className="instagram"
                    >
                      <i className="fab fa-instagram"></i>{" "}
                    </a>
                  </li>
                  <li className="d-inline-block align-top">
                    <a
                      target="_blank"
                      href="https://twitter.com/travomint1"
                      className="twitter"
                    >
                      <i className="fab fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li className="d-inline-block align-top">
                    <a
                      target="_blank"
                      href="https://www.pinterest.com/travomintonline/"
                      className="pinterest"
                    >
                      <i className="fab fa-pinterest"></i>{" "}
                    </a>
                  </li>
                  <li className="d-inline-block align-top">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/travomint/"
                      className="linkedin"
                    >
                      <i className="fab fa-linkedin"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <Row className="align-items-center">
            <Col xs={12} lg={4}>
              <div className="footer-logo">
                <Image
                  alt="logo"
                  src={logo}
                  className=" inline-block relative -top-1"
                ></Image>
              </div>
              <span className="text-sm ">
                Copyright © 2021. All rights reseved.{" "}
              </span>
            </Col>

            <Col xs={12} lg={4} className="secure-colfooter">
              <div className="d-flex align-items-center justify-content-center">
                <div className="px-1">
                  <Image
                    alt="logo"
                    src={cardIn}
                    className="w-1/2 inline-block"
                  ></Image>
                </div>
                <div className="px-1">
                  <Image
                    alt="logo"
                    src={godaddy}
                    className="w-1/3 inline-block"
                  ></Image>
                </div>
              </div>
              <span className="text-sm">
                We assure safe and secure transactions through powerful Godaddy
                Secure Seal
              </span>
            </Col>

            <Col xs={12} lg={4}>
              <div className="py-4 ">
                <span className="text-sm">
                  {" "}
                  (DBA of SNVA Traveltech Pvt Ltd)
                </span>
              </div>
            </Col>
          </Row>

          <hr />

          <div>
            <p className="phone-footernumber">
              <b>
                <FontAwesomeIcon icon="fa-solid fa-phone-volume" />{" "}
                <span className="mx-1">Number-</span>
              </b>
              <a href="tel:+91-8010000200">+91-8010000200</a> or, simply
              <div className="clearfix d-md-none mt-2"></div>
              <b className="ml-4">
                <FontAwesomeIcon icon="fa-solid fa-envelope" />{" "}
                <span className="mx-1">Email</span>
              </b>{" "}
              at <a href="mailto:cs@travomint.com">cs@travomint.com</a>{" "}
            </p>
          </div>
        </Container>
        <div className="footer-bg-svg pt-30 d-flex align-items-end mt-1">
          <div className="footer-bg-svginner w-100">
            <Image alt="logo" src={footerBG} layout="fill"></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
