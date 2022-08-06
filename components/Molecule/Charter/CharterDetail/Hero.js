import React, { useState } from "react";
import pilatus from "../../../../public/Image/pilatus.jpg";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Carousel from "../../../Atom/thumbnailCarousal";

import { Dialog, Transition, Listbox } from "@headlessui/react";
import { addDays } from "date-fns";
import { Fragment } from "react";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AirPortData from "../../../Sample_Data/AirPortData.json";
import Country from "../../../Sample_Data/Country.json";
import { useParams } from "react-router-dom";
import { useRouter } from "next/router";
const people = AirPortData;

const Hero = () => {
  const urlcheck = useRouter();

  // -----------------------usestate --------------------
  const [selected, setSelected] = useState(people);
  const [city, setcity] = useState("Delhi");
  const [finalcity, setfinalcity] = useState("");
  const [FavGen, setFavGen] = useState("none");
  const [generate, setgenerate] = useState("none");
  const [tripType, setTripType] = useState(1);
  let [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [valueChange, setValueChange] = useState(false);
  const [startDate, setstartDate] = useState(state[0].startDate);
  const [endDate, setendDate] = useState(state[0].endDate);

  // passanger

  // passanger

  // -----------------------usestate --------------------

  // ----------------------From and to -------------------

  function changecity(e) {
    setcity(e);
    setfinalcity(e);
    {
      e == "" ? setgenerate("none") : setgenerate("block");
    }
    // setFavGen("none");
  }

  // ----------------------From and to -------------------

  //------------------ Date change -------------------------
  function openModal() {
    setIsOpen(true);
  }
  const ChangeDateColumn = () => {
    setTripType(1);
    setValueChange(false);
  };
  const ShowDateChange = () => {
    setValueChange(true);
    setTripType(2);
  };
  function closeModal() {
    setIsOpen(false);
  }
  function setdate() {
    setIsOpen(false);
    setstartDate(state[0].startDate);
    setendDate(state[0].endDate);
  }
  //------------------ Date change -------------------------

  // ----------------------------passanger -----------------------
  const [count, setCount] = useState(1);
  const [adult, setadult] = useState(1);
  const [selected1, setSelected1] = useState(true);
  const [children, setchildren] = useState(0);
  const [Infant, setInfant] = useState(0);

  function addAdult() {
    setadult(adult + 1);
    setCount(count + 1);
    setSelected1();
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function minusAdult() {
    setadult(adult - 1);
    setCount(count - 1);
  }

  function minuschildren() {
    setchildren(children - 1);
    setCount(count - 1);
  }
  function addchildren() {
    setchildren(children + 1);
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function addInfant() {
    setInfant(Infant + 1);
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function minusInfant() {
    setInfant(Infant - 1);
    setCount(count - 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }

  // country and code


  //---------------------------- Passanger------------------------------

  return (
    <>
      <div className="container px-80">
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="col-span-2 shadow-xl p-4">
            <div className="">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10">
                  <Image src={pilatus} className="w-full h-auto mb-4" />
                </div>
                <div className="col-span-2">
                  <Image src={pilatus} className="w-full h-auto mb-4" />
                  <Image src={pilatus} className="w-full h-auto mb-4" />
                  <Image src={pilatus} className="w-full h-auto mb-4" />
                </div>
              </div>

              <h1 className="text-black">Pilatus PC 12</h1>
              <span className="text-orange-500 text-sm">
                6 Seater Turbo Prop
              </span>
              <span className="pl-10 text-orange-500 text-sm">• 3h 15m</span>

              <p className="text-gray-500 text-sm mt-2">
                The Pilatus PC-12 is a versatile single engine aircraft. It is
                very popular as a business aircraft. High on comfort and
                quality, this aircraft has stood the test of time. With the
                interior designed in conjunction with BMW{"'"}s Designworks
                division, this aircraft is a perfect choice for you to
                experience the thrill of flying in style.
              </p>
              <hr />
              <h4>Facilities</h4>
              <div className="grid grid-cols-4">
                <div className="text-black text-sm mb-2">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  &nbsp; &nbsp;2 Pilots
                </div>
                <div className="text-black text-sm ">
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                  &nbsp; &nbsp; 15 KGS Per Passenger
                </div>
                <div className="text-black text-sm ">
                  <FontAwesomeIcon icon="fa-solid fa-plane" />
                  &nbsp; &nbsp; 1 Lavatory
                </div>
                <div className="text-black text-sm ">
                  <FontAwesomeIcon icon="fa-solid fa-history" />
                  &nbsp; &nbsp; 4ft 10in Cabin Height
                </div>
                <div className="text-black text-sm  ">
                  <FontAwesomeIcon icon="fa-solid fa-paw" />
                  &nbsp; &nbsp; Pets Allowed
                </div>
                <div className="text-gray-500 text-sm ">
                  <FontAwesomeIcon icon="fa-solid fa-wifi" />
                  &nbsp; &nbsp; Wifi Not Available
                </div>
                <div className="text-gray-500 text-sm ">
                  <FontAwesomeIcon icon="fa-solid fa-wheelchair" />
                  &nbsp; &nbsp; No Recliner Seats
                </div>
              </div>
              {/* 
<Carousel/> */}
            </div>
          </div>
          <div className=" p-4">
            <div className="px-4 form-visa">
              <h1 className="  apply-heading  ">Book Your Charter</h1>
              <div className="mb-4">
                <input
                  type="radio"
                  id="one-way"
                  name="fav_language"
                  value="1"
                />
                <label className="way">One Way</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="two-way"
                  name="fav_language"
                  value="2"
                />
                <label className="way">Two Way</label>
              </div>

              <input
                type="text"
                placeholder="Enter Email ID"
                className="visaFields"
              />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="visaFields"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="visaFields"
              />

              <select name="cars" id="cars" className="w-full">
                {Country.map((items, i) => (
                  <>
                    <option value="volvo">
                      {" "}
                      {items.name},{items.code}
                    </option>
                  </>
                ))}
              </select>

              {/* from origin  */}
              <div className="z-40">
                <div
                  className="bg-white  se-pd  border-gray-800 "
                  // onClick={() => clickCity()}
                >
                  <div className="grid grid-cols-2 gap-1 mb-3 text-black">
                  <div>
                  <span className="pt-2 text-sm text-black w-1/2 city-Name ">
                      <i className="fas fa-map-marker-alt     text-blue-500"></i>{" "}
                      &nbsp; <input
                        type="text"
                        id="selecteds"
                        className="city w-1/2"
                        value={finalcity}
                        placeholder="Country, City or Airport"
                        autoComplete="off"
                        onChange={(e) => changecity(e.target.value)}
                        required
                      />
                    </span>
                  </div>
                  <div>
                  <span className="foot rounded-lg w-3/5 col-span-3 text-lg px-4 font-bold float-right ">
                      DEL
                    </span>
                  </div>
                  

                    {/* {selected
              .filter((items) => items.airportName == finalcity)
              .map((items, i) => ( */}

                    {/* ))} */}
                    {/* {selected
              .filter((items) => items.airportName == finalcity)
              .map((items, i) => ( */}

                    {/* ))} */}
                  </div>
                </div>

                <div className="">
                  <ul
                    role="listbox"
                    className="w-100 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded font-bold"
                    style={{ display: FavGen }}
                  >
                    {AirPortData.map((item, i) => (
                      <>
                        {/* <li role='option' onClick={(e)=>changeAirport(e)} className='dataItem w-full list-none '> <i className="fas fa-plane-departure inline   text-blue-500"></i> &nbsp;  <option id='selecteds' value={item.airportName} className='inline text-lg text-gray-600 ' >  {item.airportName} , ({item.airportCode})</option><br/></li> */}
                        <button
                          className="dataItem w-full px-4 py-2 text-left"
                          onClick={(e) => changeAirport(e)}
                          value={item.airportName}
                        >
                          {" "}
                          <i className="fas fa-plane-departure  mr-2  text-blue-500"></i>{" "}
                          {item.airportName}, {item.cityName}{" "}
                          <button
                            className="float-right shadow foot px-4 rounded-xl"
                            value={item.airportName}
                            onClick={(e) => changeAirport(e)}
                          >
                            {item.airportCode}
                          </button>{" "}
                        </button>
                      </>
                    ))}
                  </ul>
                </div>

                <div className="search">
                  <div className="searchInputs">
                    <div className="searchIcon">
                      <ul
                        role="listbox"
                        className="dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded w-100 "
                        style={{ display: generate }}
                      >
                        {selected
                          .filter((item) => {
                            if (city == "") {
                              return "string";
                            } else if (
                              item.cityCode
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.airportCode
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.airportName
                                .replace(
                                  /(^\w|\s\w)(\S*)/g,
                                  (_, m1, m2) =>
                                    m1.toUpperCase() + m2.toLowerCase()
                                )
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.cityName
                                .replace(
                                  /(^\w|\s\w)(\S*)/g,
                                  (_, m1, m2) =>
                                    m1.toUpperCase() + m2.toLowerCase()
                                )
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            }
                          })
                          .map((item, i) => (
                            <>
                              <button
                                className="dataItem w-full px-3 py-2 text-left"
                                onClick={(e) => changeAirport(e)}
                                value={item.airportName}
                              >
                                {" "}
                                <i className="fas fa-plane-departure  mr-2  text-blue-500"></i>{" "}
                                {item.airportName}, {item.cityName}{" "}
                                <span className="float-right shadow foot px-4 rounded-xl">
                                  {item.airportCode}
                                </span>{" "}
                              </button>
                            </>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* to destination */}
              <div className="z-40">
                <div
                  className="bg-white  se-pd  border-gray-800 "
                  // onClick={() => clickCity()}
                >
                  <div className="grid grid-cols-2 gap-1 mb-3 text-black">
                  <div>
                  <span className="pt-2 text-sm text-black w-1/2 city-Name ">
                      <i className="fas fa-map-marker-alt     text-blue-500"></i>{" "}
                      &nbsp; <input
                        type="text"
                        id="selecteds"
                        className="city w-1/2"
                        value={finalcity}
                        placeholder="Country, City or Airport"
                        autoComplete="off"
                        onChange={(e) => changecity(e)}
                        required
                      />
                    </span>
                  </div>
                  <div>
                  <span className="foot rounded-lg w-3/5 col-span-3 text-lg px-4 font-bold float-right ">
                      DEL
                    </span>
                  </div>
                  

                    {/* {selected
              .filter((items) => items.airportName == finalcity)
              .map((items, i) => ( */}

                    {/* ))} */}
                    {/* {selected
              .filter((items) => items.airportName == finalcity)
              .map((items, i) => ( */}

                    {/* ))} */}
                  </div>
                </div>

                <div className="">
                  <ul
                    role="listbox"
                    className="w-100 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded font-bold"
                    style={{ display: FavGen }}
                  >
                    {AirPortData.map((item, i) => (
                      <>
                        {/* <li role='option' onClick={(e)=>changeAirport(e)} className='dataItem w-full list-none '> <i className="fas fa-plane-departure inline   text-blue-500"></i> &nbsp;  <option id='selecteds' value={item.airportName} className='inline text-lg text-gray-600 ' >  {item.airportName} , ({item.airportCode})</option><br/></li> */}
                        <button
                          className="dataItem w-full px-4 py-2 text-left"
                          onClick={(e) => changeAirport(e)}
                          value={item.airportName}
                        >
                          {" "}
                          <i className="fas fa-plane-departure  mr-2  text-blue-500"></i>{" "}
                          {item.airportName}, {item.cityName}{" "}
                          <button
                            className="float-right shadow foot px-4 rounded-xl"
                            value={item.airportName}
                            onClick={(e) => changeAirport(e)}
                          >
                            {item.airportCode}
                          </button>{" "}
                        </button>
                      </>
                    ))}
                  </ul>
                </div>

                <div className="search">
                  <div className="searchInputs">
                    <div className="searchIcon">
                      <ul
                        role="listbox"
                        className="dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded w-100 "
                        style={{ display: generate }}
                      >
                        {selected
                          .filter((item) => {
                            if (city == "") {
                              return "string";
                            } else if (
                              item.cityCode
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.airportCode
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.airportName
                                .replace(
                                  /(^\w|\s\w)(\S*)/g,
                                  (_, m1, m2) =>
                                    m1.toUpperCase() + m2.toLowerCase()
                                )
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            } else if (
                              item.cityName
                                .replace(
                                  /(^\w|\s\w)(\S*)/g,
                                  (_, m1, m2) =>
                                    m1.toUpperCase() + m2.toLowerCase()
                                )
                                .toUpperCase()
                                .includes(city.toUpperCase())
                            ) {
                              return item;
                            }
                          })
                          .map((item, i) => (
                            <>
                              <button
                                className="dataItem w-full px-3 py-2 text-left"
                                onClick={(e) => changeAirport(e)}
                                value={item.airportName}
                              >
                                {" "}
                                <i className="fas fa-plane-departure  mr-2  text-blue-500"></i>{" "}
                                {item.airportName}, {item.cityName}{" "}
                                <span className="float-right shadow foot px-4 rounded-xl">
                                  {item.airportCode}
                                </span>{" "}
                              </button>
                            </>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* date  */}
              <div className=" grid grid-cols-2 gap-2 flex flex-row ">
                <div className=" depature-return w-12/12  ps-relative  flex flex-row w-100 ">
                  {/* <div className=" depature-return ps-relative b-right1 round-trip width-50 De-pd d-flex justify-content-start align-items-start flex-column "> */}
                  <span className="text-sm text-blue-500 ml-2 font-semibold label-font2 ">
                    Depature{" "}
                  </span>
                  {/* <DatePicker
                  onChange={onChange}
                  value={valueDate}
                  minDate={new Date()}
                /> */}
                  <input
                    type="text"
                    value={startDate.toLocaleDateString()}
                    onClick={openModal}
                    className="w-full new-datepicker date text-black font-sans inline-block text-sm border-md px-4 mb-3 py-2 mr-1 mt-4 text-lg font-bold  rounded-lg  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  />
                  <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                      as="div"
                      className="fixed bg-slate-200  inset-0 z-10 overflow-y-auto"
                      onClose={closeModal}
                    >
                      <div className="min-h-screen px-4 text-center ">
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
                          <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white  rounded-2xl">
                            <Dialog.Title
                              as="h3"
                              className="text-sm  font-medium leading-6 text-gray-900"
                            >
                              <DateRangePicker
                                onChange={(item) => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={true}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                              />
                            </Dialog.Title>

                            <button
                              className="btn btn-primary float-right"
                              onClick={() => setdate()}
                            >
                              Done
                            </button>
                          </div>
                        </Transition.Child>
                      </div>
                    </Dialog>
                  </Transition>
                </div>
                <div className=" depature-return w-12/12  ps-relative gap-2 flex flex-row w-100 ">
                  {/* </div> */}
                  {tripType === 2 ? (
                    <>
                      {" "}
                      {/* <div className="depature-return round-trip  ps-relative width-50 De-pd d-flex justify-content-start align-items-start flex-column ps-relative1  "> */}
                      <span className="text-sm ml-2 text-blue-500 font-semibold label-font2">
                        Return{" "}
                      </span>
                      <span
                        className="text-sm ml-2 font-semibold label-font-new z-50 "
                        onClick={() => setTripType(1)}
                      >
                        <i className="fa fa-window-close close-icon" />
                      </span>
                      <input
                        type="text"
                        value={endDate.toLocaleDateString()}
                        onClick={openModal}
                        className="w-full new-datepicker date text-black font-sans inline-block text-sm border-md px-4 mb-3 py-2 mr-1 mt-4 text-lg font-bold  rounded-lg  hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      />
                      {/* <DatePicker
                      onChange={onChangeReturn}
                      value={valueDateReturn}
                      minDate={new Date()}
                    /> */}
                      {/* </div> */}
                    </>
                  ) : (
                    <div className=" round-trip  ps-relative width-100 De-pd d-flex justify-content-start align-items-start flex-column ">
                      <span className="text-sm ml-2 font-semibold label-font2 relative ">
                        Return{" "}
                      </span>
                      <div
                        className="tab-add mt-6 ml-1 text-xs md:text-sm lg:text-xs xl:text-sm"
                        onClick={() => ShowDateChange()}
                      >
                        Tap to add a return date for round Trip.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* passanger */}

              {/* Adult */}
              <div className="px-4 py-2 mb-3 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h1 className="text-black text-lg border-2 border-white px-2  rounded-xl">
                    Adult
                  </h1>
                  <span className="text-xs text-black ">
                    {" "}
                    &nbsp; &nbsp; 16+ years
                  </span>
                </div>
                <div className="passengers">
                  <button
                    type="button"
                    onClick={() => minusAdult()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">
                    {" "}
                    &nbsp; {adult} &nbsp;{" "}
                  </span>
                  <button
                    type="button"
                    onClick={() => addAdult()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              {/* children */}

              <div className="px-4 py-2 mb-3 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h1 className="text-black text-lg px-2  ">Children</h1>
                  <span className="text-xs text-black ">
                    {" "}
                    &nbsp; &nbsp; 0-15 years
                  </span>
                </div>
                <div className="passengers">
                  <button
                    type="button"
                    onClick={() => minuschildren()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">
                    {" "}
                    &nbsp; {children} &nbsp;{" "}
                  </span>
                  <button
                    type="button"
                    onClick={() => addchildren()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              {/* infants */}

              <div className="px-4 py-2 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h1 className="text-black text-lg px-2  ">Infant</h1>
                  <span className="text-xs text-black ">
                    {" "}
                    &nbsp; &nbsp; 0-15 years
                  </span>
                </div>
                <div className="passengers">
                  <button
                    type="button"
                    onClick={() => minusInfant()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">
                    {" "}
                    &nbsp; {Infant} &nbsp;{" "}
                  </span>
                  <button
                    type="button"
                    onClick={() => addInfant()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl px-2 py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              <textarea
                className="bg-transparent shadow-2xl p-2 text-message"
                rows="4"
                placeholder="If you have some Query, You can write it here"
                name="comment"
                form="usrform"
              />

              <button className="visa-button">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
