import { data } from "autoprefixer";
import React from "react";
import { useSelector } from "react-redux";

const FareDetail = (props) => {
  const {
    outflight_data,
    inflight_data,
    AllFlight_Data,
    search_Data,
    currency_Name_rd,
  } = props;

  var totalpricedatas = "";
  var adultfare = "";
  var adulttax = "";
  var childfare = "";
  var childtax = "";
  var infantfare = "";
  var infanttax = "";
  var convenienceFees = "";

  //Total Price
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      totalpricedatas = (
        outflight_data.fare.baseFare +
        outflight_data.fare.totalMarkup +
        outflight_data.fare.totalTax +
        inflight_data.fare.baseFare +
        inflight_data.fare.totalMarkup +
        inflight_data.fare.totalTax +
        outflight_data.fare.convenienceFees * search_Data.totalpassanger +
        inflight_data.fare.convenienceFees * search_Data.totalpassanger
      ).toFixed(2, 0);
    } else {
      totalpricedatas = (
        outflight_data.fare.baseFare +
        outflight_data.fare.totalMarkup +
        outflight_data.fare.totalTax +
        outflight_data.fare.convenienceFees * search_Data.totalpassanger
      ).toFixed(2, 0);
    }
  } else {
    totalpricedatas = (
      outflight_data.fare.baseFare +
      outflight_data.fare.totalMarkup +
      outflight_data.fare.totalTax +
      outflight_data.fare.convenienceFees * search_Data.totalpassanger
    ).toFixed(2, 0);
  }

  // Total convenienceFees

  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      convenienceFees =
        outflight_data.fare.convenienceFees +
        inflight_data.fare.convenienceFees;
    } else {
      convenienceFees = outflight_data.fare.convenienceFees;
    }
  } else {
    convenienceFees = outflight_data.fare.convenienceFees;
  }

  // Adult Fare
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      adultfare = outflight_data.fare.adultFare + inflight_data.fare.adultFare;
    } else {
      adultfare = outflight_data.fare.adultFare;
    }
  } else {
    adultfare = outflight_data.fare.adultFare;
  }

  // Adult Tax
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      adulttax =
        outflight_data.fare.adultTax +
        outflight_data.fare.adultMarkup +
        inflight_data.fare.adultTax +
        inflight_data.fare.adultMarkup;
    } else {
      adulttax = outflight_data.fare.adultTax + outflight_data.fare.adultMarkup;
    }
  } else {
    adulttax = outflight_data.fare.adultTax + outflight_data.fare.adultMarkup;
  }

  //Child fare
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      childfare = outflight_data.fare.childFare + inflight_data.fare.childFare;
    } else {
      childfare = outflight_data.fare.childFare;
    }
  } else {
    childfare = outflight_data.fare.childFare;
  }

  // child Tax
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      childtax =
        outflight_data.fare.childTax +
        outflight_data.fare.childMarkup +
        inflight_data.fare.childTax +
        inflight_data.fare.childMarkup;
    } else {
      childtax = outflight_data.fare.childTax + outflight_data.fare.childMarkup;
    }
  } else {
    childtax = outflight_data.fare.childTax + outflight_data.fare.childMarkup;
  }

  //infant fare
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      infantfare =
        outflight_data.fare.infantFare + inflight_data.fare.infantFare;
    } else {
      infantfare = outflight_data.fare.infantFare;
    }
  } else {
    infantfare = outflight_data.fare.infantFare;
  }

  // child Tax
  if (search_Data.tripType === 2) {
    if (
      search_Data.ArCountryCode === "IN" &&
      search_Data.CountryCode === "IN"
    ) {
      infanttax =
        outflight_data.fare.infantTax +
        outflight_data.fare.infantMarkup +
        inflight_data.fare.infantTax +
        inflight_data.fare.infantMarkup;
    } else {
      infanttax =
        outflight_data.fare.infantTax + outflight_data.fare.infantMarkup;
    }
  } else {
    infanttax =
      outflight_data.fare.infantTax + outflight_data.fare.infantMarkup;
  }

  return (
    <div className="container mt-4">
      <h1>Fares Details ({currency_Name_rd.currency_Name})- </h1>
      <hr />

      {/* // Adults */}
      {/* Fares */}
      <div className="row fare">
        <div className="col-6">
          Adult {search_Data.adult} X {currency_Name_rd.currency_Name}{" "}
          {adultfare}
        </div>
        <div className="col-6">
          {currency_Name_rd.currency_Name}{" "}
          {(adultfare * search_Data.adult).toFixed(2, 0)}
        </div>
      </div>

      {/* Fares1 */}
      <div className="row fare">
        <div className="col-6">Taxes & Fees</div>
        <div className="col-6">
          {" "}
          {currency_Name_rd.currency_Name} {adulttax.toFixed(2, 0)}
        </div>
      </div>

      {search_Data.children !== 0 && (
        <>
          <hr />
          {/* // Child */}
          {/* Fares */}
          <div className="row fare">
            <div className="col-6">
              Child {search_Data.children} X {currency_Name_rd.currency_Name}{" "}
              {childfare}
            </div>
            <div className="col-6">
              {currency_Name_rd.currency_Name}{" "}
              {(childfare * search_Data.children).toFixed(2, 0)}
            </div>
          </div>

          {/* Fares1 */}
          <div className="row fare">
            <div className="col-6">Taxes & Fees</div>
            <div className="col-6">
              {" "}
              {currency_Name_rd.currency_Name} {childtax.toFixed(2, 0)}
            </div>
          </div>
        </>
      )}

      {search_Data.infant !== 0 && (
        <>
          <hr />
          {/* // infant */}
          {/* Fares */}
          <div className="row fare">
            <div className="col-6">
              Infant {search_Data.infant} X {currency_Name_rd.currency_Name}{" "}
              {infantfare}
            </div>
            <div className="col-6">
              {currency_Name_rd.currency_Name}{" "}
              {(childfare * search_Data.infant).toFixed(2, 0)}
            </div>
          </div>

          {/* Fares1 */}
          <div className="row fare">
            <div className="col-6">Taxes & Fees</div>
            <div className="col-6">
              {" "}
              {currency_Name_rd.currency_Name} {infanttax.toFixed(2, 0)}
            </div>
          </div>
        </>
      )}

      <hr />
      {/* ------------------------------------------------------------ */}
      {/* Fares1 */}
      <div className="row fare">
        <div className="col-6">Convenience Fees</div>
        <div className="col-6">
          {currency_Name_rd.currency_Name} {convenienceFees.toFixed(2, 0)}
        </div>
      </div>
      <hr />
      {/* Fares1 */}
      <div className="row total-fare">
        <div className="col-6 text-dark">Total Trip Cost</div>
        <div className="col-6 text-dark">
          {currency_Name_rd.currency_Name} {totalpricedatas}
        </div>
      </div>
      <hr />
      <div className="notefare">
        *All outflight_data.fare are quoted in {currency_Name_rd.currency_Name}{" "}
        and inclusive of base fare, taxes and all fees. Additional baggage fees
        may apply as per the airline policies.
      </div>
    </div>
  );
};

export default FareDetail;
