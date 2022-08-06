import moment from "moment";
import React, { useEffect } from "react";
import AirPortData from "../Sample_Data/AirPortData.json";
import { authCode, domain, staging } from "../static/static";
const MailTesting = ({ data, bookingidNo }) => {
  console.log("data:", data);

  const e_mailInfo = data[0].bookingDetail.emailId;
  const phoneNoInfo = data[0].bookingDetail.phoneNo;
  const tripType = data[0].bookingDetail.tripType;
  const totleTravler =
    data[0].bookingDetail.adult +
    data[0].bookingDetail.child +
    data[0].bookingDetail.infant;
  const bookingid = bookingidNo;
  const pnr = data[0].bookingDetail.pnrConfirmation;
  const items = data[0].FareDetail.map((items) => items);

  const AdultFare = (items[0].adultFare * data[0].bookingDetail.adult).toFixed(
    2,
    0
  );
  const convenienceFees = (250 * totleTravler).toFixed(2, 0);
  const adulttax = (
    items[0].adultTax +
    items[0].adultMarkup * data[0].bookingDetail.adult
  ).toFixed(2, 0);
  const childFare = (items[0].childFare * data[0].bookingDetail.child).toFixed(
    2,
    0
  );
  const childtax = (
    items[0].childTax *
    items[0].childMarkup *
    data[0].bookingDetail.child
  ).toFixed(2, 0);
  const infantFare = (
    items[0].infantFare * data[0].bookingDetail.infants
  ).toFixed(2, 0);
  const infanttax = (
    items[0].infantTax +
    items[0].infantMarkup * data[0].bookingDetail.infants
  ).toFixed(2, 0);
  const totles = items[0].grandTotal;
  const roundAdultFare =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (items[0].adultFare * data[0].bookingDetail.adult).toFixed(2, 0)
      : null;
  const roundconvenienceFees =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (250 * totleTravler).toFixed(2, 0)
      : null;

  const roundadulttax =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (
          items[0].adultTax +
          items[0].adultMarkup * data[0].bookingDetail.adult
        ).toFixed(2, 0)
      : null;
  const roundchildFare =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (items[0].childFare * data[0].bookingDetail.child).toFixed(2, 0)
      : null;
  const roundchildtax =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (
          items[0].childTax +
          items[0].childMarkup * data[0].bookingDetail.child
        ).toFixed(2, 0)
      : null;
  const roundinfantFare =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (items[0].infantFare * data[0].bookingDetail.infant).toFixed(2, 0)
      : null;

  const roundinfanttax =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? (
          items[0].infantTax +
          items[0].infantMarkup * data[0].bookingDetail.infant
        ).toFixed(2, 0)
      : null;
  const roundtotles =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? items[0].grandTotal
      : null;

  const currency_formet = data[0].currency;

  const flightDetails = data[0].SectorDetail.map((item) => {
    return `<table width='100%' border='0' cellpadding='0' cellspacing='0' style='margin:0 auto;background-color:#fff;font-family:Tahoma,Geneva,sans-serif;margin-top:12px'><tbody><tr style='width:inherit;max-width:600px;font-family:Calibri;font-size:40px;background:#ececec'><td width='6%'><img src='https://www.travomint.com/resources/images/airline-logo/${
      item.airline
    }.png' style='height:100px;width:100px' alt='airline logo' className='m_CToWUd'></td><td width='21%'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr style='font-size:12px;color:#8a8d8e'><td align='center' style='padding-bottom:2%'><span></span></td></tr><tr style='font-size:12px;color:#8a8d8e'><td align='center'><span>${
      item.flightNo
    }</span></td></tr><tr style='font-size:12px;color:#8a8d8e'><td align='center'><span>${
      item.cabinclass === "1"
        ? "Economy"
        : item.cabinclass === "2"
        ? "Premium Economy"
        : item.cabinclass === "3"
        ? "Business"
        : item.cabinclass === "4"
        ? "First"
        : null
    }</span></td></tr></tbody></table></td><td width='23%'><table width='94%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='color:#1f91cd;font-weight:bold'><span>${AirPortData.filter(
      (items) => items.airportCode === item.fromDestination
    ).map((airline) => airline.airportName)} ${
      item.fromDestination
    }</span></span><span><span><span><span> </span></span></span></span></td></tr><tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='font-size:11px;font-weight:bold'><span><span><span>${moment(
      item.fromDateTime
    ).format(
      "dddd , DD/mm/yyyy hh:mm a"
    )}</span></span></span></span></td></tr><tr style='font-size:12px;color:#000;font-family:arial;padding-bottom:1%'><td><span><span>${
      item.airportTerminalFrom === null ? null : item.airportTerminalFrom
    }</span></span></td></tr><tr style='font-size:12px;color:#000'><td align='left'><span></span></td></tr></tbody></table></td><td width='23%'><table width='71%' border='0' cellspacing='0' cellpadding='0' style='font-size:11px'><tbody> <tr><td align='center'> </td></tr><tr><td align='center'> </td></tr><tr><td align='center'><span><span></span></span></td></tr></tbody></table></td><td width='27%'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='color:#1f91cd;font-weight:bold'><span>
      ${AirPortData.filter(
        (items) => items.airportCode === item.toDestination
      ).map((airline) => airline.airportName)} ${
      item.toDestination
    }</span></span><span><span><span><span> </span></span></span></span></td></tr><tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='font-size:11px;font-weight:bold'><span><span><span>${moment(
      item.toDateTime
    ).format(
      "dddd , DD/mm/yyyy , hh:mm a"
    )}  </span></span></span></span></td></tr><tr style='font-size:12px;color:#000;font-family:arial'><td align='left'><span><span> </span></span></td></tr><tr style='font-size:12px;color:#000'><td align='left'><span></span></td></tr></tbody></table></td></tr></tbody></table>`;
  });
  const inflightDetails =
    data[0].bookingDetail.tripType === 2 ||
    (data[0].bookingDetail.tripType === "2" && data[0].currency === "INR")
      ? data[0].SectorDetail.map((item) => {
          return `<table width='100%' border='0' cellpadding='0' cellspacing='0' style='margin:0 auto;background-color:#fff;font-family:Tahoma,Geneva,sans-serif;margin-top:12px'><tbody><tr style='height:45px'><td width='100%' colspan='4' height='15'> <strong style='color:#1f91cd;font-size:15px'>Return:<span></span> <span></span></strong> </td></tr></tbody></table><table width='100%' border='0' cellpadding='0' cellspacing='0' style='margin:0 auto;background-color:#fff;font-family:Tahoma,Geneva,sans-serif;margin-top:12px'><tbody><tr style='width:inherit;max-width:600px;font-family:Calibri;font-size:40px;background:#ececec'><td width='6%'><img src='https://ci3.googleusercontent.com/proxy/B53c3l6Amp4m4je6kPJ-MrKiQVwmQkFYV9yK0UmxdO92hfOKPO78eXF3oDc7xY6PAw0iS5xClBIT0jWJkg7JoYN_CSh7eIBbbBcWqW1WMTe_=s0-d-e1-ft#https://www.travomint.com/resources/images/airline-logo/${
            item.airline
          }.png' style='height:100px;width:100px' alt='airline logo' className='m_CToWUd'></td><td width='21%'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr style='font-size:12px;color:#8a8d8e'><td align='center' style='padding-bottom:2%'><span>${
            item.airlineName
          }</span></td></tr><tr style='font-size:12px;color:#8a8d8e'><td align='center'><span>${
            item.flightNo
          }</span></td></tr><tr style='font-size:12px;color:#8a8d8e'><td align='center'><span>${
            item.cabinclass === 1
              ? "Economy"
              : item.cabinclass === 2
              ? "Premium Economy"
              : item.cabinclass === 3
              ? "Business"
              : item.cabinclass === 4
              ? "First"
              : null
          }</span></td></tr></tbody></table></td><td width='23%'><table width='94%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='color:#1f91cd;font-weight:bold'><span>${AirPortData.filter(
            (items) => items.airportCode === item.fromDestination
          ).map((airline) => airline.airportName)} ${
            item.fromDestination
          }</span></span><span><span><span><span> </span></span></span></span></td></tr><tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='font-size:11px;font-weight:bold'><span><span><span>${
            item.fromDateTime
          } </span></span></span></span></td></tr><tr style='font-size:12px;color:#000;font-family:arial;padding-bottom:1%'><td><span><span></span></span></td></tr><tr style='font-size:12px;color:#000'><td align='left'><span></span></td></tr></tbody></table></td><td width='23%'><table width='71%' border='0' cellspacing='0' cellpadding='0' style='font-size:11px'><tbody> <tr><td align='center'> </td></tr><tr><td align='center'> </td></tr><tr><td align='center'><span><span></span></span></td></tr></tbody></table></td><td width='27%'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tbody> <tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='color:#1f91cd;font-weight:bold'><span>
      ${AirPortData.filter(
        (items) => items.airportCode === item.toDestination
      ).map((airline) => airline.airportName)} ${
            item.toDestination
          }</span></span><span><span><span><span> </span></span></span></span></td></tr><tr><td style='font-size:15px;color:#000;padding-bottom:2%'><span style='font-size:11px;font-weight:bold'><span><span><span>${moment(
            item.toDateTime
          ).format(
            "dddd , DD/mm/yyyy , hh:mm a"
          )} </span></span></span></span></td></tr><tr style='font-size:12px;color:#000;font-family:arial'><td align='left'><span><span> </span></span></td></tr><tr style='font-size:12px;color:#000'><td align='left'><span></span></td></tr></tbody></table></td></tr></tbody></table>`;
        })
      : null;

  const PassengerDetails = data[0].PassengerDetails.map((item) => {
    return `<tr style='padding-bottom:2%'><td><span></span><span>${
      item.paxFirstName
    } ${item.paxMiddleName} ${item.paxLastName}
    </span></td><td align='center' valign='middle'>
    <span>${moment(item.paxDob).format("dddd , DD/MM/YYYY ")}
    
    </span>
    </td><td align='center' valign='middle'>
    <span>${
      item.paxType === 1 ? "Male" : "Female"
    }</span></td><td align='left' colspan='2' valign='middle'><span>NA</span></td></tr>`;
  });
  const FareDetails = `<table width="100%"><tbody><tr><td><table width='99.5%' border='0' style='font-family:Arial,Helvetica,sans-serif;font-size:14px;padding:0;border-spacing:0;margin:1% auto 0'><tbody><tr><td width='100%' colspan='2'>
    <strong style='color:#1f91cd;font-size:15px'>Fares Details (${currency_formet})- </strong> </td></tr><tr> <td height='5'> </td></tr><tr><td style='padding:3px' align='left' valign='middle'>
      Adult ${data[0].bookingDetail.adult} X ${currency_formet} ${
    items[0].adultFare
  }</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${AdultFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${adulttax} </td></tr>

      ${
        data[0].bookingDetail.child !== 0
          ? `</tr><tr> <td height='5'> </td></tr><tr><td style='padding:3px' align='left' valign='middle'>
      Child ${data[0].bookingDetail.child} X ${currency_formet} ${items[0].childFare}</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${childFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${childtax}</td></tr>`
          : ""
      }
      
          ${
            data[0].bookingDetail.infant !== 0
              ? `</tr><tr> <td height='5'> </td></tr><tr><td style='padding:3px' align='left' valign='middle'>
      Infant ${data[0].bookingDetail.infant} X ${currency_formet} ${items[0].infantFare}</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${infantFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${infanttax}</td></tr>`
              : ""
          }
      <tr><td style='padding:3px' align='left' valign='middle'>Convenience Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet}${convenienceFees}</td></tr>
      <tr style='background:#ececec;font-size:16px;margin-top:41px;padding:20 20 20 20'><td style='padding:10px 0 10px 5px' align='left' valign='middle'>
      <strong>Total Trip Cost</strong></td><td style='padding:3px' align='right' valign='middle'>
      <strong>
      ${currency_formet}${totles} </strong></td></tr></tbody></table>
      <table width='100%' border='0' rules='all' cellspacing='0' cellpadding='0' style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:12px'>
       <tbody> <tr><td width='100%' align='left' style='font-family:Arial,Helvetica,sans-serif;color:#9b9b9b;font-size:11px'>*All fares are quoted in INR and inclusive of base fare, taxes and all fees. Additional <a href='https://www.google.com/url?q=https://www.travomint.com/baggage-info?airlines%3DG8&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw1zOfIQnUzncCHW-FgSqvcu' style='text-decoration:underline'
          rel=' noopener noreferrer noreferrer' target='_blank'>baggage fees</a> may apply as per the airline policies.
            </td></tr></tbody> </table>`;

  const RoundFareDeatils =
    data[0].bookingDetail.tripType === 2 ||
    data[0].bookingDetail.tripType === "2"
      ? `<table width="100%"><tbody><tr><td><table width='99.5%' border='0' style='font-family:Arial,Helvetica,sans-serif;font-size:14px;padding:0;border-spacing:0;margin:1% auto 0'><tbody><tr><td width='100%' colspan='2'>
    <strong style='color:#1f91cd;font-size:15px'>Fares Details (${currency_formet})- </strong> </td></tr><tr> <td height='5'> </td></tr><tr><td colspan="2" style='padding:3px' align='left' valign='middle'>
      Adult ${data[0].bookingDetail.adult} X ${currency_formet} ${
          items[0].adultFare
        }</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${roundAdultFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${roundadulttax}</td></tr>
      ${
        data[0].bookingDetail.child !== 0 &&
        `</tr><tr> <td height='5'> </td></tr><tr><td style='padding:3px' align='left' valign='middle'>
      Child ${data[0].bookingDetail.child} X ${currency_formet} ${items[0].childFare}</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${roundchildFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${roundchildtax}</td></tr>`
      }
          ${
            data[0].bookingDetail.infant !== 0 &&
            `</tr><tr> <td height='5'> </td></tr><tr><td style='padding:3px' align='left' valign='middle'>
      Infant ${data[0].bookingDetail.infant} X ${currency_formet} ${items[0].infantFare}</td>
      <td style='padding:3px' align='right' valign='middle'> ${currency_formet} ${roundinfantFare}</td>
      </tr><tr><td style='padding:3px' align='left' valign='middle'>Taxes &amp; Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet} ${roundinfanttax}</td></tr>`
          }
  <tr><td style='padding:3px' align='left' valign='middle'>Convenience Fees</td>
      <td style='padding:3px' align='right' valign='middle'>${currency_formet}${roundconvenienceFees}</td></tr>
      <tr style='background:#ececec;font-size:16px;margin-top:41px;padding:20 20 20 20'><td style='padding:10px 0 10px 5px' align='left' valign='middle'>
      <strong>Total Trip Cost</strong></td><td style='padding:3px' align='right' valign='middle'>
      <strong>
      ${currency_formet}${roundtotles} </strong></td></tr></tbody></table>
      <table width='100%' border='0' rules='all' cellspacing='0' cellpadding='0' style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:12px'>
       <tbody> <tr><td width='100%' align='left' style='font-family:Arial,Helvetica,sans-serif;color:#9b9b9b;font-size:11px'>*All fares are quoted in INR and inclusive of base fare, taxes and all fees. Additional <a href='https://www.google.com/url?q=https://www.travomint.com/baggage-info?airlines%3DG8&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw1zOfIQnUzncCHW-FgSqvcu' style='text-decoration:underline'
          rel=' noopener noreferrer noreferrer' target='_blank'>baggage fees</a> may apply as per the airline policies.
            </td></tr></tbody> </table>`
      : null;
  const failbookingContent = `Your booking is not confirmed due to payment failure.Our customer service will inform you about the status.Please do not re-book the booking until our customer service team would not informed you about current status. If in doubt, please contact our help desk at +91-8010000200. Your payment is failed from bank, Please contact your bank. your booking is pending until payment is not clear from the bank,<br>please get in touch with us on 91-8010000200. <br>Your booking reference number is  `;
  const successbookingContent = `Your booking is confirmed and ticket is under process.Our customer service will inform you about the status. The airline did not give a clear indication of the status of this booking. If the booking succeeded, you will receive an email confirmation from them shortly.Please do not re-book the booking until our customer service team would not informed you about current status. If in doubt, please contact our help desk at +91-8010000200. <br>Your booking reference number is `;

  const content =
    data[0].bookingDetail.bookingStatus !== "TKTED"
      ? failbookingContent
      : successbookingContent;
  // setTimeout(() => {
  //   MailTrigger();
  // }, 4000);
  const delay = 5;
  useEffect(
    () => {
      let timer1 = setTimeout(() => MailTrigger(), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [data]
  );

  const MailTrigger = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      FromEmail: "booking@travomint.com",
      ToEmail: e_mailInfo,
      CcEmail: "cs@travomint.com",
      BccEmail: "",
      MailSubject: "Travomint Booking Email",
      MailBody: `<html>

<head>
    <META https-equiv='Content-Type' content='text/html; charset=utf-8'>
    <style></style>
</head>

<body>
    <div className='gmail_quote' style='width:850px;margin:auto;border:8px solid #e5e5e5;padding:20px'>
        <table width='100%' border='0' cellpadding='0' style='font-family:Arial,Helvetica,sans-serif' cellspacing='0'>
            <tbody>
                <tr>
                    <td width='20%'><img src='https://www.travomint.com/resources/images/logo.png' alt='logo'
                            width='200' className='m_CToWUd'></td>
                    <td width='40%' style='text-align:right;font-weight:bold'>Customer Service Number : 91-8010000200
                    </td>
                    <td width='428'>
                        <table width='100%' border='0' cellpadding='0' cellspacing='0'>
                            <tbody>
                                <tr>
                                    <td width='90%' style='text-align:right'> <img
                                            src='https://www.travomint.com/resources/images/pending.png'
                                            alt='Pending Booking' style='width:100px' className='m_CToWUd'> </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' cellpadding='0' cellspacing='0'
            style='border-bottom:1px solid #e5e5e5;background:#ececec;margin:15 0 0 0'>
            <tbody>
                <tr>
                    <td align='center' style='padding:2% 0%'> <span
                            style='font-size:18px;font-family:Tahoma,Geneva,sans-serif;padding:0% 0% 4% 0%'>${content}</span>
                    </td>
                </tr>
                <tr>
                    <td align='center'
                        style='font-size:34px;font-family:Tahoma,Geneva,sans-serif;padding:0% 0% 10px 0%'> <span
                            style='color:#1f91cd'>${bookingid}</span></td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' cellpadding='0' cellspacing='0'
            style='border:1px solid #e5e5e5;margin:15 0 0 0;background:#ececec'>
            <tbody>
                <tr>
                    <td align='center' style='padding:2% 0%'><span
                            style='font-size:20px;font-weight:bold;font-family:Tahoma,Geneva,sans-serif;padding:0% 0% 4% 0%'>PNR
                            NUMBER</span></td>
                    <td align='center' style='padding:2% 0%'><span
                            style='color:#1f91cd;font-size:25px;font-weight:bold;font-family:Tahoma,Geneva,sans-serif;padding:0% 0% 4% 0%'>${pnr}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' cellpadding='0' cellspacing='0'
            style='margin:0 auto;background-color:#fff;font-family:Tahoma,Geneva,sans-serif;margin-top:12px'>
            <tbody>
                <tr style='height:45px'>
                    <td width='100%' colspan='4' height='15'> <strong style='color:#1f91cd;font-size:15px'>Itinerary
                            Details - <span></span> <span></span></strong> </td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' cellpadding='0' cellspacing='0'
            style='margin:0 auto;background-color:#fff;font-family:Tahoma,Geneva,sans-serif;margin-top:12px'>
            <tbody>
                <tr style='height:45px'>
                    <td width='100%' colspan='4' height='15'> <strong
                            style='color:#1f91cd;font-size:15px'>Depart:<span></span> <span></span></strong> </td>
                </tr>
            </tbody>
        </table>
         ${flightDetails} 
        <table width='100%' border='0' cellpadding='0' cellspacing='0'
            style='margin:0 auto;background-color:#fff;border-bottom:1px solid gainsboro;font-size:11px;font-family:tahoma'>
            <tbody>
                <tr>
                    <td> </td>
                </tr>
                <tr>
                    <td style='border-bottom:1px solid #e5e5e5'> </td>
                </tr>
                <tr>
                    <td> </td>
                </tr>
                <tr>
                    <td>
                        <table width='100%' border='0' style='font-size:15px'>
                            <tbody>
                                <tr>
                                    <td width='100%'> <strong style='color:#1f91cd;font-size:15px'>Passengers Details-
                                        </strong></td>
                                </tr>
                                <tr>
                                    <td height='5'></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width='100%' border='0' cellpadding='5' cellspacing='0'
                                            style='font-size:14px;margin-top:5px'>
                                            <tbody>
                                                <tr>
                                                    <td bgcolor='#f15b2f'><strong>Passenger Name</strong></td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f'><strong>Date of
                                                            Birth</strong></td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f'>
                                                        <strong>Gender</strong>
                                                    </td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f' colspan='2'>
                                                        <strong>Seat Preference</strong>
                                                    </td>
                                                </tr>
                                                ${PassengerDetails}
                                               
                                            </tbody>
                                        </table>
                                        <table width='100%' border='0' cellpadding='5' cellspacing='0'
                                            style='font-size:14px;margin-top:20px'>
                                            <tbody>
                                                <tr>
                                                    <td bgcolor='#f15b2f' colspan='5'><strong>USER INFORMATION</strong>
                                                    </td>
                                                </tr>
                                                <tr style='padding-bottom:2%'>
                                                    <td style='width:8%'><span>Email:</span></td>
                                                    <td align='center' colspan='2' valign='middle'
                                                        style='text-align:left'><span><a href='mailto:${e_mailInfo}'
                                                                target='_blank'
                                                                rel='noreferrer'>${e_mailInfo}</a></span></td>
                                                    <td align='center' valign='middle'>Contact Number:</td>
                                                    <td align='' valign=''><span>${phoneNoInfo}</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table width='100%' border='0' cellpadding='5' cellspacing='0'
                                            style='margin:25px 0 10px 0'>
                                            <tbody>
                                                <tr>
                                                    <td style='padding:0'><strong
                                                            style='color:#1f91cd;font-size:15px'>Billing Address
                                                            Detail-</strong></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table width='100%' border='0' cellpadding='5' cellspacing='0'
                                            style='font-size:14px;margin-top:5px'>
                                            <tbody>
                                                <tr>
                                                    <td bgcolor='#f15b2f'><strong>Upi Holder Name</strong></td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f'>
                                                        <strong>Address</strong>
                                                    </td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f'>
                                                        <strong>Transaction Id</strong>
                                                    </td>
                                                    <td align='center' valign='middle' bgcolor='#f15b2f'>
                                                        <strong>Amount</strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style='height:7px'></td>
                </tr>
            </tbody>
        </table>
        ${tripType === 2 ? RoundFareDeatils : FareDetails}
        <table width='100%' border='0' cellspacing='0' cellpadding='0'
            style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:12px;margin:35 0 0 0'>
            <tbody>
                <tr>
                    <td style='text-align:center;color:#666;font-size:16px'>Flight Booking Terms &amp; Conditions </td>
                </tr>
                <tr>
                    <td height='10'></td>
                </tr>
                <tr>
                    <td height='10'></td>
                </tr>
                <tr>
                    <td style='font-size:12px;color:#969696;text-align:justify;line-height:1.5em'>
                        * This is a booking acknowledgment and not the e ticket. The tickets will be issued shortly and
                        sent to you on a separate email. Please contact us if you do not receive your e tickets within
                        24 hours.<br>* The passengers assume all responsibilities of procuring travel related documents
                        including passport (minimum 6 months validity from trip completion), VISAs, medical documents,
                        etc.<br>* Name changes are not permitted once the booking is confirmed. Minor corrections to the
                        spellings may be allowed in some exceptional cases and such corrections will incur a
                        penalty.<br>* Prices do not include any additional fees charged by the airlines for services
                        like baggage, seats, etc.<br>* Fares are not guaranteed until ticketed. Fares are subject to
                        change as per seat or class availability.<br>* The tickets are non-refundable and
                        non-transferable/ endorsable.<br>* Changes to the itinerary are subject to airline fare rules.
                        <br>* Convenience Fee is non-refundable. <br>* The flights must be used in the booked sequence.
                        If any flight is unused/missed, all the subsequent flights will be cancelled and the amount paid
                        towards such ticket(s) will be forfeited.<br>* Web Check-in is Mandatory (opens 48 hrs. before
                        departure): - Use PNR and last name only.<br>
                        <p style='color:#2127b3'> * We recommend to use the traveler&#39;s credit card, or else the
                            booking will be considered a third party booking and in such cases the credit card will not
                            be charged until the verification process is completed and you may receive a call to
                            complete the same.</p>
                        <br><br>
                    </td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' rules='all' cellspacing='0' cellpadding='0'
            style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:12px'>
            <tbody>
                <tr>
                    <td align='center' style='padding:20px 0px'><span><b>Data Protection Notice</b></span></td>
                </tr>
                <tr>
                    <td align='center' style='padding-bottom:20px'>Your personal data will be processed in accordance
                        with the applicable carriers privacy policy and if your booking is made via a reservation system
                        provider (&#39;GDS&#39;), with its privacy policy. These are available at <a
                            href='https://www.google.com/url?q=https://www.iatatravelcenter.com/privacy&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw21JYPFoRfsf4KksZmroRHR'
                            rel=' noopener noreferrer noreferrer'
                            target='_blank'>https://www.iatatravelcenter.co<wbr>m/privacy</a> or from the carrier or GDS
                        directly. You should read this documentation, which applies to your booking and specifies, for
                        example, how your personal data iscollected, stored, used, disclosed and transferred</td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' rules='all' cellspacing='0' cellpadding='0'
            style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:10px'>
            <tbody>
                <tr>
                    <td align='center' style='padding-bottom:20px'>Your booking is processed through a secure https
                        internet connection based on secure socket layer technology. <br>For security purpose, Your IP
                        address 182.73.233.254 and secure time Jun 04 12:35:43 UTC 2022 have been logged.</td>
                </tr>
            </tbody>
        </table>
        <table width='100%' style='margin-top:20px'>
            <tbody>
                <tr>
                    <td align='center' style='padding:20px 0px'><span><b>Thank you for choosing</b><br><a
                                href='https://www.google.com/url?q=https://www.travomint.com&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw0mIZy6rKkntiJWEWSprg5F'
                                rel=' noopener noreferrer noreferrer' target='_blank'> <img
                                    src='https://ci6.googleusercontent.com/proxy/kMZJtpI3XPDx3YqJKYXGz2Af60PALukQrNldvjEhRpE1BLJpTxtbsy3GEhbTuRYINfJjmVEfDMvYc5A7I6vvTBGbwJjS4g=s0-d-e1-ft#https://www.travomint.com/resources/images/logo.png'
                                    alt='logo' width='200' className='m_CToWUd'></a></span> </td>
                </tr>
                <tr>
                    <td align='center' style='padding-bottom:20px'>
                        <span>
                            <a href='https://www.google.com/url?q=https://www.travomint.com/terms&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw2KKaVzDj8FCsVNEw56AYxp'
                                rel=' noopener noreferrer noreferrer' target='_blank'>Terms and Conditions</a> <a
                                href='https://www.google.com/url?q=https://www.travomint.com/privacy&amp;source=gmail-html&amp;ust=1654434969150000&amp;usg=AOvVaw2WQbOtbD0WDDU8LbzcdMi-'
                                rel=' noopener noreferrer noreferrer' target='_blank'>Privacy Policy</a>
                            <p style='margin:0em'>Copyright Ⓒ 2018 Travomint. All Rights Reserved.</p>
                            <p style='margin-top:0em'>For Assistance, Please Contact Travomint <br>Via telephone :
                                91-8010000200 <br>or Via E-Mail : <a href='mailto:cs@travomint.com' target='_blank'
                                    rel='noreferrer'>cs@travomint.com</a> 24x7.</p>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style='text-align:center'>
                        <img src='https://ci3.googleusercontent.com/proxy/J14L1RcmwzGY9DbWLtn5x-mED6giIAikCgsDO4fAoAncnPUxPCYog3yE8PDAUS5H1M518euVTbQnoJSDdZ1_lMK8D8pRAg=s0-d-e1-ft#https://www.travomint.com/resources/images/Mail2.jpg'
                            style='max-width:100%;height:auto' className='m_CToWUd m_a6T'>
                        <div className='m_a6S' dir='ltr' style='opacity:0.01'>
                            <div id='m_:ph' className='m_T-I m_J-J5-Ji m_aQv m_T-I-ax7 m_L3 m_a5q' title='Download'
                                role='button' aria-label='Download attachment '>
                                <div className='m_akn'>
                                    <div className='m_aSK m_J-J5-Ji m_aYr'></div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <table width='100%' border='0' rules='all' cellspacing='0' cellpadding='0'
            style='font-family:Arial,Helvetica,sans-serif;margin:1% auto;font-size:12px'>
            <tbody>
                <tr>
                    <td align='left'>12-mom</td>
                    <td align='right'>120</td>
                </tr>
            </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
    </div>
</body>

</html>`,
      BookingID: data[0].bookingDetail.bookingId,
      MailType: "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      `${staging}/SMTP/SendEMailVersion2?authcode=${authCode}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("result"))
      .catch((error) => console.log("error"));
  };
};

export default MailTesting;
