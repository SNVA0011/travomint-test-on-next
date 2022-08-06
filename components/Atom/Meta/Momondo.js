// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { useNavigate, useSearchParams } from "react-router-dom";

// import { Skyscannermeta } from "../../static/static";
// import logo from "../../Image/logo.png";
// import { Route } from "react-router";
// import axios from "axios";
// import moment from "moment";
// const Skyscanner = () => {
//   const navigate = useNavigate();
//   // const [searchParams] = useSearchParams();
//   const [apiData, setApiData] = useState();
//   const [error, setError] = useState("");
//   const [resObj, setResObj] = useState("");
//   const SkyscannerApi = async () => {
//     var t = window.location.href;
//     var st = t.split("?")[1];
//     var tttt = st.split("&");
//     var dd = {};
//     for (var i = 0; i < tttt.length; i++) {
//       dd[tttt[i].split("=")[0]] = tttt[i].split("=")[1];
//     }

//     var data = JSON.stringify({
//       searchId: dd["key"],
//     });

//     var config = {
//       method: "post",
//       url: "http://api.travomint.com/search/viewsearch?authcode=Trav3103s987876",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     const apidatasky = await axios(config);
//     const dataapisky = await apidatasky;


//     if (dataapisky) {
//       setApiData(dataapisky.data);
//       var objdata = "";

//       if (dataapisky) {
//         var Responce = dataapisky.data.response.map((item) =>
//           item.traveloesSearch.map((items) => items)
//         );
//         // setResObj(Responce[0][0]);
//         objdata = Responce[0][0];

//       }


//       if (objdata) {
//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         const fromCity = objdata.froCity.split(")")[0];
//         const sllitfromCity = fromCity.split("(")[1];

//         //to city

//         const toCity = objdata.toCity.split(")")[0];
//         const sllittoCity = toCity.split("(")[1];

//         // DepDate
//         const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
//         const retDate = moment(objdata.retDate).format("MM/DD/YYYY");


//         const conditionsegments =
//           objdata.tripType === 1
//             ? [
//                 {
//                   originAirport: sllitfromCity,
//                   destinationAirport: sllittoCity,
//                   travelDate: depDate,
//                 },
//               ]
//             : [
//                 {
//                   originAirport: sllitfromCity,
//                   destinationAirport: sllittoCity,
//                   travelDate: depDate,
//                 },
//                 {
//                   originAirport: sllittoCity,
//                   destinationAirport: sllitfromCity,
//                   travelDate: retDate,
//                 },
//               ];

//         var myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         var raw = JSON.stringify({
//           searchID: objdata.searchId,
//           client: 2,
//           segment: conditionsegments,
//           searchDirectFlight: false,
//           flexibleSearch: false,
//           tripType: objdata.tripType,
//           adults: objdata.adults,
//           child: objdata.child,
//           infants: objdata.infants,
//           infantsWs: objdata.infantsWs,
//           cabinType: objdata.cabinType,
//           airline: objdata.airline,
//           currencyCode: objdata.currencyCode,
//           siteId: objdata.siteId,
//           source: objdata.source,
//           media: objdata.media,
//           sID: "",
//           rID: "",
//           locale: "en",
//           isNearBy: false,
//           limit: 300,
//           pageValue: "search",
//           media: objdata.media,
//           media: objdata.media,
//           userIP: objdata.userIp,
//           serverIP: objdata.serverIp,
//           device: objdata.device,
//           browser: objdata.browser,
//           userCountry: "IN",
//           userSearch: true,
//         });
//         var requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body: raw,
//           redirect: "follow",
//         };

//         const resData = await fetch(
//           "http://api.travomint.com/Flights/GetFlightResult?authcode=MetaMom052019",
//           requestOptions
//         );
//         const dataRes = await resData.json();
//         if (dataRes) {

//           navigate("/FareAvailabity", {
//             state: {
//               flight_data: dataRes.flightResult[0],
//               AllFlight_Data: dataRes,
//               Objdata: objdata,
//             },
//           });
//         } else {

//         }
//       } else {

//       }
//     } else {

//     }
//     // .then(function (response) {

//     //   if (response.data) {
//     //     setApiData(response.data);
//     //     responseData();
//     //   } else {

//     //   }
//     // })
//     // .catch(function (error) {

//     // });
//   };

//   // const responseData = async () => {

//   //   var myHeaders = new Headers();
//   //   myHeaders.append("Content-Type", "application/json");
//   //   var raw = JSON.stringify({
//   //     baseResponse: apiData.baseResponse,
//   //     response: apiData.response,
//   //     bookingId: apiData.bookingId,
//   //   });
//   //   var requestOptions = {
//   //     method: "POST",
//   //     headers: myHeaders,
//   //     body: raw,
//   //     redirect: "follow",
//   //   };

//   //   const resData = await fetch(
//   //     "http://sky.travomint.com/Flights/GetFlightResult?authcode=Trav3103s987876",
//   //     requestOptions
//   //   );
//   //   const dataRes = await resData.json();
//   //   if (dataRes) {

