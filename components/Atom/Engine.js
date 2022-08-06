import { useState, createContext } from "react";
import { Tab } from "@headlessui/react";

import { addDays } from "date-fns";
import * as React from "react";
import Alert from "react-bootstrap/Alert";

// import DatePicker from "react-date-picker";

import Calendar from "react-calendar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Passanger from "./Passanger";
import Class from "./Class";
import From from "./From";
import To from "./To";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { checkFlights } from "../Feature/Action";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import getappnow from "../../public/Image/getapp-now.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Engine(props) {
  const router = useRouter();
  const [Result, setResult] = useState({});
  const [Load, setLoad] = useState(false);
  const [resturnDate, setreturnd] = useState(false);
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);
  const [showappnow, setShowappnow] = useState(true);

  const year = moment().add(5, "months").format("MM/DD/YYYY");

  // rest
  const [value, setValue] = React.useState([null, null]);
  let [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = React.useState(new Date());

  function closeModal() {
    setIsOpen(false);
  }
  function setdateReturn() {
    setreturnd(true);
  }
  function openModal() {
    setIsOpen(true);
  }
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  function setdate() {
    setIsOpen(false);
    setstartDate(state[0].startDate);
    setendDate(state[0].endDate);
  }
  const [startDate, setstartDate] = useState(state[0].startDate);
  const [endDate, setendDate] = useState(state[0].endDate);

  // Full data
  // const [single_date, setsingle_date] = useState(
  //   startDate.toLocaleDateString()
  // );
  const [departure, setdeparture] = useState("");
  const [arrival, setarrival] = useState("");
  const [classe, setclasse] = useState(1);
  const [travelleradult, settravelleradult] = useState(1);
  const [travellerchildren, settravellerchildren] = useState(0);
  const [travellerInfant, settravellerInfant] = useState(0);
  const [nameofclass, setnameofclass] = useState("ECONOMY");
  const [tripType, setTripType] = useState(1);
  const [CountryCode, setCountryCode] = useState("");
  const [ArCountryCode, setArCountryCode] = useState("");
  const [openTab, setOpenTab] = useState(1);
  const [oneWay, setOneway] = useState(1);
  const [twoWay, setTwoway] = useState(2);
  const [valueChange, setValueChange] = useState(false);
  const [valueDate, onChange] = useState(new Date());
  const [valueDateReturn, onChangeReturn] = useState(new Date());

  const dispatch = useDispatch();

  const resultoneway = "/Results";
  const resultroundway = "/Results2";

  // Ios

  const startDateFormat = moment(state[0].startDate, "DD/MM/YYYY").format(
    "MM/DD/YYYY"
  );

  const startDateFormat2 = moment(state[0].startDate).format("MM/DD/YYYY");

  // Window
  const endDateFormat = moment(state[0].endDate, "DD/MM/YYYY").format(
    "MM/DD/YYYY"
  );

  const endDateFormat2 = moment(state[0].endDate).format("MM/DD/YYYY");

  const startDates12 =
    startDateFormat === "Invalid date" ? startDateFormat2 : startDateFormat;

  const endDates34 =
    endDateFormat === "Invalid date" ? endDateFormat2 : endDateFormat;

  const searchFlight = () => {
    if (!departure && !arrival) {
      alert("Please Fill Yours Destination");
    } else if (!departure) {
      alert("Please Fill To Destination");
    } else if (!arrival) {
      alert("Please Fill From Destination");
    } else if (!startDate.toLocaleDateString()) {
      alert("Please Select Your Travel Date");
    } else if (departure === arrival) {
      alert("Please Select Your Travel Date");
    } else {
      if (tripType === 1) {
        dispatch(
          checkFlights({
            departure: arrival,
            arrival: departure,
            adult: travelleradult,
            children: travellerchildren,
            infant: travellerInfant,
            class: classe,
            startDates: startDates12,
            endDates: endDates34,
            singleDate: startDates12,
            nameClass: nameofclass,
            tripType: tripType,
            CountryCode: CountryCode,
            ArCountryCode: ArCountryCode,
            totalpassanger:
              travellerchildren + travellerInfant + travelleradult,
            login: true,
            currencyCode: currency_Name_rd.currency_Name,
            source: "online",
          })
        );
        router.push(resultoneway);
      } else {
        dispatch(
          checkFlights({
            departure: arrival,
            arrival: departure,
            adult: travelleradult,
            children: travellerchildren,
            infant: travellerInfant,
            class: classe,
            startDates: startDates12,
            endDates: endDates34,
            singleDate: startDates12,
            nameClass: nameofclass,
            tripType: tripType,
            CountryCode: CountryCode,
            ArCountryCode: ArCountryCode,
            totalpassanger:
              travellerchildren + travellerInfant + travelleradult,
            login: true,
            currencyCode: currency_Name_rd.currency_Name,
            source: "online",
          })
        );
        router.push(resultroundway);
      }
    }
  };

  const ChangeDateColumn = () => {
    setTripType(1);
    setValueChange(false);
  };
  const ShowDateChange = () => {
    setValueChange(true);
    setTripType(2);
  };

  return (
    <>
      <Container>
        <Tab.Group>
          {showappnow ? (
            <Alert
              variant="light"
              onClose={() => setShowappnow(false)}
              dismissible
              className="d-md-none get-appnow"
            >
              <Row className="align-items-center">
                <Col className="flex-grow-0 getappnowpr-0">
                  <div className="getappnow-img">
                    <Image
                      src={getappnow}
                      alt="Get app now"
                      width={60}
                      height={104}
                    />
                  </div>
                </Col>

                <Col className="text-sm font-semibold">
                  Get app now<br></br>
                  <small className="font-400 text-gray-400">Travomint</small>
                </Col>
                <Col className="text-right">
                  <button type="button" class="btn btn-success">
                    Install
                  </button>
                </Col>
              </Row>
            </Alert>
          ) : (
            ""
          )}

          <h1 className="text-center w-full mb-5 feelmain-title">
            Feel the <font className="travomint-color">Mint</font> of{" "}
            <b> Cheapest Fares with Us!</b>
          </h1>
          {/* <h1 className="text-center w-full mt-20 mb-20">Flights</h1> */}
          <div className="w-100">
            <div className="tabsflightminline-b">
              <Tab.List className="flex p-1 lg:w-1/5 w-full   space-x-1  foot rounded-lg d-flex tabsflightm">
                <Tab
                  key="1"
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
                  <span className="ml-3">Flight</span>
                </Tab>

                <a className="tablink-fl">
                  <Tab
                    key="2"
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
                    <span className="ml-3">Hotels</span>
                  </Tab>
                </a>

                <a
                  href="http://tours.travomint.com/"
                  target="_blank"
                  className="tablink-fl"
                >
                  <Tab
                    key="3"
                    className={({ selected }) =>
                      classNames(
                        "w-100  py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                        "focus:outline-none ring-white ring-opacity-60",
                        selected
                          ? "bg-white shadow text-orangeactive"
                          : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <FontAwesomeIcon icon="fa-solid fa-earth-americas" />
                    <span className="ml-3">Holiday</span>
                  </Tab>
                </a>
                <a
                  href="https://travomint.mozio.com/en-us/"
                  target="_blank"
                  className="tablink-fl"
                >
                  <Tab
                    key="4"
                    className={({ selected }) =>
                      classNames(
                        "w-100  py-2.5 text-sm font-sans leading-5 font-medium text-blue-500 rounded-lg",
                        "focus:outline-none ring-white ring-opacity-60",
                        selected
                          ? "bg-white shadow text-orangeactive"
                          : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right-arrow-left" />
                    <span className="ml-3">Transfer</span>
                  </Tab>
                </a>
              </Tab.List>
            </div>
          </div>

          <div className="w-100">
            <div className="w-full  engines">
              {/* -------------radio Button ------------ */}
              <div className="custom_radio">
                <span className="roundway-rab">
                  <input
                    type="radio"
                    id="twoway"
                    onChange={ShowDateChange}
                    name="search flight"
                    checked={tripType === 2 && true}
                  />
                  <label htmlFor="twoway" className="m-0 status-spantext">
                    Round Trip
                  </label>
                </span>

                <span className="oneway-tab">
                  <input
                    type="radio"
                    id="oneway"
                    onChange={ChangeDateColumn}
                    name="search flight"
                    checked={tripType === 1 && true}
                  />
                  <label htmlFor="oneway" className="m-0 status-spantext">
                    One way
                  </label>
                </span>
              </div>
              {/* -------------radio Button ------------ */}

              <Tab.Panel
                key="1"
                className={
                  "rounded-xl focus:outline-none   ring-white ring-opacity-60"
                }
              >
                {/* ---------------top passanger and class-----------  */}
                <Row className="passanger-infant mt-4 mb-2 d-none d-md-flex">
                  <Col xs={12} md={6} xl={4} xxl={3} className="settravrad">
                    <Passanger
                      settravelleradult={settravelleradult}
                      settravellerchildren={settravellerchildren}
                      settravellerInfant={settravellerInfant}
                    />
                  </Col>

                  <Col xs={12} md={6} xl={4} xxl={3}>
                    <Class
                      setclasse={setclasse}
                      setnameofclassName={setnameofclass}
                    />
                  </Col>
                </Row>
                {/* ---------------top passanger and class-----------  */}

                <div className="w-100">
                  <div className="w-100 mt-3">
                    <Row className="ps-relative enginefrom-set">
                      {/* ---------------from------------------- */}
                      <Col
                        xs={12}
                        xl
                        className="w-12/12 relative reponsive return-tripinput"
                      >
                        <label className="form-label d-block">From</label>

                        <From
                          setarrival={setarrival}
                          setCountryCode={setCountryCode}
                        />
                      </Col>
                      {/* ---------------from------------------- */}

                      {/* ----------------To--------------- */}
                      <Col
                        xs={12}
                        xl
                        className="w-12/12 relative return-tripinput"
                      >
                        <label className="form-label d-block">To</label>
                        <To
                          setdeparture={setdeparture}
                          setArCountryCode={setArCountryCode}
                        />
                      </Col>
                      {/* ----------------To--------------- */}
                      {/* // Sachin code */}

                      <Col>
                        <Row>
                          {/*--------------- departure--------------  */}
                          <Col xs={6} className="datedep">
                            <label className="form-label d-block">
                              Depature{" "}
                            </label>

                            <div className="search-engine-in se-pd  border-gray-800">
                              <div className="input-group">
                                <span className="input-group-text align-items-center justify-content-center">
                                  <span className="block truncate text-sm text-black py-1 font-sans font-bold">
                                    <FontAwesomeIcon
                                      icon="fa-solid fa-calendar-days"
                                      className="text-blue-500"
                                    />
                                  </span>
                                </span>
                                <input
                                  type="text"
                                  autoComplete="off"
                                  value={startDate.toLocaleDateString()}
                                  onClick={openModal}
                                  className="form-control"
                                  readOnly
                                />
                              </div>
                            </div>

                            <Transition appear show={isOpen} as={Fragment}>
                              <Dialog
                                as="div"
                                className={
                                  "fixed bg-slate-200  inset-0 z-100 overflow-y-auto rangewrapmax-parent " +
                                  (isOpen ? "" : "d-none-rangewrapmax")
                                }
                                onClose={closeModal}
                              >
                                <div className="min-h-screen  text-center">
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
                                    className="inline-block h-screen align-middle leftmidd-dt"
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
                                    <div className="inline-block w-full datepic-rangewrapmax-wxl my-3 overflow-hidden text-left align-middle transition-all transform bg-white  rounded-2xl">
                                      <Dialog.Title
                                        as="h3"
                                        className="text-sm  font-medium leading-6 text-gray-900 justify-content-between d-flex flex-column justify-content-center align-items-center flex-wrap"
                                      >
                                        <DateRangePicker
                                          onChange={(item) =>
                                            setState([item.selection])
                                          }
                                          showSelectionPreview={true}
                                          moveRangeOnFirstSelection={false}
                                          minDate={moment().toDate()}
                                          // maxDate={year}
                                          months={2}
                                          ranges={state}
                                          className="datepic-rangewrap justify-content-between"
                                          rangeColors={[
                                            "#6c757d",
                                            "#6c757d",
                                            "#6c757d",
                                          ]}
                                          direction="horizontal"
                                        />
                                      </Dialog.Title>

                                      <div className="text-right border-top pt-3 donerange-btn-wrp">
                                        <button
                                          className="btn btn-dark btn-lg donerange-btn"
                                          onClick={() => {
                                            setdate();
                                          }}
                                        >
                                          Done
                                        </button>
                                      </div>
                                    </div>
                                  </Transition.Child>
                                </div>
                              </Dialog>
                            </Transition>
                          </Col>
                          {/*--------------- departure--------------  */}

                          {/* ----------------Return--------------  */}
                          <Col xs={6} className="datedep">
                            {/* </div> */}
                            {tripType === 2 ? (
                              <>
                                {" "}
                                {/* <div className="depature-return round-trip  ps-relative width-50 De-pd d-flex justify-content-start align-items-start flex-column ps-relative1  "> */}
                                <label className="form-label d-block">
                                  Return
                                </label>
                                <div className="search-engine-in se-pd  border-gray-800 return-tripinput">
                                  <span onClick={() => setTripType(1)}>
                                    {" "}
                                    <i className="fa fa-window-close close-icon" />
                                  </span>
                                  <div className="input-group">
                                    <span className="input-group-text align-items-center justify-content-center">
                                      <span className="block truncate text-sm text-black py-1 font-sans font-bold">
                                        <FontAwesomeIcon
                                          icon="fa-solid fa-calendar-days"
                                          className="text-blue-500"
                                        />
                                      </span>
                                    </span>
                                    <input
                                      type="text"
                                      autoComplete="off"
                                      minDate={moment().toDate()}
                                      value={endDate.toLocaleDateString()}
                                      onClick={openModal}
                                      className="form-control"
                                      readOnly
                                    />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <label className="form-label d-block">
                                  Return
                                </label>
                                <div className="search-engine-in se-pd  border-gray-800">
                                  <div
                                    className="input-group static-pos"
                                    onClick={ShowDateChange}
                                  >
                                    <span className="input-group-text d-flex align-items-center justify-content-start">
                                      Tap to add a return date for round Trip.
                                    </span>
                                  </div>
                                </div>
                              </>
                            )}
                          </Col>
                          {/* ----------------Return--------------  */}
                        </Row>
                      </Col>
                    </Row>

                    {/* ---------------top passanger and class-----------  */}
                    <Col xs={12} className="d-md-none mpob-inf">
                      <Row className="passanger-infant mt-3">
                        <Col
                          xs={12}
                          md={6}
                          xl={4}
                          xxl={3}
                          className="settravrad"
                        >
                          <Passanger
                            settravelleradult={settravelleradult}
                            settravellerchildren={settravellerchildren}
                            settravellerInfant={settravellerInfant}
                          />
                        </Col>

                        <Col xs={12} md={6} xl={4} xxl={3}>
                          <Class
                            setclasse={setclasse}
                            setnameofclassName={setnameofclass}
                          />
                        </Col>
                      </Row>
                    </Col>
                    {/* ---------------top passanger and class-----------  */}

                    <div className="text-right  mt-4">
                      <div className="d-xl-inline-block">
                        <Button
                          onClick={() => searchFlight()}
                          className="btn btn-siteorange search-fl"
                        >
                          Search Flight <i className="fa fa-arrow-right"></i>
                        </Button>
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              {/*------------ Hotel section ------------ */}
              <Tab.Panels className="w-full rounded-3xl">
                <Tab.Panel
                  key="2"
                  className={classNames(
                    " rounded-xl  ",
                    " focus:outline-none  ring-white ring-opacity-60"
                  )}
                >
                  <h4 className="border-top pt-3">Go back to Flight</h4>
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
                  <h4 className="border-top pt-3">Go back to Flight</h4>
                </Tab.Panel>
              </Tab.Panels>

              <Tab.Panels className="w-full rounded-3xl">
                <Tab.Panel
                  key="4"
                  className={classNames(
                    " rounded-xl  ",
                    " focus:outline-none  ring-white ring-opacity-60"
                  )}
                >
                  <h4 className="border-top pt-3">Go back to Flight</h4>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </Container>
    </>
  );
}
