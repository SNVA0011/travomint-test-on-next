<div>
  {" "}
  <div className="grid grid-cols-3 px-20">
    <div>
      <p className="text-black font-bold text-xl mb-0">
        {flightData.outBound[0].airlineName}, {flightData.outBound[0].airline}{" "}
        {flightData.outBound[0].flightNo}
      </p>
      <span>Operated by {flightData.outBound[0].airlineName} </span>
    </div>
    <div className="text-center">
      <p className="text-black tex t-xl font-bold mb-0">Check-In Baggage</p>
      <span> 15kg Per Person</span>
    </div>
    <div className="text-right">
      <p className="text-black text-xl font-bold mb-0">Cabin Baggage</p>
      <span>7Kg per person</span>
    </div>
  </div>
</div>;

{
  /* <div>
        <div className="grid grid-cols-3 px-20 mt-10">
          <div className="mt-10">
            {airport
              .filter(
                (item) => item.airportCode == flightData.outBound[0].fromAirport
              )
              .map((item, i) => (
                <>
                  <p className="text-black font-bold text-xl mb-0">
                    {item.cityName} ({item.airportCode})
                  </p>
                  <span>{item.airportName}</span>
                  <br />
                  <span>{flightData.outBound[0].depDate}</span>
                </>
              ))}
          </div>
          <div>
            <img src={plane} />
          </div>
          <div className="text-right mt-10">
            {airport
              .filter(
                (item) =>
                  item.airportCode ==
                  flightData.outBound[outBoundCounts - 1].toAirport
              )
              .map((item, i) => (
                <>
                  <p className="text-black font-bold text-xl mb-0">
                    {item.cityName} ({item.airportCode})
                  </p>
                  <span>{item.airportName}</span>
                  <br />
                  <span>{flightData.outBound[outBoundCounts - 1].reachDate}</span>
                </>
              ))}
          </div>
        </div> */
}

{
  /* second */
}
{
  /* <div className="grid grid-cols-3 px-20 mt-10">
          <div className="mt-10">
            {AirPortData.filter(
              (item) => item.airportCode == items.outBound[1].fromAirport
            ).map((item, i) => (
              <>
                <p className="text-black font-bold text-xl mb-0">
                  {item.cityName} ({item.airportCode})
                </p>
                <span>{item.airportName}</span>
                <br />
                <span>{items.outBound[1].depDate}</span>
              </>
            ))}
          </div>
          <div>
            <img src={plane} />
          </div>
          <div className="text-right mt-10">
            {AirPortData.filter(
              (item) => item.airportCode == items.outBound[1].toAirport
            ).map((item, i) => (
              <>
                <p className="text-black font-bold text-xl mb-0">
                  {item.cityName} ({item.airportCode})
                </p>
                <span>{item.airportName}</span>
                <br />
                <span>{items.outBound[1].reachDate}</span>
              </>
            ))}
          </div>
        </div> */
}
{
  /* </div> */
}
