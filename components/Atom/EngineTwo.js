import { useState } from "react";
import { addDays } from "date-fns";
import * as React from "react";
import TextField from "@mui/material/TextField";

// import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Calendar } from "react-date-range";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Passanger1 from "./Passanger1";
import Class1 from "./Class1";
import From1 from "./From1";
import To1 from "./To1";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { checkFlights, SelectedData } from "../Feature/Action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EngineTwo() {
  const router = useRouter();
  const data = useSelector(SelectedData);

  const [modifysort, setmodifysort] = useState(false);
  const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);
  const [value, setValue] = React.useState([null, null]);
  let [isOpen, setIsOpen] = useState(false);

  const [values, setValues] = React.useState(data.singleDate);

  const [startDate, setstartDate] = useState(data.startDates);
  const [endDate, setendDate] = useState(data.endDates);

  // full data
  const [arrival, setarrival] = useState(data.arrival);
  const [departure, setdeparture] = useState(data.departure);
  const [travelleradult, settravelleradult] = useState(data.adult);
  const [travellerchildren, settravellerchildren] = useState(data.children);
  const [travellerInfant, settravellerInfant] = useState(data.infant);
  const [classe, setclasse] = useState(data.class);
  const [tripType, setTripType] = useState(data.tripType);
  const [CountryCode, setCountryCode] = useState(data.CountryCode);
  const [ArCountryCode, setArCountryCode] = useState(data.ArCountryCode);
  const [nameofclass, setnameofclass] = useState(data.nameClass);
  const [load, setLoad] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    setmodifysort(!modifysort);
  }

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

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

  const handleChange = (newValue) => {
    setstartDate(newValue.toLocaleDateString("en-US"));
  };
  function setdate() {
    setIsOpen(false);
    setstartDate(startDates12);
    setendDate(endDates34);
  }

  const dispatch = useDispatch();
  const resultoneway = "/Results";
  const resultroundway = "/Results2";

  const modify = () => {
    if (!departure && !arrival) {
      alert("Please Fill Yours Destination");
    } else if (!departure) {
      alert("Please Fill To Destination");
    } else if (!arrival) {
      alert("Please Fill From Destination");
    } else if (!startDate) {
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
  };
  const ShowDateChange = () => {
    setTripType(2);
  };

  return (
    <>
      {/*============ filter sidebar ============*/}
      {modifysort ? (
        <div
          className="fade offcanvas-backdrop show d-xl-none"
          onClick={() => {
            setmodifysort(!modifysort);
          }}
        ></div>
      ) : (
        ""
      )}
      <div
        class={
          "mfy offcanvas offcanvas-sidenav offcanvas-start offcanvasbyfilter " +
          (modifysort ? "show" : "")
        }
      >
        <div className="offcanvas-header d-xl-none setm-ofheader">
          <h5
            className="offcanvas-title mfs-search-1"
            id="offcanvasExampleLabel"
          >
            Modify Search
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={() => {
              setmodifysort(!modifysort);
            }}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0 mfs-search-2">
          <aside className="filterres-custom pb-3">
            <div className="book-flight-engine modify-ver position-relative">
              <Container>
                <div>
                  {/* <Tab.List className="flex p-1 lg:w-1/5 w-1/2  h-10  space-x-1 foot  rounded-lg mt-4">
            <Tab
              key="1"
              href="/resulttwo"
              className={({ selected }) =>
                classNames(
                  "w-full  text-xs leading-5 font-medium text-blue-500 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow text-black"
                    : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                )
              }>
              <i className="fa fa-plane-departure fa-sm"> </i>&nbsp; &nbsp; One Way
            </Tab>
            <Tab
              key="2"
              href="/result"
              className={({ selected }) =>
                classNames(
                  "w-full text-xs leading-5 font-medium text-blue-500 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow text-black "
                    : "text-blue-500 text-white hover:bg-white/[0.12] hover:text-white"
                )
              }>
              <i className="fa fa-map-close fa-sm"> </i>&nbsp; Round Trip
            </Tab>
          </Tab.List> */}

                  <div className="custom_radio">
                    <span className="roundway-rab">
                      <input
                        type="radio"
                        id="twoway"
                        onChange={ShowDateChange}
                        name="search flight"
                        checked={tripType === 2 && true}
                      />
                      <label
                        htmlFor="twoway"
                        className="m-0 status-spantext text-white tracking-wide"
                      >
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
                      <label
                        htmlFor="oneway"
                        className="m-0 status-spantext text-white tracking-wide"
                      >
                        One way
                      </label>
                    </span>
                  </div>

                  <div className="w-full custom_radio drop-shadow-lg rounded-3xl mt-2 ">
                    {tripType === 1 ? (
                      <div className={"w-100"}>
                        <Row className="pt-1 align-items-end">
                          <Col
                            xs={12}
                            xl={3}
                            className="d-none d-xl-block setname-class setname-flp-1 ml-auto"
                          >
                            <Passanger1
                              settravelleradult={settravelleradult}
                              settravellerchildren={settravellerchildren}
                              settravellerInfant={settravellerInfant}
                              adultData={data.adult}
                              childrenData={data.children}
                              infantData={data.infant}
                            />
                          </Col>
                          <Col
                            xs={12}
                            xl={2}
                            className="d-none d-xl-block setname-class setname-flp-2"
                          >
                            <Class1
                              setclasse={setclasse}
                              setnameofclassName={setnameofclass}
                              classData={data.nameClass}
                            />
                          </Col>

                          <Col xs={12} className="d-none d-xl-block m-0"></Col>

                          <Col className="return-tripinput " xs={12} xl>
                            <From1
                              setarrival={setarrival}
                              setCountryCode={setCountryCode}
                              fromData={data.departure}
                            />
                          </Col>
                          <Col className="return-tripinput relative" xs={12} xl>
                            <To1
                              setdeparture={setdeparture}
                              setArCountryCode={setArCountryCode}
                              toData={data.arrival}
                            />
                          </Col>

                          <Col xs={12} xl={3} className="mfs-search-3 m-0">
                            <Row>
                              {/*--------------- departure--------------  */}
                              <Col xs={12} xl={6} className="datedep">
                                <label class="form-label d-block p-0 labelverdify-dark text-white">
                                  Depature
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
                                      value={startDate}
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
                                              moveRangeOnFirstSelection={true}
                                              minDate={moment().toDate()}
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
                                                setmodifysort(!modifysort);
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
                              <Col xs={12} xl={6} className="datedep">
                                <label class="form-label d-block p-0 labelverdify-dark text-white">
                                  Return
                                </label>
                                {/* </div> */}
                                {tripType === 2 ? (
                                  <>
                                    {" "}
                                    {/* <div className="depature-return round-trip  ps-relative width-50 De-pd d-flex justify-content-start align-items-start flex-column ps-relative1  "> */}
                                    <div
                                      className="search-engine-in se-pd  border-gray-800 return-tripinput"
                                      xs={12}
                                      xl={3}
                                    >
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
                                    <div className="search-engine-in se-pd  border-gray-800">
                                      <div
                                        className="input-group static-pos"
                                        onClick={ShowDateChange}
                                      >
                                        <span className="input-group-text d-flex align-items-center justify-content-center">
                                          Tap to add
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </Col>
                              {/* ----------------Return--------------  */}
                            </Row>
                          </Col>

                          <Col xs={12} xl={4} className="d-xl-none">
                            <Passanger1
                              settravelleradult={settravelleradult}
                              settravellerchildren={settravellerchildren}
                              settravellerInfant={settravellerInfant}
                              adultData={data.adult}
                              childrenData={data.children}
                              infantData={data.infant}
                            />
                          </Col>
                          <Col xs={12} xl={4} className="d-xl-none">
                            <Class1
                              setclasse={setclasse}
                              setnameofclassName={setnameofclass}
                              classData={data.nameClass}
                            />
                          </Col>
                          <Col xs={12} xl={2} className="mt-3 mt-xl-0">
                            <button
                              className="btn btn-siteorange search-fl"
                              onClick={() => {
                                modify();
                                setmodifysort(!modifysort);
                              }}
                            >
                              Modify Search
                            </button>
                          </Col>
                        </Row>
                      </div>
                    ) : (
                      <div className="w-100">
                        <Row className="pt-1 align-items-end">
                          <Col
                            xs={12}
                            xl={3}
                            className="d-none d-xl-block setname-class setname-flp-1 ml-auto"
                          >
                            <Passanger1
                              settravelleradult={settravelleradult}
                              settravellerchildren={settravellerchildren}
                              settravellerInfant={settravellerInfant}
                              adultData={data.adult}
                              childrenData={data.children}
                              infantData={data.infant}
                            />
                          </Col>
                          <Col
                            xs={12}
                            xl={2}
                            className="d-none d-xl-block setname-class setname-flp-2"
                          >
                            <Class1
                              setclasse={setclasse}
                              setnameofclassName={setnameofclass}
                              classData={data.nameClass}
                            />
                          </Col>
                          <Col xs={12} className="d-none d-xl-block m-0"></Col>

                          <Col className="return-tripinput" xs={12} xl>
                            <From1
                              setarrival={setarrival}
                              setArCountryCode={setArCountryCode}
                              fromData={data.departure}
                            />
                          </Col>
                          <Col className="return-tripinput" xs={12} xl>
                            <To1
                              setdeparture={setdeparture}
                              setArCountryCode={setArCountryCode}
                              toData={data.arrival}
                            />
                          </Col>

                          <Col xs={12} xl={3} className="mfs-search-3 m-0">
                            <Row>
                              {/*--------------- departure--------------  */}
                              <Col xs={12} xl={6} className="datedep">
                                <label class="form-label d-block p-0 labelverdify-dark text-white">
                                  Depature
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
                                      value={startDate}
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
                                              moveRangeOnFirstSelection={true}
                                              minDate={moment().toDate()}
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
                                                setmodifysort(!modifysort);
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
                              <Col xs={12} xl={6} className="datedep">
                                <label class="form-label d-block p-0 labelverdify-dark text-white">
                                  Return
                                </label>

                                {/* </div> */}
                                {tripType === 2 ? (
                                  <>
                                    {" "}
                                    {/* <div className="depature-return round-trip  ps-relative width-50 De-pd d-flex justify-content-start align-items-start flex-column ps-relative1  "> */}
                                    <div
                                      className="search-engine-in se-pd  border-gray-800 return-tripinput"
                                      xs={12}
                                      xl={3}
                                    >
                                      <span onClick={() => setTripType(0)}>
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
                                          value={endDate}
                                          onClick={openModal}
                                          className="form-control"
                                          readOnly
                                        />
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="search-engine-in se-pd  border-gray-800">
                                      <div
                                        className="input-group static-pos"
                                        onClick={ShowDateChange}
                                      >
                                        <span className="input-group-text d-flex align-items-center justify-content-center">
                                          Tap to add
                                        </span>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </Col>
                              {/* ----------------Return--------------  */}
                            </Row>
                          </Col>

                          <Col xs={12} xl={4} className="d-xl-none">
                            <Passanger1
                              settravelleradult={settravelleradult}
                              settravellerchildren={settravellerchildren}
                              settravellerInfant={settravellerInfant}
                              adultData={data.adult}
                              childrenData={data.children}
                              infantData={data.infant}
                            />
                          </Col>
                          <Col xs={12} xl={4} className="d-xl-none">
                            <Class1
                              setclasse={setclasse}
                              setnameofclassName={setnameofclass}
                              classData={data.nameClass}
                            />
                          </Col>
                          <Col xs={12} xl={2} className="mt-3 mt-xl-0">
                            {/* <Link to="/flight/search/2"> */}
                            <button
                              className="btn btn-siteorange search-fl"
                              onClick={() => {
                                modify();
                                setmodifysort(!modifysort);
                              }}
                            >
                              Modify Search
                            </button>
                            {/* </Link> */}
                          </Col>
                        </Row>
                      </div>
                    )}
                  </div>
                </div>
              </Container>
            </div>
          </aside>
        </div>
      </div>
      {/*============ endf filter sidebar ============*/}

      <div className="oneway-flres position-relative modifynm d-xl-none">
        <Container>
          <a
            href={void 0}
            onClick={() => {
              setmodifysort(!modifysort);
            }}
            className="d-flex align-items-center justify-content-center   
 filterbybtn btn-outline-fetfare btn-block btn btn-primary dmround-fr"
          >
            <FontAwesomeIcon icon="fa-solid fa-pencil" />
            <span className="ml-2 font-medium">Modify</span>
          </a>
        </Container>
      </div>
    </>
  );
}