//   //   } else {

//   //   }
//   //   // .then((response) => response.json())

//   // };

//   // var objdata = "";

//   // if (apiData) {
//   //   var Responce = apiData.response.map((item) =>
//   //     item.traveloesSearch.map((items) => items)
//   //   );
//   //   // setResObj(Responce[0][0]);
//   //   objdata = Responce[0][0];
//   // }


//   // const ApiFlightResult = () => {
//   //   const fromCity = objdata.froCity.split(")")[0];
//   //   const sllitfromCity = fromCity.split("(")[1];

//   //   //to city

//   //   const toCity = objdata.froCity.split(")")[0];
//   //   const sllittoCity = toCity.split("(")[1];

//   //   // DepDate
//   //   const depDate = moment(objdata.depDate).format("MM/DD/YYYY");
//   //   const retDate = moment(objdata.retDate).format("MM/DD/YYYY");

//   //   const conditionsegments =
//   //     objdata.tripType === 1
//   //       ? [
//   //           {
//   //             originAirport: sllitfromCity,
//   //             destinationAirport: sllittoCity,
//   //             travelDate: depDate,
//   //           },
//   //         ]
//   //       : [
//   //           {
//   //             originAirport: sllitfromCity,
//   //             destinationAirport: sllittoCity,
//   //             travelDate: depDate,
//   //           },
//   //           {
//   //             originAirport: sllittoCity,
//   //             destinationAirport: sllitfromCity,
//   //             travelDate: retDate,
//   //           },
//   //         ];

//   //   var myHeaders = new Headers();
//   //   myHeaders.append("Content-Type", "application/json");

//   //   var raw = JSON.stringify({
//   //     searchID: objdata.searchId,
//   //     client: 2,
//   //     segment: conditionsegments,
//   //     searchDirectFlight: false,
//   //     flexibleSearch: false,
//   //     tripType: objdata.tripType,
//   //     adults: objdata.adults,
//   //     child: objdata.child,
//   //     infants: objdata.infants,
//   //     infantsWs: objdata.infantsWs,
//   //     cabinType: objdata.cabinType,
//   //     airline: objdata.airline,
//   //     currencyCode: objdata.currencyCode,
//   //     siteId: objdata.siteId,
//   //     source: objdata.source,
//   //     media: objdata.media,
//   //     sID: "",
//   //     rID: "",
//   //     locale: "en",
//   //     isNearBy: false,
//   //     limit: 300,
//   //     pageValue: "search",
//   //     media: objdata.media,
//   //     media: objdata.media,
//   //     userIP: objdata.userIp,
//   //     serverIP: objdata.serverIp,
//   //     device: objdata.device,
//   //     browser: objdata.browser,
//   //     userCountry: "IN",
//   //     userSearch: true,
//   //   });

//   //   var requestOptions = {
//   //     method: "POST",
//   //     headers: myHeaders,
//   //     body: raw,
//   //     redirect: "follow",
//   //   };

//   //   fetch(
//   //     "http://testapi.traveloes.com/Flights/GetFlightResult?authcode=Trav3103s987876",
//   //     requestOptions
//   //   )
//   //     .then((response) => response.json())

//   // };

//   useEffect(() => {
//     //  getFlightResult()
//     SkyscannerApi();
//   }, []);

//   return (
//     <>
//       {error === "SEE_OTHER" ? (
//         <div className="height_100vh d-flex align-items-center justify-content-center">
//           <div className="">
//             <div className="row  col- d-flex align-items-center  justify-content-center bg-white">
//               <div className="col-6 text-center">
//                 <img src={logo} className="err_logo-custom mb-4" width="80%" />
//                 <div>
//                   <img
//                     // src={Flight_Not_Found}
//                     className="flight_not_found_pic"
//                   />
//                 </div>
//                 <div>
//                   <h2>Flight Not Found</h2>
//                 </div>
//                 <a href={`https://www.travomint.com/in`}>
//                   <div className="go_back_btn">
//                     <Button>Go To Home</Button>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="Travomint-wrapper d-flex align-items-center justify-content-center">
//           <div className="">
//             <div className="row border col- d-flex align-items-center  justify-content-center bg-white">
//               <div class="wait mb-4">
//                 <div class="snippet" data-title=".dot-flashing">
//                   <div class="stage d-flex align-items-center justify-content-center">
//                     <span className="mr-4 d-flex mt-2 ">
//                       <strong>Fetching Flight Details</strong>
//                     </span>
//                     <div class="dot-flashing"></div>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="col-2"><h3>{apiData.Origin1}</h3></div> */}
//               {/* <img src={logo} className="" width="150" /> */}
//               <div className="col-6">
//                 <img src={logo} className="logo-custom" width="100%;" />
//                 {/* <img src={flight} className="plane-img" /> */}
//               </div>
//               {/* <div className="col-2"><h3>{apiData.Destination1}</h3></div> */}
//               {/* <div className="iata_code arrival_city">{apiData.Destination1}</div> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Skyscanner;
