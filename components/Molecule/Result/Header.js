import React from "react";
import logo from "../../../public/Image/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:px-28 px-2 bg-gray-100 pb-1 pt-3 shadow ">
        <div className="lg:px-10 px-2">
          <Link to="/">
            <img src={logo} className=" lg:w-40" />
          </Link>
        </div>
        <div className="text-right py-2">
          <span className="text-black">
            <i className="fa fa-phone-alt"></i> &nbsp; +91-8010000200
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
