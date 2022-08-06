import React from "react";
import moment from "moment";
import Image from "next/image";

const FlightDetail = (props) => {
  const { inflight_data, outflight_data, AllFlight_Data } = props;

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
    <div className="container">
      <div className="">
        {outflight_data.outBound.map((item,i) => {
          const fromAirport = AllFlight_Data.airport
            .filter((airline) => airline.airportCode == item.fromAirport)
            .map((airline) => airline.airportName);
          const toAirport = AllFlight_Data.airport
            .filter((airline) => airline.airportCode == item.toAirport)
            .map((airline) => airline.airportName);
          return (
            <div key={i} className="row py-4 ">
              <h3 className="text-primary">Depart: </h3>
              <div className="container-fluid ">
                <div className="row depart">
                  <div className="col-4 depart-img">
                    <div className="row">
                      <div className="col-6">
                        <Image alt="logo"
                          src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
                          width={`100%`}
                          height={`100%`}
                        />
                      </div>
                      <div className="col-6 ailrine-depart">
                        <div>
                          <p>{item.airlineName}</p>
                          <p>{item.flightNo}</p>
                          <p>
                            {item.cabinClass === 1
                              ? "Economy"
                              : item.cabinClass === 2
                              ? "PremiumEconomy"
                              : item.cabinClass === 3
                              ? "Business "
                              : item.cabinClass === 4
                              ? "First"
                              : null}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 depart-terminal">
                    <h4>{`${fromAirport} (${item.fromAirport})`}</h4>
                    <h6>{` ${moment(item.depDate.split("T")[0])
                      .format("DD MMM, YYYY")
                      .toString()} ${convertFrom24To12Format(
                      item.depDate.split("T")[1].substring(0, 5)
                    )}`}</h6>
                    <p>Terminal: {item.fromTerminal}</p>
                  </div>
                  <div className="col-4 depart-terminal">
                    <h4>{`${toAirport} (${item.toAirport})`}</h4>
                    <h6>{` ${
                      item.reachDate.split("T")[0]
                    } ${convertFrom24To12Format(
                      item.reachDate.split("T")[1].substring(0, 5)
                    )}`}</h6>
                    <p>Terminal: {item.toTerminal}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {inflight_data === null ? null : (
          <>
            {" "}
            {inflight_data.inBound.map((item,i) => {
              const fromAirport = AllFlight_Data.airport
                .filter((airline) => airline.airportCode == item.fromAirport)
                .map((airline) => airline.airportName);
              const toAirport = AllFlight_Data.airport
                .filter((airline) => airline.airportCode == item.toAirport)
                .map((airline) => airline.airportName);
              return (
                <div key={i} className="row py-4 ">
                  <h3 className="text-primary">Return: </h3>
                  <div className="container-fluid ">
                    <div className="row depart">
                      <div className="col-4 depart-img">
                        <div className="row">
                          <div className="col-6">
                            <Image alt="logo"
                              src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
                              width={`100%`}
                              height={`100%`}
                            />
                          </div>
                          <div className="col-6 ailrine-depart">
                            <div>
                              <p>{item.airlineName}</p>
                              <p>{item.flightNo}</p>
                              <p>
                                {item.cabinClass === 1
                                  ? "Economy"
                                  : item.cabinClass === 2
                                  ? "PremiumEconomy"
                                  : item.cabinClass === 3
                                  ? "Business "
                                  : item.cabinClass === 4
                                  ? "First"
                                  : null}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 depart-terminal">
                        <h4>{`${fromAirport} (${item.fromAirport})`}</h4>
                        <h6>{` ${moment(item.depDate.split("T")[0])
                          .format("DD MMM, YYYY")
                          .toString()} ${convertFrom24To12Format(
                          item.depDate.split("T")[1].substring(0, 5)
                        )}`}</h6>
                        <p>Terminal: {item.fromTerminal}</p>
                      </div>
                      <div className="col-4 depart-terminal">
                        <h4>{`${toAirport} (${item.toAirport})`}</h4>
                        <h6>{` ${moment(item.reachDate.split("T")[0])
                          .format("DD MMM, YYYY")
                          .toString()} ${convertFrom24To12Format(
                          item.reachDate.split("T")[1].substring(0, 5)
                        )}`}</h6>
                        <p>Terminal: {item.toTerminal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default FlightDetail;
