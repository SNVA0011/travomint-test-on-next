import React from "react";
import { testapi,authCode } from "../../static/static";

const FlightApi = (props) => {
  const apiData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchID: "0fgg48ux7h6421l",
      client: 2,
      segment: [
        {
          originAirport: "BOM",
          destinationAirport: "DEL",
          travelDate: "05/20/2022",
        },
      ],
      searchDirectFlight: false,
      flexibleSearch: false,
      tripType: 1,
      adults: 1,
      child: 0,
      infants: 0,
      infantsWs: 0,
      cabinType: 1,
      airline: "All",
      currencyCode: "INR",
      siteId: 6,
      source: "online",
      media: "online",
      sID: "",
      rID: "",
      locale: "en",
      isNearBy: false,
      limit: 300,
      pageValue: "search",
      userIP: "0:0:0:0:0:0:0:1",
      serverIP: "",
      device: "Desktop",
      browser: "WINDOWS_10",
      userCountry: "IN",
      userSearch: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${testapi}/Flights/GetFlightResult?authcode=${authCode}`,
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      // .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    apiData();
  }, []);

  return <div>{children}</div>;
};

export default FlightApi;
