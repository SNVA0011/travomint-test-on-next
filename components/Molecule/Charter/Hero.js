import React, { useState } from "react";
import back from "../../../public/Image/dubaibanner.jpg";

const Hero = () => {

       
  return (
    <>
      <div
        className="grid grid-cols-6 px-80 charter text-center"
        style={{
          backgroundSize: "100%",
        }}
      >
        <div className="py-40 col-span-3 ">
        
          <br />

          <div className=" ">
            <div className="grid grid-cols-1  border-2 border-white text-white px-4 py-2">
              <div className="text-left text-left">
                <h1 className="text-4xl mt-2">Charter Plane</h1>
                <p>Starting from Rs 6.22 L</p>
              </div>
            </div>
          </div>
        </div>

<div className="col-span-1">

</div>
      
      </div>
    </>
  );
};

export default Hero;
