
import React, { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

const FareAvailabity = () => {
  const Selected_Fligt_Data = useLocation();
  const navigate = useNavigate();
  const All_Flight_Data = Selected_Fligt_Data.state.AllFlight_Data;
  const Flight_Data = Selected_Fligt_Data.state.flight_data;
  const objdata = Selected_Fligt_Data.state.Objdata;


  //   switch (objdata) {
  //     case objdata.source === "skyscanner" && objdata.currencyCode === "INR":
  //       navigate("/flight/checkout", {
  //         state: {
  //           flight_data: Flight_Data,
  //           AllFlight_Data: All_Flight_Data,
  //           Objdata: objdata,
  //         },
  //       });

  //     case objdata.source === "momondo" && objdata.currencyCode === "INR":
  //       navigate("/flight/checkout", {
  //         state: {
  //           flight_data: Flight_Data,
  //           AllFlight_Data: All_Flight_Data,
  //           Objdata: objdata,
  //         },
  //       });

  //     default:

  //   }

  useEffect(() => {
    if (objdata.source === "skyscanner" && objdata.currencyCode === "INR") {
      navigate("/flight/checkout", {
        state: {
          flight_data: Flight_Data,
          AllFlight_Data: All_Flight_Data,
          Objdata: objdata,
        },
      });
    } else if (objdata.source === "momondoInd" && objdata.currencyCode === "INR") {
      navigate("/flight/checkout", {
        state: {
          flight_data: Flight_Data,
          AllFlight_Data: All_Flight_Data,
          Objdata: objdata,
        },
      });
    }
  }, []);
  return <div></div>;
};


export default FareAvailabity;
