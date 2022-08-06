import React from "react";
import pending from "../../../public/Image/pending.png";
import logo from "../../../public/Image/logo.png";
import Image from "next/image";

const ConfirmationHeader = (props) => {
  const { bookingdata } = props;
  return (
    <div className="headerconfirmation">
      <div className="container ">
        <div className="row p-4">
          <div className="col-4">
            <Image alt="logo" src={logo} />
          </div>
          <div className="col-4">
            <p className="text-center">
              Customer Service Number : 91-8010000200
            </p>
          </div>
          <div className="col-4">
            <h4>{bookingdata.bookingStatus}</h4>
            {/* <Image alt="logo" src={pending} className="pending" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationHeader;
