import React from "react";
import { SelectedData } from "../../Feature/Action";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import morning from "../../../public/Image/morning.svg";
import noon from "../../../public/Image/noon.svg";
import planneTicker from "../../../public/Image/plane-ticket.png";
import night from "../../../public/Image/night.svg";
import evening from "../../../public/Image/evening.svg";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import resulttwoway from "../../Sample_Data/resulttwoway.json";
import resultoneway from "../../Sample_Data/resultoneway.json";
import { Button, Tabs } from "react-bootstrap";
import { Tab } from "@headlessui/react";
import Table from "react-bootstrap/Table";
import plane from "../../../public/Image/plane6.gif";
import planenotfound from "../../../public/Image/plane-ticket.png";
import { Link } from "react-router-dom";
import AirPortData from "../../Sample_Data/AirPortData.json";
import Engine from "../../Atom/Engine";
import Footer from "./Footer";
import loaders from "../../../public/Image/load.gif";
import { ModalBody } from "react-bootstrap";
import {
  authCode,
  domain,
  imgdomain,
  siteID,
  staging,
} from "../../static/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import logo from "../../../public/Image/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import axios from "axios";

const Dom_Round_Way = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { Results, AirResults, setoutBoundDatas, setinBoundDatas } = props;
  const data = useSelector(SelectedData);
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const flightResult = Result;
  // ----------------------------Reduux-----------------------------------

  //---------------------------- state------------------------------
  const [filtersort, setfiltersort] = useState(false);
  const [Result, setResult] = useState(Results);
  const [AirResult, setAirResult] = useState(AirResults);
  const [AirResult2, setAirResult2] = useState(AirResults);
  const [sort, setsort] = useState([]);
  const [sortStop, setsortStop] = useState([]);
  const [save, setSave] = useState([]);
  const [Load, setLoad] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [modal, setmodal] = useState(0);
  const [modal2, setmodal2] = useState(0);
  const [trans, setTrans] = useState(0);
  const [outBoundData, setoutBoundData] = useState();
  const [inBoundData, setinBoundData] = useState();
  const [Loading, setLoading] = useState(false);

  setoutBoundDatas(outBoundData);
  setinBoundDatas(inBoundData);
  //---------------------------- state------------------------------
  let uri;
  // ------------------------------Moadaal1-------------------------
  const handleClose1 = () => setShow1(false);
  function openModal(e) {
    setShow1(true);
    setTrans(e);
  }
  // ------------------------------Moadaal1-------------------------

  // --------------------------------Modal----------------------------
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    const detail = e;
    setmodal(detail);
  };
  // --------------------------------Modal----------------------------

  // --------------------------------Modal----------------------------
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (e) => {
    setShow2(true);
    const detail = e;
    setmodal2(detail);
  };

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  // -----------------------------------airline select ------------------------------------------

  const outBound = AirResult.filter((item) => item.outBound);
  const inBound = AirResult.filter((item) => item.inBound);

  const airlinePrice = resulttwoway.flightResult.reduce(function (r, a) {
    r[a.airline] = r[a.airline] || [];
    r[a.airline].push(a);
    return r;
  }, Object.create(null));

  // const airlinePrice2 = outBound.reduce(function (r, a) {
  //   r[a.outBound.length] = r[a.outBound.length] || [];
  //   r[a.outBound.length].push(a);
  //   return r;
  // }, Object.create(null));

  // console.log("Ait",outBound)

  const modAirlinearray = Object.keys(airlinePrice).map(function (key) {
    var value = airlinePrice[key];
    return {
      airlineCode: key.substring(0, 2),
      firstPrice: value[0].fare.grandTotal,
      alldata: value,
    };
  });
  const getUniqueSearches = uniqueByMultipleKey(modAirlinearray, [
    "airlineCode",
  ]);
  function uniqueByMultipleKey(arr, keyProps) {
    return Object.values(
      arr.reduce((uniqueMap, entry) => {
        const key = keyProps.map((k) => entry[k]).join("|");
        if (!(key in uniqueMap)) uniqueMap[key] = entry;
        return uniqueMap;
      }, {})
    );
  }
  // -----------------------------------airline select ------------------------------------------

  // --------------------------------------checkbox airline-------------------------------------------------------------

  const selectFile = (e) => {
    const checked = e.target.checked;
    const airlineFly = e.target.value;

    if (airlineFly == airlineFly) {
      {
        checked
          ? setAirResult([...sort, ...airlinePrice[airlineFly]])
          : setAirResult(sort.filter((items) => items.airline != airlineFly));
      }
      {
        checked
          ? setsort([...sort, ...airlinePrice[airlineFly]])
          : setsort(sort.filter((items) => items.airline != airlineFly));
      }
    }
  };

  // --------------------------------------checkbox airline-------------------------------------------------------------

  // -------------------------------------------stop--------------------------------------------------
  var Stops = [];
  if (Load) {
    const Outbound = Result.flightResult.filter((items) => items.outBound);
    const Inbound = Result.flightResult.filter((items) => items.inBound);

    Stops.push(
      Outbound.filter((item) => !item.outBound[1]).map((item) => {
        return item;
      })
    );

    Stops.push(
      Outbound.filter((item) => item.outBound[1]).map((item) => {
        return item;
      })
    );

    Stops.push(
      Outbound.filter((item) => item.outBound[2]).map((item) => {
        return item;
      })
    );

    Stops.push(
      Outbound.filter((item) => item.outBound[3]).map((item) => {
        return item;
      })
    );

    Stops.push(
      Outbound.filter((item) => item.outBound[4]).map((item) => {
        return item;
      })
    );
  }

  //----------------- stop function for stops ----------------------

  // const stopFunction = (e) => {

  //   const checked = e.target.checked;
  //   const airlineFly = e.target.value;

  //   if (airlineFly == airlineFly) {
  //     {
  //       checked
  //         ? setAirResult([...sort, ...airlinePrice2[airlineFly]])
  //         : setAirResult(sort.filter((items) => items.outBound.length != airlineFly));
  //     }
  //     {
  //       checked
  //         ? setsort([...sort, ...airlinePrice2[airlineFly]])
  //         : setsort(sort.filter((items) => items.outBound.length != airlineFly));
  //     }
  //   }

  // };

  // -------------------------------------------stop--------------------------------------------------

  // --------------------------------Departure Time-------------------------------------------

  function departure(e) {
    if (e == "morning") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 5 &&
            items.outBound[0].depDate.slice(11, 13) < 12
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].depDate.slice(11, 13) >= 5 &&
            items.inBound[0].depDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 12 &&
            items.outBound[0].depDate.slice(11, 13) < 18
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].depDate.slice(11, 13) >= 12 &&
            items.inBound[0].depDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 18 &&
            items.outBound[0].depDate.slice(11, 13) < 24
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].depDate.slice(11, 13) >= 18 &&
            items.inBound[0].depDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 0 &&
            items.outBound[0].depDate.slice(11, 13) < 5
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].depDate.slice(11, 13) >= 0 &&
            items.inBound[0].depDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  function arrival(e) {
    if (e == "morning") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 5 &&
            items.outBound[0].reachDate.slice(11, 13) < 12
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].reachDate.slice(11, 13) >= 5 &&
            items.inBound[0].reachDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 12 &&
            items.outBound[0].reachDate.slice(11, 13) < 18
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].reachDate.slice(11, 13) >= 12 &&
            items.inBound[0].reachDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 18 &&
            items.outBound[0].reachDate.slice(11, 13) < 24
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].reachDate.slice(11, 13) >= 18 &&
            items.inBound[0].reachDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      const Outbound = Result.flightResult.filter((items) => items.outBound);
      const Inbound = Result.flightResult.filter((items) => items.inBound);
      setAirResult([
        ...Outbound.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 0 &&
            items.outBound[0].reachDate.slice(11, 13) < 5
        ),
        ...Inbound.filter(
          (items) =>
            items.inBound[0].reachDate.slice(11, 13) >= 0 &&
            items.inBound[0].reachDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  // --------------------------------Departure Time end-------------------------------------------

  function GetOutBound(e) {
    setTimeout(() => setLoading(true));
    setTimeout(() => setoutBoundData(e), 1000);
    setTimeout(() => setLoading(false), 1000);
  }

  function GetInBound(e) {
    setTimeout(() => setLoading(true));
    setTimeout(() => setinBoundData(e), 1000);
    setTimeout(() => setLoading(false), 1000);
  }

  // -------------------------useEffect----------------------------

  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? "AM" : "PM";
    const hours = +sHours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  // -------fare alert popup ------
  const [show3, setShow3] = useState(false);
  const handleShow3 = () => {
    setShow3(true);
  };
  const handleClose3 = () => {
    setShow3(false);
  };

  const [Email, setEmail] = useState("");

  const GetfareAlert = () => {
    const fromCity = AirPortData.find(
      (item) => item.airportCode === outBound[0].outBound[0].fromAirport
    );
    const toCity = AirPortData.find(
      (item) => item.airportCode === outBound[0].outBound[0].toAirport
    );

    const fromCity_replace = fromCity.airportName.replace(" ", "-");
    const toCity_replace = toCity.airportName.replace(" ", "-");

    var datas = JSON.stringify({
      siteName: "travomint.com",
      siteUrl: "https://www.travomint.com",
      agentName: "Travomint",
      depcity: outBound[0].outBound[0].fromAirport,
      arrcity: outBound[0].outBound[0].toAirport,
      currencys: currency_Name_rd.currency_Name,
      dealss: [
        {
          // froCity: Result.flightResult[0].outBound[0].fromAirportName,
          // toCity: Result.flightResult[0].outBound[0].toAirportName,
          froCity: outBound[0].outBound[0].fromAirport,
          toCity: outBound[0].outBound[0].toAirport,
          froCityName: fromCity_replace,
          toCityName: toCity_replace,
          depDate: outBound[0].outBound[0].depDate.split("T")[0],
          retDate:
            (data.tripType === 2 || data.tripType === "2") &&
            outBound[0].outBound[0].depDate.split("T")[0],
          airline: outBound[0].outBound[0].airline,
          tripType: data.tripType,
          cabinClass: outBound[0].cabinClass,
          currency: currency_Name_rd.currency_Name,
          totalPrice: outBound[0].fare.grandTotal,
        },
      ],
      hotObj: [
        {
          baseResponse: null,
          response: [
            {
              id: "2",
              hotelName: "",
              starRating: "3",
              hotelId: "",
              supplier: "",
              description: "",
              imageUrl:
                "http://photos.hotelbeds.com/giata/10/104162/104162a_hb_l_001.jpg",
              hotelPrice: "4630",
              checkInDate: "05/29/2022",
              checkOutDate: "05/30/2022",
              address: "",
              cityId: "",
              city: "",
              state: "",
              country: "",
              siteId: 0,
            },
          ],
          bookingId: "1234",
        },
      ],
      pageType: "Travel",
    });

    var config = {
      method: "post",
      url: `${staging}/fare-alert-version2`,
      headers: {
        "Content-Type": "application/json",
      },
      data: datas,
    };

    axios(config)
      .then(function (response) {
        var axios = require("axios");
        var data = JSON.stringify({
          FromEmail: "booking@travomint.com",
          ToEmail: Email,
          CcEmail: "",
          BccEmail: "",
          MailSubject: "Travomint Fare Alert",
          MailBody: JSON.stringify(response.data),
          BookingID: "909090",
          MailType: "",
        });

        var config = {
          method: "post",
          url: `${staging}/SMTP/SendEMailVersion2?authcode=${authCode}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            setShow3(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // -------fare alert popup ------

  console.log(Result);
  return (
    <>
      {Result.length === 0 ? (
        <Container>
          <Row>
            <Col xs={12} className="py-5">
              <div className="result-Error text-center 3">
                <div className="imgpl">
                  <Image src={planenotfound} />
                </div>
                No flight available for this route. Please Check on different date.
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>
          {Result.flightResult.length === 0 ? (
            <Container>
              <Row>
                <Col xs={12} className="py-5">
                  <div className="result-Error text-center 3">
                    <div className="imgpl">
                      <Image src={planenotfound} />
                    </div>
                    No flight available for this route. Please Check on different date.
                  </div>
                </Col>
              </Row>
            </Container>
          ) : (
            <div className="w-100">
              <Container>
                <Row>
                  <Col xl={3} xs={12}>
                    <Button
                      type="button"
                      onClick={handleShow3}
                      className="btn-outline-fetfare btn-block d-none d-xl-block frnotify"
                    >
                      <div className="position-relative d-inline-block">
                        <div className="waves-block">
                          <div className="waves wave-1"></div>
                          <div className="waves wave-2"></div>
                          <div className="waves wave-3"></div>
                        </div>

                        <span className="border-ringfr">
                          <i className="far fa-bell"></i>
                        </span>
                      </div>
                      Get Fare Alert
                    </Button>

                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog
                        as="div"
                        className="fixed bg-slate-200 inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                      >
                        <div className="min-h-screen px-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Dialog.Overlay className="fixed inset-0" />
                          </Transition.Child>

                          {/* This element is to trick the browser into centering the modal contents. */}
                          <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                          >
                            &#8203;
                          </span>
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                              >
                                <i className="fa fa-user border-4 bg-blue-500 text-white border-white drop-shadow-xl outline-2 outline-gray-500 p-2 rounded-3xl"></i>
                                <span className="ml-2">Sign In</span>
                              </Dialog.Title>
                              <div className="mt-6"></div>
                            </div>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>

                    {/*============ filter sidebar ============*/}
                    {filtersort ? (
                      <div
                        className="fade offcanvas-backdrop show d-xl-none"
                        onClick={() => {
                          setfiltersort(!filtersort);
                        }}
                      ></div>
                    ) : (
                      ""
                    )}
                    <div
                      className={
                        "offcanvas offcanvas-sidenav offcanvas-start offcanvasbyfilter " +
                        (filtersort ? "show" : "")
                      }
                    >
                      <div className="offcanvas-header d-xl-none">
                        <h5
                          className="offcanvas-title"
                          id="offcanvasExampleLabel"
                        >
                          Filter
                        </h5>
                        <button
                          type="button"
                          className="btn-close text-reset"
                          onClick={() => {
                            setfiltersort(!filtersort);
                          }}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="offcanvas-body">
                        <aside className="filterres-custom">
                          {/* ----------------------Flight sort checkbox------------------------------- */}
                          <div className="up rounded-2xl mt-3 ">
                            <div className="bg-gray-50 rounded-xl mt-xl-3">
                              <div className="grid grid-cols-1 px-3 py-3 border-bottom">
                                <div className="grid grid-cols-2 text-left">
                                  <p className="text-lg font-bold mb-0 text-black">
                                    Filters
                                  </p>
                                  <div onClick={() => {}}>
                                    <p className="text-right mb-0 text-gray-500 font-normal reset-pointer">
                                      Reset All
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="px-2 py-2 grid grid-cols-1 ">
                              <div className="grid grid-cols-1 text-left">
                                {/*------------------------------- one stop two sto function ----------------------------*/}

                                {/* <Disclosure defaultOpen="true">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex  justify-between w-full  mb-2 text-sm font-medium text-left text-gray-900  rounded-lg ">
                                <span className="mb-0 text-black font-semibold">
                                  Choose Stop
                                </span>
                                <ChevronUpIcon
                                  className={`${
                                    open ? "transform rotate-180" : ""
                                  } w-5 h-5 text-gray-900`}
                                />
                              </Disclosure.Button>

                              <Disclosure.Panel
                                  
                                    className="px-2 pt-1 rounded-2xl pb-2 text-sm text-gray-900"
                                  >
                                    {airlinePrice2[1]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={1}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Non-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "}  { airlinePrice2[1][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }


                                      {airlinePrice2[2]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={2}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          One-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "}      { airlinePrice2[2][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }
                                      

                                      {airlinePrice2[3]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={3}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Two-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "}     { airlinePrice2[3][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }

                                      {airlinePrice2[4]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={4}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Three-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "} { airlinePrice2[4][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }


                                      {airlinePrice2[5]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={5}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Four-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "}   { airlinePrice2[5][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }

                                     
                                      {airlinePrice2[6]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={6}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Five-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "} { airlinePrice2[6][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }

                                     
                                      
                                      {airlinePrice2[7]==undefined?"": <div>
                                        {" "}
                                        <input
                                          type="checkbox"
                                          value={7}
                                          onClick={(e) => stopFunction(e)}
                                          className="stops-checkout"
                                        />
                                        <span className=" text-xs font-sans font-normal">
                                          {" "}
                                          Six-Stop
                                        </span>{" "}
                                        <span className="float-right">
                                        {currency_Name_rd.currency_Logo}{" "}   { airlinePrice2[7][0].fare.grandTotal}
                                       
                                        </span>
                                      </div> }

                                    


                                  
                                  </Disclosure.Panel>

                                  </>
                          )}
                        </Disclosure> */}

                                {/*------------------------------- one stop two sto function ----------------------------*/}

                                {/* ----------------------------------choose stop -------------------------------------------- */}
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-xl mt-3">
                            <div className="w-100">
                              <Disclosure defaultOpen="true">
                                {({ open }) => (
                                  <>
                                    <div className="px-3 py-3">
                                      <Disclosure.Button className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <span className="text-lg font-bold ">
                                          Departure Time
                                        </span>
                                        <ChevronUpIcon
                                          className={`${
                                            open ? "transform rotate-180" : ""
                                          } w-5 h-5 text-gray-900`}
                                        />
                                      </Disclosure.Button>
                                    </div>

                                    <Disclosure.Panel className="day-fltimeing-row">
                                      <Row className="day-fltimeing">
                                        <Col
                                          xs={6}
                                          onClick={(e) => departure("morning")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={morning}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (05:00am - 11:59am)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) =>
                                            departure("afternoon")
                                          }
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={noon}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (12:00pm - 05:59pm)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) => departure("evening")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={evening}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (06:00pm - 11:59pm)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) => departure("night")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={night}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (00:00am - 04.59am)
                                          </p>
                                        </Col>
                                      </Row>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-xl mt-3">
                            <div className="w-100">
                              <Disclosure defaultOpen="true">
                                {({ open }) => (
                                  <>
                                    <div className="px-3 py-3">
                                      <Disclosure.Button className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <span className="text-lg font-bold ">
                                          Arrival Time
                                        </span>
                                        <ChevronUpIcon
                                          className={`${
                                            open ? "transform rotate-180" : ""
                                          } w-5 h-5 text-gray-900`}
                                        />
                                      </Disclosure.Button>
                                    </div>

                                    <Disclosure.Panel className="day-fltimeing-row">
                                      <Row className="day-fltimeing">
                                        <Col
                                          xs={6}
                                          onClick={(e) => arrival("morning")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={morning}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (05:00am - 11:59am)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) => arrival("afternoon")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={noon}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (12:00pm - 05:59pm)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) => arrival("evening")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={evening}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (06:00pm - 11:59pm)
                                          </p>
                                        </Col>

                                        <Col
                                          xs={6}
                                          onClick={(e) => arrival("night")}
                                          className="d-flex align-items-center justify-content-center flex-column"
                                        >
                                          <div className="justify-center flex">
                                            <Image
                                              src={night}
                                              width={30}
                                              height={25}
                                            />
                                          </div>
                                          <p className="text-xs font-semibold mb-0 mt-2 text-center">
                                            (00:00am - 04.59am)
                                          </p>
                                        </Col>
                                      </Row>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </div>
                          </div>

                          {/* <div className="px-2 py-2 grid grid-cols-1 mt-3 up rounded-2xl ">
                          <div className="grid grid-cols-1 text-left">
                            <Disclosure defaultOpen="true">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                    <span>Airline</span>
                                    <ChevronUpIcon
                                      className={`${open ? "transform rotate-180" : ""
                                        } w-5 h-5 text-gray-900`}
                                    />
                                  </Disclosure.Button>

                                  {getUniqueSearches.map((items, i) => (
                                    <>
                                      <Disclosure.Panel className="px-2 pt-1  mt-1  rounded-2xl  pb-2 text-gray-900">
                                        {Result.airline
                                          .filter(
                                            (item) => item.code == items.airlineCode
                                          )
                                          .map((item, i) => (
                                            <div key={i} className="grid grid-cols-3">
                                              <div className="col-span-2">
                                                <span className="text-sm font-bold font-sans">
                                                  {" "}
                                                  <input
                                                    type="checkbox"
                                                    id="spicejet"
                                                    value={item.code}
                                                    onClick={(e) => selectFile(e)}
                                                  />{" "}
                                                  &nbsp; {item.name}{" "}
                                                </span>
                                              </div>
                                              <div className="text-right">
                                                <span className="text-sm font-bold font-sans">
                                                  {" "}
                                                  {currency_Name_rd.currency_Logo} {items.firstPrice}
                                                </span>
                                              </div>
                                            </div>
                                          ))}
                                      </Disclosure.Panel>
                                    </>
                                  ))}
                                </>
                              )}
                            </Disclosure>
                          </div>
                        </div> */}

                          {/* ------------------------------------airline select----------------------------  */}
                          {/* <div className="bg-gray-50 rounded-xl mt-3">
                          <div className="w-100">
                            <Disclosure defaultOpen="true">
                              {({ open }) => (
                                <>
                                  <div className="grid grid-cols-1 px-3 py-3">
                                    <Disclosure.Button className="flex justify-between w-full text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                      <span className="text-lg font-bold ">
                                        Airline
                                      </span>
                                      <ChevronUpIcon
                                        className={`${
                                          open ? "transform rotate-180" : ""
                                        } w-5 h-5 text-gray-900`}
                                      />
                                    </Disclosure.Button>
                                  </div>

                                  <Disclosure.Panel className="day-fltimeing-row px-3 py-3 border-top">
                                    {getUniqueSearches.map((items, i) => (
                                      <>
                                        {Result.airline
                                          .filter(
                                            (item) =>
                                              item.code == items.airlineCode
                                          )
                                          .map((item, index) => (
                                            <>
                                             

                                              <div className="d-flex mb-2">
                                                <div className="flex-grow-1 themeascheckbox font-14">
                                                  <div className="form-check">
                                                    <input
                                                      className="form-check-input"
                                                      type="checkbox"
                                                      value={item.code}
                                                      onClick={(e) =>
                                                        selectFile(e)
                                                      }
                                                      id={
                                                        "flexairresultcd-" + i
                                                      }
                                                    />
                                                    <label
                                                      className="form-check-label text-sm"
                                                      htmlFor={
                                                        "flexairresultcd-" + i
                                                      }
                                                    >
                                                      {item.name}
                                                    </label>
                                                  </div>
                                                </div>

                                                <div className="text-right pl-3 font-medium text-sm">
                                                  {
                                                    currency_Name_rd.currency_Logo
                                                  }{" "}
                                                  {items.firstPrice}
                                                </div>
                                              </div>
                                            </>
                                          ))}
                                      </>
                                    ))}
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                        </div> */}
                          {/* ------------------------------------airline select----------------------------  */}
                          {/* ----------------------Flight sort checkbox END------------------------------- */}
                        </aside>

                        <div className="text-center mt-4 d-xl-none">
                          <button
                            type="button"
                            className="btn btn-siteorange done-vel"
                            onClick={() => {
                              setfiltersort(!filtersort);
                            }}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          >
                            Apply Filters
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*============ endf filter sidebar ============*/}
                  </Col>

                  <Col xl={9} xs={12}>
                    <Row className="align-items-center fitrrow tp">
                      <Col xs={12} lg={6}>
                        <div
                          className="d-xl-none d-flex align-items-center  
                      filterbybtn btn-outline-fetfare btn-block btn btn-primary dmround-fr"
                          onClick={() => {
                            setfiltersort(!filtersort);
                          }}
                        >
                          <div className="w-100">
                            <Row className="align-items-center">
                              <Col xs={12} className="text-center">
                                <a href={void 0} className="text-dark">
                                  <FontAwesomeIcon icon="fa-solid fa-filter" />
                                  <span className="ml-2 font-medium">
                                    Filter
                                  </span>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>

                      <Col xs={12} lg={6}>
                        <Button
                          type="button"
                          onClick={handleShow3}
                          className="btn-outline-fetfare getalmob btn-block d-xl-none mt-2 mt-lg-0 dmround-fr frnotify"
                        >
                          <div className="position-relative d-inline-block">
                            <div className="waves-block">
                              <div className="waves wave-1"></div>
                              <div className="waves wave-2"></div>
                              <div className="waves wave-3"></div>
                            </div>

                            <span className="border-ringfr">
                              <i className="far fa-bell"></i>
                            </span>
                          </div>
                          Get Fare Alert
                        </Button>
                      </Col>
                    </Row>

                    <div className="w-100">
                      {/* 0------------------------------------airline select----------------------------------------- */}
                      <div className="grid grid-cols-8 mb-3 border-2 border-white shadow rounded-xl ups p-2 hidden bg:block">
                        {getUniqueSearches.map((items, i) => (
                          <div
                            key={i}
                            className={
                              "text-center  border-r-2 border-white shadow  p-2 rounded-xl mr-1 "
                            }
                            onClick={() => setAirResult(items.alldata)}
                          >
                            <div className=" justify-center inline-flex flex-wrap pt-2  ">
                              {/* <Image
                            alt="props"
                              src={`https://www.travomint.com/resources/images/airline-logo/${items.airlineCode}.png`}
                              className="w-10 rounded-3xl"
                            /> */}
                              {/* <Image alt="props" */}
                              {/* // src={`https://${imgdomain}/resources/images/airline-logo/${items.airlineCode}.png`} */}
                              {/* src="https://www.travomint.com/resources/images/airline-logo/G8.png" */}
                              {/* className="w-2/2 down rounded-sm float-left pl-2" */}
                              {/* layout='fill' */}
                              {/* /> */}
                              <Image
                                loader={myLoader}
                                src={items.airline + ".png"}
                                alt="G8"
                                width={60}
                                height={60}
                              />
                              <br />
                            </div>
                            <p className="text-black font-bold text-sm mb-0">
                              {" "}
                              {items.airlineCode}{" "}
                            </p>

                            <div className="text-center amount text-white mt-0 font-bold">
                              {currency_Name_rd.currency_Logo}{" "}
                              {items.firstPrice}
                            </div>
                          </div>
                        ))}

                        {/* <div
                        className={
                          "text-center  border-r-2 border-white shadow  p-2 rounded-xl mr-1 "
                        }
                        onClick={() => setAirResult(Result.flightResult)}
                      >
                        <div className=" justify-center inline-flex flex-wrap pt-2  "></div>
                        <p className="text-black font-bold text-sm mb-0">
                          {" "}
                          View All
                        </p>

                        <div className="text-center amount text-white mt-0 font-bold"></div>
                      </div> */}
                      </div>
                      {/* 0------------------------------------airline select----------------------------------------- */}

                      {/* 


          <div className="grid grid-cols-2 px-3 py-4 gap-4  rounded-2xl bg-white border-2 shadow-xl">
            <div className="grid grid-cols-2 border-r-2 ">
              <div>
                <h2 className="text-2xl font-bold text-black">Departure Flight</h2>
                <h4 className="text-xl font-semibold text-black">DEL - BOM</h4>
                <h5 className="text-sm font-bold -mt-2 text-black">| Sat, 25 Dec 2021</h5>
              </div>
              <div className="text-right pr-4">
                <h5 className="text-black text-sm -mb-0"> <i className="fa fa-search"></i> 14 Out of 14 Result</h5>
                <span className="text-black text-sm ">Sort by</span><br />
                <span className="text-lg">Sort By</span><button className=" bg-gray-100 m-1 p-2 border-2 text-sm rounded-sm">Price (Low to High)</button>
              </div>
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                <h2 className="text-2xl font-bold text-black">Departure Flight</h2>
                <h4 className="text-xl font-semibold text-black">DEL - BOM</h4>
                <h5 className="text-sm font-bold -mt-2 text-black">| Sat, 25 Dec 2021</h5>
              </div>
              <div className="text-right pr-4">
                <h5 className="text-black text-sm -mb-0"> <i className="fa fa-search"></i> 14 Out of 14 Result</h5>
                <span className="text-black text-sm ">Sort by</span><br />
                <span className="text-lg">Sort By</span><button className=" bg-gray-100 m-1 p-2 border-2 text-sm rounded-sm">Price (Low to High)</button>
              </div>
            </div>
          </div>
 */}

                      {/* 1st */}
                      <Row className="mb-5">
                        <Col xs={12} className=" block lg:hidden">
                          <Tabs
                            defaultActiveKey="Departure"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 tablist deptb-oubn"
                          >
                            <Tab eventKey="Departure" title="Departure">
                              {/* ----------------------------------first---------------------------------- */}
                              <div>
                                {/* ----------------------------------first---------------------------------- */}
                                {outBound.map((items, i) => {
                                  const outBoundCount = items.outBound.length;
                                  let text = items.airline;
                                  let letter = text.charAt(0);
                                  const alirlineLogo =
                                    letter === ","
                                      ? text.replace(",", "")
                                      : text;

                                  return (
                                    <div
                                      key={i}
                                      className="filteroutbound-li fapl-re-6 grid lg:grid-cols-6 grid-cols-1 mb-4 rounded-xl d-flex flex-column roundtripfil"
                                    >
                                      {/*============= raw (done)=============*/}
                                      <div className="align-items-center row">
                                        <div className="mdf-col col-xs-12 col-12">
                                          <Row className="align-items-center align-lg-items-start">
                                            <Col xs={6}>
                                              <div className="d-flex flex-column align-items-start">
                                                <div className="text-left">
                                                  <div className="outbound-rtp d-inline-block">
                                                    {/* <Image
                                            src={`https://${imgdomain}/resources/images/airline-logo/${items.airline}.png`} width={50} height={50} className="rounded"/> */}
                                                    <Image
                                                      loader={myLoader}
                                                      src={
                                                        alirlineLogo + ".png"
                                                      }
                                                      alt={alirlineLogo}
                                                      width={50}
                                                      height={50}
                                                      className="rounded"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex-grow=1  text-left">
                                                  <span className="text-base text-black  font-bold">
                                                    {Result.airline
                                                      .filter(
                                                        (airline) =>
                                                          airline.code ==
                                                          items.airline
                                                      )
                                                      .map((airline, a) => (
                                                        <span
                                                          key={a}
                                                          className="w-full title-airlines"
                                                        >
                                                          {airline.name}
                                                        </span>
                                                      ))}
                                                  </span>
                                                  <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                    {" "}
                                                    {items.airline +
                                                      "-" +
                                                      items.outBound[0]
                                                        .flightNo}
                                                  </span>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col xs={6} className="text-right">
                                              <div className="w-100 mb-0 from-btms">
                                                <span className="text-lg font-nomal text-black font-sans pr-3 price-1 d-block frmid">
                                                  From1
                                                </span>
                                                <span className="text-lg font-bold text-black font-sans price-2">
                                                  {
                                                    currency_Name_rd.currency_Logo
                                                  }{" "}
                                                  {items.fare.adultFare +
                                                    items.fare.adultTax +
                                                    items.fare.adultMarkup}
                                                </span>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                      <div className="col-span-4 lg:pl-14 lg:pr-14 pl-0 pr-0 round-frompx-0">
                                        <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway d-flex w-100 justify-content-between">
                                          <div className="text-center">
                                            <span className="text-base text-black font-bold">
                                              <div className="deslo-way mb-2">
                                                <span className="badge bg-secondary">
                                                  {
                                                    items.outBound[0]
                                                      .fromAirport
                                                  }
                                                </span>
                                              </div>
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                {convertFrom24To12Format(
                                                  items.outBound[0].depDate
                                                    .split("T")[1]
                                                    .substring(0, 5)
                                                )}
                                              </div>
                                              <div className="text-gray-500 font-medium text-sm">
                                                {
                                                  items.outBound[
                                                    outBoundCount - 1
                                                  ].reachDate.split("T")[0]
                                                }
                                              </div>
                                            </span>
                                          </div>

                                          <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                            <div className="w-100 text-center">
                                              <div className="time-lineintwy">
                                                <hr></hr>
                                                <div className="d-flex justify-content-between align-items-center">
                                                  <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                  <FontAwesomeIcon icon="fa-solid fa-plane" />
                                                  <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                </div>
                                              </div>
                                              <span className="text-xs text-black font-sans font-medium">
                                                <div className="duration-intwy">
                                                  <div className="minttotime font-bold my-1 text-base text-black">
                                                    <ConvertMinsToTime
                                                      data={
                                                        items.outBound[0].eft
                                                      }
                                                    />
                                                  </div>
                                                  <div className="text-xs stop capitalize font-normal">
                                                    {outBoundCount === 1
                                                      ? "non-stop"
                                                      : outBoundCount === 2
                                                      ? "one-stop"
                                                      : outBoundCount === 3
                                                      ? "two-stop"
                                                      : outBoundCount === 4
                                                      ? "three-stop"
                                                      : null}
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="text-center">
                                            <span className="text-base text-black font-bold">
                                              <div className="deslo-way mb-2">
                                                <span className="badge bg-secondary">
                                                  {
                                                    items.outBound[
                                                      outBoundCount - 1
                                                    ].toAirport
                                                  }
                                                </span>
                                              </div>
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                {convertFrom24To12Format(
                                                  items.outBound[
                                                    outBoundCount - 1
                                                  ].reachDate
                                                    .split("T")[1]
                                                    .substring(0, 5)
                                                )}
                                              </div>
                                              <div className="text-gray-500 font-medium text-sm">
                                                {
                                                  items.outBound[
                                                    outBoundCount - 1
                                                  ].reachDate.split("T")[0]
                                                }
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="align-items-end row form-roew-6">
                                        <div className="col-sm-6">
                                          <button
                                            className="downbtnflightt-dt btn btn-outline-secondary  gtinbg-det"
                                            onClick={(e) =>
                                              handleShow2(items.resultID)
                                            }
                                          >
                                            <i className="far fa-hand-point-right mr-1"></i>
                                            Flight Details
                                          </button>
                                        </div>

                                        <div className="col-sm-6">
                                          <div className="text-left">
                                            <label className="btn btn-siteorange done-velres flex-grow-1 m-0 gtinbg gtinbg-det d-flex align-items-center justify-content-center">
                                              <input
                                                type={`radio`}
                                                className="form-check-input"
                                                onClick={(e) =>
                                                  GetInBound(items)
                                                }
                                              />
                                              Select Now
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      {/*============= end raw =============*/}
                                    </div>
                                  );
                                })}
                              </div>
                              {/* ----------------------------------first---------------------------------- */}
                            </Tab>
                            <Tab eventKey="Return" title="Return">
                              {/* ----------------------------------Second---------------------------------- */}
                              <div>
                                {inBound.map((items, i) => {
                                  const inBoundCount = items.inBound.length;
                                  let text = items.airline;
                                  let letter = text.charAt(0);
                                  const alirlineLogo =
                                    letter === ","
                                      ? text.replace(",", "")
                                      : text;
                                  return (
                                    <div
                                      key={i}
                                      className="filteroutbound-li fapl-re-6 grid lg:grid-cols-6 grid-cols-1 mb-4 rounded-xl d-flex flex-column roundtripfil"
                                    >
                                      {/*============= raw (done)=============*/}
                                      <div className="align-items-center row">
                                        <div className="mdf-col col-xs-12 col-12">
                                          <Row className="align-items-center align-lg-items-start">
                                            <Col xs={6}>
                                              <div className="d-flex flex-column align-items-start">
                                                <div className="text-left">
                                                  <div className="outbound-rtp d-inline-block">
                                                    <Image
                                                      loader={myLoader}
                                                      src={
                                                        alirlineLogo + ".png"
                                                      }
                                                      alt={alirlineLogo}
                                                      width={50}
                                                      height={50}
                                                      className="rounded"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex-grow=1  text-left">
                                                  <span className="text-base text-black  font-bold">
                                                    {Result.airline
                                                      .filter(
                                                        (airline) =>
                                                          airline.code ==
                                                          items.airline
                                                      )
                                                      .map((airline, a) => (
                                                        <span
                                                          key={a}
                                                          className="w-full title-airlines"
                                                        >
                                                          {airline.name}
                                                        </span>
                                                      ))}
                                                  </span>
                                                  <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                    {alirlineLogo +
                                                      "-" +
                                                      items.inBound[0].flightNo}
                                                  </span>
                                                </div>
                                              </div>
                                            </Col>
                                            <Col xs={6} className="text-right">
                                              <div className="w-100 mb-0 from-btms">
                                                <span className="text-lg font-nomal text-black font-sans pr-3 price-1 d-block frmid">
                                                  From2
                                                </span>
                                                <span className="text-lg font-bold text-black font-sans price-2">
                                                  {
                                                    currency_Name_rd.currency_Logo
                                                  }{" "}
                                                  {items.fare.grandTotal}
                                                </span>
                                              </div>
                                            </Col>
                                          </Row>
                                        </div>
                                      </div>
                                      <div className="col-span-4 lg:pl-14 lg:pr-14 pl-0 pr-0 round-frompx-0">
                                        <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway d-flex w-100 justify-content-between">
                                          <div className="text-center">
                                            <span className="text-base text-black font-bold">
                                              <div className="deslo-way mb-2">
                                                <span className="badge bg-secondary">
                                                  {items.inBound[0].fromAirport}
                                                </span>
                                              </div>
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                {convertFrom24To12Format(
                                                  items.inBound[0].depDate
                                                    .split("T")[1]
                                                    .substring(0, 5)
                                                )}
                                              </div>
                                              <div className="text-gray-500 font-medium text-sm">
                                                {
                                                  items.inBound[
                                                    inBoundCount - 1
                                                  ].reachDate.split("T")[0]
                                                }
                                              </div>
                                            </span>
                                          </div>

                                          <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                            <div className="w-100 text-center">
                                              <div className="time-lineintwy">
                                                <hr></hr>
                                                <div className="d-flex justify-content-between align-items-center">
                                                  <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                  <FontAwesomeIcon icon="fa-solid fa-plane" />
                                                  <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                </div>
                                              </div>
                                              <span className="text-xs text-black font-sans font-medium">
                                                <div className="duration-intwy">
                                                  <div className="minttotime font-bold my-1 text-base text-black">
                                                    <ConvertMinsToTime
                                                      data={
                                                        items.inBound[0].eft
                                                      }
                                                    />
                                                  </div>
                                                  <div className="text-xs stop capitalize font-normal">
                                                    {inBoundCount === 1
                                                      ? "non-stop"
                                                      : inBoundCount === 2
                                                      ? "one-stop"
                                                      : inBoundCount === 3
                                                      ? "two-stop"
                                                      : inBoundCount === 4
                                                      ? "three-stop"
                                                      : null}
                                                  </div>
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="text-center">
                                            <span className="text-base text-black font-bold">
                                              <div className="deslo-way mb-2">
                                                <span className="badge bg-secondary">
                                                  {
                                                    items.inBound[
                                                      inBoundCount - 1
                                                    ].toAirport
                                                  }
                                                </span>
                                              </div>
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                {convertFrom24To12Format(
                                                  items.inBound[
                                                    inBoundCount - 1
                                                  ].reachDate
                                                    .split("T")[1]
                                                    .substring(0, 5)
                                                )}
                                              </div>
                                              <div className="text-gray-500 font-medium text-sm">
                                                {
                                                  items.inBound[
                                                    inBoundCount - 1
                                                  ].reachDate.split("T")[0]
                                                }
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="align-items-end row form-roew-6">
                                        <div className="col-sm-6">
                                          <button
                                            className="downbtnflightt-dt btn btn-outline-secondary  gtinbg-det"
                                            onClick={(e) =>
                                              handleShow2(items.resultID)
                                            }
                                          >
                                            <i className="far fa-hand-point-right mr-1"></i>
                                            Flight Details
                                          </button>
                                        </div>

                                        <div className="col-sm-6">
                                          <div className="text-left">
                                            <label className="btn btn-siteorange done-velres flex-grow-1 m-0 gtinbg gtinbg-det d-flex align-items-center justify-content-center">
                                              <input
                                                type={`radio`}
                                                onClick={(e) =>
                                                  GetOutBound(items)
                                                }
                                                className="form-check-input"
                                              />
                                              Select Now
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      {/*============= end raw =============*/}
                                    </div>
                                  );
                                })}
                              </div>
                              {/* ----------------------------------Second---------------------------------- */}
                            </Tab>
                          </Tabs>
                        </Col>

                        {/* ----------------------------------first---------------------------------- */}
                        <Col xs={12} lg={6} className="HeightRounwayu">
                          <div className="grid grid-cols-1 gap-4 pt-2 pb-1 mb-4 border-bottom">
                            <Row className="align-items-end depflarriv">
                              <Col xs={6} className="flp">
                                <h1 className="text-2xl lg:text-2xl font-bold text-black fapl-re-4">
                                  Departure
                                </h1>
                              </Col>
                            </Row>
                          </div>

                          <div className="scroll-heightrounway">
                            {/* ----------------------------------first---------------------------------- */}
                            {outBound.map((items, i) => {
                              const outBoundCount = items.outBound.length;
                              let text = items.airline;
                              let letter = text.charAt(0);
                              const alirlineLogo =
                                letter === "," ? text.replace(",", "") : text;
                              const alirline_logo = alirlineLogo.substring(
                                0,
                                2
                              );

                              return (
                                <div
                                  key={i}
                                  className="filteroutbound-li fapl-re-6 grid lg:grid-cols-6 grid-cols-1 mb-4 rounded-xl d-flex flex-column roundtripfil"
                                >
                                  {/*============= raw (done)=============*/}
                                  <div className="align-items-center row">
                                    <div className="mdf-col col-xs-12 col-12">
                                      <Row className="align-items-center align-lg-items-start">
                                        <Col xs={6}>
                                          <div className="d-flex flex-column align-items-start">
                                            <div className="text-left">
                                              <div className="outbound-rtp d-inline-block">
                                                <Image
                                                  loader={myLoader}
                                                  src={alirline_logo + ".png"}
                                                  alt={alirline_logo}
                                                  width={50}
                                                  height={50}
                                                  className="rounded"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex-grow=1  text-left">
                                              <span className="text-base text-black  font-bold">
                                                {Result.airline
                                                  .filter(
                                                    (airline) =>
                                                      airline.code ==
                                                      items.airline
                                                  )
                                                  .map((airline, a) => (
                                                    <span
                                                      key={a}
                                                      className="w-full title-airlines"
                                                    >
                                                      {airline.name}
                                                    </span>
                                                  ))}
                                              </span>
                                              <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                {alirline_logo +
                                                  "-" +
                                                  items.outBound[0].flightNo}
                                              </span>
                                            </div>
                                          </div>
                                        </Col>
                                        <Col xs={6} className="text-right">
                                          <div className="w-100 mb-0 from-btms">
                                            <span className="text-lg font-nomal text-black font-sans pr-3 price-1 d-block frmid">
                                              From3
                                            </span>
                                            <span className="text-lg font-bold text-black font-sans price-2">
                                              {currency_Name_rd.currency_Logo}{" "}
                                              {/* {items.fare.grandTotal} */}
                                              {items.fare.adultFare +
                                                items.fare.adultTax +
                                                items.fare.adultMarkup}
                                            </span>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className="col-span-4 lg:pl-14 lg:pr-14 pl-0 pr-0 round-frompx-0">
                                    <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway d-flex w-100 justify-content-between">
                                      <div className="text-center">
                                        <span className="text-base text-black font-bold">
                                          <div className="deslo-way mb-2">
                                            <span className="badge bg-secondary">
                                              {items.outBound[0].fromAirport}
                                            </span>
                                          </div>
                                          <div className="minttotime font-bold my-1 text-base text-black">
                                            {convertFrom24To12Format(
                                              items.outBound[0].depDate
                                                .split("T")[1]
                                                .substring(0, 5)
                                            )}
                                          </div>
                                          <div className="text-gray-500 font-medium text-sm">
                                            {
                                              items.outBound[
                                                outBoundCount - 1
                                              ].reachDate.split("T")[0]
                                            }
                                          </div>
                                        </span>
                                      </div>

                                      <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                        <div className="w-100 text-center">
                                          <div className="time-lineintwy">
                                            <hr></hr>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                              <FontAwesomeIcon icon="fa-solid fa-plane" />
                                              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                            </div>
                                          </div>
                                          <span className="text-xs text-black font-sans font-medium">
                                            <div className="duration-intwy">
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                <ConvertMinsToTime
                                                  data={items.outBound[0].eft}
                                                />
                                              </div>
                                              <div className="text-xs stop capitalize font-normal">
                                                {outBoundCount === 1
                                                  ? "non-stop"
                                                  : outBoundCount === 2
                                                  ? "one-stop"
                                                  : outBoundCount === 3
                                                  ? "two-stop"
                                                  : outBoundCount === 4
                                                  ? "three-stop"
                                                  : null}
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="text-center">
                                        <span className="text-base text-black font-bold">
                                          <div className="deslo-way mb-2">
                                            <span className="badge bg-secondary">
                                              {" "}
                                              {
                                                items.outBound[
                                                  outBoundCount - 1
                                                ].toAirport
                                              }
                                            </span>
                                          </div>
                                          <div className="minttotime font-bold my-1 text-base text-black">
                                            {" "}
                                            {convertFrom24To12Format(
                                              items.outBound[
                                                outBoundCount - 1
                                              ].reachDate
                                                .split("T")[1]
                                                .substring(0, 5)
                                            )}
                                          </div>
                                          <div className="text-gray-500 font-medium text-sm">
                                            {
                                              items.outBound[
                                                outBoundCount - 1
                                              ].reachDate.split("T")[0]
                                            }
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="align-items-end row form-roew-6">
                                    <div className="col-sm-6">
                                      <button
                                        className="downbtnflightt-dt btn btn-outline-secondary  gtinbg-det"
                                        onClick={(e) =>
                                          handleShow2(items.resultID)
                                        }
                                      >
                                        <i className="far fa-hand-point-right mr-1"></i>
                                        Flight Details
                                      </button>
                                    </div>

                                    <div className="col-sm-6">
                                      <div className="text-left">
                                        <label className="btn btn-siteorange done-velres flex-grow-1 m-0 gtinbg gtinbg-det d-flex align-items-center justify-content-center">
                                          <input
                                            type={`radio`}
                                            name="check"
                                            className="form-check-input"
                                            onClick={(e) => GetInBound(items)}
                                          />
                                          Select Now
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  {/*============= end raw =============*/}
                                </div>
                              );
                            })}
                          </div>
                        </Col>
                        {/* ----------------------------------first---------------------------------- */}
                        {/* ----------------------------------Second---------------------------------- */}
                        <Col xs={12} lg={6} className="HeightRounwayu">
                          <div className="grid grid-cols-1 gap-4 pt-2 pb-1 mb-4 border-bottom">
                            <Row className="align-items-end depflarriv">
                              <Col xs={6} className="flp">
                                <h1 className="text-2xl lg:text-2xl font-bold text-black fapl-re-4">
                                  Return
                                </h1>
                              </Col>
                            </Row>
                          </div>

                          <div className="scroll-heightrounway">
                            {inBound.map((items, i) => {
                              const inBoundCount = items.inBound.length;

                              let text = items.airline;
                              let letter = text.charAt(0);
                              const alirlineLogo =
                                letter === "," ? text.replace(",", "") : text;
                              const alirline_logo = alirlineLogo.substring(
                                0,
                                2
                              );

                              return (
                                <div
                                  key={i}
                                  className="filteroutbound-li fapl-re-6 grid lg:grid-cols-6 grid-cols-1 mb-4 rounded-xl d-flex flex-column roundtripfil"
                                >
                                  {/*============= raw (done)=============*/}
                                  <div className="align-items-center row">
                                    <div className="mdf-col col-xs-12 col-12">
                                      <Row className="align-items-center align-lg-items-start">
                                        <Col xs={6}>
                                          <div className="d-flex flex-column align-items-start">
                                            <div className="text-left">
                                              <div className="outbound-rtp d-inline-block">
                                                <Image
                                                  loader={myLoader}
                                                  src={alirline_logo + ".png"}
                                                  alt={alirline_logo}
                                                  width={50}
                                                  height={50}
                                                  className="rounded"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex-grow=1  text-left">
                                              <span className="text-base text-black  font-bold">
                                                {Result.airline
                                                  .filter(
                                                    (airline) =>
                                                      airline.code ==
                                                      items.airline
                                                  )
                                                  .map((airline, a) => (
                                                    <span
                                                      key={a}
                                                      className="w-full title-airlines"
                                                    >
                                                      {airline.name}
                                                    </span>
                                                  ))}
                                              </span>
                                              <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                {alirline_logo +
                                                  "-" +
                                                  items.inBound[0].flightNo}
                                              </span>
                                            </div>
                                          </div>
                                        </Col>
                                        <Col xs={6} className="text-right">
                                          <div className="w-100 mb-0 from-btms">
                                            <span className="text-lg font-nomal text-black font-sans pr-3 price-1 d-block frmid">
                                              From4
                                            </span>
                                            <span className="text-lg font-bold text-black font-sans price-2">
                                              {currency_Name_rd.currency_Logo}{" "}
                                              {/* {items.fare.grandTotal} */}
                                              {items.fare.adultFare +
                                                items.fare.adultTax +
                                                items.fare.adultMarkup}
                                            </span>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                  <div className="col-span-4 lg:pl-14 lg:pr-14 pl-0 pr-0 round-frompx-0">
                                    <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway d-flex w-100 justify-content-between">
                                      <div className="text-center">
                                        <span className="text-base text-black font-bold">
                                          <div className="deslo-way mb-2">
                                            <span className="badge bg-secondary">
                                              {items.inBound[0].fromAirport}
                                            </span>
                                          </div>
                                          <div className="minttotime font-bold my-1 text-base text-black">
                                            {convertFrom24To12Format(
                                              items.inBound[0].depDate
                                                .split("T")[1]
                                                .substring(0, 5)
                                            )}
                                          </div>
                                          <div className="text-gray-500 font-medium text-sm">
                                            {
                                              items.inBound[
                                                inBoundCount - 1
                                              ].reachDate.split("T")[0]
                                            }
                                          </div>
                                        </span>
                                      </div>

                                      <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                        <div className="w-100 text-center">
                                          <div className="time-lineintwy">
                                            <hr></hr>
                                            <div className="d-flex justify-content-between align-items-center">
                                              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                              <FontAwesomeIcon icon="fa-solid fa-plane" />
                                              <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                            </div>
                                          </div>
                                          <span className="text-xs text-black font-sans font-medium">
                                            <div className="duration-intwy">
                                              <div className="minttotime font-bold my-1 text-base text-black">
                                                <ConvertMinsToTime
                                                  data={items.inBound[0].eft}
                                                />
                                              </div>
                                              <div className="text-xs stop capitalize font-normal">
                                                {inBoundCount === 1
                                                  ? "non-stop"
                                                  : inBoundCount === 2
                                                  ? "one-stop"
                                                  : inBoundCount === 3
                                                  ? "two-stop"
                                                  : inBoundCount === 4
                                                  ? "three-stop"
                                                  : null}
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="text-center">
                                        <span className="text-base text-black font-bold">
                                          <div className="deslo-way mb-2">
                                            <span className="badge bg-secondary">
                                              {
                                                items.inBound[inBoundCount - 1]
                                                  .toAirport
                                              }
                                            </span>
                                          </div>
                                          <div className="minttotime font-bold my-1 text-base text-black">
                                            {convertFrom24To12Format(
                                              items.inBound[
                                                inBoundCount - 1
                                              ].reachDate
                                                .split("T")[1]
                                                .substring(0, 5)
                                            )}
                                          </div>
                                          <div className="text-gray-500 font-medium text-sm">
                                            {
                                              items.inBound[
                                                inBoundCount - 1
                                              ].reachDate.split("T")[0]
                                            }
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="align-items-end row form-roew-6">
                                    <div className="col-sm-6">
                                      <button
                                        className="downbtnflightt-dt btn btn-outline-secondary  gtinbg-det"
                                        onClick={(e) =>
                                          handleShow2(items.resultID)
                                        }
                                      >
                                        <i className="far fa-hand-point-right mr-1"></i>
                                        Flight Details
                                      </button>
                                    </div>

                                    <div className="col-sm-6">
                                      <div className="text-left">
                                        <label className="btn btn-siteorange done-velres flex-grow-1 m-0 gtinbg gtinbg-det d-flex align-items-center justify-content-center">
                                          <input
                                            type={`radio`}
                                            name="checkreturn"
                                            defaultChecked
                                            onClick={(e) => GetOutBound(items)}
                                            className="form-check-input"
                                          />
                                          Select Now
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  {/*============= end raw =============*/}
                                </div>
                              );
                            })}
                          </div>
                        </Col>
                        {/* ----------------------------------Second---------------------------------- */}
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>

              {AirResult.filter((items) => items.resultID == modal2).map(
                (items, i) => (
                  <>
                    <Modal
                      className="modalbooknow-classic"
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show2}
                      onHide={handleClose2}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Flight Details</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <Tab.Group>
                          <Tab.List className="flex p-1 lg:w-1/5 w-full   space-x-1  foot rounded-lg d-flex tabsflightm">
                            <Tab
                              key="2"
                              className={({ selected }) =>
                                classNames(
                                  "tablinkbutton-fl w-full py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                                  "",
                                  selected
                                    ? "bg-white text-orangeactive "
                                    : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                                )
                              }
                            >
                              <i className="fa fa-plane-departure"> </i>
                              <span className="ml-3">Flight information</span>
                            </Tab>

                            <a className="tablink-fl">
                              <Tab
                                key="3"
                                className={({ selected }) =>
                                  classNames(
                                    "w-100 py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                                    "focus:outline-none ring-white ring-opacity-60",
                                    selected
                                      ? "bg-white shadow text-orangeactive"
                                      : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                                  )
                                }
                              >
                                <FontAwesomeIcon icon="fa-solid fa-bed" />
                                <span className="ml-3">Fare Rule</span>
                              </Tab>
                            </a>
                          </Tab.List>

                          <Tab.Panels className="w-full rounded-3xl">
                            <Tab.Panel
                              key="2"
                              className={classNames(
                                " rounded-xl  ",
                                " focus:outline-none  ring-white ring-opacity-60"
                              )}
                            >
                              <>
                                <p className="text-gray-700 tracking-wide font-normal text-sm  tracking-wide">
                                  The baggage information is just for reference.
                                  Please Check with airline before check-in. For
                                  more information, visit the airline{"'"}s
                                  official website.
                                </p>

                                {items.outBound ? (
                                  <>
                                    <Row className="my-4">
                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start mb-3"
                                      >
                                        {/* <div className="rounded overflow-hidden">
                              <Image
                                loader={myLoader}
                                src={items.outBound[0].airline}
                                alt="airline"
                                width={50}
                                height={50}
                                className="rounded"
                              />
                            </div> 
                             <p className="flex-grow-1 m-0 pl-4 pt-1">
                            */}
                                        <p className="flex-grow-1 m-0  pt-1">
                                          <b className="font-semibold mb-0 text-xlbbage text-black">
                                            {items.outBound[0].airlineName},{" "}
                                            {items.outBound[0].airline}{" "}
                                            {items.outBound[0].flightNo}
                                          </b>
                                          <br></br>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            Operated by{" "}
                                            {items.outBound[0].airlineName}
                                          </span>
                                        </p>
                                      </Col>
                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start mb-3"
                                      >
                                        <div className="pr-2">
                                          <div className="faround-rfun d-flex align-items-center">
                                            <i className="fa fa-briefcase fa-lg"></i>
                                          </div>
                                        </div>
                                        <div className="pl-2 pt-1">
                                          <p className="font-semibold mb-0 text-xlbbage text-black">
                                            Cabin Baggage
                                          </p>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            15Kg Per Person
                                          </span>
                                        </div>
                                      </Col>

                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start"
                                      >
                                        <div className="pr-2">
                                          <div className="faround-rfun d-flex align-items-center">
                                            <i className="fa fa-luggage-cart fa-lg"></i>
                                          </div>
                                        </div>
                                        <div className="pl-2 pt-1">
                                          <p className="font-semibold mb-0 text-xlbbage text-black">
                                            Check-In Baggage
                                          </p>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            15Kg Per Person
                                          </span>
                                        </div>
                                      </Col>
                                    </Row>
                                  </>
                                ) : (
                                  <>
                                    <Row className="my-4">
                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start mb-3"
                                      >
                                        {/* <div className="rounded overflow-hidden">
                             <Imageloader={myLoader} src={items.outBound[0].airline} alt="airline"width={50} height={50} className="rounded"/>
                            </div> 
                             <p className="flex-grow-1 m-0 pl-4 pt-1">
                            */}
                                        <p className="flex-grow-1 m-0  pt-1">
                                          <b className="font-semibold mb-0 text-xlbbage text-black">
                                            {items.inBound[0].airlineName},{" "}
                                            {items.inBound[0].airline}{" "}
                                            {items.inBound[0].flightNo}
                                          </b>
                                          <br></br>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            Operated by Go Air
                                          </span>
                                        </p>
                                      </Col>
                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start mb-3"
                                      >
                                        <div className="pr-2">
                                          {" "}
                                          <div className="faround-rfun d-flex align-items-center">
                                            {" "}
                                            <i className="fa fa-briefcase fa-lg"></i>{" "}
                                          </div>{" "}
                                        </div>
                                        <div className="pl-2 pt-1">
                                          <p className="font-semibold mb-0 text-xlbbage text-black">
                                            Cabin Baggage
                                          </p>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            7 Kg Per Person
                                          </span>
                                        </div>
                                      </Col>

                                      <Col
                                        xs={12}
                                        xl={4}
                                        className="d-flex align-items-start"
                                      >
                                        <div className="pr-2">
                                          {" "}
                                          <div className="faround-rfun d-flex align-items-center">
                                            {" "}
                                            <i className="fa fa-luggage-cart fa-lg"></i>{" "}
                                          </div>{" "}
                                        </div>
                                        <div className="pl-2 pt-1">
                                          <p className="font-semibold mb-0 text-xlbbage text-black">
                                            Check-In Baggage
                                          </p>
                                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                                            15Kg Per Person
                                          </span>
                                        </div>
                                      </Col>
                                    </Row>
                                  </>
                                )}

                                <hr className="mb-4 mt-2 spbor"></hr>
                                <div className="outbontmy-4">
                                  {items.outBound ? (
                                    <>
                                      {items.outBound.map((outBoundData) => {
                                        return (
                                          <>
                                            <p
                                              className={
                                                "layover text-center " +
                                                (outBoundData.SequenceNumber ==
                                                "0"
                                                  ? "hidden"
                                                  : "")
                                              }
                                            >
                                              <span className="text-lg font-bold">
                                                {" "}
                                                LayoverTime : &nbsp;
                                              </span>
                                              <ConvertMinsToTime
                                                data={outBoundData.layOverTime}
                                              />
                                              <br />
                                              <span className="text-xs">
                                                {" "}
                                                Connecting flight may depart
                                                from different Terminal
                                              </span>
                                            </p>

                                            <div className="filteroutbound-li fapl-re-6 withnospace p-0">
                                              <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3 pb-3 border-bottom">
                                                <div className="text-center cont">
                                                  {AirPortData.filter(
                                                    (item) =>
                                                      item.airportCode ==
                                                      outBoundData.fromAirport
                                                  ).map((item, i) => (
                                                    <>
                                                      <span className="text-base text-black font-bold">
                                                        <div className="deslo-way mb-2">
                                                          <span className="badge bg-secondary">
                                                            {item.airportCode}
                                                          </span>
                                                        </div>
                                                        <div className="my-1">
                                                          {convertFrom24To12Format(
                                                            outBoundData.depDate
                                                              .split("T")[1]
                                                              .substring(0, 5)
                                                          )}
                                                          <br />
                                                          <small className="text-gray-500 font-semibold">
                                                            {item.cityName}{" "}
                                                          </small>
                                                        </div>
                                                        <div className="text-gray-500  text-sm font-medium">
                                                          {item.airportName}
                                                          <div className="text-gray-500 font-medium mt-2 text-sm">
                                                            <span className="mr-2">
                                                              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                                            </span>
                                                            {
                                                              outBoundData.depDate.split(
                                                                "T"
                                                              )[0]
                                                            }
                                                          </div>
                                                        </div>
                                                      </span>
                                                    </>
                                                  ))}
                                                </div>

                                                <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-1 timebline">
                                                  <div className="w-100 text-center">
                                                    <div className="time-lineintwy">
                                                      <hr />
                                                      <div className="d-flex justify-content-between align-items-center">
                                                        <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                        <FontAwesomeIcon icon="fa-solid fa-plane" />
                                                        <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                      </div>
                                                    </div>
                                                    <span className="text-xs text-black font-sans font-medium">
                                                      <div className="duration-intwy" />
                                                    </span>
                                                  </div>
                                                </div>
                                                <div className="text-center cont">
                                                  <div className="w-100">
                                                    {AirPortData.filter(
                                                      (item) =>
                                                        item.airportCode ==
                                                        outBoundData.toAirport
                                                    ).map((item, i) => (
                                                      <>
                                                        <span className="text-base text-black font-bold">
                                                          <div className="deslo-way mb-2">
                                                            <span className="badge bg-secondary">
                                                              {" "}
                                                              {item.airportCode}
                                                            </span>
                                                          </div>
                                                          <div className="my-1">
                                                            {convertFrom24To12Format(
                                                              outBoundData.reachDate
                                                                .split("T")[1]
                                                                .substring(0, 5)
                                                            )}
                                                            <br />
                                                            <small className="text-gray-500 font-semibold">
                                                              {" "}
                                                              {
                                                                item.cityName
                                                              }{" "}
                                                            </small>
                                                          </div>
                                                          <div className="text-gray-500 text-sm font-medium">
                                                            {item.airportName}
                                                            <div className="text-gray-500 font-medium mt-2 text-sm">
                                                              <span className="mr-2">
                                                                <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                                              </span>
                                                              {
                                                                outBoundData.reachDate.split(
                                                                  "T"
                                                                )[0]
                                                              }
                                                            </div>
                                                          </div>
                                                        </span>{" "}
                                                      </>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </>
                                  ) : (
                                    <>
                                      {items.inBound.map((inBoundData) => {
                                        return (
                                          <div className="filteroutbound-li fapl-re-6 withnospace p-0">
                                            <div className="grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3 pb-3 border-bottom">
                                              <div className="text-center cont">
                                                {AirPortData.filter(
                                                  (item) =>
                                                    item.airportCode ==
                                                    inBoundData.fromAirport
                                                ).map((item, i) => (
                                                  <>
                                                    <span className="text-base text-black font-bold">
                                                      <div className="deslo-way mb-2">
                                                        <span className="badge bg-secondary">
                                                          {item.airportCode}
                                                        </span>
                                                      </div>
                                                      <div className="my-1">
                                                        {convertFrom24To12Format(
                                                          inBoundData.depDate
                                                            .split("T")[1]
                                                            .substring(0, 5)
                                                        )}
                                                        <br />
                                                        <small className="text-gray-500 font-semibold">
                                                          {item.cityName}
                                                        </small>
                                                      </div>
                                                      <div className="text-gray-500  text-sm font-medium">
                                                        {item.airportName}
                                                        <div className="text-gray-500 font-medium mt-2 text-sm">
                                                          <span className="mr-2">
                                                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                                          </span>
                                                          {
                                                            inBoundData.depDate.split(
                                                              "T"
                                                            )[0]
                                                          }
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </>
                                                ))}
                                              </div>
                                              <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-1 timebline">
                                                <div className="w-100 text-center">
                                                  <div className="time-lineintwy">
                                                    <hr />
                                                    <div className="d-flex justify-content-between align-items-center">
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                      <FontAwesomeIcon icon="fa-solid fa-plane" />
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                    </div>
                                                  </div>
                                                  <span className="text-xs text-black font-sans font-medium">
                                                    <div className="duration-intwy" />
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="text-center cont">
                                                {AirPortData.filter(
                                                  (item) =>
                                                    item.airportCode ==
                                                    inBoundData.toAirport
                                                ).map((item, i) => (
                                                  <>
                                                    <span className="text-base text-black font-bold">
                                                      <div className="deslo-way mb-2">
                                                        <span className="badge bg-secondary">
                                                          {" "}
                                                          {item.airportCode}
                                                        </span>
                                                      </div>
                                                      <div className="my-1">
                                                        {convertFrom24To12Format(
                                                          inBoundData.reachDate
                                                            .split("T")[1]
                                                            .substring(0, 5)
                                                        )}
                                                        <br />
                                                        <small className="text-gray-500 font-semibold">
                                                          {item.cityName}
                                                        </small>
                                                      </div>
                                                      <div className="text-gray-500 text-sm font-medium">
                                                        {item.airportName}
                                                        <div className="text-gray-500 font-medium mt-2 text-sm">
                                                          <span className="mr-2">
                                                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                                          </span>
                                                          {
                                                            inBoundData.reachDate.split(
                                                              "T"
                                                            )[0]
                                                          }
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </>
                                  )}
                                </div>
                              </>
                            </Tab.Panel>
                          </Tab.Panels>
                          {/*------------ Hotel section ------------ */}

                          <Tab.Panels className="w-full rounded-3xl">
                            <Tab.Panel
                              key="3"
                              className={classNames(
                                " rounded-xl  ",
                                " focus:outline-none  ring-white ring-opacity-60"
                              )}
                            >
                              <>
                                <div className="grid">
                                  <div>
                                    <Table
                                      className="mt-4"
                                      striped
                                      bordered
                                      hover
                                    >
                                      <thead>
                                        <tr>
                                          <th className="text-sm w-32">
                                            Airline
                                          </th>
                                          <th className="text-xs">
                                            Time From the Date of Departure
                                          </th>
                                          <th className="text-xs text-right">
                                            CANCELLATION FEE Airline Fee + HEG
                                            Fee
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr></tr>

                                        <tr>
                                          <td className="text-sm">
                                            {" "}
                                            {items.outBound
                                              ? items.outBound[0].airline
                                              : items.inBound[0].airline}{" "}
                                          </td>
                                          <td>0hours ~ 365days</td>
                                          <td>Non-Refundable</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                  <div>
                                    <Table
                                      className="mt-4"
                                      striped
                                      bordered
                                      hover
                                    >
                                      <thead>
                                        <tr>
                                          <th className="text-sm w-32">
                                            Airline
                                          </th>
                                          <th className="text-xs">
                                            Time From the Date of Departure
                                          </th>
                                          <th className="text-xs text-right">
                                            DATE CHANGE FEES Airline Fee +HEG
                                            Fee + Fare Difference
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr></tr>

                                        <tr>
                                          <td className="text-sm">
                                            {" "}
                                            {items.outBound
                                              ? items.outBound[0].airline
                                              : items.inBound[0].airline}{" "}
                                          </td>
                                          <td>0hours ~ 365days</td>
                                          <td>Non-Refundable</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </div>
                                </div>

                                <div>
                                  <h1 className="text-lg">
                                    Important Information
                                  </h1>
                                  <hr />
                                  <li className="text-sm">
                                    Convenience Fee is non-refundable.
                                  </li>
                                  <li className="text-sm">
                                    Normal Cancellation : Airline cancellation
                                    penalty + Travomint service fee and Balance
                                    amount will be refunded to the same bank
                                    account.
                                  </li>
                                  <li className="text-sm">
                                    Flight Cancellation from Airlines end : Full
                                    Refund in the same bank account after
                                    charging the applicable Travomint service
                                    Fee + payment gateway charges .
                                  </li>
                                  <li className="text-sm">
                                    ConPlease Note: Cancellation terms and
                                    conditions are subject to change without any
                                    notice.
                                  </li>
                                  <li className="text-sm">
                                    Travel related advisory is subject to change
                                    without notice, for the latest update please
                                    check state government websites only.
                                  </li>
                                  <p className="mt-2 text-sm text-black">
                                    The airline fee is indicative. Travomint
                                    does not guarantee the accuracy of this
                                    information. All fees mentioned are per
                                    passenger. Date change charges are
                                    applicable only on selecting the same
                                    airline on a new date. The difference in
                                    fares between the old and the new booking
                                    will also be payable by the user.
                                  </p>
                                </div>
                              </>
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button
                          className="foot"
                          onClick={() => {
                            handleClose2();
                          }}
                        >
                          Continue
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                )
              )}

              <Modal
                className="modalbooknow-classic modal-getfare ver-2"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Get Fare Alerts!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <div className="w-100">
                    <div className="text-center mb-2">
                      <div className="d-inline-block">
                        <div className="faround-rfun d-flex align-items-center">
                          <i className="fa fa-bell"></i>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <p className="text-gray700 font-normal text-base mb-1">
                        Be the first to know when fares drop for the route
                      </p>
                      <p className="font-normal mb-4 text-sm">
                        Mumbai <b>(BOM)</b> to New Delhi <b>(DEL)</b>
                      </p>

                      <div className="subscribe-footerbox d-flex flex-column">
                        <input
                          type="text"
                          className="form-control input-news text-center"
                          placeholder="Enter Email Address"
                        />
                        <div className="w-100">
                          <button className="btn btn-siteorange done-vel mt-2">
                            <span className="mr-2">Sign Up Now!</span>
                            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="m-0 pt-3 pb-1">
                    <a
                      href="/terms"
                      className="font-semibold text-primary text-base"
                    >
                      Terms and Conditions
                    </a>
                  </p>
                </Modal.Body>
              </Modal>

              {/* ------------------------------load---------------------------- */}
              <Modal className="fetching d" show={Loading}>
                <ModalBody className="">
                  <Image src={loaders} width={540} height={260} />
                  {/* <h4 className="text-center">Please wai</h4> */}
                </ModalBody>
              </Modal>

              {/* ------------------------------load---------------------------- */}

              {/*---------------------------- modal for fare alert ------------------- */}
              <Modal
                className="modalbooknow-classic modalgetfare-cheap"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show3}
                onHide={handleClose3}
              >
                <Modal.Header closeButton>
                  <div className="modalgetfare-logo">
                    <Image src={logo} />
                  </div>
                </Modal.Header>
                <ModalBody className="">
                  <Container>
                    <div className="row">
                      <div className="col-xl-12 col-12">
                        <div className="promo regcode-1">
                          <div className="d-flexvpromo">
                            <div className="w-100">
                              <div className="upper">
                                <h2 id="pageviews">
                                  <i className="fa fa-atom"></i>Get Fare Alert{" "}
                                  <font className="bold">
                                    of Cheapest Price & Best Deals
                                  </font>
                                </h2>
                                <div className="Small_Txt">
                                  <p className="text-sm ml-7"></p>
                                </div>
                              </div>
                              <div className="bottom">
                                <div className="inputGetPromo">
                                  {/* <form > */}
                                  <input
                                    type={`email`}
                                    className="forn-control"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                  />
                                  <input
                                    type="submit"
                                    className="btn PromoButton w-1/3"
                                    // onclick={()=>GetfareAlert()}

                                    onClick={() => GetfareAlert()}
                                    value={`Send`}
                                  />
                                  {/* </form> */}
                                </div>

                                <div className="new-policy">
                                  <Row>
                                    <Col xs={12} md={8}>
                                      <span className="font-semibold text-xs d-block text_1">
                                        we will try our best to give you
                                        cheapest fare
                                      </span>
                                    </Col>
                                    <Col xs={12} md={4}>
                                      <div className="font-semibold text-center text_2">
                                        <a href="#">Privacy Policy</a>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <Graterates /> */}
                    </div>
                  </Container>
                </ModalBody>
              </Modal>

              {/*---------------------------- modal for fare alert ------------------- */}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dom_Round_Way;
