import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Image/logo.png";
import support from "../../public/Image/flight-support.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FlightHeader = (props) => {
  return (
    <>
      <header className="header-classic flight">
        <div className="container">
          <nav className=" navbar navbar-expand-lg navbar-dark bg-unique p-0">
            <div className="navbar-brand">
              <Link href="/">
                <a className="crsrpointer">
                  <Image src={logo} className="" width="150" />
                </a>
              </Link>
            </div>
            <div className="ml-auto">
              <b className="d-none d-md-inline-block for-undeals text-sm align-middle mr-3 font-600">For Unpublished Deals</b>
              <a href="tel:+91-8010000200" target="_blank" className="btn button-infant headset-iconcall align-middle video-play-button">
                <span className="mr-2 d-inline-block concall-img align-middle">
                <FontAwesomeIcon icon="fa-solid fa-headset" className="img-inf"/> 
                </span>
                <span className="d-inline-block align-middle num">+91-8010000200</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="headerflight-empty w-100"></div>
    </>
  );
};

export default FlightHeader;
