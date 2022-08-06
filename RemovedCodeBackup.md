<>
{sts ? (
<div>
{data.length === 0 ? (
"Wait Getting Ticket Details"
) : (
// <div className="wrapper">
// {/_ <ConfirmationHeader bookingdata={status.data} /> _/}
// <div className="container confirmationpage ">
// {/_ ---------------------------------------PNR DETAIL AND status ---------------------------------------_/}
// <div className="container PNRStatus">
// <div className=" text-center">
// <div>
// <div className="PNRstatus_top">
// PNR NO . X
// {data[0].bookingDetail.pnrConfirmation == ""
// ? "X"
// : data[0].bookingDetail.pnrConfirmation}
// <span className="pnr_NO text-primary lg:text-xl font-bold"></span>
// </div>
// </div>

            //         <div className="status_head">
            //           {/* --------------------------------BOOKING SUCCESS AND PNR GENERAT AND PAYMENT SUCCESS  ------------------------------ */}
            //           {data[0].bookingDetail.bookingStatus === "TKTED" &&
            //           data[0].paymentgateway &&
            //           data[0].paymentgateway[0].status === "Success" ? (
            //             <p>
            //               Your booking is confirmed, Please wait our customer
            //               agent will contact you soon. <br />
            //               Your Booking Reference id is{" "}
            //               <b className="text-lg">
            //                 {data[0].bookingDetail.bookingid}
            //               </b>
            //               . <br />
            //               Please use it for any further communication with us.
            //             </p>
            //           ) : null}

            //           {/* --------------------------------BOOKING PENDING or FAILURE AND PAYMENT SUCCESS  ------------------------------ */}
            //           {data[0].bookingDetail.bookingStatus !== "TKTED" &&
            //           data[0].paymentgateway &&
            //           data[0].paymentgateway[0].status === "Success" ? (
            //             <p>
            //               Your booking is confirmed and ticket is under process.
            //               <br />
            //               Our customer service will inform you about status. The
            //               airline did not give a clear indication of the status
            //               of this booking. If the booking succeeded, you will
            //               receive an email confirmation from them shortly.
            //               <br />
            //               Please do not re-book the booking until our customer
            //               service team would not informed you about current If
            //               in doubt, please contact our help desk at{" "}
            //               <b>+91-8010000200</b>
            //               <br />
            //               Your Booking Reference id is{" "}
            //               <b className="text-lg">
            //                 {data[0].bookingDetail.bookingId}
            //               </b>
            //               . <br />
            //               Please use it for any further communication with us.
            //             </p>
            //           ) : (
            //             ""
            //           )}
            //           {/* --------------------------------BOOKING PENDING or FAILURE AND PAYMENT FAILURE  ------------------------------ */}

            //           {data[0].bookingDetail.bookingStatus !== "TKTED" ||
            //             (data[0].paymentgateway && (
            //               <p>
            //                 Your booking is not confirmed due to payment
            //                 failure.
            //                 <br />
            //                 Our customer service will inform you about the{" "}
            //                 <br />
            //                 Please do not re-book the booking until our customer
            //                 service team would not informed you about current If
            //                 in doubt, please contact our help desk at{" "}
            //                 <b>+91-8010000200</b>. Your payment is failed from
            //                 bank, Please contact your bank. your booking is
            //                 pending until payment is not clear from the bank.
            //                 <br />
            //                 Your Booking Reference id is{" "}
            //                 <b className="text-lg">
            //                   {data[0].bookingDetail.bookingId}
            //                 </b>
            //                 . <br />
            //                 Please use it for any further communication with us.
            //               </p>
            //             ))}
            //           {/* {data[0].paymentgateway
            //             ? data[0].paymentgateway.length !== 0 &&
            //               data[0].paymentgateway[0].status !== "Success" &&
            //               data[0].bookingDetail.bookingStatus !== "TKTED" && (
            //                 <p>
            //                   Your booking is not confirmed due to payment
            //                   failure.
            //                   <br />
            //                   Our customer service will inform you about the{" "}
            //                   <br />
            //                   Please do not re-book the booking until our
            //                   customer service team would not informed you about
            //                   current If in doubt, please contact our help desk
            //                   at <b>+91-8010000200</b>. Your payment is failed
            //                   from bank, Please contact your bank. your booking
            //                   is pending until payment is not clear from the
            //                   bank.
            //                   <br />
            //                   Your Booking Reference id is{" "}
            //                   <b className="text-lg">
            //                     {data[0].bookingDetail.bookingId}
            //                   </b>
            //                   . <br />
            //                   Please use it for any further communication with
            //                   us.
            //                 </p>
            //               )
            //             : null} */}
            //           {/* --------------------------------BOOKING SUCCESS AND PNR GENERAT AND PAYMENT SUCCESS  ------------------------------ */}
            //           <div className="success-class">
            //             {data[0].paymentgateway ? (
            //               data[0].paymentgateway.length !== 0 &&
            //               data[0].paymentgateway[0].status === "Success" &&
            //               data[0].bookingDetail.bookingStatus === "TKTED" ? (
            //                 <p id="paragraph">
            //                   Your booking is confirmed <br />
            //                   Your Booking Reference id is{" "}
            //                   <b className="text-lg">
            //                     {data[0].bookingDetail.bookingId}
            //                   </b>
            //                   . <br />
            //                   Please use it for any further communication with
            //                   us.
            //                 </p>
            //               ) : (
            //                 ""
            //               )
            //             ) : null}
            //           </div>
            //           {data[0].paymentgateway ? (
            //             data[0].paymentgateway[0].status === "Success" &&
            //             data[0].bookingDetail.bookingStatus !== "TKTED" ? (
            //               <p>
            //                 Your booking is confirmed and ticket is under
            //                 process.
            //                 <br />
            //                 Our customer service will inform you about the
            //                 status. The airline did not give a clear indication
            //                 of the status of this booking. If the booking
            //                 succeeded, you will receive an email confirmation
            //                 from them shortly.
            //                 <br />
            //                 Please do not re-book the booking until our customer
            //                 service team would not informed you about current
            //                 status. If in doubt, please contact our help desk at{" "}
            //                 <b>+91-8010000200</b>
            //                 <br />
            //                 Your Booking Reference id is{" "}
            //                 <b className="text-lg">
            //                   {data[0].bookingDetail.bookingId}
            //                 </b>
            //                 . <br />
            //                 Please use it for any further communication with us.
            //               </p>
            //             ) : (
            //               ""
            //             )
            //           ) : null}
            //           {/* {(data.paymentStatus == "PENDING" ||
            //             data.paymentStatus == "FAILURE") &&
            //           (data.bookingStatus == "FAILURE" ||
            //             data.bookingStatus == "PENDING") ? (
            //             <p>
            //               Your booking is not confirmed due to payment failure.
            //               <br />
            //               Our customer service will inform you about the status.
            //               <br />
            //               Please do not re-book the booking until our customer
            //               service team would not informed you about current
            //               status. If in doubt, please contact our help desk at{" "}
            //               <b>+91-8010000200</b>. Your payment is failed from
            //               bank, Please contact your bank. your booking is
            //               pending until payment is not clear from the bank.
            //               <br />
            //               Your Booking Reference id is{" "}
            //               <b className="text-lg">{orderID.Bookingid}</b>. <br />
            //               Please use it for any further communication with us.
            //             </p>
            //           ) : (
            //             ""
            //           )}{" "} */}
            //         </div>
            //       </div>
            //     </div>
            //     {/* ---------------------------------------PNR DETAIL AND status ---------------------------------------*/}

            //     {/*----------------------------------------- BOKING DETAILS---------------------------------------- */}
            //     <div className="container confirmation-bookingDetails">
            //       <div className="row">
            //         <div className="col-md-4 col-6 text-xs md:text-sm ">
            //           {/* <p>Booking Reference No : <b>{orderID.Bookingid}</b></p>
            //           <p>Date Booked : <b>{moment(status.data.creationDate).format("dddd, DD-MMMM-yyyy")}{" "},{moment(status.data.creationDate).format("LT")} </b> </p>
            //           <p>Departure :   <b>{moment(status.data.supplierFlight.onWordFlight.outBound[0].depDate).format("dddd, DD-MMMM-yyyy")}{" "} ,{moment(status.data.supplierFlight.onWordFlight.outBound[0].depDate).format("LT")}</b> </p> */}
            //         </div>
            //         <div className="col-md-4 col-6 text-xs md:text-sm ">
            //           {/* <p> Origin :  <b> {status.data.passengerDetails != null ? <span>
            //             {status.data.supplierFlight.onWordFlight.outBound[0].fromAirport}
            //             ,{(AirportData.filter(items => items.airportCode == status.data.supplierFlight.onWordFlight.outBound[0].fromAirport).map((items, i) => (items.airportName)))}
            //           </span> : <span></span>} </b> </p>
            //           <p> Destination :  <b> {status.data.passengerDetails != null ? <span>
            //             {status.data.supplierFlight.onWordFlight.outBound[0].toAirport}
            //             ,{(AirportData.filter(items => items.airportCode == status.data.supplierFlight.onWordFlight.outBound[0].toAirport).map((items, i) => (items.airportName)))}
            //           </span> : <span></span>} </b>  </p>
            //           <p>Return :   <b></b> </p> */}
            //         </div>
            //         <div className="col-md-4 col-6 text-xs md:text-sm ">
            //           {/* <p> Journey Type :  <b>{status.data.tripType == 1 ? "One Way" : "Round Trip"}</b>  </p>
            //           <p> Passengers: <b>{status.data.passengerDetails != null ? (status.data.passengerDetails.length) : ""}</b>  </p>
            //           <p> Total Price: <b>   <i class="fas fa-rupee-sign  fa-sm  "></i>{" "}
            //           {status.data.supplierFlight.returnFlight==null?
            //           status.data.supplierFlight.onWordFlight.fare.baseFare + status.data.supplierFlight.onWordFlight.fare.totalMarkup  + status.data.supplierFlight.onWordFlight.fare.totalTax  + status.data.supplierFlight.onWordFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length)
            //           :
            //           (status.data.supplierFlight.onWordFlight.fare.baseFare + status.data.supplierFlight.onWordFlight.fare.totalMarkup + status.data.supplierFlight.onWordFlight.fare.totalTax + status.data.supplierFlight.onWordFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length) +  status.data.supplierFlight.returnFlight.fare.baseFare +
            //           status.data.supplierFlight.returnFlight.fare.totalMarkup + status.data.supplierFlight.returnFlight.fare.totalTax + status.data.supplierFlight.returnFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.returnFlight.fare.convenienceFees * status.data.passengerDetails.length))
            //           }

            //           </b>  </p> */}
            //         </div>
            //       </div>
            //     </div>
            //     {/*----------------------------------------- BOKING DETAILS---------------------------------------- */}

            //     {/*--------------------------------------------- flight details-------------------------------------- */}
            //     <div className=" grid grid-cols-1 up flight-details-payment">
            //       <div className="  w-full rounded-t-2xl text-left font-bold text-xl text-black text-white ">
            //         <i class="fas fa-fighter-jet text-black -rotate-45 "></i>{" "}
            //         &nbsp; Flight Detail
            //       </div>
            //       <div>
            //         <div className="px-4 py-1 md:py-0 user-info-table-heading">
            //           <h4 className="text-left">Departure</h4>
            //         </div>
            //         {data[0].SectorDetail.map((item, index) => {
            //           return (
            //             <div className="grid grid-cols-6 fareC  mt-2  px-2">
            //               <div className="col-span-2">
            //                 <div className="grid grid-cols-3">
            //                   <div className="pt-2 pb-3">
            //                     <img
            //                       src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
            //                       className="w-6/12 down rounded-xl inline float-right"
            //                     />
            //                   </div>

            //                   <div className="pl-4 pt-3 col-span-2 ">
            //                     <span className="text-xl text-black font-sans font-bold">
            //                       {item.airlineName}
            //                     </span>
            //                     -
            //                     <span className="text-xs  text-black font-sans font-bold">
            //                       {" "}
            //                       {item.flightNo}
            //                     </span>
            //                   </div>
            //                 </div>
            //               </div>
            //               <div className="col-span-4 px-14">
            //                 <div className="grid grid-cols-6 fareC">
            //                   <div className="text-left  py-3 md:col-span-2 col-span-6">
            //                     <span className="  text-black font-bold">
            //                       {item.fromDestination},
            //                       {AirPortData.filter(
            //                         (items) =>
            //                           items.airportCode == item.fromAirport
            //                       ).map((items, i) => items.airportName)}
            //                     </span>
            //                     <br />
            //                     <span className="  text-black font-bold">
            //                       {moment(item.fromDateTime).format(
            //                         "dddd, DD-MMMM-yyyy"
            //                       )}{" "}
            //                       <br />
            //                       {moment(item.fromDateTime).format("LT")}
            //                     </span>
            //                   </div>
            //                   <div className="col-span-6 md:col-span-2 text-center">
            //                     <div className="grid grid-cols-9 mt-4 ">
            //                       <div className="col-span-3 pl-2">
            //                         <hr className="bg-black opacity-100" />
            //                       </div>
            //                       <div className="col-span-3 text-center relative -top-2 pt-2">
            //                         <span className="detail-user text-black font-sans">
            //                           <ConvertMinsToTime data={item.eft} />
            //                         </span>
            //                         <br />
            //                       </div>
            //                       <div className="col-span-3 pr-2">
            //                         <hr className="bg-black opacity-100" />
            //                       </div>
            //                     </div>
            //                   </div>
            //                   <div className="text-right py-3 md:col-span-2 col-span-6">
            //                     <span className=" text-black font-bold">
            //                       {item.toDestination},{" "}
            //                       {AirPortData.filter(
            //                         (items) =>
            //                           items.airportCode == item.toAirport
            //                       ).map((items, i) => items.airportName)}
            //                     </span>
            //                     <br />
            //                     <span className=" text-black font-bold">
            //                       {moment(item.toDateTime).format(
            //                         "dddd, DD-MMMM-yyyy"
            //                       )}{" "}
            //                       <br />
            //                       {moment(item.toDateTime).format("LT")}
            //                     </span>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
            //           );
            //         })}
            //       </div>

            //       {data[0].bookingDetail.tripType === 2 ? (
            //         <>
            //           {data[0].currency !== "IN" ? (
            //             <div>
            //               <div>
            //                 <h1>Return</h1>
            //               </div>
            //               {data[0].SectorDetail.map((item, index) => {
            //                 return (
            //                   <div className="grid grid-cols-6 mt-2">
            //                     <div className="col-span-2">
            //                       <div className="grid grid-cols-3">
            //                         <div className="pt-2 pb-3">
            //                           <img
            //                             src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
            //                             className="w-6/12 down rounded-xl inline float-right"
            //                           />
            //                         </div>

            //                         <div className="pl-4 pt-3 col-span-2 ">
            //                           <span className="text-xl text-black font-sans font-bold">
            //                             {item.airlineName}
            //                           </span>
            //                           -
            //                           <span className="text-xs  text-black font-sans font-bold">
            //                             {" "}
            //                             {item.flightNo}
            //                           </span>
            //                         </div>
            //                       </div>
            //                     </div>
            //                     <div className="col-span-4 px-14">
            //                       <div className="grid grid-cols-4">
            //                         <div className="text-center py-3">
            //                           <span className="text-lg text-black font-bold">
            //                             <span>
            //                               {moment(item.fromDateTime).format(
            //                                 "dddd, DD-MMMM-yyyy"
            //                               )}{" "}
            //                             </span>
            //                             <br />
            //                           </span>
            //                           {/* <span className="text-lg text-black font-bold">
            //                             {convertFrom24To12Format(
            //                               item.toDateTime
            //                             )}{" "}
            //                           </span> */}
            //                           <br />
            //                           <span className="text-lg text-black font-bold">
            //                             {item.fromAirport}
            //                           </span>
            //                         </div>
            //                         <div className="col-span-2">
            //                           <div className="grid grid-cols-9 mt-3 ">
            //                             <div className="col-span-3 pl-2">
            //                               <hr className="bg-black opacity-100" />
            //                             </div>
            //                             <div className="col-span-3 text-center relative -top-2">
            //                               <span className="text-xs text-black font-sans">
            //                                 <ConvertMinsToTime
            //                                   data={item.eft}
            //                                 />
            //                               </span>
            //                               <br />
            //                             </div>
            //                             <div className="col-span-3 pr-2">
            //                               <hr className="bg-black opacity-100" />
            //                             </div>
            //                           </div>
            //                         </div>
            //                         <div className="text-center py-3">
            //                           <span className="text-lg text-black font-bold">
            //                             {moment(item.toDateTime).format(
            //                               "dddd , DD-MM-yyyy"
            //                             )}
            //                           </span>
            //                           <br />
            //                           {/* <span className="text-lg text-black font-bold">
            //                             {convertFrom24To12Format(
            //                               item.reachDate
            //                                 .split("T")[1]
            //                                 .substring(0, 5)
            //                             )}{" "}
            //                           </span> */}
            //                           <br />
            //                           <span className="text-lg text-black font-bold">
            //                             {item.toAirport}
            //                           </span>
            //                         </div>
            //                       </div>
            //                     </div>
            //                   </div>
            //                 );
            //               })}
            //             </div>
            //           ) : (
            //             <div>
            //               <div>
            //                 <h1>Return</h1>
            //               </div>
            //               {data[0].SectorDetail.map((item, index) => {
            //                 return (
            //                   <div className="grid grid-cols-6  mt-2  ">
            //                     <div className="col-span-2">
            //                       <div className="grid grid-cols-3">
            //                         <div className="pt-2 pb-3">
            //                           <img
            //                             src={`https://www.travomint.com/resources/images/airline-logo/${item.airline}.png`}
            //                             className="w-6/12 down rounded-xl inline float-right"
            //                           />
            //                         </div>

            //                         <div className="pl-4 pt-3 col-span-2 ">
            //                           <span className="text-xl text-black font-sans font-bold">
            //                             {item.airlineName}
            //                           </span>
            //                           -
            //                           <span className="text-xs  text-black font-sans font-bold">
            //                             {" "}
            //                             {item.flightNo}
            //                           </span>
            //                         </div>
            //                       </div>
            //                     </div>
            //                     <div className="col-span-4 px-14">
            //                       <div className="grid grid-cols-4">
            //                         <div className="text-center py-3">
            //                           {/* <span className="text-lg text-black font-bold">
            //                               {convertFrom24To12Format(
            //                                 item.depDate
            //                                   .split("T")[1]
            //                                   .substring(0, 5)
            //                               )}{" "}
            //                             </span> */}
            //                           <span className="text-lg text-black font-bold">
            //                             {moment(item.fromDateTime).format(
            //                               "dddd, DD-MMMM-yyyy"
            //                             )}{" "}
            //                           </span>
            //                           <span className="text-lg text-black font-bold">
            //                             {item.fromAirport}
            //                           </span>
            //                         </div>
            //                         <div className="col-span-2">
            //                           <div className="grid grid-cols-9 mt-3 ">
            //                             <div className="col-span-3 pl-2">
            //                               <hr className="bg-black opacity-100" />
            //                             </div>
            //                             <div className="col-span-3 text-center relative -top-2">
            //                               <span className="text-xs text-black font-sans">
            //                                 <ConvertMinsToTime
            //                                   data={item.eft}
            //                                 />
            //                               </span>
            //                               <br />
            //                             </div>
            //                             <div className="col-span-3 pr-2">
            //                               <hr className="bg-black opacity-100" />
            //                             </div>
            //                           </div>
            //                         </div>
            //                         <div className="text-center py-3">
            //                           <span className="text-lg text-black font-bold">
            //                             {moment(item.toDateTime).format(
            //                               "dddd, DD-MMMM-yyyy"
            //                             )}{" "}
            //                           </span>
            //                           <span className="text-lg text-black font-bold">
            //                             {item.toAirport}
            //                           </span>
            //                         </div>
            //                       </div>
            //                     </div>
            //                   </div>
            //                 );
            //               })}
            //             </div>
            //           )}
            //         </>
            //       ) : null}
            //     </div>

            //     {/*--------------------------------------------- flight details-------------------------------------- */}

            //     {/* -------------------------------------------user detail ---------------------------------*/}
            //     <div className="container-fluid px-0">
            //       <div className="row">
            //         <div className="col-12 text-center">
            //           {/* USER DETAIL */}
            //           <div className="container passengerDetails up">
            //             <div className="  w-full text-left mb-2  font-bold text-lg mdtext-xl text-black text-white">
            //               <i class="fas fa-user text-black "></i> &nbsp;
            //               Passenger Detail{" "}
            //             </div>
            //             <div>
            //               <Table>
            //                 <tr className="user-info-table-heading">
            //                   <th>First Name</th>
            //                   <th>Middle Name</th>
            //                   <th>Last Name</th>
            //                   <th>DOB</th>
            //                   <th>Gender</th>
            //                 </tr>

            //                 {data[0].PassengerDetails.map((items, i) => (
            //                   <tr>
            //                     <td className="font-bold detail-user p-1">
            //                       {items.paxFirstName}
            //                     </td>
            //                     <td className="font-bold detail-user p-1">
            //                       {items.paxMiddleName}
            //                     </td>
            //                     <td className="font-bold detail-user p-1">
            //                       {items.paxLastName}
            //                     </td>

            //                     <td className="font-bold detail-user p-1">
            //                       {moment(items.paxDob).format("MMMM Do YYYY")}
            //                     </td>
            //                     <td className="font-bold detail-user p-1">
            //                       {items.paxType == 1 ? "MALE" : "FEMALE"}
            //                     </td>
            //                   </tr>
            //                 ))}
            //               </Table>
            //             </div>
            //           </div>
            //         </div>
            //         <div className="col-12 text-center">
            //           {/* Price DETAIL */}

            //           <div className="container user-info-popup ups pt-2">
            //             {/* {status.data.paymentDetails != null ? */}
            //             <div>
            //               <div className="  w-full rounded-t-2xl text-left mb-2  font-bold text-xl text-black text-white ">
            //                 <i class="fas fa-rupee-sign  text-black  "></i>{" "}
            //                 Price Detail{" "}
            //               </div>
            //               <div className="row">
            //                 <table>
            //                   <tr className="user-info-table-heading">
            //                     <th className="detail-user1 p-1">
            //                       Total Adult Fare
            //                     </th>
            //                     <th className="detail-user1 p-1">
            //                       Total Child Tax
            //                     </th>
            //                     <th className="detail-user1 p-1">
            //                       Total Infant Tax
            //                     </th>
            //                     <th className="detail-user1 p-1">
            //                       Convenience Fees
            //                     </th>
            //                     <th className="detail-user1 p-1">
            //                       Total Price
            //                     </th>
            //                   </tr>
            //                   {data[0].FareDetail.map((item) => (
            //                     <tr>
            //                       <td>{item.adultFare}</td>
            //                       <td>
            //                         {item.childFare +
            //                           item.chidlTax +
            //                           item.childMarkup}
            //                       </td>
            //                       <td>
            //                         {item.infantFare +
            //                           item.infantFare +
            //                           item.infantMarkup}
            //                       </td>
            //                       <td>
            //                         {250 * data[0].bookingDetail.adult +
            //                           data[0].bookingDetail.child +
            //                           data[0].bookingDetail.infant}
            //                       </td>
            //                       <td>{item.grandTotal}</td>
            //                     </tr>
            //                   ))}

            //                   {/* <td>
            //                         <i class="fas fa-rupee-sign  text-black  "></i>  {status.data.supplierFlight.returnFlight==null?

            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length)
            //           :
            //           (
            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length) +
            //           (status.data.supplierFlight.returnFlight.fare.convenienceFees * status.data.passengerDetails.length))
            //           }
            //                       </td> */}

            //                   {/* <td className="text-2xl font-bold   p-2 text-black ">
            //                         <i class="fas fa-rupee-sign  text-black  "></i>{" "}
            //                         {status.data.supplierFlight.returnFlight==null?
            //           status.data.supplierFlight.onWordFlight.fare.baseFare + status.data.supplierFlight.onWordFlight.fare.totalMarkup  + status.data.supplierFlight.onWordFlight.fare.totalTax  + status.data.supplierFlight.onWordFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length)
            //           :
            //           (status.data.supplierFlight.onWordFlight.fare.baseFare + status.data.supplierFlight.onWordFlight.fare.totalMarkup + status.data.supplierFlight.onWordFlight.fare.totalTax + status.data.supplierFlight.onWordFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.onWordFlight.fare.convenienceFees * status.data.passengerDetails.length) +  status.data.supplierFlight.returnFlight.fare.baseFare +
            //           status.data.supplierFlight.returnFlight.fare.totalMarkup + status.data.supplierFlight.returnFlight.fare.totalTax + status.data.supplierFlight.returnFlight.fare.AdditionalTxnFeeOfrd +
            //           (status.data.supplierFlight.returnFlight.fare.convenienceFees * status.data.passengerDetails.length))
            //           }
            //                       </td> */}
            //                   {/* </tr> */}
            //                 </table>
            //               </div>
            //             </div>
            //             {/* : ""} */}
            //           </div>
            //         </div>
            //       </div>
            //     </div>

            //     <div className="container itenary">
            //       <div className="row py-4">
            //         <div className="col-md-12">
            //           <h3 className="text-primary text-lg font-bold">
            //             e - Ticket Status
            //           </h3>

            //           {/* {status.data.paymentStatus == "PENDING" ? <p className="text-black text-sm">Your payment is failed from bank, Please contact your bank. your booking is pending until payment is not clear from the bank.</p> : ""}
            //         {status.data.paymentStatus =="SUCCESS"?<p className="text-black text-sm">Your e-Ticket will be emailed shortly, once your ticket is confirmed.</p>:""} */}
            //         </div>
            //       </div>
            //     </div>

            //     {/* -------------------------------------------------itenery------------------------------------------------- */}
            //     {/* <div className="container itenary">
            //   <div className="row ">
            //     <h3 className="text-primary text-lg font-bold">Itinery Details -</h3>
            //     <p className="text-black text-sm">Your Booking is { status.data.bookingStatus} but the payment has failed from the bank, Kindly contact your bank. Your booking is pending please ensure that the payment will be made shortly after. Your booking reference number is</p>
            //   </div>
            // </div> */}
            //     {/* -------------------------------------------------itenery------------------------------------------------- */}
            //     {/* <Terms /> */}
            //   </div>
            //   <Footer />
            // </div>

      ) : (
        <div>check</div>
      )}

    </>
