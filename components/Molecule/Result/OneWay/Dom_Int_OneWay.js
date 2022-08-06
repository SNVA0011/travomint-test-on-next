import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import plane from "../../../../public/Image/plane6.gif";
import Button from "react-bootstrap/Button";
import { Dialog, Transition } from "@headlessui/react";
import logo from "../../../../public/Image/logo.png";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PrinterIcon } from "@heroicons/react/solid";
import { SelectedData } from "../../../Feature/Action";
import { Tab } from "@headlessui/react";
import Table from "react-bootstrap/Table";
import {
  authCode,
  domain,
  siteID,
  staging,
  testapi,
} from "../../../static/static";
import loaders from "../../../../public/Image/load.gif";
import { ModalBody } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import morning from "../../../../public/Image/morning.svg";
import noon from "../../../../public/Image/noon.svg";
import night from "../../../../public/Image/night.svg";
import evening from "../../../../public/Image/evening.svg";
import { AllData } from "../../../Redux/ActionType";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const Dom_Int_OneWay = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { allData, load } = props;
  const TotalTime = 0;

  const navigate = useRouter();
  const dispatch = useDispatch();

  const Result = allData;
  const flightResult = Result.flightResult;
  const airport = Result.airport;
  const airline = Result.airline;

  const [filtersort, setfiltersort] = useState(false);
  const [sort, setsort] = useState([]);
  const [sortStop, setsortStop] = useState({});
  //  const [load, setLoad] = useState(false);
  const [modal, setmodal] = useState(0);
  const [save, setSave] = useState([]);
  const [AirResult, setAirResult] = useState(flightResult);
  const [AirResult2, setAirResult2] = useState(flightResult);

  const handleClose1 = () => setShow1(false);
  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };

  // const [aatt, setAatt] = useState([]);
  const [flightData, setFlightData] = useState({
    resultID: 1,
    valCarrier: "SG",
    fareType: "RP",
    gdsType: 12,
    cabinClass: 1,
    fare: {
      adultFare: 6534.0,
      childFare: 0.0,
      infantFare: 0.0,
      infantWsFare: 0.0,
      adultTax: 846.0,
      childTax: 0.0,
      infantTax: 0.0,
      infantWsTax: 0.0,
      adultMarkup: -0.0,
      childMarkup: 0.0,
      infantMarkup: 0.0,
      infantWsMarkup: 0.0,
      bagFees: 0.0,
      grandTotal: 7380.0,
      markupID: 248,
      markupType: "IN",
      totalMarkup: -0.0,
      grandOrgTotal: 7380.0,
      baseFare: 6534.0,
      totalTax: 846.0,
      YQTax: 0.0,
      OtherCharges: 0.0,
      offeredFare: 7333.45,
      ChargeBU: [
        {
          key: "SME",
          value: 7380.0,
        },
      ],
      ServiceFee: 0.0,
      gstPrice: 0.0,
      convinenceFeeMeta: 0.1,
      convinenceFeeStatusMeta: "NO",
      convenienceFees: 250.0,
    },
    outBound: [
      {
        SequenceNumber: "0",
        airline: "SG",
        orgAirline: "SG",
        flightID: "8107",
        flightNo: "8107",
        equipmentType: "737",
        equipmentTypeDes: "",
        fromAirport: "DEL",
        depDate: "2022-04-28T05:45:00",
        toAirport: "MAA",
        reachDate: "2022-04-28T08:50:00",
        opratingAirline: "SG",
        resDesignCode: "SA",
        sliceAndDiceCode: "0",
        fromTerminal: " 3",
        toTerminal: " 1",
        cabinClass: 1,
        eft: 185,
        estimateTime: 185,
        layOverTime: 0,
        fareType: "RP",
        baggage: "15 Kg",
        cabinBaggage: "7 Kg",
        tripIndicator: 0,
        mile: 0,
        isETicketEligible: false,
        remark: "",
        airlineName: "SpiceJet",
      },
    ],
    ownerType: "4-5372858174_0DELMAASG8107_121544991710916",
    booking_token: "4-5372858174_0DELMAASG8107_121544991710916",
    offerItemID: "OB",
    consId: "",
    outEFT: 185,
    maxSeat: 97,
    airline: "SG",
    isSliceDiceAvailable: false,
    isLCC: true,
    isRefundable: true,
    IsPanOrPassportRequired: false,
    gSTAllowed: false,
    isCouponAppilcable: false,
    isGSTMandatory: false,
    airlineRemark: "",
    lastTicketDate: "",
    ticketAdvisory: "",
  });
  const data = useSelector(SelectedData);

  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);

  /*Flight Details Modal Show */
  const handleClose2 = () => setShow2(false);
  ``;
  const handleShow2 = (item) => {
    setShow1(true);
    setFlightData(item);
  };
  const [trans, setTrans] = useState(0);
  function openModal(e) {
    setShow(true);
    setTrans(e);
  }

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    const detail = e;
    setmodal(detail);
  };

  /*Flight Details Modal Show */
  const curr = currency_Name_rd.currency_Logo;

  const ConvertMinsToTime = ({ data }) => {
    let hours = Math.floor(data / 60);
    let minutes = data % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };
  const ConvertMinsToTime2 = ({ data }) => {
    let hours = Math.floor(data / 100);
    let minutes = data % 100;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}h:${minutes}m`;
  };

  const convertFrom24To12Format = (time24) => {
    const [sHours, minutes] = time24.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const period = +sHours < 12 ? "AM" : "PM";
    const hours = +sHours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  const airlinePrice = AirResult2.reduce(function (r, a) {
    r[a.airline] = r[a.airline] || [];
    r[a.airline].push(a);
    return r;
  }, Object.create(null));

  const airlinePrice2 = AirResult2.reduce(function (r, a) {
    r[a.outBound.length] = r[a.outBound.length] || [];
    r[a.outBound.length].push(a);
    return r;
  }, Object.create(null));

  const modAirlinearray = Object.keys(airlinePrice).map(function (key) {
    var value = airlinePrice[key];

    return {
      airlineCode: key.substring(0, 2),
      firstPrice:
        value[0].fare.adultFare +
        value[0].fare.adultTax +
        value[0].fare.adultMarkup,
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

  var Stops = [];
  if (load) {
    if (flightResult.filter((item) => item.outBound == true)) {
      Stops.push(
        flightResult
          .filter((item) => !item.outBound[1])
          .map((item) => {
            return item;
          })
      );
    }
    if (flightResult.filter((item) => item.outBound == true)) {
      Stops.push(
        flightResult
          .filter((item) => item.outBound[1])
          .map((item) => {
            return item;
          })
      );
    }
    if (flightResult.filter((item) => item.outBound == true)) {
      Stops.push(
        flightResult
          .filter((item) => item.outBound[2])
          .map((item) => {
            return item;
          })
      );
    }
    if (flightResult.filter((item) => item.outBound == true)) {
      Stops.push(
        flightResult
          .filter((item) => item.outBound[3])
          .map((item) => {
            return item;
          })
      );
    }
    if (flightResult.filter((item) => item.outBound == true)) {
      Stops.push(
        flightResult
          .filter((item) => item.outBound[4])
          .map((item) => {
            return item;
          })
      );
    }
  }

  // const nonprice= AirResult2.filter((items)=>items.outBound.length==1)[0].fare.grandTotal
  // const oneWayprice= AirResult2.filter((items)=>items.outBound.length==2)[0].fare.grandTotal
  // const twowayprice= AirResult2.filter((items)=>items.outBound.length==3)[0].fare.grandTotal
  // const threewayprice= AirResult2.filter((items)=>items.outBound.length==4)[0].fare.grandTotal
  {
    console.log("airo", AirResult2);
  }

  // const [setStopData, setStopData]= useState([])
  const setStopData = [];
  const stopFunction = (e) => {
    const checked = e.target.checked;
    const airlineFly = e.target.value;

    if (airlineFly == airlineFly) {
      {
        checked
          ? setAirResult([...sort, ...airlinePrice2[airlineFly]])
          : setAirResult(
              sort.filter((items) => items.outBound.length != airlineFly)
            );
      }
      {
        checked
          ? setsort([...sort, ...airlinePrice2[airlineFly]])
          : setsort(
              sort.filter((items) => items.outBound.length != airlineFly)
            );
      }
    }
  };

  function departure(e) {
    if (e == "morning") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 5 &&
            items.outBound[0].depDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 12 &&
            items.outBound[0].depDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 18 &&
            items.outBound[0].depDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].depDate.slice(11, 13) >= 0 &&
            items.outBound[0].depDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  function arrival(e) {
    if (e == "morning") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 5 &&
            items.outBound[0].reachDate.slice(11, 13) < 12
        ),
      ]);
    }
    if (e == "afternoon") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 12 &&
            items.outBound[0].reachDate.slice(11, 13) < 18
        ),
      ]);
    }
    if (e == "evening") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 18 &&
            items.outBound[0].reachDate.slice(11, 13) < 24
        ),
      ]);
    }
    if (e === "night") {
      setAirResult([
        ...Result.flightResult.filter(
          (items) =>
            items.outBound[0].reachDate.slice(11, 13) >= 0 &&
            items.outBound[0].reachDate.slice(11, 13) < 5
        ),
      ]);
    }
  }

  const checkFare_Rule = async (items) => {
    setShow(false);
    setShow2(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      flightResult: items,
      adults: allData.adults,
      child: allData.child,
      infants: allData.infants,
      infantsWs: 0,
      currencyCode: currency_Name_rd.currency_Name,
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

    const { fare, ...rest } = items;
    const addSOmethings = {
      fare: { ...api_Result.fare, markupID: items.fare.markupID },
    };
    const datas = {
      fare: api_Result.fare,
    };
    // const abc = { ...datas, markupID: items.fare.markupID };
    const flight_Data = { ...rest, ...addSOmethings };

    if (
      api_Result.flightChecked === false ||
      api_Result.flightChecked === true
    ) {
      api_Result.priceChange === true && alert("Price Changed");
      dispatch({
        type: AllData,
        payload: {
          AllFlight_data: allData,
          SelectedDatas: flight_Data,
          inBoundData: {},
          Objdata: data,
        },
      });
      navigate.push("/flight/checkout");
      // navigate.push(
      //   {
      //     pathname: "/flight/checkout",
      //     query: {
      //       flight_data: JSON.stringify(flight_Data),
      //       AllFlight_Data: JSON.stringify(allData),
      //     },
      //   },
      //   "/flight/checkout"
      // );
    }
  };

  if (AirResult.length === 0) {
    setAirResult(AirResult2);
  }

  //   const flightResult_Data = AirResult.length === 0 ? flightResult : AirResult;
  // useEffect(() => {
  //   if (AirResult.length === 0) {
  //     setAirResult(AirResult);
  //   }
  // }, [AirResult]);

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
    const fromCity = Result.airport.find(
      (item) =>
        item.airportCode === Result.flightResult[0].outBound[0].fromAirport
    );
    const toCity = Result.airport.find(
      (item) =>
        item.airportCode === Result.flightResult[0].outBound[0].toAirport
    );

    const fromCity_replace = fromCity.airportName.replace(" ", "-");
    const toCity_replace = toCity.airportName.replace(" ", "-");

    var axios = require("axios");
    var datas = JSON.stringify({
      siteName: "travomint.com",
      siteUrl: "https://www.travomint.com",
      agentName: "Travomint",
      depcity: Result.flightResult[0].outBound[0].fromAirport,
      arrcity: Result.flightResult[0].outBound[0].toAirport,
      currencys: currency_Name_rd.currency_Name,
      dealss: [
        {
          // froCity: Result.flightResult[0].outBound[0].fromAirportName,
          // toCity: Result.flightResult[0].outBound[0].toAirportName,
          froCity: Result.flightResult[0].outBound[0].fromAirport,
          toCity: Result.flightResult[0].outBound[0].toAirport,
          froCityName: fromCity_replace,
          toCityName: toCity_replace,
          depDate: Result.flightResult[0].outBound[0].depDate.split("T")[0],
          retDate:
            (data.tripType === 2 || data.tripType === "2") &&
            Result.flightResult[0].outBound[0].depDate.split("T")[0],
          airline: Result.flightResult[0].outBound[0].airline,
          tripType: data.tripType,
          cabinClass: Result.flightResult[0].cabinClass,
          currency: currency_Name_rd.currency_Name,
          totalPrice: Result.flightResult[0].fare.grandTotal,
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

  // const GetfareAlert = () => {
  //   // ------------------production-------------------
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     fareAlertId: "",
  //     depCity: "New Delhi (DEL)",
  //     arrCity: "Goa Internations GOI",
  //     depDate: "",
  //     retDate: "",
  //     currencyType: "INR",
  //     totalAmount: "",
  //     quoteAmount: "",
  //     emailId: "developer@travomint.com",
  //     phoneNum: "NA",
  //     agentId: "Online",
  //     siteId: "6",
  //     custName: "developer",
  //     fareStatus: "Yes",
  //     fareRemark: "I am not intrested to buy this ticket at this cost.",
  //     modifiedDate: "",
  //     noOfSend: 1,
  //     prodType: "Flights",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `${staging}/addFareAlertNewVersion2?authcode=${authCode}`,
  //     requestOptions
  //   ).then((response) => response.text());
  //   // .then(result => console.log(result))
  //   // .catch(error => console.log('error', error));

  //   // ------------------production end-------------------

  //   // ---------------------------testing-------------------------------
  //   //     var myHeaders = new Headers();
  //   // myHeaders.append("Content-Type", "application/json");

  //   // var raw = JSON.stringify({
  //   //   "fareAlertId": "",
  //   //   "depCity": "New Delhi (DEL)",
  //   //   "arrCity": "Goa Internations GOI",
  //   //   "depDate": "",
  //   //   "retDate": "",
  //   //   "currencyType": "INR",
  //   //   "totalAmount": "",
  //   //   "quoteAmount": "",
  //   //   "emailId": "developer@travomint.com",
  //   //   "phoneNum": "NA",
  //   //   "agentId": "Online",
  //   //   "siteId": "6",
  //   //   "custName": "developer",
  //   //   "fareStatus": "Yes",
  //   //   "fareRemark": "I am not intrested to buy this ticket at this cost.",
  //   //   "modifiedDate": "",
  //   //   "noOfSend": 1,
  //   //   "prodType": "Flights"
  //   // });

  //   // var requestOptions = {
  //   //   method: 'POST',
  //   //   headers: myHeaders,
  //   //   body: raw,
  //   //   redirect: 'follow'
  //   // };

  //   // fetch("http://10.20.1.18:8080/api/addFareAlertNewVersion2?authcode=Trav3103s987876", requestOptions)
  //   //   .then(response => response.text())
  //   //   .then(result => console.log(result))
  //   //   .catch(error => console.log('error', error));

  //   // ---------------------------testing end-------------------------------
  // };

  // -------fare alert popup ------

  return (
    <div className="w-100">
      <Container>
        <Row>
          <Col xl={3} xs={12}>
            <Button
              type="button"
              onClick={() => handleShow3()}
              className="btn-outline-fetfare btn-block d-none d-xl-block"
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
                  <div className="bg-gray-50 rounded-xl mt-xl-3">
                    <div className="grid grid-cols-1 px-3 py-3 border-bottom">
                      <div className="grid grid-cols-2 text-left">
                        <p className="text-lg font-bold mb-0 text-black">
                          Filters
                        </p>
                        <div onClick={() => setAirResult(flightResult)}>
                          <p className="text-right mb-0 text-gray-500 font-normal reset-pointer">
                            Reset All
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 px-3 py-3 ">
                      <div className="grid grid-cols-1 text-left">
                        {/*------------------------ choose stop---------------------------------------  */}
                        <Disclosure defaultOpen="true">
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

                              {/* {Stops.filter((items) => items.length > 0).map(
                                (items, i) => ( */}
                              <Disclosure.Panel
                                // key={i}
                                className="pt-2 rounded-2xl text-sm text-gray-900"
                              >
                                {/* {items[0].outBound.length == 1 ? ( */}
                                {airlinePrice2[1] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={1}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-1"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-1"}
                                        >
                                          Non-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[1][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[2] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={2}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-2"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-2"}
                                        >
                                          One-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[2][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[3] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={3}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-3"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-3"}
                                        >
                                          Two-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[3][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[4] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={4}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-4"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-4"}
                                        >
                                          Three-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[4][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[5] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={5}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-5"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-5"}
                                        >
                                          Four-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[5][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[6] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={6}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-6"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-6"}
                                        >
                                          Five-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[6][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {airlinePrice2[7] == undefined ? (
                                  ""
                                ) : (
                                  <div className="d-flex mb-2">
                                    <div className="flex-grow-1 themeascheckbox font-14">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value={7}
                                          onClick={(e) => stopFunction(e)}
                                          id={"airlprice-gt-7"}
                                        />
                                        <label
                                          className="form-check-label text-sm"
                                          htmlFor={"airlprice-gt-7"}
                                        >
                                          Six-Stop
                                        </label>
                                      </div>
                                    </div>

                                    <div className="text-right pl-3 font-medium text-sm rpr-w-100">
                                      {currency_Name_rd.currency_Logo}{" "}
                                      {airlinePrice2[7][0].fare.grandTotal.toFixed(
                                        0
                                      )}
                                    </div>
                                  </div>
                                )}

                                {/* ) : (
                                      <span></span>
                                    )} */}
                              </Disclosure.Panel>
                              {/* )
                              )} */}
                            </>
                          )}
                        </Disclosure>

                        {/*------------------------ choose stop---------------------------------------  */}
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
                                    <Image src={noon} width={30} height={25} />
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
                                    <Image src={night} width={30} height={25} />
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
                                    <Image src={noon} width={30} height={25} />
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
                                    <Image src={night} width={30} height={25} />
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

                  {/* ----------------------Flight sort checkbox------------------------------- */}

                  <div className="bg-gray-50 rounded-xl mt-3">
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
                                      (item) => item.code == items.airlineCode
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
                                              htmlFor={"flexairresultcd-" + i}
                                            >
                                              {item.name}
                                            </label>
                                          </div>
                                        </div>

                                        <div className="text-right pl-3 font-medium text-sm rpr-w-100">
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
                  </div>
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
            <Row className="formrow-airlines overflow-auto flex-nowrap mt-4 mt-xl-0 sds-2">
              {getUniqueSearches
                .filter((items) => {
                  if (items.airlineCode.startsWith(",")) {
                    return false;
                  } else {
                    return items;
                  }
                })
                .map((items, i) => (
                  <Col key={i} xs={6} md={3} xxl={2} className="mb-3">
                    <div
                      key={i}
                      className="text-center boxalr"
                      onClick={() => setAirResult(items.alldata)}
                    >
                      <div className="d-flex align-items-center mb-0">
                        <div className=" justify-center inline-flex flex-wrap">
                          <img
                            src={`https://www.travomint.com/resources/images/airline-logo/${items.airlineCode}.png`}
                            className="w-10 rounded"
                            height={40}
                            width={40}
                          />
                        </div>
                        <p className="text-black font-semibold text-sm mb-0 flex-grow-1 text-right pl-3">
                          {" "}
                          {items.airlineCode}{" "}
                        </p>
                      </div>

                      <div className="text-center amount text-white">
                        {currency_Name_rd.currency_Logo}
                        {items.firstPrice.toFixed(2, 0)}
                      </div>
                    </div>
                  </Col>
                ))}

              {/* <Col xs={12} sm={6} md={3} xxl={2} className="mb-3">
                <div
                  className="text-center boxalr fapl-re-4 h-100 d-flex justify-content-center align-items-center "
                  onClick={() => setAirResult(Result.flightResult)}
                >
                  <div className="font-semibold text-base">View All</div>
                </div>
              </Col> */}
            </Row>

            <Row className="align-items-center fitrrow tp">
              <Col xs={12} lg={6}>
                <div className="d-xl-none filterbybtn btn-outline-fetfare btn-block btn btn-primary">
                  <Row className="align-items-center">
                    <Col xs={6} className="text-left">
                      <a
                        href={void 0}
                        onClick={() => {
                          setfiltersort(!filtersort);
                        }}
                        className="text-primary"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-filter" />
                        <span className="ml-2 font-semibold">Filter</span>
                      </a>
                    </Col>
                    <Col xs={6} className="text-right">
                      <h4 className="text-sm font-semibold text-black m-0 fapl-re-5">
                        {data.departure}
                        <span className="mx-3 fapl-re-1">
                          <FontAwesomeIcon icon="fa-solid fa-plane" />
                        </span>
                        {data.arrival}
                      </h4>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xs={12} lg={6}>
                <Button
                  type="button"
                  onClick={handleShow}
                  className="btn-outline-fetfare getalmob btn-block d-xl-none mt-2 mt-lg-0"
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
                  Get Fare Alert987
                </Button>
              </Col>
            </Row>

            {/* 0------------------------------------airline select----------------------------------------- */}

            <div className="grid grid-cols-1 gap-4 pt-2 pb-2 mb-2 border-bottom bclr-gry">
              <Row className="align-items-end depflarriv">
                <Col xs={6} className="flp">
                  <h2 className="text-xl font-bold text-black fapl-re-4">
                    Departure Flight
                  </h2>
                  <Row>
                    <Col xs={12} md={6} xl={6} className="d-none d-xl-block">
                      <h4 className="text-xl font-semibold text-black mb-0 fapl-re-5">
                        {data.departure}
                        <span className="mx-3 fapl-re-1">
                          <FontAwesomeIcon icon="fa-solid fa-plane" />
                        </span>
                        {data.arrival}
                      </h4>
                    </Col>

                    <Col xs={12} md={6} xl={6}>
                      <h5 className="text-base font-medium mt-0 mb-0 text-gray-600">
                        <span className="fapl-re-2">
                          <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                          {data.startDates}
                        </span>
                      </h5>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} className="text-right pr-4">
                  <h5 className="text-gray-500 text-sm font-meduim mb-0">
                    {" "}
                    <i className="fa fa-search mr-2"></i>{" "}
                    {AirResult.length === 0
                      ? flightResult.length
                      : AirResult.length}{" "}
                    Out of {flightResult.length} Result
                  </h5>

                  {/* <div className="d-flex fapl-re-3 align-items-center">
                    <span className="text-sm pr-4 text-nowrap ">Sort By</span>
                    <div className="flex-grow-1">
                      <select className="form-select">
                        <option selected="selected" value="outFare.grandTotal">
                          Price (Low to High)
                        </option>
                        <option value="outEFT"> Duration (Low to High) </option>
                        <option value="depart-e"> Departure (Early) </option>
                        <option value="depart-l">Departure (Late)</option>
                        <option value="returns-e">Arrival (Early)</option>
                        <option value="returns-l">Arrival (Late)</option>
                      </select>
                    </div>
                  </div> */}
                </Col>
              </Row>
            </div>

            {AirResult.map((item, i) => {
              const outBoundCount = item.outBound.length;
              // const outBoundCount = 1;

              const fromAirport = item.outBound[0].fromAirport;
              const toAirport = item.outBound[outBoundCount - 1].toAirport;
              const price =
                item.fare.adultFare +
                item.fare.adultTax +
                item.fare.adultMarkup;

              const PerPersionprice = item.fare.grandTotal;

              let text = item.airline;
              let letter = text.charAt(0);
              const alirlineLogo =
                letter === "," ? text.replace(",", "") : text;
              const alirline_logo = alirlineLogo.substring(0, 2);

              return (
                <div
                  className="skj-2 filteroutbound-li fapl-re-6 grid lg:grid-cols-6 grid-cols-1 mb-4 rounded-xl"
                  key={i}
                >
                  <Row className="align-items-center">
                    <Col xs={12} md={8} xl={12} className="mdf-col">
                      <div className="d-flex flex-row flex-md-column align-items-start">
                        <div className="text-left">
                          {/* <Image
                          src={`https://www.travomint.com/resources/images/airline-logo/${item.outBound[0].airline}.png`}
                          className="w-10/12 down rounded-xl inline float-right"
                        /> */}
                          <div className="outbound-rtp d-inline-block">
                            <Image
                              loader={myLoader}
                              src={alirline_logo}
                              alt="Picture of the author"
                              width={50}
                              height={50}
                              className="rounded"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1  text-left text-base text-black  font-bold pl-3 md:pl-0">
                          <span className="text-base text-black  font-bold">
                            <span className="w-full title-airlines">
                              {airline
                                .filter(
                                  (airline) =>
                                    airline.code == item.outBound[0].airlineName
                                )
                                .map((airline) => airline.name)}

                              {/* {item.outBound[0].airlineName} */}
                            </span>
                          </span>

                          <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                            {" "}
                            {alirline_logo}-{item.outBound[0].flightNo}
                          </span>
                        </div>
                      </div>
                    </Col>

                    <Col xs={12} md={4} xl={12} className="mdf-col">
                      <button
                        onClick={(e) => handleShow2(item)}
                        className="downbtnflightt-dt btn btn-outline-secondary mt-2"
                      >
                        <i className="far fa-hand-point-right mr-1"></i> Flight
                        Details
                      </button>
                    </Col>
                  </Row>
                  <div className="col-span-4 lg:pl-14 lg:pr-14 pl-0 pr-0">
                    <div className="hgh-5 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-1">
                      <div className="text-center">
                        <span className="text-lg text-black font-bold">
                          <div className="deslo-way mb-2">
                            <span className="badge bg-secondary">
                              {fromAirport}
                            </span>
                          </div>
                          <div className="my-1">
                            {convertFrom24To12Format(
                              item.outBound[0].depDate
                                .split("T")[1]
                                .substring(0, 5)
                            )}
                          </div>

                          <div className="text-gray-500 font-medium text-sm">
                            {item.outBound[0].depDate.split("T")[0]}
                          </div>
                        </span>
                      </div>
                      <div className="col-span-2 flex-grow-1 px-3 pt-0 dd-2">
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
                            <div className="duration-intwy">
                              {/* {item.outBound[0].eft}  */}
                              {/* {outBoundCount > 1 ? <span className="d-block font-semibold layover">
                                  Layover Time
                                </span>:<span> </span>} */}

                              <div className="minttotime font-bold my-1 text-base text-black">
                                {/* {curr=="INR"? <ConvertMinsToTime data={item.outEFT} /> :<ConvertMinsToTime2 data={item.outEFT  } />  } */}

                                <ConvertMinsToTime data={item.outEFT} />
                              </div>

                              <div className="text-xs stop capitalize font-normal">
                                (
                                {outBoundCount === 1
                                  ? "non-stop"
                                  : outBoundCount === 2
                                  ? "One-Stop"
                                  : outBoundCount === 3
                                  ? "Two-Stop"
                                  : outBoundCount === 4
                                  ? "Three-Stop"
                                  : null}
                                )
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-lg text-black font-bold">
                          <div className="deslo-way mb-2">
                            <span className="badge bg-secondary">
                              {toAirport}
                            </span>
                          </div>
                          <div className=" my-1">
                            {convertFrom24To12Format(
                              item.outBound[outBoundCount - 1].reachDate
                                .split("T")[1]
                                .substring(0, 5)
                            )}{" "}
                          </div>
                          <div className="text-gray-500 font-medium text-sm">
                            {
                              item.outBound[outBoundCount - 1].reachDate.split(
                                "T"
                              )[0]
                            }
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <Row className="align-items-end align-items-lg-start">
                    {/* <Link
                      to="/flight/checkout"
                      state={{
                        AllFlight_Data: Result,
                        flight_data: item,
                      }}
                    > */}
                    <Col xs={6} lg={12}>
                      <div className="w-100 mb-3 from-btms">
                        <span className="text-lg font-nomal text-black font-sans pr-3 price-1 d-block frmid">
                          From
                        </span>
                        <span className="text-lg font-bold text-black font-sans price-2">
                          {curr} {price.toFixed(2, 0)}
                          {/* {PerPersionprice} */}
                        </span>
                      </div>
                    </Col>
                    <Col xs={6} lg={12}>
                      <div className="text-left">
                        <button
                          className="btn btn-siteorange done-velres"
                          type="button"
                          onClick={() => openModal(item)}
                        >
                          {" "}
                          Book Now
                        </button>
                        {/* </Link> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      {/*----------------------- flight detail--------------------------- */}

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
                  <p className="text-gray-700 tracking-wide font-normal text-sm mt-4  tracking-wide">
                    The baggage information is just for reference. Please Check
                    with airline before check-in. For more information, visit
                    the airline
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
                          {flightData.outBound[0].cabinBaggage} Per Person
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
                          {flightData.outBound[0].baggage} Per Person
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <hr className="mb-4 mt-2 spbor"></hr>

                  <div className="outbontmy-4 my-4">
                    {flightData.outBound.map((items) => {
                      return (
                        <>
                          <div className="filteroutbound-li fapl-re-6 withnospace p-0">
                            <div className="hgh-4 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3 pb-3 border-bottom">
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
                                          return <>{airports.airportCode}</>;
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
                                          item.airportCode == items.fromAirport
                                      )
                                      .map((airports, i) => {
                                        return (
                                          <small
                                            key={i}
                                            className="text-gray-500 font-semibold"
                                          >
                                            {airports.cityName}
                                          </small>
                                        );
                                      })}
                                  </div>

                                  <div className="text-gray-500  text-sm font-medium">
                                    {airport
                                      .filter(
                                        (item) =>
                                          item.airportCode == items.fromAirport
                                      )
                                      .map((airports) => {
                                        return <>{airports.airportName}</>;
                                      })}

                                    <span>
                                      {airline
                                        .filter(
                                          (item) => item.code == items.airline
                                        )
                                        .map((airlines) => airlines.name)}
                                      ({items.airline})
                                    </span>

                                    <div className="text-gray-500 font-medium mt-2 text-sm">
                                      <span className="mr-2">
                                        <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                      </span>
                                      {items.depDate.split("T")[0]}
                                    </div>
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
                                    <div className="duration-intwy">
                                      {" "}
                                      {curr === "₹" ? (
                                        <ConvertMinsToTime data={items.eft} />
                                      ) : (
                                        ""
                                      )}{" "}
                                    </div>
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
                                            item.airportCode == items.toAirport
                                        )
                                        .map((airports) => {
                                          return <>{airports.airportCode}</>;
                                        })}
                                    </span>
                                  </div>
                                  <div className="my-1">
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
                                            <small className="text-gray-500 font-semibold">
                                              {airports.cityName}
                                            </small>
                                          </>
                                        );
                                      })}
                                  </div>

                                  <div className="text-gray-500 text-sm font-medium">
                                    {airport
                                      .filter(
                                        (item) =>
                                          item.airportCode == items.toAirport
                                      )
                                      .map((airports) => {
                                        return <>{airports.airportName}</>;
                                      })}
                                    <span>
                                      {airline
                                        .filter(
                                          (item) => item.code == items.airline
                                        )
                                        .map((airlines) => (
                                          <>({items.airline})</>
                                        ))}
                                    </span>

                                    <div className="text-gray-500 font-medium mt-2 text-sm">
                                      <span className="mr-2">
                                        <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                      </span>

                                      {airline
                                        .filter(
                                          (item) => item.code == items.airline
                                        )
                                        .map((airlines) => (
                                          <>{items.depDate.split("T")[0]}</>
                                        ))}
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>

                            {/* <Modal.Footer >
                  <Button className="foot" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
                          </div>
                          <p
                            className={
                              "layover text-center " +
                              (items.SequenceNumber ==
                              flightData.outBound.length - 1
                                ? "hidden"
                                : "")
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
                        </>
                      );
                    })}
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
                      Travomint service fee and Balance amount will be refunded
                      to the same bank account.
                    </li>
                    <li className="text-sm">
                      Flight Cancellation from Airlines end : Full Refund in the
                      same bank account after charging the applicable Travomint
                      service Fee + payment gateway charges .
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
                      date. The difference in fares between the old and the new
                      booking will also be payable by the user.
                    </p>
                  </div>
                </>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Modal.Body>
      </Modal>
      {/*----------------------- flight detail--------------------------- */}

      {/*----------------------- book Now--------------------------- */}
      <Modal
        className="modalbooknow-classic"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="outbontmy-4">
          <div className="outbontmy-4 my-4">
            {console.log("air", AirResult)}
            {AirResult.filter((air) => air.resultID == trans.resultID).map(
              (air, i) => (
                <>
                  {" "}
                  {air.outBound.map((items) => {
                    return (
                      <>
                        <div className="filteroutbound-li fapl-re-6 withnospace p-0">
                          <div className="hgh-4 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3 pb-3 border-bottom">
                            <div className="text-center cont">
                              <span className="text-base text-black font-bold">
                                <div className="deslo-way mb-2">
                                  <span className="badge bg-secondary">
                                    {airport
                                      .filter(
                                        (item) =>
                                          item.airportCode == items.fromAirport
                                      )
                                      .map((airports) => {
                                        return <>{airports.airportCode}</>;
                                      })}
                                  </span>
                                </div>
                                <div className="my-1">
                                  {convertFrom24To12Format(
                                    items.depDate.split("T")[1].substring(0, 5)
                                  )}
                                  <br></br>
                                  {airport
                                    .filter(
                                      (item) =>
                                        item.airportCode == items.fromAirport
                                    )
                                    .map((airports, i) => {
                                      return (
                                        <small
                                          key={i}
                                          className="text-gray-500 font-semibold"
                                        >
                                          {airports.cityName}
                                        </small>
                                      );
                                    })}
                                </div>

                                <div className="text-gray-500  text-sm font-medium">
                                  {airport
                                    .filter(
                                      (item) =>
                                        item.airportCode == items.fromAirport
                                    )
                                    .map((airports) => {
                                      return <>{airports.airportName}</>;
                                    })}

                                  <span>
                                    {airline
                                      .filter(
                                        (item) => item.code == items.airline
                                      )
                                      .map((airlines) => airlines.name)}
                                    ({items.airline})
                                  </span>

                                  <div className="text-gray-500 font-medium mt-2 text-sm">
                                    <span className="mr-2">
                                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                    </span>
                                    {items.depDate.split("T")[0]}
                                  </div>
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
                                  <div className="duration-intwy">
                                    {" "}
                                    {curr === "₹" ? (
                                      <ConvertMinsToTime data={items.eft} />
                                    ) : (
                                      ""
                                    )}{" "}
                                  </div>
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
                                          item.airportCode == items.toAirport
                                      )
                                      .map((airports) => {
                                        return <>{airports.airportCode}</>;
                                      })}
                                  </span>
                                </div>
                                <div className="my-1">
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
                                          <small className="text-gray-500 font-semibold">
                                            {airports.cityName}
                                          </small>
                                        </>
                                      );
                                    })}
                                </div>

                                <div className="text-gray-500 text-sm font-medium">
                                  {airport
                                    .filter(
                                      (item) =>
                                        item.airportCode == items.toAirport
                                    )
                                    .map((airports) => {
                                      return <>{airports.airportName}</>;
                                    })}
                                  <span>
                                    {airline
                                      .filter(
                                        (item) => item.code == items.airline
                                      )
                                      .map((airlines) => (
                                        <>({items.airline})</>
                                      ))}
                                  </span>

                                  <div className="text-gray-500 font-medium mt-2 text-sm">
                                    <span className="mr-2">
                                      <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                    </span>

                                    {airline
                                      .filter(
                                        (item) => item.code == items.airline
                                      )
                                      .map((airlines) => (
                                        <>{items.depDate.split("T")[0]}</>
                                      ))}
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>

                          {/* <Modal.Footer >
                  <Button className="foot" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer> */}
                        </div>
                      </>
                    );
                  })}
                  <Row className="my-4">
                    <Col
                      xs={12}
                      xl={4}
                      className="d-flex align-items-center mb-3"
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
                          7Kg per person
                        </span>
                      </div>
                    </Col>

                    <Col
                      xs={12}
                      xl={4}
                      className="d-flex align-items-center mb-3"
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
                          15Kg Per person
                        </span>
                      </div>
                    </Col>

                    <Col xs={12} xl={4} className="d-flex align-items-center">
                      <div className="pr-2">
                        <div className="faround-rfun d-flex align-items-center">
                          <i className="fa fa-exchange-alt fa-lg"></i>
                        </div>
                      </div>
                      <div className="pl-2">
                        <p className="font-semibold mb-0 text-xlbbage text-black">
                          Non-Refundable
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <div className="footer-checkfare">
                    <Row className="align-items-center">
                      <Col xs={12} md={8}>
                        {/* <span className="text-2xl grandtotal-fr font-bold text-black">
                        <span className="text-gray-600  font-medium">
                          Total
                        </span>
                        <span className="ml-3 mr-1">
                          {currency_Name_rd.currency_Logo}
                        
                        </span>

                        {items.fare.grandTotal * data.totalpassanger}
                      </span> */}
                      </Col>
                      <Col xs={12} md={4}>
                        <button
                          className="btn btn-siteorange done-vel"
                          onClick={() => checkFare_Rule(air)}
                        >
                          Continue
                        </button>
                      </Col>
                    </Row>
                  </div>
                </>
              )
            )}
          </div>
        </Modal.Body>
      </Modal>
      {/*----------------------- book Now--------------------------- */}

      {/* ------------------------------load---------------------------- */}
      <Modal className="fetching" show={show2} onHide={handleClose2}>
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
    </div>
  );
};

export default Dom_Int_OneWay;
