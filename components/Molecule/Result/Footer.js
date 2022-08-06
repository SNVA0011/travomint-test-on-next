import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";
import { SelectedData } from "../../Feature/Action";
import { authCode, domain, siteID, testapi } from "../../static/static";
import loaders from "../../../public/Image/load.gif";
import { ModalBody } from "react-bootstrap";
import moment from "moment";
import { useRouter } from "next/router";
import { AllData } from "../../Redux/ActionType";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

const Footer = (props) => {
  const navigate = useRouter();
  const dispatch = useDispatch();
  const { all_data, second, first } = props;
  const [Result, setResult] = useState([]);
  const [AirResult, setAirResult] = useState([]);
  const [show1, setShow1] = useState(false);
  const [trans, setTrans] = useState(0);
  const [loading, setLoading] = useState(false);
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const departureOut = all_data.flightResult.filter((items) => items.outBound);
  const returnIn = all_data.flightResult.filter((items) => items.inBound);

  // ------------------------------Moadaal1-------------------------
  const handleClose1 = () => setShow1(false);
  function openModal(e) {
    setShow1(true);
    setTrans(e);
  }

  // ------------------------------Moadaal1-------------------------
  // ----------------------------Reduux-----------------------------------
  const searchdata = useSelector(SelectedData);
  // ----------------------------Reduux-----------------------------------

  const fareCheck = async () => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var outFareObj;
    var inioutFareObj;
    if (first) {
      const outFare = {
        outFare: first.fare,
      };
      outFareObj = { ...first, ...outFare };
    } else {
      const outFare = {
        outFare: departureOut[0].fare,
      };
      inioutFareObj = { ...departureOut[0], ...outFare };
    }

    var raw = JSON.stringify({
      flightResult: outFareObj ? outFareObj : inioutFareObj,
      adults: all_data.adults,
      child: all_data.child,
      infants: all_data.infants,
      infantsWs: all_data.infantsWs,
      currencyCode: currency_Name_rd.currency_Name,
      siteID: siteID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const apiCheckFare = await fetch(
      `${testapi}/Flights/GetFlightFareRule?authcode=${authCode}`,
      requestOptions
    );
    const alires = await apiCheckFare.json();

    var allOutBound_data;
    if (first) {
      const { fare, ...rest } = first;

      const res_fare = {
        fare: alires.fare,
      };

      allOutBound_data = { ...rest, ...res_fare };
    } else {
      const { fare, ...rest } = departureOut[0];

      const res_fare = {
        fare: alires.fare,
      };

      allOutBound_data = { ...rest, ...res_fare };
    }

    if (alires) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var inFareObj;
      var iniinFareObj;
      if (second) {
        const inFare = {
          inFare: second.fare,
        };
        inFareObj = { ...second, ...inFare };
      } else {
        const inFare = {
          inFare: returnIn[0].fare,
        };
        iniinFareObj = { ...returnIn[0], ...inFare };
      }

      var raw = JSON.stringify({
        flightResult: inFareObj ? inFareObj : iniinFareObj,
        adults: all_data.adults,
        child: all_data.child,
        infants: all_data.infants,
        infantsWs: all_data.infantsWs,
        currencyCode: currency_Name_rd.currency_Name,
        siteID: siteID,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const apiInBoundCheckFare = await fetch(
        `${testapi}/Flights/GetFlightFareRule?authcode=${authCode}`,
        requestOptions
      );
      const InBoundCheckFare = await apiInBoundCheckFare.json();

      var allInBound_data;
      if (second) {
        const { fare, ...rest } = second;

        const res_fare_in = {
          fare: InBoundCheckFare.fare,
        };

        allInBound_data = { ...rest, ...res_fare_in };
      } else {
        const { fare, ...rest } = returnIn[0];

        const res_fare_in = {
          fare: InBoundCheckFare.fare,
        };

        allInBound_data = { ...rest, ...res_fare_in };
      }

      if (
        InBoundCheckFare.priceChange === false ||
        InBoundCheckFare.priceChange === true
      ) {
        dispatch({
          type: AllData,
          payload: {
            AllFlight_data: all_data,
            SelectedDatas: allOutBound_data,
            inBoundData: allInBound_data,
            Objdata: searchdata,
          },
        });
        navigate.push(
          {
            pathname: "/flight/checkout",
            query: {
              flight_data: JSON.stringify(allOutBound_data),
              AllFlight_Data: JSON.stringify(all_data),
            },
          },
          "/flight/checkout"
        );
        // inBoundDATA;
      }
    } else {
    }
  };

  const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? "AM" : "PM";
    const hours = +sHours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  return (
    <>
      <div>
        <div className="z-10 flightsdetails-foot  text-white fixed w-full bottom-0">
          <Container>
            <Row className="align-items-center">
              {first === undefined ? (
                <Col className="d-flex align-items-center justify-content-between first-rb flex-column flex-md-row">
                  <div className="refimgmbox-dfl-1">
                    {/* <hr className="lg:hidden block m-0"/> */}
                    <h4 className="text-base mb-1 font-semibold tracking-wide">
                      Departure
                    </h4>

                    <div className="d-flex refimg-mbox-dfl">
                      <div>
                        <img
                          src={`https://www.travomint.com/resources/images/airline-logo/${departureOut[0].airline}.png`}
                          className="refimg-mbox"
                        />
                      </div>

                      <div className="pt-1">
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {moment(
                            departureOut[0].outBound[0].depDate.split("T")[0]
                          ).format("DD MMM")}
                          {" , "}
                          {moment(
                            departureOut[0].outBound[
                              departureOut[0].outBound.length - 1
                            ].reachDate.split("T")[0]
                          ).format("DD MMM, YYYY")}
                        </p>
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {`${convertFrom24To12Format(
                            departureOut[0].outBound[0].depDate
                              .split("T")[1]
                              .substring(5, 0)
                          )} - ${convertFrom24To12Format(
                            departureOut[0].outBound[
                              departureOut[0].outBound.length - 1
                            ].reachDate
                              .split("T")[1]
                              .substring(5, 0)
                          )}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left px-2 refimgmbox-dfl-2">
                    <h4 className="text-xs mb-0 font-semibold">
                      <span>
                        <ConvertMinsToTime
                          data={departureOut[0].outBound[0].eft}
                        />
                      </span>{" "}
                    </h4>
                    <span className="text-xs">
                      {`${departureOut[0].outBound[0].fromAirport} - ${
                        departureOut[0].outBound[
                          departureOut[0].outBound.length - 1
                        ].toAirport
                      }`}
                    </span>
                    <br />
                    <span className="text-xs">
                      {`${departureOut[0].outBound.map(
                        (item) => item.airline
                      )} - ${departureOut[0].outBound.map(
                        (item) => item.flightNo
                      )}`}
                    </span>
                  </div>
                  <div className="text-left py-2 refimgmbox-dfl-3">
                    <p className="text-xs m-0">
                      From &nbsp;
                      <span className="text-base">
                        {currency_Name_rd.currency_Logo}{" "}
                        {departureOut[0].fare.grandTotal}
                      </span>
                    </p>
                  </div>
                </Col>
              ) : (
                <Col className="d-flex align-items-center justify-content-between first-rb flex-column flex-md-row">
                  <div className="refimgmbox-dfl-4">
                    {/* <hr className="lg:hidden block m-0"/> */}
                    <h4 className="text-base mb-1 font-semibold tracking-wide">
                      Departure
                    </h4>

                    <div className="d-flex refimg-mbox-dfl">
                      <div>
                        <img
                          src={`https://www.travomint.com/resources/images/airline-logo/${first.airline}.png`}
                          className="refimg-mbox"
                        />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {moment(
                            first.outBound[0].depDate.split("T")[0]
                          ).format("DD MMM")}
                          {" , "}
                          {moment(
                            first.outBound[
                              first.outBound.length - 1
                            ].reachDate.split("T")[0]
                          ).format("DD MMM, YYYY")}
                        </p>
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {`${convertFrom24To12Format(
                            first.outBound[0].depDate
                              .split("T")[1]
                              .substring(5, 0)
                          )} - ${convertFrom24To12Format(
                            first.outBound[first.outBound.length - 1].reachDate
                              .split("T")[1]
                              .substring(5, 0)
                          )}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left px-2 refimgmbox-dfl-5">
                    <h4 className="text-xs mb-0 font-semibold">
                      <span>
                        <ConvertMinsToTime data={first.outBound[0].eft} />
                      </span>{" "}
                    </h4>
                    <span className="text-xs">
                      {`${first.outBound[0].fromAirport} - ${
                        first.outBound[first.outBound.length - 1].toAirport
                      }`}
                    </span>
                    <br />
                    <span className="text-xs">
                      {`${first.outBound.map(
                        (item) => item.airline
                      )} - ${first.outBound.map((item) => item.flightNo)}`}
                    </span>
                  </div>
                  <div className="text-left py-2 refimgmbox-dfl-6">
                    <p className="text-xs m-0">
                      From &nbsp;
                      <span className="text-base">
                        {currency_Name_rd.currency_Logo} {first.fare.grandTotal}
                      </span>
                    </p>
                  </div>
                </Col>
              )}

              {/* // Second */}
              {second === undefined ? (
                <Col className="d-flex align-items-center justify-content-between first-rb flex-column flex-md-row">
                  <div className="refimgmbox-dfl-7">
                    <h4 className="text-base mb-1 font-semibold tracking-wide">
                      Return
                    </h4>

                    <div className="d-flex refimg-mbox-dfl">
                      <div>
                        <img
                          src={`https://www.travomint.com/resources/images/airline-logo/${returnIn[0].airline}.png`}
                          className="refimg-mbox"
                        />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {moment(
                            returnIn[0].inBound[0].depDate.split("T")[0]
                          ).format("DD MMM")}
                          {" , "}
                          {moment(
                            returnIn[0].inBound[
                              returnIn[0].inBound.length - 1
                            ].reachDate.split("T")[0]
                          ).format("DD MMM, YYYY")}
                        </p>
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {`${convertFrom24To12Format(
                            returnIn[0].inBound[0].depDate
                              .split("T")[1]
                              .substring(5, 0)
                          )} - ${convertFrom24To12Format(
                            returnIn[0].inBound[
                              returnIn[0].inBound.length - 1
                            ].reachDate
                              .split("T")[1]
                              .substring(5, 0)
                          )}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left px-2 refimgmbox-dfl-8">
                    <h4 className="text-xs mb-0 font-semibold">
                      <span>
                        <ConvertMinsToTime data={returnIn[0].inBound[0].eft} />
                      </span>{" "}
                    </h4>
                    <span className="text-xs">
                      {`${returnIn[0].inBound[0].fromAirport} - ${
                        returnIn[0].inBound[returnIn[0].inBound.length - 1]
                          .toAirport
                      }`}
                    </span>
                    <br />
                    <span className="text-xs">
                      {`${returnIn[0].inBound.map(
                        (item) => item.airline
                      )} - ${returnIn[0].inBound.map((item) => item.flightNo)}`}
                    </span>
                  </div>
                  <div className="text-left pb-1 refimgmbox-dfl-9">
                    <p className="text-xs m-0">
                      To &nbsp;
                      <span className="text-base">
                        {" "}
                        {`${currency_Name_rd.currency_Logo} ${returnIn[0].fare.grandTotal}`}
                      </span>
                    </p>
                  </div>
                </Col>
              ) : (
                <Col className="d-flex align-items-center justify-content-between first-rb flex-column flex-md-row">
                  <div className="refimgmbox-dfl-10">
                    <h4 className="text-base mb-1 font-semibold tracking-wide">
                      Return
                    </h4>

                    <div className="d-flex refimg-mbox-dfl">
                      <div>
                        <img
                          src={`https://www.travomint.com/resources/images/airline-logo/${second.airline}.png`}
                          className="refimg-mbox"
                        />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {/* {second.length == 0
                    ? ""
                    : second.inBound[0].depDate.slice(0, 10)} */}
                          {moment(
                            second.inBound[0].depDate.split("T")[0]
                          ).format("DD MMM")}
                          {" , "}
                          {moment(
                            second.inBound[
                              second.inBound.length - 1
                            ].reachDate.split("T")[0]
                          ).format("DD MMM, YYYY")}
                        </p>
                        <p className="text-xs font-semibold mt-0 mb-1">
                          {/* {second.length == 0
                    ? ""
                    : second.inBound[0].depDate.slice(11, 13) +
                      ":" +
                      second.inBound[0].depDate.slice(14, 16)}
                  AM -{" "} */}
                          {/* {second.length == 0
                    ? ""
                    : second.inBound[0].reachDate.slice(11, 13) +
                      ":" +
                      second.inBound[0].reachDate.slice(14, 16)}{" "}
                  PM */}
                          {`${convertFrom24To12Format(
                            second.inBound[0].depDate
                              .split("T")[1]
                              .substring(5, 0)
                          )} - ${convertFrom24To12Format(
                            second.inBound[second.inBound.length - 1].reachDate
                              .split("T")[1]
                              .substring(5, 0)
                          )}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left px-2 refimgmbox-dfl-11">
                    <h4 className="text-xs mb-0 font-semibold">
                      <span>
                        <ConvertMinsToTime data={second.inBound[0].eft} />
                        {/* {(second.length == 0
                      ? ""
                      : second.inBound[0].reachDate.slice(11, 13)) -
                      (second.length == 0
                        ? ""
                        : second.inBound[0].depDate.slice(11, 13))}{" "}
                    hrs{" "}
                    {(second.length == 0
                      ? ""
                      : second.inBound[0].reachDate.slice(14, 16)) -
                      (second.length == 0
                        ? ""
                        : second.inBound[0].depDate.slice(14, 16))}{" "}
                    mins{" "} */}
                      </span>{" "}
                    </h4>
                    <span className="text-xs">
                      {/* {second.length == 0 ? "" : second.inBound[0].fromAirport} -{" "}
                  {second.length == 0 ? "" : second.inBound[0].toAirport} */}
                      <span className="text-base">
                        {`${second.inBound[0].fromAirport} - ${
                          second.inBound[second.inBound.length - 1].toAirport
                        }`}
                      </span>
                    </span>
                    <br />
                    <span className="text-xs">
                      {/* {second.length == 0 ? "" : second.airline} -{" "}
                  {second.length == 0 ? "" : second.inBound[0].flightNo} */}
                      <span className="text-base">
                        {`${second.inBound.map(
                          (item) => item.airline
                        )} - ${second.inBound.map((item) => item.flightNo)}`}
                      </span>
                    </span>
                  </div>
                  <div className="text-left py-2 refimgmbox-dfl-12">
                    <p className="text-xs m-0">
                      To &nbsp;
                      <span className="text-xs">
                        {/* {second.length == 0 ? "" : second.fare.grandTotal} */}
                        {/* <sup>.00</sup> */}

                        <span className="text-base">
                          {`${currency_Name_rd.currency_Logo} ${second.fare.grandTotal}`}
                        </span>
                      </span>
                    </p>
                  </div>
                </Col>
              )}

              {first === undefined || second === undefined ? (
                <>
                  <Col className="d-md-none text-center">
                    <div class="refimgmbox-dfl-1">
                      <h4 class="text-base mb-1 font-semibold tracking-wide">
                        Total
                      </h4>
                    </div>
                    <div class="text-center pb-1 refimgmbox-dfl-3">
                      <p class="text-xs m-0">
                        <span class="text-base text-center">
                          {currency_Name_rd.currency_Logo}
                          <span className="text-base">
                            {" "}
                            {(
                              departureOut[0].fare.grandTotal +
                              returnIn[0].fare.grandTotal
                            ).toFixed(2, 0)}
                          </span>{" "}
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                  >
                    <div className="text-center text-xl-right py-1 text-xs w-100">
                      {/* <hr className="lg:hidden block m-0"/> */}
                      <span className="d-none d-md-inline-block align-middle">
                        Total {currency_Name_rd.currency_Logo}
                        <span className="text-base">
                          {" "}
                          {(
                            departureOut[0].fare.grandTotal +
                            returnIn[0].fare.grandTotal
                          ).toFixed(2, 0)}
                        </span>{" "}
                      </span>
                      <button
                        className="btn btn-siteorange done-vel farecheck-btn "
                        // onClick={(e) => openModal(AirResult.resultID)}
                        onClick={(e) => fareCheck()}
                      >
                        Book Now
                      </button>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="d-md-none text-center">
                    <div class="refimgmbox-dfl-1">
                      <h4 class="text-base mb-1 font-semibold tracking-wide">
                        Total
                      </h4>
                    </div>
                    <div class="text-center pb-1 refimgmbox-dfl-3">
                      <p class="text-xs m-0">
                        <span class="text-base text-center">
                          Total {currency_Name_rd.currency_Logo}
                          <span className="text-base">
                            {" "}
                            {(
                              first.fare.grandTotal + second.fare.grandTotal
                            ).toFixed(2, 0)}
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md
                    className="d-flex align-items-center justify-content-center justify-content-md-end"
                  >
                    <div className="text-center text-xl-right py-1 text-xs w-100">
                      {/* <hr className="lg:hidden block m-0"/> */}
                      <span className="d-none d-md-inline-block  align-middle">
                        Total {currency_Name_rd.currency_Logo}
                        <span className="text-base">
                          {" "}
                          {(
                            first.fare.grandTotal + second.fare.grandTotal
                          ).toFixed(2, 0)}
                        </span>{" "}
                      </span>
                      <button
                        className="btn btn-siteorange done-vel farecheck-btn"
                        // onClick={(e) => openModal(AirResult.resultID)}
                        onClick={(e) => fareCheck()}
                      >
                        Book Now
                      </button>
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
        <div className="flightsdetails-foot-empty"></div>
        {/* ------------------------------load---------------------------- */}
        <Modal className="fetching" show={loading}>
          <ModalBody className="">
            <Image src={loaders} width={540} height={260} />
            {/* <h4 className="text-center">Please wai</h4> */}
          </ModalBody>
        </Modal>
        {/* ------------------------------load---------------------------- */}\{" "}
      </div>
    </>
  );
};

export default Footer;

{
  /* <Modal className="mt-10 flight_Details" show={show1} onHide={handleClose1}>
  <Modal.Header className="foot text-white" closeButton>
    <Modal.Title>Flight Details</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {AirResult.filter((items) => items.resultID == trans).map((items, i) => (
      <>
        {items.outBound ? (
          <div>
            {items.outBound.length == 2 ? (
              <div>
                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.outBound[0].airline}-
                              {items.outBound[0].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                    
                    </div>
                  </div>
                </div>
        
                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.outBound[1].airline}-
                              {items.outBound[1].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[1].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[1].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[1].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[1].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
              
                    </div>
                  </div>
                </div>

         
              </div>
            ) : (
              <div>
                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.outBound[0].airline}-
                              {items.outBound[0].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.outBound[0].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
               
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {items.inBound.length == 2 ? (
              <div>
             
                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.inBound[0].airline}-
                              {items.inBound[0].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                
                    </div>
                  </div>
                </div>

                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.inBound[1].airline}-
                              {items.inBound[1].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[1].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[1].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[1].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[1].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                 
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
               
                <div className=" grid grid-cols-1 mx-2 ">
                  <div className="grid grid-cols-6 px-10 py-3 mt-3 up rounded-2xl">
                    <div>
                      <div className="grid grid-cols-3">
                        <div className="">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airline}.png`}
                            className="w-10/12 down rounded-xl inline float-right"
                          />
                        </div>

                        <div className="pl-4 col-span-2">
                          <span className="text-sm text-black font-sans font-semibold">
                            {Result.airline
                              .filter((item) => item.code == items.airline)
                              .map((item, i) => (
                                <span>{item.name} </span>
                              ))}
                          </span>
                          <br />
                          <span className="text-xs text-black font-sans font-semibold">
                            {" "}
                            <span>
                              {items.inBound[0].airline}-
                              {items.inBound[0].flightNo}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-5 px-14">
                      <div className="grid grid-cols-4">
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].depDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].fromAirport}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <div className="grid grid-cols-10 mt-3 ">
                            <div className="col-span-4 pl-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                            <div className="col-span-2 text-center relative -top-2">
                              <span className="text-xs text-black font-sans">
                                2h
                              </span>
                              <br />
                              <span className="text-xs text-black font-sans">
                                Non-Stop
                              </span>
                            </div>
                            <div className="col-span-4 pr-2">
                              <img src={plane} className="-top-5 relative" />
                            </div>
                          </div>
                        </div>
                        <div className="text-center py-3">
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].reachDate}{" "}
                          </span>
                          <span className="text-lg text-black font-semibold">
                            {items.inBound[0].toAirport}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                  
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-3 up rounded-2xl my-3 mx-2 ">
          <div className="grid grid-cols-5 gap-2 py-2">
            <div className="pt-1">
              <i className="fa fa-briefcase fa-lg float-right"></i>
            </div>
            <div className="col-span-4 pl-2">
              <p className="font-semibold mb-0 text-xl">Cabin Baggage</p>
              <span>NA per person</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 py-2">
            <div className="pt-1">
              <i className="fa fa-luggage-cart fa-lg float-right"></i>
            </div>
            <div className="col-span-4 pl-2">
              <p className="font-semibold mb-0 text-xl">Check-In Baggage</p>
              <span>15kg per person</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 py-2">
            <div className="pt-1">
              <i className="fa fa-exchange-alt fa-lg float-right"></i>
            </div>
            <div className="col-span-4 pl-2">
              <p className="font-semibold mb-0 text-xl">Refundable</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 up rounded-2xl my-3 mx-2 px-4 py-2">
          <div className="pt-1">
            <span className="text-2xl font-semibold text-blue-600 font-sans">
              <span className="text-gray-700 text-2xl">Total</span>{" "}
              <i className="fa fa-rupee-sign fa-sm ml-2 "></i>{" "}
              {items.fare.grandTotal * data.totalpassanger}
            </span>
          </div>
          <div>
            <Link to="/flight/checkout">
              <button className="btn btn-primary sidenavd rounded-sm float-right">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </>
    ))}
  </Modal.Body>
</Modal>; */
}
