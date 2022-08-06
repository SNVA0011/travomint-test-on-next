import React, { useEffect, useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Router, { useRouter } from "next/router";
import { testapi } from "../../static/static";

// import "react-toastify/dist/ReactToastify.css";
// import ToastMessage from "../../Feature/Toast";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CardForm = ({
  crmData,
  IntCreateBooking,
  CreateBooking,
  data,
  currencySign,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const navigate = useRouter();

  const notify = () => toast("Wow so easy!");
  var orderData = {
    items: [
      {
        id: `${crmData.bookingID}`,
        amount: `${crmData.flightResut.outFare.grandTotal}`,
      },
    ],

    currency: `${currencySign}`,
    name: `${
      crmData.passengerDetails[0].firstName +
      crmData.passengerDetails[0].middleName +
      crmData.passengerDetails[0].lastName
    }`,
    phone: `${crmData.passengerDetails[0].phone}`,
    email: `${crmData.passengerDetails[0].email}`,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Pass the appearance object to the Elements instance

    const cardElement = await elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      error.message ===
      "Your card was declined. Your request was in live mode, but used a known test card."
        ? alert("Your card is invalid")
        : " ";
    } else {
      orderData.paymentMethodId = paymentMethod.id;

      fetch("https://www.travomint.com/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "application/json",
        },
        body: JSON.stringify(orderData),
      })
        .then(function (result) {
          return result.json();
        })
        .then(function (response1) {
          var response = JSON.parse(response1);
          if (response.error) {
            showError(response.error);
          } else if (response.requiresAction) {
            // Request authentication
            handleAction(response.clientSecret);
          } else {
            orderComplete(response.clientSecret);
          }
        });
      console.log("[PaymentMethod]");
    }
    function handleAction(clientSecret) {
      stripe.handleCardAction(clientSecret).then(function (data) {
        if (data.error) {
          showError("Your card was not authenticated, please try again");
        } else if (data.paymentIntent.status === "requires_confirmation") {
          fetch("https://www.travomint.com/pay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentIntentId: data.paymentIntent.id,
            }),
          })
            .then(function (result) {
              return result.json();
            })
            .then(function (json1) {
              var json = JSON.parse(json1);

              if (json.error) {
                showError(json.error, json);
              } else {
                orderComplete(clientSecret);
              }
            });
        }
      });
    }

    var orderComplete = function (clientSecret) {
      stripe.retrievePaymentIntent(clientSecret).then(function (result) {
        var paymentIntent = result.paymentIntent;
        var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);
        var JsonOutput = JSON.parse(paymentIntentJson);
        alert(paymentIntentJson);
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: `{"bookingId":${crmData.bookingID},"response":"","resType":"","trackingId":"","status":"Success","paymentMode":"Stripe","cardName":"","amount":${crmData.flightResut.outFare.grandTotal},"serviceCharge":""}`,
        };

        fetch(
          `${testapi}/savePaymentstatusV2?authcode=Trav3103s987876`,
          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
        navigate.push(`/flight/ticketconfirmation/${crmData.bookingID}`);
      });
    };
    var showError = function (errorMsgText, json) {
      var answer = window.confirm(
        "The payment was failed, Do you want to retry ?"
      );
      if (answer) {
        alert("Please fill in card details again !" + errorMsgText);
      } else {
        // $("#paymentStripeIdReference").val("No-Payment-Transaction");
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: `{"bookingId":${crmData.bookingID},"response":"","resType":"","trackingId":"","status":"Sussess","paymentMode":"Stripe","cardName":"","amount":${crmData.flightResut.outFare.grandTotal},"serviceCharge":""}`,
        };

        fetch(
          `${testapi}/savePaymentstatusV2?authcode=Trav3103s987876`,

          options
        )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
        navigate.push(`/flight/ticketconfirmation/${crmData.bookingID}`);
      }
      //alert("Error", errorMsgText);

      //   var errorMsg = document.querySelector(".sr-field-error");
      //   errorMsg.textContent = errorMsgText;
      //   setTimeout(function() {
      //     errorMsg.textContent = "";
      //   }, 4000);
    };
  };

  return (
    <div className="stripe_paymet_method d-flex align-items-center justify-content-center ">
      <form
        className="d-flex align-items-center justify-content-center"
        onSubmit={handleSubmit}
      >
        <label>
          Card details
          <CardElement
            onReady={() => {
              console.log("CardElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardElement [change]");
            }}
            onBlur={() => {
              console.log("CardElement [blur]");
            }}
            onFocus={() => {
              console.log("CardElement [focus]");
            }}
          />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CardForm;
