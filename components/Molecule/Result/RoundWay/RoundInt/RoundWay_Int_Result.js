import React, { useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import plane from "../../../../../public/Image/plane6.gif";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../../../../../public/Image/logo.png";
import { Tab } from "@headlessui/react";
import Table from "react-bootstrap/Table";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PrinterIcon } from "@heroicons/react/solid";
import {
  authCode,
  domain,
  imgdomain,
  siteID,
  staging,
  testapi,
} from "../../../../static/static";
import Image from "next/image";
import { useRouter } from "next/router";
import { AllData } from "../../../../Redux/ActionType";
import { SelectedData } from "../../../../Feature/Action";
import { ModalBody } from "react-bootstrap";
import FlightHeader from "../../../../Atom/FlightHeader";
import morning from "../../../../../public/Image/morning.svg";
import noon from "../../../../../public/Image/noon.svg";
import planneTicker from "../../../../../public/Image/plane-ticket.png";
import night from "../../../../../public/Image/night.svg";
import evening from "../../../../../public/Image/evening.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loaders from "../../../../../public/Image/load.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RoundWay_Int_Result = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navigate = useRouter();
  const dispatch = useDispatch();
  const { all_Data, selectData, setSlectResult, load } = props;
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const data = useSelector(SelectedData);
  const currencySign = currency_Name_rd.currency_Name;
  const [filtersort, setfiltersort] = useState(false);
  const [show1, setShow1] = useState(false);
  const [flightData, setFlightData] = useState({
    resultID: 1,
    valCarrier: "AC",
    fareType: "RP",
    gdsType: 7,
    cabinClass: 1,
    fare: {
      adultFare: 221.0,
      childFare: 0.0,
      infantFare: 0.0,
      infantWsFare: 0.0,
      adultTax: 104.67,
      childTax: 0.0,
      infantTax: 0.0,
      infantWsTax: 0.0,
      adultMarkup: 15.0,
      childMarkup: 0.0,
      infantMarkup: 0.0,
      infantWsMarkup: 0.0,
      bagFees: 0.0,
      grandTotal: 340.67,
      markupID: 1,
      markupType: "US",
      totalMarkup: 15.0,
      grandOrgTotal: 325.67,
      baseFare: 221.0,
      totalTax: 119.67,
      convenienceFees: 200000.0,
    },
    outBound: [
      {
        SequenceNumber: "0",
        airline: "AC",
        orgAirline: "AC",
        flightID: "",
        flightNo: "7483",
        equipmentType: "E75",
        equipmentTypeDes: "",
        fromAirport: "LGA",
        depDate: "2022-04-28T06:30:00",
        toAirport: "YYZ",
        reachDate: "2022-04-28T08:04:00",
        opratingAirline: "AC",
        resDesignCode: "L",
        sliceAndDiceCode: "O",
        fromTerminal: "B",
        toTerminal: "1",
        cabinClass: 1,
        eft: 94,
        estimateTime: 94,
        layOverTime: 0,
        fareType: "RP",
        isETicketEligible: false,
        airlineName: "AC",
        orgdepDate: "2022-04-28T06:30:00",
        orgreachDate: "2022-04-28T08:04:00",
      },
    ],
    inBound: [
      {
        SequenceNumber: "0",
        airline: "UA",
        orgAirline: "UA",
        flightID: "",
        flightNo: "5538",
        equipmentType: "E7W",
        equipmentTypeDes: "",
        fromAirport: "YYZ",
        depDate: "2022-04-30T17:40:00",
        toAirport: "ORD",
        reachDate: "2022-04-30T18:40:00",
        opratingAirline: "UA",
        resDesignCode: "G",
        sliceAndDiceCode: "O",
        fromTerminal: "1",
        toTerminal: "2",
        cabinClass: 1,
        eft: 120,
        estimateTime: 358,
        layOverTime: 102,
        fareType: "RP",
        isETicketEligible: false,
        airlineName: "UA",
        orgdepDate: "2022-04-30T17:40:00",
        orgreachDate: "2022-04-30T18:40:00",
      },
      {
        SequenceNumber: "1",
        airline: "UA",
        orgAirline: "UA",
        flightID: "",
        flightNo: "2231",
        equipmentType: "320",
        equipmentTypeDes: "",
        fromAirport: "ORD",
        depDate: "2022-04-30T20:22:00",
        toAirport: "LGA",
        reachDate: "2022-04-30T23:38:00",
        opratingAirline: "UA",
        resDesignCode: "G",
        sliceAndDiceCode: "I",
        fromTerminal: "1",
        toTerminal: "B",
        cabinClass: 1,
        eft: 136,
        estimateTime: 358,
        layOverTime: 0,
        fareType: "RP",
        isETicketEligible: false,
        airlineName: "UA",
        orgdepDate: "2022-04-30T20:22:00",
        orgreachDate: "2022-04-30T23:38:00",
      },
    ],
    booking_token: "",
    consId: "",
    outEFT: 94,
    inEFT: 358,
    maxSeat: 2,
    airline: "AC,UA",
  });
  const [sort, setsort] = useState([]);
  const [sortStop, setsortStop] = useState([]);
  const [save, setSave] = useState([]);
  const airline = all_Data.airline;
  const airport = all_Data.airport;

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
  const handleClose1 = () => setShow1(false);
  const handleShow2 = (item) => {
    setShow1(true);
    setFlightData(item);
  };

  const checkFare_Rule = async (item) => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      flightResult: item,
      adults: all_Data.adults,
      child: all_Data.child,
      infants: all_Data.infants,
      infantsWs: 0,
      currencyCode: currencySign,
      siteID: siteID,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const Apidata = await fetch(
      `${testapi}/Flights/GetFlightFareRule?authcode=${authCode}`,
      requestOptions
    );
    const api_Result = await Apidata.json();

    const { fare, ...rest } = item;
    const addSOmethings = {
      fare: { ...api_Result.fare, markupID: item.fare.markupID },
    };

    // const abc = { ...datas, markupID: items.fare.markupID };
    const flight_Data = { ...rest, ...addSOmethings };

    if (
      api_Result.flightChecked === false ||
      api_Result.flightChecked === true
    ) {
      dispatch({
        type: AllData,
        payload: {
          AllFlight_data: all_Data,
          SelectedDatas: flight_Data,
          inBoundData: {},
          Objdata: data,
        },
      });
      navigate.push("/flight/checkout");

      // navigate.push({
      //   pathname: "/flight/checkout",
      //   query: {
      //     flight_data: JSON.stringify(flight_Data),
      //     AllFlight_Data: JSON.stringify(all_Data),
      //   },
      // });
    }
  };

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const airlinePrice = all_Data.flightResult.reduce(function (r, a) {
    r[a.airline] = r[a.airline] || [];
    r[a.airline].push(a);
    return r;
  }, Object.create(null));

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

  const selectFile = (e) => {
    const checked = e.target.checked;
    const airlineFly = e.target.value;

    if (airlineFly == airlineFly) {
      {
        checked
          ? setSlectResult([...sort, ...airlinePrice[airlineFly]])
          : setSlectResult(sort.filter((items) => items.airline != airlineFly));
      }
      {
        checked
          ? setsort([...sort, ...airlinePrice[airlineFly]])
          : setsort(sort.filter((items) => items.airline != airlineFly));
      }
    }
  };

  var Stops = [];
  if (load) {
    if (selectData.filter((item) => item.outBound == true)) {
      Stops.push(
        selectData
          .filter((item) => !item.outBound[1])
          .map((item) => {
            return item;
          })
      );
    }
    if (selectData.filter((item) => item.outBound == true)) {
      Stops.push(
        selectData
          .filter((item) => item.outBound[1])
          .map((item) => {
            return item;
          })
      );
    }
    if (selectData.filter((item) => item.outBound == true)) {
      Stops.push(
        selectData
          .filter((item) => item.outBound[2])
          .map((item) => {
            return item;
          })
      );
    }
    if (selectData.filter((item) => item.outBound == true)) {
      Stops.push(
        selectData
          .filter((item) => item.outBound[3])
          .map((item) => {
            return item;
          })
      );
    }
    if (selectData.filter((item) => item.outBound == true)) {
      Stops.push(
        selectData
          .filter((item) => item.outBound[4])
          .map((item) => {
            return item;
          })
      );
    }
  }

  const stopFunction = (e) => {
    const checking = e.target.checked;
    const value = e.target.value;

    if (value == value) {
      if (checking == true) {
        setSave(selectData);

        setsortStop(selectData);
        setSlectResult([
          ...sortStop,
          ...selectData.filter((items) => items.outBound.length == value),
        ]);
      } else {
        setSlectResult(save.filter((items) => items.outBound.length != value));
      }
    }
  };
  function departure(e) {
    if (e == "morning") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 5 &&
            items.outBound[0].depDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 12 &&
            items.outBound[0].depDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 18 &&
            items.outBound[0].depDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 0 &&
            items.outBound[0].depDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  function arrival(e) {
    if (e == "morning") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 5 &&
            items.outBound[0].reachDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 12 &&
            items.outBound[0].reachDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 18 &&
            items.outBound[0].reachDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setSlectResult([
        ...all_Data.selectData.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 0 &&
            items.outBound[0].reachDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  const handleShow = (e) => {
    //  setShow(true);
    //  const detail = e;
    //  setmodal(detail);
  };

  useEffect(() => {
    if (selectData.length === 0) {
      setSlectResult(all_Data.flightResult);
    }
  }, [selectData]);

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}.png`;
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
  // console.log("mail",Email)

  const GetfareAlert = () => {
    const fromCity = all_Data.airport.find(
      (item) =>
        item.airportCode === all_Data.flightResult[0].outBound[0].fromAirport
    );
    const toCity = all_Data.airport.find(
      (item) =>
        item.airportCode === all_Data.flightResult[0].outBound[0].toAirport
    );

    const fromCity_replace = fromCity.airportName.replace(" ", "-");
    const toCity_replace = toCity.airportName.replace(" ", "-");

    var axios = require("axios");
    var datas = JSON.stringify({
      siteName: "travomint.com",
      siteUrl: "https://www.travomint.com",
      agentName: "Travomint",
      depcity: all_Data.flightResult[0].outBound[0].fromAirport,
      arrcity: all_Data.flightResult[0].outBound[0].toAirport,
      currencys: currency_Name_rd.currency_Name,
      dealss: [
        {
          // froCity: all_Data.flightResult[0].outBound[0].fromAirportName,
          // toCity: all_Data.flightResult[0].outBound[0].toAirportName,
          froCity: all_Data.flightResult[0].outBound[0].fromAirport,
          toCity: all_Data.flightResult[0].outBound[0].toAirport,
          froCityName: fromCity_replace,
          toCityName: toCity_replace,
          depDate: all_Data.flightResult[0].outBound[0].depDate.split("T")[0],
          retDate:
            (data.tripType === 2 || data.tripType === "2") &&
            all_Data.flightResult[0].outBound[0].depDate.split("T")[0],
          airline: all_Data.flightResult[0].outBound[0].airline,
          tripType: data.tripType,
          cabinClass: all_Data.flightResult[0].cabinClass,
          currency: currency_Name_rd.currency_Name,
          totalPrice: all_Data.flightResult[0].fare.grandTotal,
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
          url: "http://staging.nobelmail.net/SMTP/SendEMailVersion2?authcode=Trav3103s987876",
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
            console.log("error");
          });
      })
      .catch(function (error) {
        console.log("error");
      });
  };

  // -------fare alert popup ------

  const [Loading, setLoading] = useState(false);

  return (
    <>
      <div className="oneway-flres position-relative p-0">
        <Container>
          <Row>
            <Col xl={3} xs={12}>
              {/* side filter */}

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
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
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
                    <div className="W-100">
                      <div className="bg-gray-50 rounded-xl mt-xl-3">
                        <div className="grid grid-cols-1 px-3 py-3 border-bottom">
                          <div className="grid grid-cols-2 text-left">
                            <p className="text-lg font-bold mb-0 text-black">
                              Filters
                            </p>
                            <div onClick={() => setSlectResult(selectData)}>
                              <p className="text-right mb-0 text-gray-500 font-normal reset-pointer">
                                Reset All
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="px-2 py-2 grid grid-cols-1">
                          <div className="grid grid-cols-1 text-left">
                            {/* -----------------------------choose stop ----------------------------------- */}
                            {/* <Disclosure defaultOpen="true">
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="flex  justify-between w-full px-2 py-2 mb-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                                      <span className="mb-0 text-black font-semibold">Choose Stop</span>
                                      <ChevronUpIcon
                                        className={`${open ? "transform rotate-180" : ""
                                          } w-5 h-5 text-gray-900`}
                                      />
                                    </Disclosure.Button>

                                    {Stops.filter((items) => items.length > 0).map(
                      (items, i) => (
                        <Disclosure.Panel
                          key={i}
                          className="px-2 pt-1    rounded-2xl pb-2 text-sm text-gray-900"
                        >
                          {items[0].outBound.length == 1 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Non-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 2 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                One-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 3 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                defaultChecked="true"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Two-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 4 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                defaultChecked="true"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Three-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 5 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                defaultChecked="true"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Four-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 6 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                defaultChecked="true"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Five-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}

                          {items[0].outBound.length == 7 ? (
                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                defaultChecked="true"
                                value={items[0].outBound.length}
                                onClick={(e) => stopFunction(e)}
                              />
                              <span className=" text-xs font-sans font-bold">
                                {" "}
                                Six-Stop
                              </span>{" "}
                              <span className="float-right">
                                <i className="fa fa-rupee-sign"></i>{" "}
                                {items[0].fare.grandTotal}
                              </span>
                            </div>
                          ) : (
                            <span></span>
                          )}
                        </Disclosure.Panel>
                      )
                    )}
                                  </>
                                )}
                              </Disclosure> */}

                            {/* -----------------------------choose stop ----------------------------------- */}
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
                                      onClick={(e) => departure("afternoon")}
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
                                      {airline
                                        .filter(
                                          (item) =>
                                            item.code == items.airlineCode
                                        )
                                        .map((item, index) => (
                                          <div className="d-flex mb-2">
                                            <div className="flex-grow-1 themeascheckbox font-14">
                                              <div className="form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  value={item.code}
                                                  onClick={(e) => selectFile(e)}
                                                  id={"flexairresultcd-" + i}
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
                                              {currency_Name_rd.currency_Logo}{" "}
                                              {items.firstPrice}
                                            </div>
                                          </div>
                                        ))}
                                    </>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div> */}
                    </div>

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
              {/* 0------------------------------------airline select----------------------------------------- */}
              <Row className="formrow-airlines overflow-auto flex-nowrap mt-3 mt-xl-0 sds-1">
                {getUniqueSearches.map((items, i) => (
                  <Col key={i} xs={6} md={3} xxl={2} className="mb-3">
                    <div
                      key={i}
                      className="text-center boxalr"
                      onClick={() => setFlightData(items.alldata)}
                    >
                      <div className="d-flex align-items-center mb-0">
                        <div className=" justify-center inline-flex flex-wrap">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airlineCode}.png`}
                            className="w-10 rounded"
                          />
                        </div>
                        <p className="text-black font-semibold text-sm mb-0 flex-grow-1 text-right pl-3">
                          {" "}
                          {items.airlineCode}{" "}
                        </p>
                      </div>

                      <div className="text-center amount text-white">
                        {currency_Name_rd.currency_Logo}{" "}
                        {items.firstPrice.toFixed(2, 0)}
                      </div>
                    </div>
                  </Col>
                ))}

                {/* <Col xs={12} sm={6} md={3} xxl={2} className="mb-3">
                <div
                  className="text-center boxalr fapl-re-4 h-100 d-flex justify-content-center align-items-center " onClick={() => setFlightData(all_Data.flightResult)}>
                  <div className="font-semibold text-base">View All</div>
                </div>
              </Col> */}
              </Row>

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
                            <span className="ml-2 font-medium">Filter</span>
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

              {/* 0------------------------------------airline select----------------------------------------- */}

              <div className="grid grid-cols-1 gap-4 mb-4 border-bottom bclr-gry"></div>

              {selectData.map((item, i) => {
                const outdata = item.outBound[0];
                const indata = item.inBound[0];
                // Out Bound
                const outLength = item.outBound.length;
                const outtoAirport = item.outBound[outLength - 1].toAirport;
                const outreachDate = item.outBound[outLength - 1].reachDate;
                // In Bound
                const inLength = item.inBound.length;
                const intoAirport = item.inBound[inLength - 1].toAirport;
                const inreachDate = item.inBound[inLength - 1].reachDate;
                return (
                  <>
                    <div
                      className="filteroutbound-li depbadge-mhg fapl-re-6 mb-5 rounded-xl"
                      key={i}
                    >
                      <div className="d-flex flex-column flex-lg-row depbadge-dflex">
                        <div className="flex-grow-1">
                          {/*------- Departure -------*/}
                          <div className="relative d-flex flex-column flex-sm-row depbadge-wrp">
                            <div className="absolute-depbadge">
                              <span class="badge depbadge">
                                <span className="mr-2 depbadge-text">
                                  <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
                                </span>
                                Departure
                              </span>
                            </div>
                            <div className="align-items-center row">
                              <div className="mdf-col col-12 colw-188">
                                <div className="d-flex flex-row flex-sm-column align-items-start justify-content-start">
                                  <div className="text-left align-self-start">
                                    <div className="outbound-rtp d-inline-block">
                                      <Image
                                        loader={myLoader}
                                        src={item.outBound[0].airline}
                                        alt="airline"
                                        width={50}
                                        height={50}
                                        className="rounded"
                                      />
                                    </div>
                                  </div>
                                  <span className="text-base text-black  font-bold">
                                    <span className="w-full title-airlines">
                                      {airline
                                        .filter(
                                          (airline, i) =>
                                            airline.code === outdata.airline
                                        )
                                        .map((airlines) => airlines.name)}
                                    </span>
                                  </span>
                                  <div className="flex-grow-1  text-left text-base text-black  font-bold">
                                    <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                      {outdata.airline}-{outdata.flightNo}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 pl-timeline">
                              <div className="hgh-5 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-1">
                                <div className="text-center">
                                  <span className="text-lg text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {outdata.fromAirport}
                                      </span>
                                    </div>
                                    <div className="my-1">
                                      {convertFrom24To12Format(
                                        outdata.depDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                    </div>
                                  </span>
                                </div>
                                <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                  <div className="w-100 text-center pt-1">
                                    <div className="time-lineintwy">
                                      <hr />
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
                                            data={outdata.eft}
                                          />
                                        </div>
                                        <div className="text-xs stop capitalize font-normal">
                                          {outLength === 1
                                            ? "Non-stop"
                                            : outLength === 2
                                            ? "One-Stop"
                                            : outLength === 3
                                            ? "Two-Stop"
                                            : outLength === 4
                                            ? "Three-Stop"
                                            : null}
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <span className="text-lg text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {outtoAirport}
                                      </span>
                                    </div>
                                    <div className=" my-1">
                                      {convertFrom24To12Format(
                                        outreachDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/*------- Return -------*/}
                          <div className="relative d-flex flex-column flex-sm-row depbadge-wrp">
                            <div className="absolute-depbadge">
                              <span class="badge depbadge return">
                                <span className="mr-2 depbadge-text">
                                  <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
                                </span>
                                Return
                              </span>
                            </div>
                            <div className="align-items-center row">
                              <div className="mdf-col col-12 colw-188">
                                <div className="d-flex flex-row flex-sm-column align-items-start justify-content-start">
                                  <div className="text-left align-self-start">
                                    <div className="outbound-rtp d-inline-block">
                                      <Image
                                        loader={myLoader}
                                        src={indata.airline}
                                        alt="airline"
                                        width={50}
                                        height={50}
                                        className="rounded"
                                      />
                                    </div>
                                  </div>
                                  <span className="text-base text-black  font-bold">
                                    <span className="w-full title-airlines">
                                      {airline
                                        .filter(
                                          (airline, i) =>
                                            airline.code === indata.airline
                                        )
                                        .map((airlines) => airlines.name)}
                                    </span>
                                  </span>
                                  <div className="flex-grow-1  text-left text-base text-black  font-bold">
                                    <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                      {indata.airline}-{indata.flightNo}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 pl-timeline">
                              <div className="hgh-5 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-1">
                                <div className="text-center">
                                  <span className="text-lg text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {indata.fromAirport}
                                      </span>
                                    </div>
                                    <div className="my-1">
                                      {convertFrom24To12Format(
                                        indata.depDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                    </div>
                                  </span>
                                </div>
                                <div className="col-span-2 flex-grow-1 px-3 pt-2 dd-2">
                                  <div className="w-100 text-center pt-1">
                                    <div className="time-lineintwy">
                                      <hr />
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
                                            data={indata.eft}
                                          />
                                        </div>
                                        <div className="text-xs stop capitalize font-normal">
                                          {inLength === 1
                                            ? "Non-stop"
                                            : inLength === 2
                                            ? "One-Stop"
                                            : inLength === 3
                                            ? "Two-Stop"
                                            : inLength === 4
                                            ? "Three-Stop"
                                            : null}
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <span className="text-lg text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {intoAirport}
                                      </span>
                                    </div>
                                    <div className=" my-1">
                                      {convertFrom24To12Format(
                                        inreachDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-bk bg-orangegf-50 d-flex flex-column justify-content-center">
                          <div className="mdf-col mb-4 text-center">
                            <button
                              className="downbtnflightt-dt btn btn-outline-secondary"
                              onClick={(e) => handleShow2(item)}
                            >
                              <i className="far fa-hand-point-right mr-1"></i>
                              Flight Deatils
                            </button>
                          </div>
                          <div className="align-items-end align-items-lg-start row">
                            <div className="col-lg-12 col-6">
                              <div className="w-100 mb-3 from-btms text-center">
                                <span className="text-lg font-nomal text-black font-sans price-1 d-block frmid">
                                  From
                                </span>
                                <span className="text-lg font-bold text-black font-sans price-2">
                                  {currency_Name_rd.currency_Logo}{" "}
                                  {item.fare.grandTotal.toFixed(2, 0)}
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-12 col-6">
                              <div className="text-left">
                                <button
                                  className="btn btn-siteorange done-velres"
                                  type="button"
                                  onClick={() => checkFare_Rule(item)}
                                >
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>

        <Modal
          className="modalbooknow-classic"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show1}
          onHide={handleClose1}
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
                      The baggage information is just for reference. Please
                      Check with airline before check-in. For more information,
                      visit the airline
                      {"'"}s official website.
                    </p>

                    <Row className="my-4">
                      <Col
                        xs={12}
                        xl={4}
                        className="d-flex align-items-start mb-3"
                      >
                        <div className="rounded overflow-hidden">
                          <Image
                            loader={myLoader}
                            src={flightData.outBound[0].airline}
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            className="rounded"
                          />
                        </div>
                        <p className="flex-grow-1 m-0 pl-4 pt-1">
                          <b className="font-semibold mb-0 text-xlbbage text-black">
                            {flightData.outBound[0].airlineName},{" "}
                            {flightData.outBound[0].airline}
                            {flightData.outBound[0].flightNo}
                          </b>
                          <br></br>
                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm">
                            Operated by {flightData.outBound[0].airlineName}
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
                            {/* {flightData.outBound[0].cabinBaggage} Per Person */}{" "}
                            7 Kg Per Person
                          </span>
                        </div>
                      </Col>

                      <Col xs={12} xl={4} className="d-flex align-items-start">
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
                            15kg Per Person
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mb-4 mt-2 spbor"></hr>

                    {/* -----------------------departure --------------------------- */}

                    <div className="relative w-100 outbontmy-4 pt-2">
                      <div className="absolute-depbadge">
                        <span class="badge depbadge">
                          <span className="mr-2 depbadge-text">
                            <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
                          </span>
                          Departure
                        </span>
                      </div>
                      <div className="filteroutbound-li fapl-re-6 withnospace p-1 asp">
                        {flightData.outBound.map((items, i) => {
                          return (
                            <>
                              <p
                                className={
                                  "layover text-center " +
                                  (items.layOverTime == 0 ? "hidden" : "")
                                }
                              >
                                <span className="text-lg font-bold">
                                  {" "}
                                  LayoverTime : &nbsp;
                                </span>
                                <ConvertMinsToTime data={items.layOverTime} />
                                <br />
                                <span className="text-xs">
                                  {" "}
                                  Connecting flight may depart from different
                                  Terminal
                                </span>
                              </p>

                              <div className="hgh-4z grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-1 pb-3 border-bottom">
                                <div className="text-center cont">
                                  <span className="text-base text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.fromAirport
                                          )
                                          .map((airports) => {
                                            return (
                                              <> {airports.airportCode} </>
                                            );
                                          })}
                                      </span>
                                    </div>
                                    <div className="my-1">
                                      {convertFrom24To12Format(
                                        items.depDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                      <br></br>
                                      {airport
                                        .filter(
                                          (item) =>
                                            item.airportCode ==
                                            items.fromAirport
                                        )
                                        .map((airports) => {
                                          return (
                                            <>
                                              <b
                                                key={i}
                                                className="text-gray-600 font-semibold"
                                              >
                                                {airports.cityName}
                                              </b>
                                            </>
                                          );
                                        })}
                                    </div>

                                    <div className="text-gray-500 font-normal">
                                      {airport
                                        .filter(
                                          (item) =>
                                            item.airportCode ==
                                            items.fromAirport
                                        )
                                        .map((airports) => {
                                          return <>{airports.airportName}</>;
                                        })}{" "}
                                      <br></br>
                                      <span>
                                        {airline
                                          .filter(
                                            (item) => item.code == items.airline
                                          )
                                          .map(
                                            (airlines) => airlines.name
                                          )}{" "}
                                        ({items.airline})
                                      </span>
                                    </div>
                                  </span>
                                </div>
                                <div className="w-100 text-center px-2  px-md-0  timebline">
                                  <div className="w-100 text-center pt-1">
                                    <div className="time-lineintwy">
                                      <hr></hr>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                        <FontAwesomeIcon icon="fa-solid fa-plane" />
                                        <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                      </div>
                                    </div>

                                    <span className="text-xs text-black font-sans font-medium">
                                      <div className="duration-intwy"></div>
                                    </span>
                                  </div>
                                </div>

                                <div className="text-center cont">
                                  <span className="text-base text-black font-bold">
                                    <div className="deslo-way mb-2">
                                      <span className="badge bg-secondary">
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.toAirport
                                          )
                                          .map((airports) => {
                                            return <>{airports.airportCode}</>;
                                          })}
                                      </span>
                                    </div>

                                    <div className="mt-1">
                                      {convertFrom24To12Format(
                                        items.reachDate
                                          .split("T")[1]
                                          .substring(0, 5)
                                      )}
                                      <br></br>
                                      {airport
                                        .filter(
                                          (item) =>
                                            item.airportCode == items.toAirport
                                        )
                                        .map((airports) => {
                                          return (
                                            <>
                                              <b className="text-gray-600 font-semibold">
                                                {airports.cityName}
                                              </b>
                                            </>
                                          );
                                        })}
                                    </div>

                                    <div className="text-gray-500 font-normal">
                                      {airport
                                        .filter(
                                          (item) =>
                                            item.airportCode == items.toAirport
                                        )
                                        .map((airports) => {
                                          return <>{airports.airportName}</>;
                                        })}
                                      <br></br>
                                      <span>
                                        {airline
                                          .filter(
                                            (item) => item.code == items.airline
                                          )
                                          .map((airlines) => (
                                            <>({items.airline})</>
                                          ))}
                                      </span>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    {/*---------------------- departure --------------------------- */}

                    {/* ---------------------return----------------- */}

                    <div>
                      {/* <div className="clearfix my-2 py-3"></div> */}

                      <div className="relative w-100 outbontmy-4 pt-2 mt-5">
                        <div className="absolute-depbadge">
                          <span class="badge depbadge return">
                            <span className="mr-2 depbadge-text">
                              <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
                            </span>
                            Return
                          </span>
                        </div>

                        <div className="filteroutbound-li fapl-re-6 withnospace p-1 asp">
                          {flightData.inBound.map((items, i) => {
                            return (
                              <>
                                <div
                                  className="hgh-4z grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 
                justify-content-between mb-1 pb-3 border-bottom"
                                  key={i}
                                >
                                  <div className="text-center cont">
                                    <span className="text-base text-black font-bold">
                                      <div className="deslo-way mb-2">
                                        <span className="badge bg-secondary">
                                          {airport
                                            .filter(
                                              (item) =>
                                                item.airportCode ==
                                                items.fromAirport
                                            )
                                            .map((airports) => {
                                              return (
                                                <> {airports.airportCode} </>
                                              );
                                            })}
                                        </span>
                                      </div>
                                      <div className="my-1">
                                        {convertFrom24To12Format(
                                          items.depDate
                                            .split("T")[1]
                                            .substring(0, 5)
                                        )}
                                        <br></br>
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.fromAirport
                                          )
                                          .map((airports) => {
                                            return (
                                              <>
                                                {" "}
                                                <b
                                                  key={i}
                                                  className="text-gray-600 font-semibold"
                                                >
                                                  {" "}
                                                  {airports.cityName}{" "}
                                                </b>{" "}
                                              </>
                                            );
                                          })}
                                      </div>

                                      <div className="text-gray-500 font-normal">
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.fromAirport
                                          )
                                          .map((airports) => {
                                            return (
                                              <> {airports.airportName} </>
                                            );
                                          })}

                                        <span>
                                          {airline
                                            .filter(
                                              (item) =>
                                                item.code == items.airline
                                            )
                                            .map(
                                              (airlines) => airlines.name
                                            )}{" "}
                                          ({items.airline})
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                  <div className="w-100 text-center px-2  px-md-0  timebline">
                                    <div className="w-100 text-center pt-1">
                                      <div className="time-lineintwy">
                                        <hr></hr>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                          <FontAwesomeIcon icon="fa-solid fa-plane" />
                                          <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                        </div>
                                      </div>

                                      <span className="text-xs text-black font-sans font-medium">
                                        <div className="duration-intwy"></div>
                                      </span>
                                    </div>
                                  </div>

                                  <div className="text-center cont">
                                    <span className="text-base text-black font-bold">
                                      <div className="deslo-way mb-2">
                                        <span className="badge bg-secondary">
                                          {airport
                                            .filter(
                                              (item) =>
                                                item.airportCode ==
                                                items.toAirport
                                            )
                                            .map((airports) => {
                                              return (
                                                <> {airports.airportCode} </>
                                              );
                                            })}
                                        </span>
                                      </div>

                                      <div className="mt-1">
                                        {airline
                                          .filter(
                                            (item) => item.code == items.airline
                                          )
                                          .map((airlines) => (
                                            <>
                                              {" "}
                                              {convertFrom24To12Format(
                                                items.reachDate
                                                  .split("T")[1]
                                                  .substring(0, 5)
                                              )}{" "}
                                            </>
                                          ))}

                                        <br></br>
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.toAirport
                                          )
                                          .map((airports) => {
                                            return (
                                              <>
                                                {" "}
                                                <b className="text-gray-600 font-semibold">
                                                  {" "}
                                                  {airports.cityName}{" "}
                                                </b>{" "}
                                              </>
                                            );
                                          })}
                                      </div>

                                      <div className="text-gray-500 font-normal">
                                        {airport
                                          .filter(
                                            (item) =>
                                              item.airportCode ==
                                              items.toAirport
                                          )
                                          .map((airports) => {
                                            return (
                                              <> {airports.airportName} </>
                                            );
                                          })}
                                        <br></br>
                                        <span>
                                          {airline
                                            .filter(
                                              (item) =>
                                                item.code == items.airline
                                            )
                                            .map(
                                              (airlines) => airlines.name
                                            )}{" "}
                                          ({items.airline})
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <p
                                  className={
                                    "layover text-center " +
                                    (items.layOverTime == 0 ? "hidden" : "")
                                  }
                                >
                                  <span className="text-lg font-bold">
                                    {" "}
                                    LayoverTime : &nbsp;
                                  </span>
                                  <ConvertMinsToTime data={items.layOverTime} />
                                  <br />
                                  <span className="text-xs">
                                    {" "}
                                    Connecting flight may depart from different
                                    Terminal
                                  </span>
                                </p>
                                {/* <Modal.Footer >
          <Button className="foot" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {/* ---------------------return----------------- */}
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
                        <Table className="mt-4" striped bordered hover>
                          <thead>
                            <tr>
                              <th className="text-sm w-32">Airline</th>
                              <th className="text-xs">
                                Time From the Date of Departure
                              </th>
                              <th className="text-xs text-right">
                                CANCELLATION FEE Airline Fee + HEG Fee
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>

                            <tr>
                              <td className="text-sm">
                                {" "}
                                {flightData.outBound[0].airline}
                              </td>
                              <td>0hours ~ 365days</td>
                              <td>Non-Refundable</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div>
                        <Table className="mt-4" striped bordered hover>
                          <thead>
                            <tr>
                              <th className="text-sm w-32">Airline</th>
                              <th className="text-xs">
                                Time From the Date of Departure
                              </th>
                              <th className="text-xs text-right">
                                DATE CHANGE FEES Airline Fee +HEG Fee + Fare
                                Difference
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>

                            <tr>
                              <td className="text-sm">
                                {" "}
                                {flightData.outBound[0].airline}
                              </td>
                              <td>0hours ~ 365days</td>
                              <td>Non-Refundable</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    <div>
                      <h1 className="text-lg">Important Information</h1>
                      <hr />
                      <li className="text-sm">
                        Convenience Fee is non-refundable.
                      </li>
                      <li className="text-sm">
                        Normal Cancellation : Airline cancellation penalty +
                        Travomint service fee and Balance amount will be
                        refunded to the same bank account.
                      </li>
                      <li className="text-sm">
                        Flight Cancellation from Airlines end : Full Refund in
                        the same bank account after charging the applicable
                        Travomint service Fee + payment gateway charges .
                      </li>
                      <li className="text-sm">
                        ConPlease Note: Cancellation terms and conditions are
                        subject to change without any notice.
                      </li>
                      <li className="text-sm">
                        Travel related advisory is subject to change without
                        notice, for the latest update please check state
                        government websites only.
                      </li>
                      <p className="mt-2 text-sm text-black">
                        The airline fee is indicative. Travomint does not
                        guarantee the accuracy of this information. All fees
                        mentioned are per passenger. Date change charges are
                        applicable only on selecting the same airline on a new
                        date. The difference in fares between the old and the
                        new booking will also be payable by the user.
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
                handleClose1();
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

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
                                  we will try our best to give you cheapest fare
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

        {/* ------------------------------load---------------------------- */}
        <Modal className="fetching d" show={Loading}>
          <ModalBody className="">
            <Image src={loaders} width={540} height={260} />
            {/* <h4 className="text-center">Please wai</h4> */}
          </ModalBody>
        </Modal>

        {/* ------------------------------load---------------------------- */}
      </div>
    </>
  );
};

export default RoundWay_Int_Result;
