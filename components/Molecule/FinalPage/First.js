import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SelectedData } from "../../Feature/Action";
import AirportData from "../../Sample_Data/AirPortData.json";
import { imgdomain } from "../../static/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
const First = (props) => {
  const { flightdata, allflightdata, inBoundData, data } = props;

  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);

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

  // const fromone = data.froCity.split("(")[1];
  // const fromtwo = fromone.split(")")[0];
  // const toone = data.toCity.split("(")[1];
  // const totwo = toone.split(")")[0];
  // const fromCode = AirportData.find((item) => item.cityCode === fromtwo);
  // const toCode = AirportData.find((item) => item.cityCode === totwo);
  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}`;
  };
  return (
    <>
      <div className="skj-3 filteroutbound-li fapl-re-6  mb-4 rounded-xl depbadge-dflex">
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
                <div className="checkoutflp-wrapper" key={index}>
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
                              item.depDate.split("T")[1].substring(0, 5)
                            )}
                          </div>
                          <div className="text-gray-500 font-medium text-sm">
                            {moment(item.depDate.split("T")[0])
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
                                    <ConvertMinsToTime data={item.eft} />
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
                              item.reachDate.split("T")[1].substring(0, 5)
                            )}
                          </div>
                          <div className="text-gray-500 font-medium text-sm">
                            {moment(item.reachDate.split("T")[0])
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
            {data.CountryCode !== "IN" && data.ArCountryCode !== "IN" ? (
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
                      <div className="checkoutflp-wrapper" key={index}>
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
                                    item.depDate.split("T")[1].substring(0, 5)
                                  )}
                                </div>
                                <div className="text-gray-500 font-medium text-sm">
                                  {moment(item.depDate.split("T")[0])
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
                                          <ConvertMinsToTime data={item.eft} />
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
                                    item.reachDate.split("T")[1].substring(0, 5)
                                  )}
                                </div>
                                <div className="text-gray-500 font-medium text-sm">
                                  {moment(item.reachDate.split("T")[0])
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
                      <div className="checkoutflp-wrapper" key={index}>
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
                                    item.depDate.split("T")[1].substring(0, 5)
                                  )}
                                </div>
                                <div className="text-gray-500 font-medium text-sm">
                                  {moment(item.depDate.split("T")[0])
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
                                          <ConvertMinsToTime data={item.eft} />
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
                                    item.reachDate.split("T")[1].substring(0, 5)
                                  )}
                                </div>
                                <div className="text-gray-500 font-medium text-sm">
                                  {moment(item.reachDate.split("T")[0])
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

      {data.currencyCode !== "INR" ? (
        <div className="grid grid-cols-3 up rounded-2xl my-3  info-head-payment ">
          <div className="payment-info-head">
            <h4>Good to Know</h4>
            <p className="font-semibold">Information you should know </p>
          </div>

          <ul className="paymentse-ul">
            <li>
              The airline Cancellation Fee will be as per Airline for the
              selected flight route {flightdata.outBound[0].fromAirport} to{" "}
              {flightdata.outBound[flightdata.outBound.length - 1].toAirport}
            </li>

            <li>Remember to web check-in before arriving at the airport.</li>
            <li>Face masks are compulsory.</li>
          </ul>
        </div>
      ) : (
        <div className="grid grid-cols-3 up rounded-2xl  my-3 info-head-payment ">
          <div className="payment-info-head">
            <h4>Good to Know</h4>
            <p className="font-semibold">Information you should know </p>
          </div>

          <ul className="paymentse-ul">
            <li>
              The airline Cancellation Fee is 3500 INR Per Passenger for the
              selected flight route {flightdata.outBound[0].fromAirport} to{" "}
              {flightdata.outBound[flightdata.outBound.length - 1].toAirport}
            </li>
            <li>
              {" "}
              Certify your health status through the Aarogya Setu App or the
              self-declaration form at the airport.{" "}
            </li>
            <li>Remember to web check-in before arriving at the airport.</li>
            <li>Face masks are compulsory.</li>
          </ul>
        </div>
      )}
      {data.currencyCode !== "INR" ? (
        <div className="up rounded-2xl my-3  info-head-payment-moreinfo">
          <div className="payment-info-head">
            <h4>
              More Information{" "}
              <span className="ml-1">
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
              </span>
            </h4>
          </div>

          <ul>
            <li>
              You are requested to check the baggage policy. Your selected
              flights, say your departure destination, and the arrival
              destination has the hand baggage only fare. And the check-in
              baggage might be needed to purchase separately along with your
              flight booking.
            </li>

            <li>
              A Transit visa may be required for your selected flight. Please
              reverify this from the airlines or Travomint Representative.
            </li>

            <li>
              Your selected flight from{" "}
              {allflightdata.airport
                .filter(
                  (item) =>
                    item.airportCode === flightdata.outBound[0].fromAirport
                )
                .map((item) => item.airportName)}
              ({flightdata.outBound[0].fromAirport}) to{" "}
              {allflightdata.airport
                .filter(
                  (item) =>
                    item.airportCode ===
                    flightdata.outBound[flightdata.outBound.length - 1]
                      .toAirport
                )
                .map((item) => item.airportName)}
              ({flightdata.outBound[flightdata.outBound.length - 1].toAirport})
              is Arriving at{" "}
              {moment(
                flightdata.outBound[
                  flightdata.outBound.length - 1
                ].reachDate.split("T")[0]
              ).format("DD MMM, YYYY")}{" "}
              (
              {convertFrom24To12Format(
                flightdata.outBound[
                  flightdata.outBound.length - 1
                ].reachDate.split("T")[1]
              )}
              ).
            </li>

            <li>
              <b>Airline Guidelines,</b>
              Please check airline-specific guidelines before making the
              booking. Individual airlines may have different visa & entry
              regulation norms. To know more, click here.
            </li>
            <li>
              <b>Country Guidelines </b>
              CCountry guidelines may also change without prior notice. Hence,
              please check travel rules and regulations on their regulatory
              website before booking the flight.
            </li>
          </ul>
        </div>
      ) : (
        <div className="up rounded-2xl my-3  info-head-payment-moreinfo">
          <div className="payment-info-head">
            <h4>
              More Information{" "}
              <span className="ml-1">
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
              </span>
            </h4>
          </div>

          <ul>
            <li>
              You are requested to check the baggage policy. Your selected
              flights, say your departure destination, and the arrival
              destination has the hand baggage only fare. And the check-in
              baggage might be needed to purchase separately along with your
              flight booking
            </li>

            <li>
              Your selected flight from{" "}
              {allflightdata.airport
                .filter(
                  (item) =>
                    item.airportCode === flightdata.outBound[0].fromAirport
                )
                .map((item) => item.airportName)}
              ({flightdata.outBound[0].fromAirport}) to{" "}
              {allflightdata.airport
                .filter(
                  (item) =>
                    item.airportCode ===
                    flightdata.outBound[flightdata.outBound.length - 1]
                      .toAirport
                )
                .map((item) => item.airportName)}
              ({flightdata.outBound[flightdata.outBound.length - 1].toAirport})
              is Arriving at{" "}
              {moment(
                flightdata.outBound[
                  flightdata.outBound.length - 1
                ].reachDate.split("T")[0]
              ).format("DD MMM, YYYY")}{" "}
              (
              {convertFrom24To12Format(
                flightdata.outBound[
                  flightdata.outBound.length - 1
                ].reachDate.split("T")[1]
              )}
              ).
            </li>

            <li>
              <b>Airline Guidelines </b>
              Please check airline-specific guidelines before booking.
              Individual airlines may have different visa & entry regulation
              criteria. To know more click here
            </li>
            <li>
              <b>Country Guidelines </b>
              In addition, country guidelines may also change without notice,
              hence please do check travel rules on their regulatory website
              prior to booking
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default First;
