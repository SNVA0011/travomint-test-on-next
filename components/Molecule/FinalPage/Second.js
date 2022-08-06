import React, { createContext, useEffect, useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import AirportData from "../../Sample_Data/AirPortData.json";
import { SelectedData } from "../../Feature/Action";
import Collapse from "react-bootstrap/Collapse";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { GateWays, SKIP_VALUES } from "../../Redux/ActionType";
import {
  authCode,
  domain,
  imgdomain,
  PayUAPI,
  payuauth,
  siteID,
  testapi,
  urlHandler,
} from "../../static/static";
import Router, { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { set } from "date-fns";
import { currency } from "../../Api/currency";
import loaderconfirm from "../../../public/Image/load2.gif";
import Lottie from "react-lottie";
import Details from "../../Animation/97203-loader.json";
import { Select, TextareaAutosize } from "@mui/material";
import CardForm from "../../Atom/IntPayCardForm/CardForm";
import Link from "next/link";

// import loaderimage from "../../../public/Image/load.gif"
const Second = (props) => {
  const {
    allflightdata,
    flightdata,
    totalpricedata,
    setBaggageProtValue,
    setValueprice,
    setBaggageProtValueptice,
    setValue,
    inBoundData,
    setTravelProtectionValue,
    setTravelProtection,
    data,
    setDiscountWay,
    setDiscountValue,
    showAllGateway,
    ncm,
    setNcmTrue,
  } = props;
  // const [travelinfo, settravelinfo] = useState("Traveler Information");

  // const { register, SethandleSubmit } = useForm();

  // redux
  window.onpopstate = function (event) {
    if (event) {
      // window.location.href = "https://www.travomint.com/";
      // Code to handle back button or prevent from navigation
    }
  };

  const dispatch = useDispatch();
  const navigate = useRouter();
  const { value_data } = useSelector((state) => state.SkipValue_Reducer);
  const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);
  // const data = useSelector(SelectedData);

  // const ab = data.froCity.split("(")[1];
  // const abc = ab.split(")")[0];
  // const de = data.toCity.split("(")[1];
  // const def = de.split(")")[0];
  // const departData = AirPortData.find((item) =>
  //   item.airportCode === data.departure ? data.departure : abc
  // );
  // const arriveData = AirPortData.find((item) =>
  //   item.airportCode === data.arrival ? data.arrival : def
  // );

  const fares = flightdata.fare;
  const currencySign = data.currencyCode;

  const currencySign_filter = currency.find(
    (item) => item.currency_Name === currencySign
  );

  const currencySign_Logo = currencySign_filter.currency_Logo;

  const [cardData, setcardData] = useState("");

  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(true);
  const [bookingnewemail, setcontinueemail] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const [third, setthird] = useState(false);
  const [continuebutton, setcontinuebutton] = useState(false);
  const [booking, setbooking] = useState(false);
  const [crmData, setcrmData] = useState([]);
  const [loadCrm, setloadCrm] = useState(false);
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [Mob, setValueMobile] = useState(mobile);
  const [Eml, setValueEmail] = useState(email);
  const [payuMethod, setPayuMethod] = useState("");
  const [payBtnActive, setPayBtnActive] = useState(true);

  const [gstCompany, setCompanygst] = useState();
  const [contact, setcontact] = useState(false);
  const [secondcontinuebutton, setsecondcontinuebutton] = useState(false);
  const [baggage, setbaggage] = useState(false);
  const [thirdcontinuebutton, setthirdcontinuebutton] = useState(false);
  const [pay, setpay] = useState(false);
  const [validated, setValidated] = useState(false);
  const [validatedMobile, setValidatedMobile] = useState("");

  const [noOfTravellers, setNoOfTravellers] = useState();
  const [AdultTravellers, setAdultTravellers] = useState();
  const [childTravellers, setChildTravellers] = useState();
  const [infantTravellers, setInfantTravellers] = useState();

  const [stopValue, setStopValue] = useState(0);
  const [gatewaysName, setGatewaysName] = useState("");

  const [loader, setLoader] = useState(false);
  const traveller =
    allflightdata.adults + allflightdata.child + allflightdata.infants;
  const Adult_traveller = allflightdata.adults;
  const Child_traveller = allflightdata.child;
  const Infant_traveller = allflightdata.infants;

  const [inputList, setInputList] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      gstnumber: "",
      companyName: "",
      passportNumber: "",
      issueDate: "",
      expiryDate: "",
      email: "",
      phone: "",
      issueCountry: "",
      passengerType: "1",
      gstNumber: "",
      gstCompany: "",
    },
  ]);

  const [childinputList, setChildinputList] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      gstnumber: "",
      companyName: "",
      passportNumber: "",
      issueDate: "",
      expiryDate: "",
      email: "",
      phone: "",
      issueCountry: "",
      passengerType: "2",
    },
  ]);

  const [infantinputList, setInfantinputList] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      gstnumber: "",
      companyName: "",
      passportNumber: "",
      issueDate: "",
      expiryDate: "",
      email: "",
      phone: "",
      issueCountry: "",
      passengerType: "3",
    },
  ]);

  const Merged = [];

  if (
    Adult_traveller !== 0 &&
    Child_traveller !== 0 &&
    Infant_traveller !== 0
  ) {
    Merged.push(...inputList);
    Merged.push(...childinputList);
    Merged.push(...infantinputList);
  } else if (Adult_traveller !== 0 && Child_traveller !== 0) {
    Merged.push(...inputList);
    Merged.push(...childinputList);
  } else if (Adult_traveller !== 0 && Infant_traveller !== 0) {
    Merged.push(...inputList);
    Merged.push(...infantinputList);
  } else if (Adult_traveller !== 0) {
    Merged.push(...inputList);
  }

  // Merged.push(...childinputList);
  // Merged.push(...infantinputList);

  // International Case Card Value
  const [, setIntnationalPaymentDetails] = useState({
    cardType: "",
    cardNumber: "",
    cardmonth: "01",
    cardyear: "",
    cardcvv: "",
    cardHolderName: "",
    state: "",
    postalCode: "",
    address: "",
    city: "",
    countryCode: "",
  });

  // {}{
  // state for validation
  const [mediacalCheckNo, setmediacalCheckNo] = useState();
  const [baggageProt, setBaggageProt] = useState();
  const [travelProt, setTravelPort] = useState();
  const [mediacalCheckYes, setmediacalCheckYes] = useState("");
  const [baggageProterr, setBaggageProterr] = useState("");
  const formRefs = useRef();
  const c_formRefs = useRef();
  const i_formRefs = useRef();

  function emailcontinue() {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const regexphoneNo =
      /^([\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (regEx.test(email) && regexphoneNo.test(mobile)) {
      dispatch({ type: SKIP_VALUES, payload: 1 });
      setValidated("Email is Valid");
      setValidatedMobile("Phone No is Valid");

      // setcontinueemail(false);
      // setOpen(true);
      // setOpen2(true);
      // setthird(false);
      // setcontinuebutton(false);
      // setsecondcontinuebutton(false);
      // setInfo(false);
      // setcontinuebutton(true);
    } else if (
      !regEx.test(email) &&
      email !== "" &&
      !regexphoneNo.test(mobile) &&
      mobile !== ""
    ) {
      setValidated("Email is Not Valid");
      setValidatedMobile("Phone No is Not Valid");
    } else if (!regEx.test(email) && email !== "") {
      setValidated("Email is Not Valid");
    } else if (!regexphoneNo.test(mobile) && mobile !== "") {
      setValidatedMobile("Phone No is Not Valid");
    }
  }

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

  // const [medical, setmedical] = useState("");

  function secondcontinue() {
    if (mediacalCheckNo === 1 || mediacalCheckNo === 0) {
      setsecondcontinuebutton(false);
      setthird(false);
      setcontact(true);
      setbaggage(true);
      setthirdcontinuebutton(true);
      setcontinueemail(false);
    } else {
      setmediacalCheckYes("Please Select");
    }
    setEditDetails(false);
  }

  function editfucntion() {
    setsecondcontinuebutton(false);
    setthird(false);
    setcontact(true);
    setbaggage(true);
    setthirdcontinuebutton(true);
    setcontinueemail(false);
  }

  function thirdcontinue() {
    if (
      baggageProt === 0 ||
      (baggageProt === 1 && travelProt === 1) ||
      travelProt === 0
    ) {
      dispatch({ type: SKIP_VALUES, payload: 3 });
    } else {
      setBaggageProterr("Please Select");
    }
  }

  // const forthcontinue = () => {
  //   dispatch({ type: SKIP_VALUES, payload: 3 });
  // };
  function close() {
    setsecondcontinuebutton(false);
    setcontact(false);
    setOpen(true);
    setOpen2(false);
    setcontinuebutton(true);
    setthird(false);
    setbaggage(false);
    setcontinueemail(false);
    setthirdcontinuebutton(false);
    setpay(false);
    setcontinueemail(true);
  }

  function clickSwitcher() {
    setDataPay(false);
    onPay();
  }

  function changename() {
    inputList.map((item) => {
      if (
        item.firstName &&
        item.middleName &&
        item.lastName &&
        item.day &&
        item.month &&
        item.year
      ) {
        setOpen(false);
        setOpen2(true);
        setthird(true);
        setcontinuebutton(false);
        setsecondcontinuebutton(true);
        setcontinueemail(false);
        setcontinueemail(false);
      } else {
        alert("Plzz Fill the input box");
      }
    });
  }

  function editCustomerDetail() {
    setOpen(true);
    setOpen2(true);
    setthird(false);
    setpay(false);
  }

  // test

  // TextInput Contact info
  const fillmobile = (v) => {
    const contact = v.target;
    setmobile(contact.value);
    setValueMobile(mobile);
  };

  const fillemail = (u) => {
    const contact = u.target;
    setemail(contact.value);
    setValueEmail(email);
  };

  const details = {
    loop: true,
    autoplay: true,
    animationData: Details,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // handle TextInput change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = value;
    setInputList(list);
    checkContinue();
    confirmDetailPassenger();
  };
  const childhandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...childinputList];

    list[index][name] = value;
    setChildinputList(list);
  };
  const infanthandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...infantinputList];

    list[index][name] = value;
    setInfantinputList(list);
  };

  const handleSubmit = (e) => {
    setOpen2(true);
  };
  const handleSubmiINT = (e) => {
    continuetoBooking();
  };

  // const handleSubmitdetails = (e) => {

  //   e.preventDefault();
  //   // setLoader(true);
  //   // setOpen(false);
  //   setOpen2(true);
  //   setthird(true);
  //   // setcontinuebutton(false);
  //   // setsecondcontinuebutton(true);
  //   // setcontinueemail(false);
  //   // setcontinueemail(false);
  //   dispatch({ type: SKIP_VALUES, payload: 2 });
  // };

  // done the value
  const Done = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = "";
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        gstnumber: "",
        companyName: "",
        passportNumber: "",
        issueCountry: "",
        email: "",
        phone: "",
        issueDate: "",
        expiryDate: "",
        passengerType: "1",
      },
    ]);
    setAdultTravellers(Adult_traveller - 1);
  };

  const childhandleAddClick = () => {
    setChildinputList([
      ...childinputList,
      {
        firstName: "",
        middleName: "",
        dateOfBirth: "",
        lastName: "",
        gender: "",
        gstnumber: "",
        companyName: "",
        passportNumber: "",
        issueCountry: "",
        email: "",
        phone: "",
        issueDate: "",
        expiryDate: "",
        passengerType: "2",
      },
    ]);
    setChildTravellers(Child_traveller - 1);
  };

  const infanthandleAddClick = () => {
    setInfantinputList([
      ...infantinputList,
      {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        gstnumber: "",
        companyName: "",
        passportNumber: "",
        issueCountry: "",
        email: "",
        phone: "",
        issueDate: "",
        expiryDate: "",
        passengerType: "3",
      },
    ]);
    setInfantTravellers(Infant_traveller - 1);
  };
  const confmedical = () => {
    setValue(true);
    setValueprice(20);
    setmediacalCheckNo(1);
  };
  const noconfmedical = () => {
    setValue(false);
    setValueprice(0);
    setmediacalCheckNo(0);
  };
  const baggageProtactionYes = () => {
    setBaggageProtValue(true);
    setBaggageProtValueptice(380);
    setBaggageProt(1);
  };
  const baggageProtactionNo = () => {
    setBaggageProtValue(false);
    setBaggageProtValueptice(0);
    setBaggageProt(0);
  };
  const travelProtection = () => {
    setTravelProtectionValue(true);
    setTravelProtection(2700);
    setTravelPort(1);
  };
  const travelProtectionNo = () => {
    setTravelProtectionValue(false);
    setTravelProtection(0);
    setTravelPort(0);
  };

  const CreateBooking = async () => {
    const total_traveller =
      allflightdata.adults + allflightdata.child + allflightdata.infants;
    // const flightData = {
    //   ...flightdata.fare,
    //   grandTotal:
    //     flightdata.fare.grandTotal +
    //     flightdata.fare.convenienceFees * total_traveller,
    //   grandOrgTotal: flightdata.fare.grandOrgTotal,
    // };

    const { fare, ...rest } = flightdata;
    const obj = {
      ...flightdata.fare,
    };
    const outFare = { outFare: obj, fare: obj };
    const outFareObj = { ...rest, ...outFare };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      SearchID: "lOYc1jozFhM3a28",
      userSessionID: "vg64292JP8bX",
      bookingID: 0,
      prodID: "1",
      cacheLocation: "search",
      departDate: data.startDates,
      flightResult: outFareObj,
      gbptousd: 0,
      eurtousd: 0,
      eurtogbp: 0,
      luggage: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      luggageRet: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      perPaxLuggageOptions: true,
      currencyCode: data.currencyCode,
      adults: allflightdata.adults,
      child: allflightdata.child,
      infants: allflightdata.infants,
      infantsWs: 0,
      totalNight: 0,
      paymentDetails: {
        paymentType: "",
        cardCode: "",
        cardNumber: "",
        maskCardNumber: "Falure",
        cardHolderName: "",
        expiryMonth: "",
        expiryYear: "",
        cvvNo: "",
        country: "",
        address1: "",
        city: "",
        state: "",
        postalCode: "",
      },
      passengerDetails: Merged,
      phoneNo: inputList[0].phone,
      mobileNo: inputList[0].phone,
      emailID: inputList[0].email,
      siteID: siteID,
      sourceMedia: "online",
      userIP: "0:0:0:0:0:0:0:1",
      device: "Desktop",
      browser: "WINDOWS_10-CHROME9-96.0.4664.45",
      agentMarkup: "410.0",
      coupons: "N",
      couponsAmt: 0,
      airline: allflightdata.airline,
      isTimeChanged: false,
      newPrice: 0,
      isticketeRun: 0,
      isticketeRunRet: 0,
      userSearch: true,
      serviceCharge: 0,
      seatAmount: 0,
      insurance: "No",
      insuranceCost: 0,
      macp: "No",
      macpAmt: 0,
      teleMed: "No",
      teleMedAmt: 20,
      brbStatus: "No",
      brbAmount: 0,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const createApi = await fetch(
      `${testapi}/Flights/CreateBooking?authcode=${authCode}`,
      requestOptions
    );
    const ApiData = await createApi.json();
    console.log("ApiData", ApiData);
    if (currencySign !== "INR") {
      setcrmData(ApiData);
      setloadCrm(false);
    } else {
      setcrmData(ApiData);
      setloadCrm(true);
    }
  };

  const IntCreateBooking = async () => {
    const outFare = { outFare: flightdata.fare };
    const outFareObj = { ...flightdata, ...outFare };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      SearchID: "lOYc1jozFhM3a28",
      userSessionID: "vg64292JP8bX",
      bookingID: 0,
      prodID: "1",
      cacheLocation: "search",
      departDate: data.startDates,
      flightResult: outFareObj,
      returnDate: data.endDates,
      gbptousd: 0,
      eurtousd: 0,
      eurtogbp: 0,
      luggage: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      luggageRet: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      perPaxLuggageOptions: true,
      currencyCode: data.currencyCode,
      adults: allflightdata.adults,
      child: allflightdata.child,
      infants: allflightdata.infants,
      infantsWs: 0,
      totalNight: 0,
      paymentDetails: {
        paymentType: "",
        cardCode: "",
        cardNumber: "",
        maskCardNumber: "Falure",
        cardHolderName: "",
        expiryMonth: "",
        expiryYear: "",
        cvvNo: "",
        country: "",
        address1: "",
        city: "",
        state: "",
        postalCode: "",
      },
      passengerDetails: inputList,
      phoneNo: inputList[0].phone,
      mobileNo: inputList[0].phone,
      emailID: inputList[0].email,
      siteID: siteID,
      sourceMedia: "online",
      userIP: "0:0:0:0:0:0:0:1",
      device: "Desktop",
      browser: "WINDOWS_10-CHROME9-96.0.4664.45",
      agentMarkup: "410.0",
      coupons: "N",
      couponsAmt: 0,
      airline: allflightdata.airline,
      isTimeChanged: false,
      newPrice: 0,
      isticketeRun: 0,
      isticketeRunRet: 0,
      userSearch: false,
      serviceCharge: 0,
      seatAmount: 0,
      insurance: "No",
      insuranceCost: 0,
      macp: "No",
      macpAmt: 0,
      teleMed: "No",
      teleMedAmt: 20,
      brbStatus: "No",
      brbAmount: 0,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const createApi = await fetch(
      `${testapi}/Flights/CreateBooking?authcode=${authCode}`,
      requestOptions
    );
    const ApiData = await createApi.json();
    console.log("Bookingdata");

    const suss = await ApiData.bookingStatus;

    if (suss === "Failure" || suss === "Succeeded") {
      setcrmData(ApiData);
      setloadCrm(false);
    } else {
      alert("Flight Not Booked");
    }
  };

  const DomRoundCreateBooking = async () => {
    const total_traveller =
      allflightdata.adults + allflightdata.child + allflightdata.infants;

    const { fare, ...rest } = flightdata;

    const fares = {
      adultFare: inBoundData.fare.adultFare + flightdata.fare.adultFare,
      childFare: inBoundData.fare.childFare + flightdata.fare.childFare,
      infantFare: inBoundData.fare.infantFare + flightdata.fare.infantFare,
      infantWsFare:
        inBoundData.fare.infantWsFare + flightdata.fare.infantWsFare,
      adultTax: inBoundData.fare.adultTax + flightdata.fare.adultTax,
      childTax: inBoundData.fare.childTax + flightdata.fare.childTax,
      infantTax: inBoundData.fare.infantTax + flightdata.fare.infantTax,
      infantWsTax: inBoundData.fare.infantWsTax + flightdata.fare.infantWsTax,
      adultMarkup: inBoundData.fare.adultMarkup + flightdata.fare.adultMarkup,
      childMarkup: inBoundData.fare.childMarkup + flightdata.fare.childMarkup,
      infantMarkup:
        inBoundData.fare.infantMarkup + flightdata.fare.infantMarkup,
      infantWsMarkup:
        inBoundData.fare.infantWsMarkup + flightdata.fare.infantWsMarkup,
      bagFees: inBoundData.fare.bagFees + flightdata.fare.bagFees,
      grandTotal:
        inBoundData.fare.grandTotal +
        flightdata.fare.grandTotal +
        inBoundData.fare.convenienceFees * total_traveller +
        flightdata.fare.convenienceFees * total_traveller,
      markupID: inBoundData.fare.markupID + flightdata.fare.markupID,
      markupType: "IN",
      totalMarkup: inBoundData.fare.totalMarkup + flightdata.fare.totalMarkup,
      grandOrgTotal:
        inBoundData.fare.grandOrgTotal + flightdata.fare.grandOrgTotal,
      baseFare: inBoundData.fare.baseFare + flightdata.fare.baseFare,
      totalTax: inBoundData.fare.totalTax + flightdata.fare.totalTax,
      YQTax: inBoundData.fare.YQTax + flightdata.fare.YQTax,
      OtherCharges:
        inBoundData.fare.OtherCharges + flightdata.fare.OtherCharges,
      offeredFare: inBoundData.fare.offeredFare + flightdata.fare.offeredFare,
      // ChargeBU: array_3,
      ServiceFee: inBoundData.fare.ServiceFee + flightdata.fare.ServiceFee,
      gstPrice: inBoundData.fare.gstPrice + flightdata.fare.gstPrice,
      convinenceFeeMeta:
        inBoundData.fare.convinenceFeeMeta + flightdata.fare.convinenceFeeMeta,
      convinenceFeeStatusMeta: "NO",
      convenienceFees:
        inBoundData.fare.convenienceFees + flightdata.fare.convenienceFees,
    };
    const outf = {
      ...flightdata.fare,
      grandTotal: flightdata.fare.grandTotal,
      grandOrgTotal: flightdata.fare.grandOrgTotal,
    };
    const inf = {
      ...flightdata.fare,
      grandTotal: inBoundData.fare.grandTotal,
      grandOrgTotal: inBoundData.fare.grandOrgTotal,
    };
    const inFare = {
      inFare: inf,
      outFare: outf,
      inBound: inBoundData.inBound,
      fare: fares,
    };
    const inFareObj = { ...rest, ...inFare };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      SearchID: "lOYc1jozFhM3a28",
      userSessionID: "vg64292JP8bX",
      bookingID: 0,
      prodID: "1",
      cacheLocation: "search",
      departDate: data.startDates,
      returnDate: data.endDates,
      flightResult: inFareObj,
      gbptousd: 0,
      eurtousd: 0,
      eurtogbp: 0,
      luggage: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      luggageRet: [
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 1200,
          currency: "Excess Baggage - 3 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPE",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 2000,
          currency: "Excess Baggage - 5 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPA",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 4000,
          currency: "Excess Baggage - 10 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPB",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 6000,
          currency: "Excess Baggage - 15 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPC",
          origin: "DEL",
          destination: "GOI",
        },
        {
          quantity: 0,
          weight: 0,
          maxWeight: 0,
          maxQuantity: 0,
          amount: 12000,
          currency: "Excess Baggage - 30 Kg",
          description: 0,
          flightNumber: "792",
          airlineCode: "6E",
          wayType: 792,
          code: "XBPD",
          origin: "DEL",
          destination: "GOI",
        },
      ],
      perPaxLuggageOptions: true,
      currencyCode: data.currencyCode,
      adults: allflightdata.adults,
      child: allflightdata.child,
      infants: allflightdata.infants,
      infantsWs: 0,
      totalNight: 0,
      paymentDetails: {
        paymentType: "OT",
        cardCode: "GW",
        cardNumber: "Failure",
        maskCardNumber: "Failure",
        cardHolderName: "Payment Gateway",
        expiryMonth: "11",
        expiryYear: "2023",
        cvvNo: "123",
        country: "IN",
        address1: "Address",
        city: "City",
        state: "ST",
        postalCode: "postalcode",
      },
      passengerDetails: inputList,
      phoneNo: inputList[0].phone,
      mobileNo: inputList[0].phone,
      emailID: inputList[0].email,
      siteID: siteID,
      sourceMedia: "online",
      userIP: "0:0:0:0:0:0:0:1",
      device: "Desktop",
      browser: "WINDOWS_10-CHROME9-96.0.4664.45",
      agentMarkup: "410.0",
      coupons: "N",
      couponsAmt: 0,
      airline: allflightdata.airline,
      isTimeChanged: false,
      newPrice: 0,
      isticketeRun: 0,
      isticketeRunRet: 0,
      userSearch: true,
      serviceCharge: 0,
      seatAmount: 0,
      insurance: "No",
      insuranceCost: 0,
      macp: "No",
      macpAmt: 0,
      teleMed: "No",
      teleMedAmt: 20,
      brbStatus: "No",
      brbAmount: 0,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const createApi = await fetch(
      `${testapi}/Flights/CreateBooking?authcode=${authCode}`,
      requestOptions
    );
    const ApiData = await createApi.json();
    setcrmData(ApiData);
    setloadCrm(true);
    // const suss = await ApiData.bookingStatus;

    // if (suss === "Succeeded" || suss === "Failure") {

    //   getPayments()
    // } else {
    //   alert("flightdata Not Booked");
    // }
  };
  const [confirm, setConfirm] = useState(true);
  const continuetoBooking = () => {
    setConfirm(false);
    if (data.tripType === 2 || data.tripType === "2") {
      if (data.ArCountryCode !== "IN" && data.CountryCode !== "IN") {
        IntCreateBooking();
      } else {
        DomRoundCreateBooking();
      }
    } else {
      CreateBooking();
    }
  };

  // ---------------------NEW CODE FROM GOOGLE FLIGHT-------------------
  const handleSubmitdetails = (e) => {
    e.preventDefault();
    setInfo(false);
    setpay(false);

    setEditDetails(false);

    setOpen(true);
    setOpen2(true);
    setAddress(false);
    // setLoader(true);
    // setOpen(false);
    // setOpen2(true);
    // setthird(true);
    // setcontinuebutton(false);
    // setsecondcontinuebutton(true);
    // setcontinueemail(false);
    // setcontinueemail(false);
  };

  function saveCustomerDetail() {
    e.preventDefault();
    setEditDetails(false);
  }

  const [gstnum, setGstnum] = useState("");
  const [gstinfo, setGstinfo] = useState(false);
  const [continueSave, setContinueSave] = useState(true);

  const handleChange = () => {
    setGstinfo(!gstinfo);
    {
      gstinfo
        ? inputList.map((items, i) => {
            if (items.email !== "" && items.phone !== "") {
              setContinueSave(false);
            } else {
              setContinueSave(true);
            }
          })
        : setContinueSave(true);
    }
    if (gstinfo == true) {
      setconfirmButton(true);
    } else {
      setconfirmButton(false);
    }
  };

  const adultminsDate = moment()
    .subtract(100, "year")
    .format("YYYY-MM-DD")
    .toString();
  const adultmaxsDate = moment()
    .subtract(18, "year")
    .format("YYYY-MM-DD")
    .toString();
  const childminsDate = moment()
    .subtract(10, "year")
    .format("YYYY-MM-DD")
    .toString();
  const childmaxsDate = moment()
    .subtract(2, "year")
    .format("YYYY-MM-DD")
    .toString();
  const InfantmaxsDate = moment().format("YYYY-MM-DD").toString();
  const InfantminsDate = moment()
    .subtract(2, "year")
    .format("YYYY-MM-DD")
    .toString();

  const [address, setAddress] = useState(false);

  const handleSubmitnew = (e) => {
    // textInput.current.value;
    e.preventDefault();

    setpay(true);
    setOpen(false);
    setOpen2(true);
    setAddress(false);
    // setLoader(true);
    // setOpen(false);
    // setOpen2(true);
    // setthird(true);
    // setcontinuebutton(false);
    // setsecondcontinuebutton(true);
    // setcontinueemail(false);
    // setcontinueemail(false);

    dispatch({ type: SKIP_VALUES, payload: 2 });
    // e.preventDefault();
    // setLoader(true);
    // setOpen(false);
    setOpen2(true);
  };

  const handleInputChangedetails = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    checkContinue();
  };

  const handleInputChangeReg = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];

    list[index][name] = value;
    setInputList(list);
    checkReg();
  };

  function checkContinue() {
    setGstinfo(false);

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mobilePhone = /^\d{10}$/;
    var registrationNumber = /^\d{16}$/;
    var companyName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (gstinfo == true) {
    } else {
      {
        inputList.map((items, i) => {
          if (
            items.email !== "" &&
            items.phone !== "" &&
            items.email.match(validRegex) &&
            items.phone.match(mobilePhone)
          ) {
            setContinueSave(false);
          } else {
            setContinueSave(true);
          }
        });
      }
    }
  }

  function checkReg() {
    // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var regnumber = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    var companyName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    // if (gstinfo == true) {
    {
      inputList.map((items, i) => {
        if (
          items.gstNumber !== "" &&
          items.gstNumber.match(regnumber) &&
          items.gstCompany !== "" &&
          items.gstCompany.match(companyName)
        ) {
          setContinueSave(false);
        } else {
          setContinueSave(true);
        }
      });
    }
  }

  const [addressList, setAddList] = useState([
    {
      address1: "",
      address2: "",
      state: "",
      country: "",
      city: "",
      zipcode: "",
    },
  ]);

  const [agree, setAgree] = useState(true);

  function saveCustomerDetail() {
    const { passengerDetails, ...rest } = allflightdata;
    const obj = { ...rest, passengerDetails: inputList };
  }

  const [confirmdetail, setConfirmdetail] = useState(true);

  function confirmDetailPassenger() {
    var Name = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    {
      inputList.map((items, i) => {
        if (
          items.firstName !== "" &&
          items.lastName !== "" &&
          items.firstName.match(Name) &&
          items.lastName.match(Name)
        ) {
          setConfirmdetail(false);
        } else {
          setConfirmdetail(true);
        }
      });
    }
  }

  {
    loadCrm ? (
      <div>
        {crmData.bookingStatus === "Succeeded" ||
        crmData.bookingStatus === "Failure" ? (
          <div>{getPayments()}</div>
        ) : (
          ""
        )}
      </div>
    ) : (
      ""
    );
  }

  // pay U
  function getPayments() {
    //     // ____________________________________latest________________________________________
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      bookingid: crmData.bookingID,
      totalamt: totalpricedata,
      customername:
        inputList[0].firstName +
        " " +
        inputList[0].middleName +
        " " +
        inputList.lastName,
      cutomeremail: inputList.email,
      customercontact: inputList.phone,
      method: cardData,
      failurl: urlHandler,
      paymentType: payuMethod,
      successurl: urlHandler,
      errurl: urlHandler,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${PayUAPI}/payupaymentslive?authCode=${payuauth}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let redirectUrl = result.replace(/['"]+/g, "");
        window.location.href = redirectUrl;
      })
      .catch((error) => {});
  }

  const [dataPay, setDataPay] = useState(true);
  const [checksts, Setchecksts] = useState(true);

  // AllGate Ways

  function cardSelecter(item) {
    setPayBtnActive(false);

    ncm
      .filter((items) => items.gatewayId === item[0].gid)
      .map((itemss) => setNcmTrue(itemss.sec3des));

    const clickValue = item[0].gatewayName.split("-")[1];
    const visiblePaymentName = item[0].gatewayName.split("-")[0];
    setStopValue(0);
    setcardData(clickValue);
    setDiscountWay(item[0].chargeType);
    setDiscountValue(item[0].chargePercentage);
    setGatewaysName(visiblePaymentName);

    const Adultmarkup =
      data.source === "online" ? flightdata.fare.adultMarkup : 0;
    const Childmarkup =
      data.source === "online" ? flightdata.fare.childMarkup : 0;
    const AdultValue =
      ((flightdata.fare.adultFare + flightdata.fare.adultTax + Adultmarkup) /
        100) *
      item[0].chargePercentage;
    const ChildValue =
      ((flightdata.fare.childFare + flightdata.fare.childTax + Childmarkup) /
        100) *
      item[0].chargePercentage;
    const faltValue = item[0].chargePercentage;
    stopValue !== 0
      ? alert("Calls")
      : item[0].chargeType === "percentage" || item[0].chargeType === "PERCENT"
      ? dispatch({
          type: GateWays,
          payload: {
            ValueType: item[0].chargeType,
            AdultValue: AdultValue,
            ChildValue: ChildValue,
            FaltValue: 0,
          },
        })
      : dispatch({
          type: GateWays,
          payload: {
            ValueType: item[0].chargeType,
            AdultValue: 0,
            ChildValue: 0,
            FaltValue: faltValue,
          },
        });
  }

  // function onProced(){
  //   setAgree(false)
  //   onPay()
  // }

  function onPay() {
    //  {(agree && dataPay) ?"":Setchecksts(false)}
    if (dataPay == false) {
      Setchecksts(false);
    }
  }

  // ---------------------NEW CODE FROM GOOGLE FLIGHT-------------------

  //   const abc = () => {
  //  setNoOfTravellers(Adult_traveller),
  //  stopValue === 1 ? null : AllGateWays()
  //  setStopValue(1)
  //   }

  // AllGateWays()

  // useEffect(() =>{
  //     setNoOfTravellers(Adult_traveller)
  // } , []);

  //-------------------------- MODAL----------------------------

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const fromone = data.froCity.split("(")[1];
  // const fromtwo = fromone.split(")")[0];
  // const toone = data.toCity.split("(")[1];
  // const totwo = toone.split(")")[0];
  // const fromCode = AirportData.find((item) => item.cityCode === fromtwo);
  // const toCode = AirportData.find((item) => item.cityCode === totwo);

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}`;
  };

  const [confirmbutton, setconfirmButton] = useState(true);

  function checkConfirm() {}

  return (
    <>
      <div className=" grid grid-cols-1 mt-5 bg-gray-50  overflow-hidden checkout-stepform">
        {/* top Header */}
        <Collapse in={info}>
          <ValidationForm onSubmit={handleSubmitdetails} ref={formRefs}>
            <div className="grid grid-cols-1 background-contact inner-button-new">
              <div className="button-cpheading d-flex justify-content-start align-items-center m-0 checkoutflp-1">
                <span className="w-full">
                  <i className="fa fa-id-badge "></i> &nbsp; Contact Information
                </span>
              </div>
              <div className="checkout-step-body px-3 py-4 bg-white">
                {inputList.map((x, i) => {
                  return (
                    <div key={i} className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        {/*---- stepsor-group ----*/}
                        <div className="form-group stepsor-group">
                          <div className="form-outline form-outlinesite">
                            <input
                              required
                              type="email"
                              name="email"
                              className={
                                "form-control " +
                                (x.email.length > 0 ? "active" : "")
                              }
                              value={x.email}
                              onChange={(e) => handleInputChangedetails(e, i)}
                              id="frmcheck-1"
                            />
                            <label className="form-label" for="frmcheck-1">
                              Enter Your E-Mail
                            </label>
                          </div>
                        </div>
                        {/*---- end stepsor-group ----*/}
                      </div>

                      <div className="col-lg-6 col-md-6 col-12 mt-4 mt-md-0">
                        {/*---- stepsor-group ----*/}
                        <div className="form-group stepsor-group">
                          <div className="form-outline form-outlinesite">
                            <input
                              required
                              type="123456789"
                              className={
                                "form-control " +
                                (x.phone.length > 0 ? "active" : "")
                              }
                              name="phone"
                              value={x.phone}
                              onChange={(e) => handleInputChange(e, i)}
                              maxLength={10}
                              minLength={10}
                              id="frmcheck-2"
                            />
                            <label className="form-label" for="frmcheck-2">
                              Enter Your Phone No.
                            </label>
                          </div>
                        </div>
                        {/*---- end stepsor-group ----*/}
                      </div>

                      <div className="col-12">
                        {/* <div className=" contact-number-bg-info d-flex">
              <span className="text-lg ml-3 font-semibold  mt-4 mb-4 font-700">
                {" "}
                <i className="fa fa-id-badge "></i> &nbsp; GST Info
              </span>
            </div> */}

                        <div className="gstcheck-num-1 row">
                          {data.currencyCode === "INR" && (
                            <>
                              <div className="col-12 col-xl-6  mt-1">
                                <div className="loginbox-journey-2 p-0">
                                  <div className="form-check gstcheck">
                                    <input
                                      type="checkbox"
                                      id="gst"
                                      className="mr-2 mt-2 height-mint"
                                      name="gst"
                                      value={gstnum}
                                      checked={gstinfo}
                                      onChange={handleChange}
                                    />
                                    <label htmlFor="gst" className="d-flex">
                                      I have a GST number (Optional)
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {inputList.map((x, i) => {
                            return (
                              gstinfo && (
                                <div className="col-md-12 mt-4">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                      {/*---- stepsor-group ----*/}
                                      <div className="form-group stepsor-group">
                                        <div className="form-outline form-outlinesite">
                                          <input
                                            value={gstCompany}
                                            type="0123456789"
                                            name="gstNumber"
                                            maxLength={15}
                                            minLength={15}
                                            onChange={(e) =>
                                              handleInputChangeReg(e, i)
                                            }
                                            required="required"
                                            className={
                                              "form-control " +
                                              (inputList[0].gstNumber.length > 0
                                                ? "active"
                                                : "")
                                            }
                                            id="frmcheck-3"
                                          />
                                          <label
                                            className="form-label"
                                            for="frmcheck-3"
                                          >
                                            Registration Number
                                          </label>
                                        </div>
                                      </div>
                                      {/*---- end stepsor-group ----*/}
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12  mt-4 mt-md-0">
                                      {/*---- stepsor-group ----*/}
                                      <div className="form-group stepsor-group">
                                        <div className="form-outline form-outlinesite">
                                          <input
                                            type="text"
                                            name="gstCompany"
                                            required="required"
                                            onChange={(e) =>
                                              handleInputChangeReg(e, i)
                                            }
                                            className={
                                              "form-control " +
                                              (inputList[0].gstCompany.length >
                                              0
                                                ? "active"
                                                : "")
                                            }
                                            id="frmcheck-4"
                                          />
                                          <label
                                            className="form-label"
                                            for="frmcheck-4"
                                          >
                                            Company Name
                                          </label>
                                        </div>
                                      </div>
                                      {/*---- end stepsor-group ----*/}
                                    </div>
                                  </div>
                                </div>
                              )
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer-svcustom p-3 text-right">
              <button
                type="submit"
                className="btn btn-siteorange search-fl btn btn-primary continueto"
                onClick={() => saveCustomerDetail()}
                disabled={continueSave}
              >
                Continue Details
              </button>
            </div>
          </ValidationForm>
        </Collapse>

        {/* <Collapse in={gstinfo}>
        <ValidationForm onSubmit={handleSubmitdetails} ref={formRefs}>
        
          
         
          </ValidationForm>
        </Collapse>  */}

        {/* <Collapse in={contact}>
          <div className="grid grid-cols-2  px-10 pb-4 gap-2">
            <div className="text-sm  px-2  font-semibold">Mobile No.: {mobile}</div>
            <div className="text-sm  px-2 font-semibold">Email : {email}</div>
          </div>
        </Collapse> */}

        <div className="grid_contact">
          <Collapse in={open2}>
            <div>
              <div className="button-cpheading d-flex justify-content-start align-items-center m-0 checkoutflp-1 ">
                <span className="flex-grow-1 pr-2">
                  <i className="fa fa-id-badge "></i>&nbsp; Travellers Details
                </span>

                {/* <span
                  className="badge depbadge editdet-btn btn shadow-0"
                  in={editDetails}
                  onClick={() => editCustomerDetail()}>
                  Edit Details
                </span> */}
              </div>
              <div className="checkout-step-body px-3 pb-4 em-pj">
                {/* {inputList.map((item, i) => ( */}
                <div key={0} className="row  checkoutflp-1 email-checkoutflp-1">
                  <div className="col-lg-6 col-md-6 col-12 text-sm font-semibold mb-3 mb-md-0 last-contct">
                    <span className="mr-2 depbadge-text">
                      <i className="fa fa-envelope mr-1"></i>
                    </span>
                    Email :{" "}
                    <span className="text-travomint ch-flo-1 font-medium text-gray-900 font-normal pl-1">
                      {inputList[0].email}
                    </span>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 text-sm font-semibold mb-3 mb-md-0 last-contct">
                    <span className="mr-2 depbadge-text">
                      <i className="fa fa-phone mr-1"></i>
                    </span>
                    Phone No :{" "}
                    <span className="text-travomint ch-flo-1 font-medium text-gray-900 font-normal pl-1">
                      {inputList[0].phone}
                    </span>
                  </div>
                </div>
                {/* ))} */}

                <div className="mttrv-3-input">
                  {inputList.map((item, i) => (
                    <div
                      key={i}
                      className="d-flex align-center justify-between   p_4_custome row sa-flp-1"
                    >
                      <div className="col-12">
                        <h5 className="main-heading heading-checkoutflp-1">
                          Adult <span className="badge-roundc">{i + 1}</span>
                        </h5>

                        <div className="w-100">
                          <div className="row trvel-bydetails">
                            <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start ">
                              <strong>Name :</strong>{" "}
                              <span className="text-travomint ch-flo-1 font-medium text-gray-900 text-uppercase ">
                                {item.title} {item.firstName} {item.middleName}{" "}
                                {item.lastName}
                              </span>
                            </div>
                            <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start">
                              <strong>DOB :</strong>
                              <span className="text-travomint ch-flo-1 font-medium text-gray-900 ">
                                {" "}
                                {item.dateOfBirth}
                              </span>
                            </div>
                            <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start ">
                              <strong>Gender :</strong>
                              <span className="text-travomint ch-flo-1 font-medium text-gray-900">
                                {" "}
                                {item.gender == "1" ? "MALE" : ""}{" "}
                                {item.gender == "2" ? "FEMALE" : ""}{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {allflightdata.child !== 0 && (
                    <>
                      {childinputList.map((item, i) => (
                        <div
                          key={i}
                          className="d-flex align-center justify-between   p_4_custome row"
                        >
                          <div className="col-12">
                            <h5 className="main-heading heading-checkoutflp-1 child">
                              Child{" "}
                              <span className="badge-roundc">{i + 1}</span>
                            </h5>

                            <div className="w-100">
                              <div className="row trvel-bydetails">
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start ">
                                  <strong>Name :</strong>{" "}
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900 text-uppercase">
                                    {item.title} {item.firstName}{" "}
                                    {item.middleName} {item.lastName}
                                  </span>
                                </div>
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start">
                                  <strong>DOB :</strong>
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900">
                                    {" "}
                                    {item.dateOfBirth}
                                  </span>
                                </div>
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start ">
                                  <strong>Gender :</strong>
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900">
                                    {" "}
                                    {item.gender == "1" ? "MALE" : ""}{" "}
                                    {item.gender == "2" ? "FEMALE" : ""}{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div>
                  {allflightdata.infants !== 0 && (
                    <>
                      {infantinputList.map((item, i) => (
                        <div
                          key={i}
                          className="d-flex align-center justify-between   p_4_custome row infant-prb"
                        >
                          <div className="col-12">
                            <h5 className="main-heading heading-checkoutflp-1">
                              Infant{" "}
                              <span className="badge-roundc">{i + 1}</span>
                            </h5>

                            <div className="w-100">
                              <div className="row trvel-bydetails">
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start ">
                                  <strong>Name :</strong>{" "}
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900 text-uppercase">
                                    {item.title} {item.firstName}{" "}
                                    {item.middleName} {item.lastName}
                                  </span>
                                </div>
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start">
                                  <strong>DOB :</strong>
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900">
                                    {" "}
                                    {item.dateOfBirth}
                                  </span>
                                </div>
                                <div className="text-sm font-semibold col-lg-4 col-sm-6 col-12 d-flex align-items-start">
                                  <strong>Gender :</strong>
                                  <span className="text-travomint ch-flo-1 font-medium text-gray-900">
                                    {" "}
                                    {item.gender == "1" ? "MALE" : ""}{" "}
                                    {item.gender == "2" ? "FEMALE" : ""}{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </Collapse>

          <Collapse in={open}>
            <ValidationForm onSubmit={handleSubmitnew} ref={formRefs}>
              <div className="checkout-step-body px-3 checkoutflp-3 bg-white">
                {inputList.map((x, i) => {
                  const maxdate = moment().format("YYYY-MM-DD").toString();

                  return (
                    <div className="input-mainone-travel" key={i}>
                      <div className="row">
                        <div className="col-12">
                          <h5 className="main-heading">
                            <span className="mr-2">
                              <FontAwesomeIcon icon="fa-solid fa-user" />
                            </span>
                            Adult {i + 1}
                          </h5>
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            Title
                          </label>

                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <select
                                name="title"
                                required
                                value={x.title}
                                onChange={(e) => handleInputChange(e, i)}
                                className="form-control form-select "
                                id="cars"
                              >
                                <option value="">Select Title</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                              </select>
                            </div>
                          </div>
                          {/*---- end stepsor-group ----*/}
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            First Name
                          </label>
                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <input
                                required
                                type="text"
                                name="firstName"
                                autoComplete="off"
                                value={x.firstName}
                                onChange={(e) => handleInputChange(e, i)}
                                className={
                                  "form-control " +
                                  (x.firstName.length > 0 ? "active" : "")
                                }
                                id="frmcheck-6"
                              />
                              <label className="form-label" for="frmcheck-6">
                                First Name
                              </label>
                            </div>
                          </div>
                          {/*---- end stepsor-group ----*/}
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            Middle Name
                          </label>
                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <input
                                type="text"
                                name="middleName"
                                autoComplete="off"
                                value={x.middleName}
                                onChange={(e) => handleInputChange(e, i)}
                                className={
                                  "form-control " +
                                  (x.middleName.length > 0 ? "active" : "")
                                }
                                id="frmcheck-7"
                              />
                              <label className="form-label" for="frmcheck-7">
                                Middle Name
                              </label>
                            </div>
                          </div>
                          {/*---- end stepsor-group ----*/}
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            Last Name
                          </label>
                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <input
                                type="text"
                                autoComplete="off"
                                name="lastName"
                                value={x.lastName}
                                onChange={(e) => handleInputChange(e, i)}
                                required
                                className={
                                  "form-control " +
                                  (x.lastName.length > 0 ? "active" : "")
                                }
                                id="frmcheck-7"
                              />
                              <label className="form-label" for="frmcheck-7">
                                Enter Last Name
                              </label>
                            </div>
                          </div>
                          {/*---- end stepsor-group ----*/}
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            Date of Birth
                          </label>
                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <input
                                type="date"
                                // min="1800-01-01"
                                min={adultminsDate}
                                max={adultmaxsDate}
                                name="dateOfBirth"
                                onChange={(e) => handleInputChange(e, i)}
                                required
                                className={
                                  "form-control  uppercase " +
                                  (inputList[0].dateOfBirth.length > 0
                                    ? "active"
                                    : "")
                                }
                                id="frmcheck-8"
                              />
                            </div>
                          </div>

                          {/*---- end stepsor-group ----*/}
                        </div>

                        <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                          <label className="form-label formtrvel-in">
                            Gender
                          </label>
                          {/*---- stepsor-group ----*/}
                          <div className="form-group stepsor-group">
                            <div className="form-outline form-outlinesite">
                              <select
                                id="cars"
                                name="gender"
                                required
                                onChange={(e) => handleInputChange(e, i)}
                                className="form-control form-select "
                              >
                                <option value="">Gender</option>
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                              </select>
                            </div>
                          </div>
                          {/*---- end stepsor-group ----*/}
                        </div>

                        {/* {departData.countryName ===
                          arriveData.countryName ? null : (
                            <div>
                              <div className="row  mb-3">
                                <div className="col-lg-4 col-sm-2 col-md-2">
                                  <div>
                                    <h5>PassPort No</h5>
                                  </div>
                                  <TextInput
                                    type="text"
                                    pattern="[0-9]*"
                                    inputmode="numeric"
                                    className="form-control"
                                    autoComplete="off"
                                    name="passportNumber"
                                    placeholder="Passport No."
                                    value={x.passportNumber}
                                    // onChange={(e) => infanthandleInputChange(e, i)}
                                    onChange={(e) => handleInputChange(e, i)}
                                    required
                                  />
                                </div>

                                <div className="col-lg-4 col-sm-2 col-md-2">
                                  <div>
                                    <h5>Issue Date </h5>
                                  </div>
                                  <TextInput
                                    type="date"
                                    className="form-control uppercase"
                                    autoComplete="off"
                                    name="issueDate"
                                    placeholder="Issue Date"
                                    value={x.issueDate}
                                    onChange={(e) => handleInputChange(e, i)}
                                    required
                                  />
                                </div>
                                <div className="col-lg-4 col-sm-2 col-md-2">
                                  <div>
                                    <h5>Expiry Date </h5>
                                  </div>
                                  <TextInput
                                    type="date"
                                    className="form-control uppercase"
                                    autoComplete="off"
                                    name="expiryDate"
                                    placeholder="Expiry Date"
                                    value={x.expiryDate}
                                    onChange={(e) => handleInputChange(e, i)}
                                    required
                                  />
                                </div>
                                <div className="col-lg-4 col-sm-2 col-md-2">
                                  <div>
                                    <h5>Country</h5>
                                  </div>
                                  <TextInput
                                    type="text"
                                    className="form-control"
                                    autoComplete="off"
                                    name="issueCountry"
                                    placeholder="Country"
                                    value={x.issueCountry}
                                    onChange={(e) => handleInputChange(e, i)}
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          )} */}
                        <Collapse>
                          <div
                            id="example-collapse-text"
                            className="pt-4  bg-white"
                          >
                            {x.addBagage != "" ? (
                              <>
                                <div className="grid grid-cols-2 gap-4 px-24 ">
                                  <div className="grid grid-cols-8 ">
                                    <div className="col-span-1 px-1">
                                      <TextInput
                                        type="radio"
                                        id="five"
                                        name="weight"
                                        value="5kg"
                                        onClick={(e) => handleInputChange(e, i)}
                                        className="h-4 w-4 mt-3 hover:bg-gray-400"
                                      />
                                    </div>
                                    <div className="py-2">
                                      <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                    </div>
                                    <div className="col-span-6 py-1 ">
                                      <p className="text-xs  mb-0 font-semibold text-orange-600">
                                        Additional 5KG
                                      </p>
                                      <p className="text-xl text-black font-semibold">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        2000
                                      </p>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-8">
                                    <div className="col-span-1">
                                      <TextInput
                                        type="radio"
                                        id="ten"
                                        name="weight"
                                        value="10kg"
                                        onClick={(e) => handleInputChange(e, i)}
                                        className="h-4 w-4 mt-3 hover:bg-gray-400"
                                      />
                                    </div>
                                    <div className="py-2">
                                      <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                    </div>
                                    <div className="col-span-6 py-1 ">
                                      <p className="text-xs  mb-0 font-semibold text-orange-600">
                                        Additional 10KG
                                      </p>
                                      <p className="text-xl text-black font-semibold">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        2000
                                      </p>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-8">
                                    <div className="col-span-1">
                                      <TextInput
                                        type="radio"
                                        id="fifteen"
                                        name="weight"
                                        value="15kg"
                                        onClick={(e) => handleInputChange(e, i)}
                                        className="h-4 w-4 mt-3 hover:bg-gray-400"
                                      />
                                    </div>
                                    <div className="py-2">
                                      <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                    </div>
                                    <div className="col-span-6 py-1 ">
                                      <p className="text-xs  mb-0 font-semibold text-orange-600">
                                        Additional 20KG
                                      </p>
                                      <p className="text-xl text-black font-semibold">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        2000
                                      </p>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-8">
                                    <div className="col-span-1">
                                      <TextInput
                                        type="radio"
                                        id="twentyfive"
                                        name="weight"
                                        value="25kg"
                                        onClick={(e) => handleInputChange(e, i)}
                                        className="h-4 w-4 mt-3 hover:bg-gray-400"
                                      />
                                    </div>
                                    <div className="py-2">
                                      <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                    </div>
                                    <div className="col-span-6 py-1 ">
                                      <p className="text-xs  mb-0 font-semibold text-orange-600">
                                        Additional 25KG
                                      </p>
                                      <p className="text-xl text-black font-semibold">
                                        <i className="fa fa-rupee-sign"></i>{" "}
                                        2000
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 align-items-right px-10">
                                  <div>
                                    {" "}
                                    <button
                                      className="btn w-full btn-shivam add-bagger "
                                      name="addBagage"
                                      value=""
                                      onClick={(e) => Done(e, i)}
                                    >
                                      Done
                                    </button>
                                  </div>
                                </div>
                              </>
                            ) : (
                              " "
                            )}
                          </div>
                        </Collapse>
                        {/* baggage body over */}
                        {/* {noOfTravellers != 1 && (
                        <div className="col-lg-1 col-sm-1 col-md-1 align-self-center">
                          {inputList.length - 1 === index && (
                            <button
                              className="btn btn-primary btn-sm mt-1 mt-md-0"
                              onClick={handleAddClick}
                            >
                              Add
                              <i className="fa fa-plus"></i>
                            </button>
                          )}
                        </div>
                      )} */}
                      </div>
                    </div>
                  );
                })}
                <div className="grid grid-cols-1 mb-4 mt-2 flexEnd  add-trvbtn-1">
                  {Adult_traveller === 1 ? null : (
                    <>
                      {inputList.length !== Adult_traveller && (
                        <div className="col-12 align-self-center">
                          <button
                            className=" btn-dark btn-sm"
                            onClick={handleAddClick}
                          >
                            Add Traveller
                          </button>
                        </div>
                      )}
                    </>
                  )}

                  {/* <div className="px-5 ">
                      <button
                        className="btn btn-shivam float-right add-bagger"
                        name="addBagage"
                        value="addBagage"
                        onClick={(e) => handleInputChange(e, i)}
                        onFocus={(e) => close1(e, i)}
                        type="submit"
                      >
                        <i className="fa fa-briefcase "></i> &nbsp; Add Baggage
                      </button>
                    </div> */}
                </div>
              </div>
              {/* Child */}
              {/* child */}
              {Child_traveller !== 0 && (
                <>
                  <div className="checkout-step-body px-3 checkoutflp-3 bg-white checkout-flp-4">
                    <span className="badge depbadge return mb-3">
                      Child passenger should be 2-18 Years
                    </span>
                    {childinputList.map((x, i) => {
                      const maxdate = moment().format("YYYY-MM-DD").toString();

                      return (
                        <div className="input-mainone-travel" key={i}>
                          <div className="row">
                            <div className=" col-12">
                              <h5 className="main-heading">
                                <span className="mr-2">
                                  <FontAwesomeIcon icon="fa-solid fa-child-reaching" />
                                </span>
                                Child {i + 1}
                              </h5>
                            </div>
                            {/* <div className="col-lg-2 col-sm-2 col-md-2">
                          {passengerValues.map((x, i) => {
                            return (
                              <>
                                <div>
                                  <h5>{x.name}</h5>
                                </div>
                                <TextInput
                                  type="radio"
                                  name="passengerType"
                                  value={x.value}
                                  onChange={(e) => handleInputChange(e, i)}
                                  required="required"
                                />
                              </>
                            );
                          })}
                        </div> */}
                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Title
                              </label>

                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <select
                                    name="title"
                                    required
                                    value={x.title}
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    className="form-control form-select "
                                    id="cars"
                                  >
                                    <option value="">Select Title</option>
                                    <option value="Mr.">Mstr.</option>
                                    <option value="Ms.">Miss.</option>
                                  </select>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                First Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    required
                                    type="text"
                                    name="firstName"
                                    autoComplete="off"
                                    value={x.firstName}
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    className={
                                      "form-control " +
                                      (x.firstName.length > 0 ? "active" : "")
                                    }
                                    id="frmcheck-9"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-9"
                                  >
                                    First Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Middle Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="text"
                                    name="middleName"
                                    autoComplete="off"
                                    value={x.middleName}
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    className={
                                      "form-control " +
                                      (x.middleName.length > 0 ? "active" : "")
                                    }
                                    id="frmcheck-10"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-10"
                                  >
                                    Middle Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Last Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="text"
                                    autoComplete="off"
                                    name="lastName"
                                    value={x.lastName}
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    required
                                    className={
                                      "form-control " +
                                      (x.lastName.length > 0 ? "active" : "")
                                    }
                                    id="frmcheck-11"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-11"
                                  >
                                    Enter Last Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Date of Birth
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="date"
                                    min={childminsDate}
                                    max={childmaxsDate}
                                    name="dateOfBirth"
                                    required
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    className={"form-control uppercase"}
                                    id="frmcheck-12"
                                  />
                                </div>
                              </div>

                              {/*---- end stepsor-group ----*/}

                              {/* <TextInput type="date" id="datemin" name="datemin" min={childminsDate} max={childmaxsDate}/> */}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Gender
                              </label>

                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <select
                                    id="cars"
                                    name="gender"
                                    placeholder="Gender"
                                    required
                                    onChange={(e) =>
                                      childhandleInputChange(e, i)
                                    }
                                    className="form-control form-select "
                                  >
                                    <option value="">Gender</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                  </select>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            {/* {departData.countryName ===
                              arriveData.countryName ? null : (
                                <div>
                                  <div className="row  mb-3">
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>PassPort No</h5>
                                      </div>
                                      <TextInput
                                        type="text"
                                        className="form-control"
                                        autoComplete="off"
                                        name="passportNumber"
                                        placeholder="Passport No."
                                        value={x.passportNumber}
                                        onChange={(e) =>
                                          childhandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>

                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Issue Date </h5>
                                      </div>
                                      <TextInput
                                        type="date"
                                        className="form-control uppercase"
                                        autoComplete="off"
                                        name="issueDate"
                                        placeholder="Issue Date"
                                        value={x.issueDate}
                                        onChange={(e) =>
                                          childhandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Expiry Date </h5>
                                      </div>
                                      <TextInput
                                        type="date"
                                        className="form-control uppercase"
                                        autoComplete="off"
                                        name="expiryDate"
                                        placeholder="Expiry Date"
                                        value={x.expiryDate}
                                        onChange={(e) =>
                                          childhandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Country</h5>
                                      </div>
                                      <TextInput
                                        type="text"
                                        className="form-control"
                                        autoComplete="off"
                                        name="issueCountry"
                                        placeholder="Country"
                                        value={x.issueCountry}
                                        onChange={(e) =>
                                          childhandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              )} */}

                            {/* baggage Body */}
                            {/* <Collapse>
                                <div
                                  id="example-collapse-text"
                                  className="pt-4  bg-white"
                                >
                                  {x.addBagage != "" ? (
                                    <>
                                      <div className="grid grid-cols-2 gap-4 px-24 ">
                                        <div className="grid grid-cols-8 ">
                                          <div className="col-span-1 px-1">
                                            <TextInput
                                              type="radio"
                                              id="five"
                                              name="weight"
                                              value="5kg"
                                              onClick={(e) =>
                                                handleInputChange(e, i)
                                              }
                                              className="h-4 w-4 mt-3 hover:bg-gray-400"
                                            />
                                          </div>
                                          <div className="py-2">
                                            <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                          </div>
                                          <div className="col-span-6 py-1 ">
                                            <p className="text-xs  mb-0 font-semibold text-orange-600">
                                              Additional 5KG
                                            </p>
                                            <p className="text-xl text-black font-semibold">
                                              <i className="fa fa-rupee-sign"></i>{" "}
                                              2000
                                            </p>
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-8">
                                          <div className="col-span-1">
                                            <TextInput
                                              type="radio"
                                              id="ten"
                                              name="weight"
                                              value="10kg"
                                              onClick={(e) =>
                                                handleInputChange(e, i)
                                              }
                                              className="h-4 w-4 mt-3 hover:bg-gray-400"
                                            />
                                          </div>
                                          <div className="py-2">
                                            <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                          </div>
                                          <div className="col-span-6 py-1 ">
                                            <p className="text-xs  mb-0 font-semibold text-orange-600">
                                              Additional 10KG
                                            </p>
                                            <p className="text-xl text-black font-semibold">
                                              <i className="fa fa-rupee-sign"></i>{" "}
                                              2000
                                            </p>
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-8">
                                          <div className="col-span-1">
                                            <TextInput
                                              type="radio"
                                              id="fifteen"
                                              name="weight"
                                              value="15kg"
                                              onClick={(e) =>
                                                handleInputChange(e, i)
                                              }
                                              className="h-4 w-4 mt-3 hover:bg-gray-400"
                                            />
                                          </div>
                                          <div className="py-2">
                                            <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                          </div>
                                          <div className="col-span-6 py-1 ">
                                            <p className="text-xs  mb-0 font-semibold text-orange-600">
                                              Additional 20KG
                                            </p>
                                            <p className="text-xl text-black font-semibold">
                                              <i className="fa fa-rupee-sign"></i>{" "}
                                              2000
                                            </p>
                                          </div>
                                        </div>

                                        <div className="grid grid-cols-8">
                                          <div className="col-span-1">
                                            <TextInput
                                              type="radio"
                                              id="twentyfive"
                                              name="weight"
                                              value="25kg"
                                              onClick={(e) =>
                                                handleInputChange(e, i)
                                              }
                                              className="h-4 w-4 mt-3 hover:bg-gray-400"
                                            />
                                          </div>
                                          <div className="py-2">
                                            <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                          </div>
                                          <div className="col-span-6 py-1 ">
                                            <p className="text-xs  mb-0 font-semibold text-orange-600">
                                              Additional 25KG
                                            </p>
                                            <p className="text-xl text-black font-semibold">
                                              <i className="fa fa-rupee-sign"></i>{" "}
                                              2000
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-1 align-items-right px-10">
                                        <div>
                                          {" "}
                                          <button
                                            className="btn w-full btn-shivam add-bagger "
                                            name="addBagage"
                                            value=""
                                            onClick={(e) => Done(e, i)}
                                          >
                                            Done
                                          </button>
                                        </div>
                                      </div>
                                    </>
                                  ) : (
                                    " "
                                  )}
                                </div>
                              </Collapse> */}

                            {/* baggage body over */}
                            {/* {noOfTravellers != 1 && (
                        <div className="col-lg-1 col-sm-1 col-md-1 align-self-center">
                          {inputList.length - 1 === index && (
                            <button
                              className="btn btn-primary btn-sm mt-1 mt-md-0"
                              onClick={handleAddClick}
                            >
                              Add
                              <i className="fa fa-plus"></i>
                            </button>
                          )}
                        </div>
                      )} */}
                          </div>
                        </div>
                      );
                    })}

                    <div className="grid grid-cols-1 mb-4 mt-2 flexEnd  add-trvbtn-1">
                      {Child_traveller === 0 || Child_traveller === 1 ? null : (
                        <>
                          {childinputList.length === Child_traveller ? null : (
                            <div className="col-12 align-self-center">
                              <button
                                className=" btn-dark btn-sm"
                                onClick={childhandleAddClick}
                              >
                                Add Traveller
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {/* <div className="px-5 ">
                    <button
                      className="btn btn-shivam float-right add-bagger"
                      name="addBagage"
                      value="addBagage"
                      onClick={(e) => handleInputChange(e, i)}
                      onFocus={(e) => close1(e, i)}
                      type="submit"
                    >
                      <i className="fa fa-briefcase "></i> &nbsp; Add Baggage
                    </button>
                  </div> */}
                    </div>
                  </div>

                  {/* add Baggage */}
                </>
              )}
              {/* Infant */}
              {/* child */}
              {Infant_traveller !== 0 && (
                <>
                  <div className="checkout-step-body px-3 checkoutflp-3 bg-white checkout-flp-4">
                    <span className="badge depbadge return mb-3">
                      Infant passenger should be Max 2year
                    </span>
                    {infantinputList.map((x, i) => {
                      const maxdate = moment()
                        .format("YYYY-MM-D  D")
                        .toString();

                      return (
                        <div className="input-mainone-travel" key={i}>
                          <div className="row">
                            <div className="col-12">
                              <h5 className="main-heading">
                                <span className="mr-2">
                                  <FontAwesomeIcon icon="fa-solid fa-baby-carriage" />
                                </span>
                                Infant {i + 1}
                              </h5>
                            </div>
                            {/* <div className="col-lg-2 col-sm-2 col-md-2">
                          {passengerValues.map((x, i) => {
                            return (
                              <>
                                <div>
                                  <h5>{x.name}</h5>
                                </div>
                                <TextInput
                                  type="radio"
                                  name="passengerType"
                                  value={x.value}
                                  onChange={(e) => infanthandleInputChange(e, i)}
                                  required="required"
                                />
                              </>
                            );
                          })}
                        </div> */}
                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Title
                              </label>

                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <select
                                    name="title"
                                    required
                                    value={x.title}
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    className="form-control form-select "
                                    id="cars"
                                  >
                                    <option value="">Select Title</option>
                                    <option value="Mr.">Mstr.</option>
                                    <option value="Ms.">Miss.</option>
                                  </select>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                First Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="text"
                                    className={
                                      "form-control " +
                                      (x.firstName.length > 0 ? "active" : "")
                                    }
                                    name="firstName"
                                    autoComplete="off"
                                    value={x.firstName}
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    required
                                    id="frmcheck-13"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-13"
                                  >
                                    First Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Middle Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="text"
                                    className={
                                      "form-control " +
                                      (x.middleName.length > 0 ? "active" : "")
                                    }
                                    name="middleName"
                                    autoComplete="off"
                                    value={x.middleName}
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    id="frmcheck-14"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-14"
                                  >
                                    Enter Middle Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Last Name
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="text"
                                    className={
                                      "form-control " +
                                      (x.lastName.length > 0 ? "active" : "")
                                    }
                                    autoComplete="off"
                                    name="lastName"
                                    value={x.lastName}
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    required
                                    id="frmcheck-15"
                                  />
                                  <label
                                    className="form-label"
                                    for="frmcheck-15"
                                  >
                                    Enter Last Name
                                  </label>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Date of Birth
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <input
                                    type="date"
                                    className="form-control uppercase"
                                    name="dateOfBirth"
                                    max={InfantmaxsDate}
                                    min={InfantminsDate}
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    required
                                    id="frmcheck-16"
                                  />
                                </div>
                              </div>

                              {/*---- end stepsor-group ----*/}
                            </div>

                            <div className="col-xxl-3 col-lg-4 col-sm-6 col-12 text-input-all mb-2">
                              <label className="form-label formtrvel-in">
                                Gender
                              </label>
                              {/*---- stepsor-group ----*/}
                              <div className="form-group stepsor-group">
                                <div className="form-outline form-outlinesite">
                                  <select
                                    id="cars"
                                    name="gender"
                                    placeholder="Gender"
                                    required
                                    onChange={(e) =>
                                      infanthandleInputChange(e, i)
                                    }
                                    className="form-control form-select "
                                  >
                                    <option value="">Gender</option>
                                    <option value={1}>Male</option>
                                    <option value={2}>Female</option>
                                  </select>
                                </div>
                              </div>
                              {/*---- end stepsor-group ----*/}
                            </div>

                            {/* {departData.countryName ===
                              arriveData.countryName ? null : (
                                <div>
                                  <div className="row  mb-3">
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>PassPort No</h5>
                                      </div>
                                      <TextInput
                                        type="text"
                                        className="form-control"
                                        autoComplete="off"
                                        name="passportNumber"
                                        placeholder="Passport No."
                                        value={x.passportNumber}
                                        onChange={(e) =>
                                          infanthandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Issue Date </h5>
                                      </div>
                                      <TextInput
                                        type="date"
                                        className="form-control uppercase"
                                        autoComplete="off"
                                        name="issueDate"
                                        placeholder="Issue Date"
                                        value={x.issueDate}
                                        onChange={(e) =>
                                          infanthandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>

                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Expiry Date </h5>
                                      </div>
                                      <TextInput
                                        type="date"
                                        className="form-control uppercase"
                                        autoComplete="off"
                                        name="expiryDate"
                                        placeholder="Issue Date"
                                        value={x.expiryDate}
                                        onChange={(e) =>
                                          infanthandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className="col-lg-2 col-sm-2 col-md-2">
                                      <div>
                                        <h5>Country</h5>
                                      </div>
                                      <TextInput
                                        type="text"
                                        className="form-control"
                                        autoComplete="off"
                                        name="issueCountry"
                                        placeholder="Country"
                                        value={x.issueCountry}
                                        onChange={(e) =>
                                          infanthandleInputChange(e, i)
                                        }
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              )} */}

                            {/* baggage Body */}
                            <Collapse>
                              <div
                                id="example-collapse-text"
                                className="pt-4  bg-white"
                              >
                                {x.addBagage != "" ? (
                                  <>
                                    <div className="grid grid-cols-2 gap-4 px-24 ">
                                      <div className="grid grid-cols-8 ">
                                        <div className="col-span-1 px-1">
                                          <TextInput
                                            type="radio"
                                            id="five"
                                            name="weight"
                                            value="5kg"
                                            onClick={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            className="h-4 w-4 mt-3 hover:bg-gray-400"
                                          />
                                        </div>
                                        <div className="py-2">
                                          <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                        </div>
                                        <div className="col-span-6 py-1 ">
                                          <p className="text-xs  mb-0 font-semibold text-orange-600">
                                            Additional 5KG
                                          </p>
                                          <p className="text-xl text-black font-semibold">
                                            <i className="fa fa-rupee-sign"></i>{" "}
                                            2000
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-8">
                                        <div className="col-span-1">
                                          <TextInput
                                            type="radio"
                                            id="ten"
                                            name="weight"
                                            value="10kg"
                                            onClick={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            className="h-4 w-4 mt-3 hover:bg-gray-400"
                                          />
                                        </div>
                                        <div className="py-2">
                                          <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                        </div>
                                        <div className="col-span-6 py-1 ">
                                          <p className="text-xs  mb-0 font-semibold text-orange-600">
                                            Additional 10KG
                                          </p>
                                          <p className="text-xl text-black font-semibold">
                                            <i className="fa fa-rupee-sign"></i>{" "}
                                            2000
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-8">
                                        <div className="col-span-1">
                                          <TextInput
                                            type="radio"
                                            id="fifteen"
                                            name="weight"
                                            value="15kg"
                                            onClick={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            className="h-4 w-4 mt-3 hover:bg-gray-400"
                                          />
                                        </div>
                                        <div className="py-2">
                                          <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                        </div>
                                        <div className="col-span-6 py-1 ">
                                          <p className="text-xs  mb-0 font-semibold text-orange-600">
                                            Additional 20KG
                                          </p>
                                          <p className="text-xl text-black font-semibold">
                                            <i className="fa fa-rupee-sign"></i>{" "}
                                            2000
                                          </p>
                                        </div>
                                      </div>

                                      <div className="grid grid-cols-8">
                                        <div className="col-span-1">
                                          <TextInput
                                            type="radio"
                                            id="twentyfive"
                                            name="weight"
                                            value="25kg"
                                            onClick={(e) =>
                                              handleInputChange(e, i)
                                            }
                                            className="h-4 w-4 mt-3 hover:bg-gray-400"
                                          />
                                        </div>
                                        <div className="py-2">
                                          <i className="fa fa-briefcase fa-lg text-gray-600"></i>
                                        </div>
                                        <div className="col-span-6 py-1 ">
                                          <p className="text-xs  mb-0 font-semibold text-orange-600">
                                            Additional 25KG
                                          </p>
                                          <p className="text-xl text-black font-semibold">
                                            <i className="fa fa-rupee-sign"></i>{" "}
                                            2000
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 align-items-right px-10">
                                      <div>
                                        {" "}
                                        <button
                                          className="btn w-full btn-shivam add-bagger "
                                          name="addBagage"
                                          value=""
                                          onClick={(e) => Done(e, i)}
                                        >
                                          Done
                                        </button>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  " "
                                )}
                              </div>
                            </Collapse>

                            {/* baggage body over */}
                            {/* {noOfTravellers != 1 && (
                        <div className="col-lg-1 col-sm-1 col-md-1 align-self-center">
                          {inputList.length - 1 === index && (
                            <button
                              className="btn btn-primary btn-sm mt-1 mt-md-0"
                              onClick={handleAddClick}
                            >
                              Add
                              <i className="fa fa-plus"></i>
                            </button>
                          )}
                        </div>
                      )} */}
                          </div>
                        </div>
                      );
                    })}
                    <div className="grid grid-cols-1 mb-4 mt-2 flexEnd  add-trvbtn-1">
                      {Infant_traveller === 0 ||
                      Infant_traveller === 1 ? null : (
                        <>
                          {infantinputList.length !== Infant_traveller && (
                            <div className="col-12 align-self-center">
                              <button
                                className=" btn-dark btn-sm"
                                onClick={infanthandleAddClick}
                              >
                                Add Traveller
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {/* <div className="px-5 ">
                    <button
                      className="btn btn-shivam float-right add-bagger"
                      name="addBagage"
                      value="addBagage"
                      onClick={(e) => handleInputChange(e, i)}
                      onFocus={(e) => close1(e, i)}
                      type="submit"
                    >
                      <i className="fa fa-briefcase "></i> &nbsp; Add Baggage
                    </button>
                  </div> */}
                    </div>
                  </div>
                </>
              )}

              <div className="modal-footer-svcustom p-3 text-right">
                {Merged.length === traveller && (
                  <button
                    type="submit"
                    className="btn btn-siteorange search-fl btn btn-primary continueto"
                    onClick={() =>
                      currencySign !== "INR" ? handleSubmiINT() : handleSubmit()
                    }
                  >
                    Continue Details
                  </button>
                )}
              </div>
            </ValidationForm>
          </Collapse>
        </div>

        <Collapse in={address} className="hidden">
          <ValidationForm onSubmit={handleSubmitnew} ref={formRefs}>
            {addressList.map((x, i) => {
              return (
                <div key={i} className="px-4">
                  <h4 className="mt-4 mb-4">Details</h4>

                  <div className="row">
                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>Address 1</h6>
                      <div className="col-md-12 px-0">
                        <div className="col-md-12 px-0 mt-2">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="Address 1"
                            value={x.address1}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>Address 2</h6>
                      <div className="col-md-12 px-0">
                        <div className="col-md-12 px-0 mt-2">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="Address 2"
                            value={x.address2}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>City</h6>
                      <div className="col-md-12 px-0">
                        <div className="col-md-12 px-0 mt-2">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="City"
                            value={x.city}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>State</h6>
                      <div className="col-md-12 px-0 ">
                        <div className="col-md-12 px-0 mt-2">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="State"
                            value={x.state}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>Country</h6>
                      <div className="col-md-12 px-0 ">
                        <div className="col-md-12 mt-2 px-0 mt-2 ">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="Country"
                            value={x.country}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="address1 col-md-6 col-6 col-sm-12 mt-2">
                      <h6>zipcode</h6>
                      <div className="col-md-12 px-0 ">
                        <div className="col-md-12 px-0 mt-2">
                          <TextInput
                            type="text"
                            className="form-control form-control-contact uppercase"
                            name="firstName"
                            autoComplete="off"
                            placeholder="Zipcode"
                            value={x.zipcode}
                            onChange={(e) => handleInputChangenew(e, i)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <button type="submit" className="btn btn-danger mt-4 ml-4">
              Submit Details
            </button>
          </ValidationForm>
        </Collapse>

        <Collapse className="" in={pay}>
          <div>
            <div className="button-cpheading d-flex justify-content-start align-items-center m-0 checkoutflp-1">
              <FontAwesomeIcon icon="fa-solid fa-building-columns" />
              &nbsp; Payment
            </div>
            {currencySign !== "INR" ? (
              <div className="px-3 py-4 bg-white payment-modesel">
                {crmData.length !== 0 && (
                  <CardForm
                    crmData={crmData}
                    CreateBooking={CreateBooking}
                    IntCreateBooking={IntCreateBooking}
                    data={data}
                    currencySign={currencySign}
                  />
                )}
              </div>
            ) : (
              <div className="px-3 py-4 bg-white payment-modesel">
                <div className=" rounded-2xl mb-2 text-left font-semibold text-xl text-black">
                  <h6 className="font-normal">*Please Select Payment Mode </h6>
                </div>
                <div className=" row">
                  {/* --------------------Sachin------------------------------------------- */}
                  <div className="left-panal-payment col-lg-4 col-12">
                    <form>
                      <div className="plans">
                        {showAllGateway.map((item, i) => {
                          const visiblePaymentName =
                            item[0].gatewayName.split("-")[0];

                          return (
                            <div
                              className="payment-tab"
                              key={i}
                              onClick={() => clickSwitcher()}
                            >
                              <label
                                className="plan basic-plan"
                                htmlFor={"basicpy-" + i}
                                onClick={() => cardSelecter(item)}
                              >
                                <input
                                  type="radio"
                                  name="plan"
                                  id={"basicpy-" + i}
                                  onClick={(e) => setPayuMethod(e.target.value)}
                                  value={item[0].gatewayName.split("-")[1]}
                                />
                                <div className="plan-content">
                                  <i className="fa fa-wallet"></i>
                                  <div className="plan-details">
                                    <h3>{visiblePaymentName}</h3>
                                  </div>
                                </div>
                              </label>
                            </div>
                          );
                        })}
                        {/* <div className="payment-tab">
                        <label
                          className="plan basic-plan"
                          htmlFor="basic"
                          onClick={() => setcardData("payuupi")}
                        >
                          <input
                            type="radio"
                            name="plan"
                            id="basic"
                            // value={payuupi}
                          />
                          <div className="plan-content">
                            <i className="fa fa-wallet"></i>
                            <div className="plan-details">
                              <h3>UPI</h3>
                            </div>
                          </div>
                        </label>
                      </div> */}
                        {/* <div className="payment-tab">
                        <label
                          className="plan basic-plan"
                          htmlFor="debit"
                          onClick={() => setcardData("payudbc")}
                        >
                          <input
                            type="radio"
                            name="plan"
                            id="debit"
                            value={`payudebit`}
                          />
                          <div className="plan-content">
                            <i className="fa fa-money-check"></i>
                            <div className="plan-details">
                              <h3>Debit card</h3>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="payment-tab">
                        <label
                          className="plan basic-plan"
                          htmlFor="credit"
                          onClick={() => setcardData("payuccd")}
                        >
                          <input type="radio" name="plan" id="credit" />
                          <div className="plan-content">
                            <i className="fa fa-money-check"></i>
                            <div className="plan-details">
                              <h3>Credit card</h3>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="payment-tab">
                        <label
                          className="plan basic-plan"
                          htmlFor="wallets"
                          onClick={() => setcardData("payuwallet")}
                        >
                          <input type="radio" name="plan" id="wallets" />
                          <div className="plan-content">
                            <i className="fa fa-money-check"></i>
                            <div className="plan-details">
                              <h3>Wallet</h3>
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="payment-tab">
                        <label
                          className="plan basic-plan"
                          htmlFor="netbanking"
                          onClick={() => setcardData("payunbc")}
                        >
                          <input type="radio" name="plan" id="netbanking" />
                          <div className="plan-content">
                            <i className="fa fa-money-check"></i>
                            <div className="plan-details">
                              <h3>Net banking</h3>
                            </div>
                          </div>
                        </label>
                      </div> */}

                        {/* <label
                      className="plan basic-plan"
                      htmlFor="later"
                      onClick={() => setcardData("payupaylater")}
                    >
                      <input checked type="radio" name="plan" id="later" />
                      <div className="plan-content">
                        <i className="fa fa-money-check"></i>
                        <div className="plan-details">
                          <h3>Pay Later</h3>
                        </div>
                      </div>
                    </label> */}
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-8 col-12 px-lg-4 price-grand-total d-flex flex-column mt-4 mt-lg-0">
                    {/* <div className="form-group  payment-details d-flex align-items-start flex-grow-1 pb-2">
                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="iagree"
                        id="iagree"
                        value="false"
                        required
                        onClick={() => onProced()}
                      />
                    </div>
                    <label className="form-check-label" htmlFor="iagree">
                      I AGREE{" "}
                      <span className="text-sm">
                        clicking Pay Now, I agree that I have read and accepted
                        travomint.com andTerms and Conditions Privacy Policy
                      </span>
                    </label>
                  </div> */}

                    <p className="text-lg">
                      <b>Note:</b> Kindly ensure that the details filled for
                      traveller matches the government issued photo ID. The
                      ticket are non refundable therefore please check all the
                      details twice before moving ahead, such as your Name,
                      Address, Contact Number, etc.
                    </p>

                    <Row className="align-items-center mt-3 mt-lg-0">
                      <Col xs={12} sm={6}>
                        <div className="pricynew-currency m-0 text-blue-600 text-3xl font-600 text-size-lg">
                          <div className="curr-sign font-700">
                            {currencySign_Logo}
                          </div>
                          {totalpricedata.toFixed(2, 0)}/-
                        </div>
                      </Col>
                      <Col xs={12} sm={6} className="text-right pypro">
                        <button
                          className="btn btn-primary btn-lg"
                          onClick={handleShow}
                          disabled={payBtnActive}
                        >
                          {" "}
                          Proceed to Pay{" "}
                        </button>
                      </Col>
                    </Row>

                    <Modal
                      className="modalbooknow-classic paynow-topaypopup"
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show}
                      onHide={handleClose}
                    >
                      {/* <Modal.Header closeButton>
          <Modal.Title>Confirm Your flightdata</Modal.Title>
        </Modal.Header> */}
                      <Modal.Body>
                        {/*------------------------------------- test-------------------------------------------  */}

                        {/*------------------------------------------ live prodution --------------------------------------------- */}

                        <div className="skj-3 filteroutbound-li fapl-re-6  mb-4 rounded-xl depbadge-dflex p-2 p-lg-3">
                          <div className="  w-full rounded-t-2xl text-left font-bold text-xl text-black text-white "></div>

                          <div>
                            <h4 className="text-left checkoutflp-1">
                              <span className="mr-2 depbadge-text">
                                <FontAwesomeIcon icon="fa-solid fa-plane-departure" />
                              </span>
                              Departure
                            </h4>
                            {flightdata.outBound.map((item, index) => {
                              return (
                                <>
                                  <div
                                    className="checkoutflp-wrapper"
                                    key={index}
                                  >
                                    <div className="align-items-center row">
                                      <div className="mdf-col col-xl-12 col-md-8 col-12">
                                        <div className="d-flex  align-items-start">
                                          <div className="text-left">
                                            <div className="outbound-rtp d-inline-block mr-0-gbs">
                                              <Image
                                                loader={myLoader}
                                                src={item.airline + ".png"}
                                                alt="G8"
                                                width={50}
                                                height={50}
                                                className="rounded"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex-grow-1  text-left text-base text-black  font-bold pl-3 ">
                                            <span className="text-base text-black  font-bold">
                                              <span className="w-full title-airlines">
                                                {item.airlineName}
                                              </span>
                                            </span>
                                            <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                              {item.flightNo}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="w-100 p-0 mt-2">
                                      <div className="checkoutflp-2 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3">
                                        <div className="text-center">
                                          <span className="text-lg text-black font-bold">
                                            <div className="deslo-way mb-2">
                                              <span className="badge bg-secondary">
                                                {item.fromAirport}
                                              </span>
                                            </div>
                                            <div className="my-1 timef">
                                              {convertFrom24To12Format(
                                                item.depDate
                                                  .split("T")[1]
                                                  .substring(0, 5)
                                              )}
                                            </div>
                                            <div className="text-gray-500 font-medium text-sm">
                                              {moment(
                                                item.depDate.split("T")[0]
                                              )
                                                .format("DD MMM, YYYY")
                                                .toString()}
                                            </div>
                                          </span>
                                        </div>
                                        <div className="col-span-2 flex-grow-1 px-1 px-sm-2 px-md-3 pt-0 dd-2">
                                          <div className="w-100 text-center pt-1">
                                            <div className="time-lineintwy">
                                              <hr />
                                              <div className="d-flex justify-content-between align-items-center">
                                                <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                <span className="text-xs text-black font-sans font-medium">
                                                  <div className="duration-intwy">
                                                    <div className="minttotime font-medium my-1 text-base text-black">
                                                      <ConvertMinsToTime
                                                        data={item.eft}
                                                      />
                                                    </div>
                                                  </div>
                                                </span>
                                                <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center">
                                          <span className="text-lg text-black font-bold">
                                            <div className="deslo-way mb-2">
                                              <span className="badge bg-secondary">
                                                {item.toAirport}
                                              </span>
                                            </div>
                                            <div className=" my-1 timef">
                                              {convertFrom24To12Format(
                                                item.reachDate
                                                  .split("T")[1]
                                                  .substring(0, 5)
                                              )}
                                            </div>
                                            <div className="text-gray-500 font-medium text-sm">
                                              {moment(
                                                item.reachDate.split("T")[0]
                                              )
                                                .format("DD MMM, YYYY")
                                                .toString()}
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>

                          {data.tripType === 2 || data.tripType === "2" ? (
                            <>
                              {data.CountryCode !== "IN" &&
                              data.ArCountryCode !== "IN" ? (
                                <div>
                                  <hr className="checkoutflp-hr my-4"></hr>

                                  <h4 className="text-left checkoutflp-1">
                                    <span className="mr-2 depbadge-text">
                                      <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
                                    </span>
                                    Return
                                  </h4>

                                  {flightdata.inBound.map((item, index) => {
                                    return (
                                      <>
                                        <div
                                          className="checkoutflp-wrapper"
                                          key={index}
                                        >
                                          <div className="align-items-center row">
                                            <div className="mdf-col col-xl-12 col-md-8 col-12">
                                              <div className="d-flex  align-items-start">
                                                <div className="text-left">
                                                  <div className="outbound-rtp d-inline-block mr-0-gbs">
                                                    <Image
                                                      loader={myLoader}
                                                      src={
                                                        item.airline + ".png"
                                                      }
                                                      alt="G8"
                                                      width={50}
                                                      height={50}
                                                      className="rounded"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex-grow-1  text-left text-base text-black  font-bold pl-3 ">
                                                  <span className="text-base text-black  font-bold">
                                                    <span className="w-full title-airlines">
                                                      {item.airlineName}
                                                    </span>
                                                  </span>
                                                  <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                    {item.flightNo}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-100 p-0 mt-2">
                                            <div className="checkoutflp-2 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3">
                                              <div className="text-center">
                                                <span className="text-lg text-black font-bold">
                                                  <div className="deslo-way mb-2">
                                                    <span className="badge bg-secondary">
                                                      {item.fromAirport}
                                                    </span>
                                                  </div>
                                                  <div className="my-1 timef">
                                                    {convertFrom24To12Format(
                                                      item.depDate
                                                        .split("T")[1]
                                                        .substring(0, 5)
                                                    )}
                                                  </div>
                                                  <div className="text-gray-500 font-medium text-sm">
                                                    {moment(
                                                      item.depDate.split("T")[0]
                                                    )
                                                      .format("DD MMM, YYYY")
                                                      .toString()}
                                                  </div>
                                                </span>
                                              </div>
                                              <div className="col-span-2 flex-grow-1 px-1 px-sm-2 px-md-3 pt-0 dd-2">
                                                <div className="w-100 text-center pt-1">
                                                  <div className="time-lineintwy">
                                                    <hr />
                                                    <div className="d-flex justify-content-between align-items-center">
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                      <span className="text-xs text-black font-sans font-medium">
                                                        <div className="duration-intwy">
                                                          <div className="minttotime font-medium my-1 text-base text-black">
                                                            <ConvertMinsToTime
                                                              data={item.eft}
                                                            />
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="text-center">
                                                <span className="text-lg text-black font-bold">
                                                  <div className="deslo-way mb-2">
                                                    <span className="badge bg-secondary">
                                                      {item.toAirport}
                                                    </span>
                                                  </div>
                                                  <div className=" my-1 timef">
                                                    {convertFrom24To12Format(
                                                      item.reachDate
                                                        .split("T")[1]
                                                        .substring(0, 5)
                                                    )}
                                                  </div>
                                                  <div className="text-gray-500 font-medium text-sm">
                                                    {moment(
                                                      item.reachDate.split(
                                                        "T"
                                                      )[0]
                                                    )
                                                      .format("DD MMM, YYYY")
                                                      .toString()}
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div>
                                  <hr className="checkoutflp-hr my-4"></hr>
                                  <h4 className="text-left checkoutflp-1">
                                    <span className="mr-2 depbadge-text">
                                      <FontAwesomeIcon icon="fa-solid fa-plane-arrival" />
                                    </span>
                                    Return
                                  </h4>
                                  {inBoundData.inBound.map((item, index) => {
                                    return (
                                      <>
                                        <div
                                          className="checkoutflp-wrapper"
                                          key={index}
                                        >
                                          <div className="align-items-center row">
                                            <div className="mdf-col col-xl-12 col-md-8 col-12">
                                              <div className="d-flex  align-items-start">
                                                <div className="text-left">
                                                  <div className="outbound-rtp d-inline-block mr-0-gbs">
                                                    <Image
                                                      loader={myLoader}
                                                      src={
                                                        item.airline + ".png"
                                                      }
                                                      alt="G8"
                                                      width={50}
                                                      height={50}
                                                      className="rounded"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="flex-grow-1  text-left text-base text-black  font-bold pl-3 ">
                                                  <span className="text-base text-black  font-bold">
                                                    <span className="w-full title-airlines">
                                                      {item.airlineName}
                                                    </span>
                                                  </span>
                                                  <span className="text-base text-gray-500 font-medium text-xlbbage-sm d-block">
                                                    {item.flightNo}
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-100 p-0 mt-2">
                                            <div className="checkoutflp-2 grid lg:grid-cols-4 grid-cols-1 grid-timelineway ipad-br d-flex w-100 justify-content-between mb-3">
                                              <div className="text-center">
                                                <span className="text-lg text-black font-bold">
                                                  <div className="deslo-way mb-2">
                                                    <span className="badge bg-secondary">
                                                      {item.fromAirport}
                                                    </span>
                                                  </div>
                                                  <div className="my-1 timef">
                                                    {convertFrom24To12Format(
                                                      item.depDate
                                                        .split("T")[1]
                                                        .substring(0, 5)
                                                    )}
                                                  </div>
                                                  <div className="text-gray-500 font-medium text-sm">
                                                    {moment(
                                                      item.depDate.split("T")[0]
                                                    )
                                                      .format("DD MMM, YYYY")
                                                      .toString()}
                                                  </div>
                                                </span>
                                              </div>
                                              <div className="col-span-2 flex-grow-1 px-1 px-sm-2 px-md-3 pt-0 dd-2">
                                                <div className="w-100 text-center pt-1">
                                                  <div className="time-lineintwy">
                                                    <hr />
                                                    <div className="d-flex justify-content-between align-items-center">
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                      <span className="text-xs text-black font-sans font-medium">
                                                        <div className="duration-intwy">
                                                          <div className="minttotime font-medium my-1 text-base text-black">
                                                            <ConvertMinsToTime
                                                              data={item.eft}
                                                            />
                                                          </div>
                                                        </div>
                                                      </span>
                                                      <FontAwesomeIcon icon="fa-solid fa-circle-dot" />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="text-center">
                                                <span className="text-lg text-black font-bold">
                                                  <div className="deslo-way mb-2">
                                                    <span className="badge bg-secondary">
                                                      {item.toAirport}
                                                    </span>
                                                  </div>
                                                  <div className=" my-1 timef">
                                                    {convertFrom24To12Format(
                                                      item.reachDate
                                                        .split("T")[1]
                                                        .substring(0, 5)
                                                    )}
                                                  </div>
                                                  <div className="text-gray-500 font-medium text-sm">
                                                    {moment(
                                                      item.reachDate.split(
                                                        "T"
                                                      )[0]
                                                    )
                                                      .format("DD MMM, YYYY")
                                                      .toString()}
                                                  </div>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          ) : null}
                        </div>
                        {/*------------------------------------------ live prodution --------------------------------------------- */}

                        <div className="w-100">
                          <div className="row">
                            <div className="col-12 mb-4">
                              {/* USER DETAIL */}
                              <div className="checkout-stepform">
                                <div className="card shadow-0">
                                  <div className="button-cpheading d-flex justify-content-start align-items-center m-0 checkoutflp-1 py-3">
                                    <i className="fas fa-user "></i> &nbsp; User
                                    Detail{" "}
                                  </div>
                                  <div className="card-body p-0">
                                    <div class="table-responsive user-dtcob">
                                      {/* <h1 className="text-xl">Adults</h1> */}

                                      {inputList[0].firstName != "" ? (
                                        <>
                                          <h5 className="main-heading mt-8 passanger-details">
                                            <span className="mr-2 text-green-500">
                                              <FontAwesomeIcon icon="fa-solid fa-user" />
                                            </span>
                                            Adult
                                          </h5>
                                          <table className="table m-0">
                                            <thead className="thead-light">
                                              <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Date of Birth</th>
                                                <th>Additional Baggage</th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              {inputList.map((items, i) => (
                                                <>
                                                  <tr>
                                                    <td>
                                                      {items.firstName}{" "}
                                                      {items.middleName}{" "}
                                                      {items.lastName}
                                                    </td>
                                                    <td>{items.email}</td>
                                                    <td>{items.phone}</td>
                                                    <td>{items.dateOfBirth}</td>
                                                    <td>_______________</td>
                                                  </tr>
                                                </>
                                              ))}
                                            </tbody>
                                          </table>
                                        </>
                                      ) : (
                                        ""
                                      )}

                                      {childinputList[0].firstName != "" ? (
                                        <>
                                          <h5 className="main-heading mt-8 passanger-details">
                                            <span className="mr-2 text-green-500">
                                              <FontAwesomeIcon icon="fa-solid fa-user" />
                                            </span>
                                            Child
                                          </h5>
                                          <table className="table m-0">
                                            <thead className="thead-light">
                                              <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Date of Birth</th>
                                                <th>Additional Baggage</th>
                                              </tr>
                                            </thead>

                                            <tbody>
                                              {childinputList.map(
                                                (items, i) => (
                                                  <>
                                                    <tr>
                                                      <td>
                                                        {items.firstName}{" "}
                                                        {items.middleName}{" "}
                                                        {items.lastName}
                                                      </td>
                                                      <td>{items.email}</td>
                                                      <td>{items.phone}</td>
                                                      <td>
                                                        {items.dateOfBirth}
                                                      </td>
                                                      <td>_______________</td>
                                                    </tr>
                                                  </>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        </>
                                      ) : (
                                        ""
                                      )}

                                      {infantinputList[0].firstName != "" ? (
                                        <>
                                          <h5 className="main-heading mt-8 passanger-details">
                                            <span className="mr-2 text-green-500">
                                              <FontAwesomeIcon icon="fa-solid fa-user" />
                                            </span>
                                            Infant
                                          </h5>

                                          <table className="table m-0">
                                            <thead className="thead-light">
                                              <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Date of Birth</th>
                                                <th>Additional Baggage</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              {infantinputList.map(
                                                (items, i) => (
                                                  <>
                                                    <tr>
                                                      <td>
                                                        {items.firstName}{" "}
                                                        {items.middleName}{" "}
                                                        {items.lastName}
                                                      </td>
                                                      <td>{items.email}</td>
                                                      <td>{items.phone}</td>
                                                      <td>
                                                        {items.dateOfBirth}
                                                      </td>
                                                      <td>_______________</td>
                                                    </tr>
                                                  </>
                                                )
                                              )}
                                            </tbody>
                                          </table>
                                        </>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              {/* USER DETAIL */}
                              <div className="checkout-stepform">
                                <div className="card shadow-0">
                                  <div className="button-cpheading d-flex justify-content-start align-items-center m-0 checkoutflp-1 py-3">
                                    <i className="fa fa-credit-card"></i>
                                    &nbsp; Price Detail{" "}
                                  </div>
                                  <div className="card-body p-0">
                                    <div class="table-responsive user-dtcob">
                                      {/* <table className="table m-0">
                                        <thead className="thead-light">
                                          <tr>
                                            <th>Convenience Fees</th>
                                            <th>Medical Charge</th>
                                            <th>Baggage Protection</th>
                                            <th>Travel Protection</th>
                                            <th>Total Price</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="mr-1">
                                                {currencySign}
                                              </span>
                                              0
                                            </td>
                                            <td>
                                              <span className="mr-1">
                                                {currencySign}
                                              </span>
                                              20
                                            </td>
                                            <td>
                                              <span className="mr-1">
                                                {currencySign}
                                              </span>
                                              380
                                            </td>
                                            <td>
                                              <span className="mr-1">
                                                {currencySign}
                                              </span>
                                              2700
                                            </td>
                                            <td>
                                              <span className="mr-1">
                                                {currencySign}
                                              </span>
                                              {totalpricedata}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Terms */}
                        <p className="text-sm text-gray-600 mb-3 mt-4">
                          <b>Terms & Conditions:</b> Convenience fees are
                          non-refundable. This is a payment processing method
                          and isn't a part of the airline fare integration. This
                          expense incorporates the charges we paid to the
                          concerned bank for providing the electronic
                          infrastructure. This is a non-refundable sum and will
                          not be refunded if the flight is cancelled. It is far
                          beyond the airline's Cancel Fee or Travomint Service
                          Fee.{" "}
                          <span>
                            <Link href="/terms">Terms and Condition</Link>
                          </span>
                        </p>

                        <div className="checkout-step-body border-0">
                          <div className="loginbox-journey-2 p-0">
                            <div className="form-check gstcheck">
                              <input
                                type="checkbox"
                                id="iagreed"
                                className="mr-2 mt-2 height-mint"
                                name="iagreed"
                                value={gstnum}
                                onClick={() => checkConfirm()}
                                checked={gstinfo}
                                onChange={handleChange}
                              />
                              <label htmlFor="iagreed">
                                <div className="w-100"></div>
                              </label>
                              Agree to confirm your booking.
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <div className="w-100">
                          <Row className="align-items-center">
                            <Col xs={12} md={7} lg={8}>
                              <span className="text-sm leading-normal">
                                <b>Note:</b> Click on Confirm Button before
                                Checking your Booking Details.
                              </span>
                            </Col>
                            <Col
                              xs={12}
                              md={5}
                              lg={4}
                              className="text-right mt-3 mt-md-0"
                            >
                              <Button
                                className="btn btn-siteorange search-fl countinuetobk"
                                disabled={confirmbutton}
                                onClick={() => continuetoBooking()}
                              >
                                {confirm ? (
                                  <span>Confirm Booking</span>
                                ) : (
                                  <Lottie
                                    options={details}
                                    height={40}
                                    width={300}
                                  />
                                )}
                              </Button>
                            </Col>
                          </Row>
                        </div>

                        {/* <Button onClick={() => getPayments()}>booking</Button> */}
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Collapse>
      </div>
    </>
  );
};
export default Second;
