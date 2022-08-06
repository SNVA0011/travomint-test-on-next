import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiURl, authCode, skyscanner, Skyscannermeta, testapi } from "../../static/static";
import logo from "../../../public/Image/logo.png";
import logosi from "../../../public/Image/logo-t.png";
import { Route } from "react-router";
import axios from "axios";
import moment from "moment";
import { AllData } from "../../Redux/ActionType";
import { useDispatch } from "react-redux";
import Image from "next/image";
const Skyscanner = () => {
  const [signIn, toggle] = React.useState(true);
  // const int = data.CountryCode !== "IN" ? "false" : "true";
  // const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  //---------------------------- state------------------------------
  // const [Result, setResult] = useState([]);
  // const [AirResult, setAirResult] = useState([]);
  // const [Load, setLoad] = useState(false);

  // ----------------------------Reduux-----------------------------------
  // const data = useSelector(SelectedData);

  // ----------------------------Reduux-----------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // // const [searchParams] = useSearchParams();

  const [apiData, setApiData] = useState();
  const [error, setError] = useState("");
  const [resObj, setResObj] = useState("");
  const SkyscannerApi = async () => {
    var t = window.location.href;
    var st = t.split("?")[1];

    var tttt = st.split("&");
    var dd = {};
    for (var i = 0; i < tttt.length; i++) {
      dd[tttt[i].split("=")[0]] = tttt[i].split("=")[1];
    }

    var data = JSON.stringify({
      searchId: dd["key"],
    });

    let words = dd["key"];
    let res = words.split(":")[3];

    var apiURlbase = "";

    if (res === "INR") {
      apiURlbase =
       " https://sky.travomint.com/search/viewsearch?authcode=Trav3103s987876";
    } else {
      apiURlbase =
        "https://api.travomint.com/search/viewsearch?authcode=Trav3103s987876";
    }

    var config = {
      method: "post",
      url: apiURlbase,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const apidatasky = await axios(config);
    const dataapisky = await apidatasky;
    if (dataapisky) {
      setApiData(dataapisky.data);
      var objdata = "";

      if (dataapisky) {
        var Responce = dataapisky.data.response.map((item) =>
          item.traveloesSearch.map((items) => items)
        );

        objdata = Responce[0][0];
      }

      if (objdata) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const fromCity = objdata.froCity.split(")")[0];
        const sllitfromCity = fromCity.split("(")[1];

        //to city

        const toCity = objdata.toCity.split(")")[0];
        const sllittoCity = toCity.split("(")[1];

        // DepDate
        const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
        const retDate = moment(objdata.retDate).format("MM/DD/YYYY");

        const conditionsegments =
          objdata.tripType === 1
            ? [
                {
                  originAirport: sllitfromCity,
                  destinationAirport: sllittoCity,
                  travelDate: depDate,
                },
              ]
            : [
                {
                  originAirport: sllitfromCity,
                  destinationAirport: sllittoCity,
                  travelDate: depDate,
                },
                {
                  originAirport: sllittoCity,
                  destinationAirport: sllitfromCity,
                  travelDate: retDate,
                },
              ];

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          searchID: objdata.searchId,
          client: 2,
          segment: conditionsegments,
          searchDirectFlight: false,
          flexibleSearch: false,
          tripType: objdata.tripType,
          adults: objdata.adults,
          child: objdata.child,
          infants: objdata.infants,
          infantsWs: objdata.infantsWs,
          cabinType: objdata.cabinType,
          airline: objdata.airline,
          currencyCode: objdata.currencyCode,
          siteId: objdata.siteId,
          source: objdata.source,
          media: objdata.media,
          sID: "",
          rID: "",
          locale: "en",
          isNearBy: false,
          limit: 300,
          pageValue: "search",
          media: objdata.media,
          media: objdata.media,
          userIP: objdata.userIp,
          serverIP: objdata.serverIp,
          device: objdata.device,
          browser: objdata.browser,
          userCountry: "IN",
          userSearch: true,
        });
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const resData = await fetch(
          `${skyscanner}/Flights/GetFlightResult?authcode=${authCode}`,
          requestOptions
        );
        const dataRes = await resData.json();
        if (dataRes) {
          // dispatch({
          //   type: AllData,
          //   payload: {
          //     AllFlight_data: dataRes,
          //     SelectedData: dataRes.flightResult[0],
          //     inBoundData: {},
          //     Objdata: objdata,
          //   },
          // });
          navigate("/FareAvailabity", {
            state: {
              flight_data: dataRes.flightResult[0],
              AllFlight_Data: dataRes,
              Objdata: objdata,
            },
          });
        } else {
          // console.log(" datares err");
        }
      } else {
        // console.log(" datares err");
      }
    } else {
      // console.log("SkyScanner err");
    }
    // .then(function (response) {

    //   if (response.data) {
    //     setApiData(response.data);
    //     responseData();
    //   } else {

    //   }
    // })
    // .catch(function (error) {

    // });
  };

  // const responseData = async () => {

  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   var raw = JSON.stringify({
  //     baseResponse: apiData.baseResponse,
  //     response: apiData.response,
  //     bookingId: apiData.bookingId,
  //   });
  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   const resData = await fetch(
  //     "http://sky.travomint.com/Flights/GetFlightResult?authcode=Trav3103s987876",
  //     requestOptions
  //   );
  //   const dataRes = await resData.json();
  //   if (dataRes) {

  //   } else {

  //   }
  //   // .then((response) => response.json())

  // };

  var objdata = "";

  if (apiData) {
    var Responce = apiData.response.map((item) =>
      item.traveloesSearch.map((items) => items)
    );
    // setResObj(Responce[0][0]);
    objdata = Responce[0][0];
  }

  const ApiFlightResult = () => {
    const fromCity = objdata.froCity.split(")")[0];
    const sllitfromCity = fromCity.split("(")[1];

    //to city

    const toCity = objdata.froCity.split(")")[0];
    const sllittoCity = toCity.split("(")[1];

    // DepDate
    const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
    const retDate = moment(objdata.retDate).format("MM/DD/YYYY");

    const conditionsegments =
      objdata.tripType === 1
        ? [
            {
              originAirport: sllitfromCity,
              destinationAirport: sllittoCity,
              travelDate: depDate,
            },
          ]
        : [
            {
              originAirport: sllitfromCity,
              destinationAirport: sllittoCity,
              travelDate: depDate,
            },
            {
              originAirport: sllittoCity,
              destinationAirport: sllitfromCity,
              travelDate: retDate,
            },
          ];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchID: objdata.searchId,
      client: 2,
      segment: conditionsegments,
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: objdata.tripType,
      adults: objdata.adults,
      child: objdata.child,
      infants: objdata.infants,
      infantsWs: objdata.infantsWs,
      cabinType: objdata.cabinType,
      airline: objdata.airline,
      currencyCode: objdata.currencyCode,
      siteId: objdata.siteId,
      source: objdata.source,
      media: objdata.media,
      sID: "",
      rID: "",
      locale: "en",
      isNearBy: false,
      limit: 300,
      pageValue: "search",
      media: objdata.media,
      media: objdata.media,
      userIP: objdata.userIp,
      serverIP: objdata.serverIp,
      device: objdata.device,
      browser: objdata.browser,
      userCountry: "IN",
      userSearch: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${testapi}/Flights/GetFlightResult?authcode=${authCode}`,
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log("result"))
      // .catch((error) => console.log("error"));
  };

  useEffect(() => {
    //  getFlightResult()
    SkyscannerApi();
  }, []);

  return (
    <>
      {error === "SEE_OTHER" ? (
        <div className="height_100vh d-flex align-items-center justify-content-center">
          <div className="">
            <div className="row  col- d-flex align-items-center  justify-content-center bg-white">
              <div className="col-6 text-center">
                <Image
                  alt="logo"
                  src={logo}
                  className="err_logo-custom mb-4"
                  width="80%"
                />
                <div>
                  <Image
                    alt="logo"
                    // src={Flight_Not_Found}
                    className="flight_not_found_pic"
                  />
                </div>
                <div>
                  <h2>Flight Not Found</h2>
                </div>
                <a href={`https://www.travomint.com/in`}>
                  <div className="go_back_btn">
                    <Button>Go To Home</Button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="Travomint-wrapper d-flex align-items-center justify-content-center">
          <div id="container">
            <div id="left">
              <h1 id="welcome">Travomint</h1>
              <p id="lorem">We are travomint!</p>
            </div>
            <div id="right">
              <Image alt="logo" src={logosi} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Skyscanner;
