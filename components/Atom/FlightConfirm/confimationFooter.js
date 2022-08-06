import React from "react";
import pending from "../../../public/Image/pending.png";
import logo from "../../../public/Image/logo.png";
import Image from "next/image";

const ConfirmationFooter = () => {
  return (
    <div className="footerConfirm">
      <div className="container ">
        <div className="row p-4">
          <div className="col-0 col-sm-0 col-md-3  col-lg-4"></div>
          <div className="col-12 col-sm-12 col-md-6   col-lg-4">
            <p className="text-center  thanks">Thank you for choosing</p>
            <div className="confirmFooterImage">
              <Image alt="logo" src={logo} width="50%" />
            </div>
            <div className="footerConfirmation">
              <p className="text-primary">
                Terms and Conditions Privacy Policy
              </p>
              <p>Copyright Ⓒ 2018 Travomint. All Rights Reserved.</p>
              <p>For Assistance, Please Contact Travomint</p>
              <p>Via telephone : +91-8010000200</p>
              <p>
                or Via E-Mail : <b className="text-primary">cs@Travomint.com</b>{" "}
                24x7.
              </p>
            </div>
          </div>
          <div className=" col-0 col-sm-0 col-md-3 col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationFooter;
