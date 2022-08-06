import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import TopNav from "./TopNav";
import Country from "./Country";

import logo from "../../public/Image/logo.png";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFighterJet,
  faSuitcase,
  faExchange,
  faGlobe,
  faHelicopter,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const SideNavs = (props) => {
  const navigate = useRouter();
  const [show, setside] = useState(false);
  const handleClose = () => setside(false);
  // UseSelector
  const { status, user_id, user_name, user_email, mobile } = useSelector(
    (state) => state.auth
  );

  const goonMytrip = () => {
    navigate.push("/mytrip");
  };

  return (
    <>
      <TopNav setside={setside} />
      <Offcanvas className="offcanvas-sidenav" show={show} onHide={handleClose}>
        <Offcanvas.Header className="text-orange-500" closeButton>
          <Offcanvas.Title>
            {" "}
            <Image alt="logo" src={logo} width={152} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pxm-tnf">
          <div className="body-offcanvas-h d-flex flex-column h-100">
            <div className="flex-grow-1">
              <Link href="/flights">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <FontAwesomeIcon
                    icon={faFighterJet}
                    onClick={() => props.setside(true)}
                  />
                  &nbsp;&nbsp; Flight
                </div>
              </Link>
              <a href="https://hotel.travomint.com/" target="_blank">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <FontAwesomeIcon
                    icon={faSuitcase}
                    onClick={() => props.setside(true)}
                  />
                  &nbsp;&nbsp;&nbsp; Hotels
                </div>
              </a>

              <a href="https://travomint.mozio.com/en-us/" target="_blank">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <FontAwesomeIcon
                    icon={faExchange}
                    onClick={() => props.setside(true)}
                  />
                  &nbsp;&nbsp;&nbsp; Transfer
                </div>
              </a>

              <Link href="/visa">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <FontAwesomeIcon icon="fa-brands fa-cc-visa" />
                  &nbsp;&nbsp;&nbsp; Visa
                </div>
              </Link>

              <Link href="/charter">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <FontAwesomeIcon
                    icon={faHelicopter}
                    onClick={() => props.setside(true)}
                  />
                  &nbsp;&nbsp;&nbsp; Charter Flights
                </div>
              </Link>

              <a href="http://tours.travomint.com/" target="_blank">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold  linknav-offset">
                  <i className="fas fa-globe-americas"></i>
                  &nbsp;&nbsp;&nbsp; Holiday
                </div>
              </a>
              <div className="px-8 py-2 -ml-4 text-sm  text-gray-600 font-sans font-semibold ">
                <hr />
              </div>
              {status === 1 && (
                <div
                  className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset"
                  onClick={() => goonMytrip()}
                >
                  <FontAwesomeIcon icon="fa-brands fa-wpforms" />
                  &nbsp;&nbsp;&nbsp; My Booking
                </div>
              )}

              <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                <i className="far fa-calendar-check"></i>
                &nbsp;&nbsp;&nbsp; Check In
              </div>
              <Link href="/contact">
                <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                  <i className="fas fa-headset"></i>
                  &nbsp;&nbsp;&nbsp; Support
                </div>
              </Link>

              <div className="px-8 py-2"></div>
            </div>

            <div className="mt-auto">
              <div className="d-md-none country-choose position-relative">
                <Country />
                <div className="px-8 py-2"></div>
              </div>

              {/* <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                <FontAwesomeIcon icon="fa-solid fa-gear" />
                &nbsp;&nbsp;&nbsp; Setting
              </div>

              <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                <i className="far fa-calendar-check"></i>
                &nbsp;&nbsp;&nbsp; Privacy Policy
              </div>

              <div className=" px-8 py-2 -ml-4 sidenavd text-sm  text-gray-600 font-sans font-semibold linknav-offset">
                <i className="fas fa-headset"></i>
                &nbsp;&nbsp;&nbsp; Feedback
              </div> 
                            <div className=" px-8 py-3 d-md-none"></div>

              */}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SideNavs;
