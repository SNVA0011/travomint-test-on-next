import React from "react";

const PassengerDetails = (props) => {
  const { traveler_Deatils, email, mobile } = props;

  return (
    <div className="borderwithshadow">
      <div className="container passangerDetail">
        <h1>Passenger Details-</h1>
        <br />
        {/* Passanger */}
        {traveler_Deatils.map((item, i) => {
          return (
            <>
              {" "}
              <div className="row passenger">
                <div className="col-4">Passenger Name</div>
                <div className="col-3">Date of Birth</div>
                <div className="col-2">Gender</div>
                <div className="col-1"></div>
                <div className="col-2">Seat</div>
              </div>
              <div className="row passangerinfo">
                <div className="col-4">
                  {item.firstName + " " + item.middleName + " " + item.lastName}
                </div>
                <div className="col-3">{item.dateOfBirth}</div>
                <div className="col-2">
                  {item.gender === "1" || item.gender === 1 ? "Male" : "Female"}
                </div>
                <div className="col-1">NA</div>
                <div className="col-2"></div>
              </div>
            </>
          );
        })}

        <br />
        {/* user */}
        <div className="row user">
          <div className="col-12">User Information</div>
        </div>
        <div className="row userinfo">
          <div className="col-6">Email: {email}</div>
          <div className="col-3">Contact Number:</div>
          <div className="col-3">{mobile}</div>
        </div>

        <br />
      </div>
    </div>
  );
};

export default PassengerDetails;
