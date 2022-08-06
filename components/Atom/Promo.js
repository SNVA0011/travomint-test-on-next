import React, { useState, useRef } from "react";
import Graterates from "./Graterates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { authCode, staging } from "../static/static";
import Link from "next/link";

const Promo = () => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const inputEl = useRef(null);
  const [Copied, setCopied] = useState(false);
  const [promo, setPromo] = useState(true);
  function GetPromo() {
    setPromo(false);
  }

  const [copytext, setcopytext] = useState("Copy");
  const [select, setSelect] = useState(false);
  const [email, setEmail] = useState("");

  function Copy() {
    setcopytext("Copied");
    navigator.clipboard.writeText("TRAVOMINT1600");
    setSelect(true);
    inputEl.current.select();
  }

  const onSubmit = (event) => {
    event.preventDefault();

    GetPromo();
  };

  const GetfareAlert = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fareAlertId: "",
      depCity: "New Delhi (DEL)",
      arrCity: "Goa Internations GOI",
      depDate: "",
      retDate: "",
      currencyType: "INR",
      totalAmount: "",
      quoteAmount: "",
      emailId: "developer@travomint.com",
      phoneNum: "NA",
      agentId: "Online",
      siteId: "6",
      custName: "developer",
      fareStatus: "Yes",
      fareRemark: "I am not intrested to buy this ticket at this cost.",
      modifiedDate: "",
      noOfSend: 1,
      prodType: "Flights",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${staging}/fare-alert/addFareAlertNew?authcode=${authCode}`,
      requestOptions
    ).then((response) => response.text());
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  };

  // function GetfareAlertcheck(){
  //   alert("message")
  // }

  return (
    <div className="promo-saveupto">
      <Container>
        <div className="row">
          <div className="col-xl-6 col-12">
            <div className="promo regcode-1">
              <div className="d-flexvpromo">
                <div className="w-100">
                  <div className="upper">
                    <h2 id="pageviews">
                      <i className="fa fa-atom"></i>Sign Up and Save Up to{" "}
                      <font className="bold">₹1154 off</font> our fees
                    </h2>
                    <div className="Small_Txt">
                      <p>on selected regions with a promo code!</p>
                    </div>
                  </div>
                  <div className="bottom">
                    {promo ? (
                      <div className="inputGetPromo">
                        <form onSubmit={onSubmit}>
                          <input
                            type={`email`}
                            className="forn-control"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <input
                            type="submit"
                            className="btn PromoButton w-1/3"
                            // onclick={()=>GetfareAlert()}

                            onClick={() => GetfareAlert()}
                            value={`Get Promo`}
                          />
                        </form>
                      </div>
                    ) : (
                      <div className="inputGetPromo">
                        <input
                          className="font-700 color-green forn-control"
                          type=""
                          ref={inputEl}
                          value={`Travomint1000`}
                          onCopy={() => setCopied(true)}
                        />

                        <button
                          className="btn  w-1/3"
                          style={{
                            backgroundColor: select ? "#42830c" : "#42830c",
                          }}
                          onClick={() => Copy()}
                        >
                          {copytext}
                        </button>
                      </div>
                    )}

                    <div className="new-policy">
                      <Row>
                        <Col xs={12} md={8}>
                          <span className="font-semibold d-block text_1">
                            Expires Aug 30, 2022. Restrictions apply. T&C Apply
                          </span>
                        </Col>
                        <Col xs={12} md={4}>
                          <div className="font-semibold text-center text_2">
                          <Link href="/privacy">Privacy Policy</Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Graterates />
        </div>
      </Container>
    </div>
  );
};

export default Promo;
