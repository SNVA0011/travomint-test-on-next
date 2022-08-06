import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Types = () => {
  const [apply, setApply] = useState("Apply");
  const [filed, setField] = useState("");
  const [applystatus, setApplystatus] = useState(true);

  // ------------------form data --------------
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("United Arab Emirates");
  const [visa, setVisa] = useState("--  Select one of the Visa  -- ");

  // ------------------form data --------------

  function applyBuuton() {
    setApply("Our Agent will call you soon");
    setField("Your Form is Filled");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      type: visa,
      place: place,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://10.20.1.61:8088/saveVisaEnquiry", requestOptions)
      .then((response) => response.text())
    // .then((result) => console.log("result"))
    // .catch((error) => console.log("error"));
  }

  const [checkstatus, setCheckedstatus] = useState(false);

  function handleChange(items) {
    setCheckedstatus(items);

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mobilePhone = /^\d{10}$/;
    var Namecheck = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (
      email.match(validRegex) &&
      phone.match(mobilePhone) &&
      name.match(Namecheck) &&
      checkstatus == false &&
      visa != "-- Select one of the Visa --"
    ) {
      setApplystatus(false);
    }
  }

  return (
    <>
      <div className="choose-visasingle">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={7} xl={8}>
              <h1 className="text-3xl visasel-trans">
                Please Select One of the <b className="text-orange-500">VISA</b>
              </h1>
              <hr/>

              <Row>
                <Col xs={12} xl={6} className="mb-4">
                  <div className="shadow-facmini p-3 ">
                    <div>
                      <span className="text-3xl text-gray-900 font-bold">
                        48 Hours
                      </span>
                      <span className="float-right text-2xl text-green-700 font-semibold ">
                        ₹2,205 *
                      </span>
                      <p className="paraofvisa">Transit Visa</p>
                    </div>
                    <hr  className="hr-offphone"/>
                    <ul class="list-disc pl-4 text-sm">
                      <li className="mb-1 text-gray-500">Get your visa in 3-4 working days</li>
                      <li className="mb-1 text-gray-500">Single entry visa for 48-hours stay</li>
                    </ul>
                    <div className="d-sm-inline-block mt-2">
                      <button
                        className="btn btn-siteorange done-vel"
                        onClick={() => setVisa("48 Hours Transit Visa")}
                      >
                        Selected
                      </button>
                    </div>
                  </div>
                </Col>

                <Col xs={12} xl={6} className="mb-4">
                  <div className="shadow-facmini p-3 ">
                    <div>
                      <span className="text-3xl text-gray-900 font-bold">
                        96 Hours
                      </span>
                      <span className="float-right text-2xl text-green-700 font-semibold ">
                        ₹2,982 *
                      </span>
                      <p className="paraofvisa">Transit Visa</p>
                    </div>
                    <hr  className="hr-offphone"/>
                    <ul class="list-disc pl-4 text-sm">
                      <li className="mb-1 text-gray-500">Get your visa in 3-4 working days</li>
                      <li className="mb-1 text-gray-500">Single entry visa for 96-hours stay</li>
                    </ul>
                    <div className="d-sm-inline-block mt-2">
                      <button
                        className="btn btn-siteorange done-vel"
                        onClick={() => setVisa("96 Hours Transit Visa")}
                      >
                        Selected
                      </button>
                    </div>
                  </div>
                </Col>

                <Col xs={12} xl={6} className="mb-4">
                  <div className="shadow-facmini p-3 ">
                    <div>
                      <span className="text-3xl text-gray-900 font-bold">
                        14 Days
                      </span>
                      <span className="float-right text-2xl text-green-700 font-semibold ">
                        ₹6,700*
                      </span>
                      <p className="paraofvisa">Tourist Visa</p>
                    </div>
                    <hr  className="hr-offphone"/>
                    <ul class="list-disc pl-4 text-sm">

                      <li className="mb-1 text-gray-500">Get your visa in 3-4 working days</li>
                      <li className="mb-1 text-gray-500">Single entry visa</li>
                      <li className="mb-1 text-gray-500">58 days validity</li>
                      <li className="mb-1 text-gray-500">All Inclusive Prices</li>
                      <li className="mb-1 text-gray-500">No Hidden Charges</li>
                      <li className="mb-1 text-gray-500">Express Visa Facility Available @ Minimum Cost</li>
                      <li className="mb-1 text-gray-500">
                        All-inclusive price including covid insurance worth ₹500
                      </li>
                    </ul>
                    <div className="d-sm-inline-block mt-2">
                      <button
                        className="btn btn-siteorange done-vel"
                        onClick={() => setVisa("14 Days Tourist Visa")}
                      >
                        Selected
                      </button>
                    </div>
                  </div>
                </Col>

                <Col xs={12} xl={6} className="mb-4">
                  <div className="shadow-facmini p-3 ">
                    <div>
                      <span className="text-3xl text-gray-900 font-bold">
                        30 Days
                      </span>
                      <span className="float-right text-2xl text-green-700 font-semibold ">
                        ₹6,900*
                      </span>
                      <p className="paraofvisa">Tourist Visa</p>
                    </div>
                    <hr  className="hr-offphone"/>
                    <ul class="list-disc pl-4 text-sm">
                      <li className="mb-1 text-gray-500">Get your visa in 3-4 working days</li>
                      <li className="mb-1 text-gray-500">Single/multiple entry visa</li>
                      <li className="mb-1 text-gray-500">58 days validity</li>
                      <li className="mb-1 text-gray-500">All Inclusive Prices</li>
                      <li className="mb-1 text-gray-500">No Hidden Charges</li>
                      <li className="mb-1 text-gray-500">Express Visa Facility Available @ Minimum Cost</li>
                      <li className="mb-1 text-gray-500">
                        All-inclusive price including covid insurance worth ₹699
                      </li>
                    </ul>
                    <div className="d-sm-inline-block mt-2">
                      <button
                        className="btn btn-siteorange done-vel"
                        onClick={() => setVisa("30 Days Tourist Visa")}
                      >
                        Selected
                      </button>
                    </div>
                  </div>
                </Col>

                <Col xs={12} xl={6} className="mb-4">
                  <div className="shadow-facmini p-3 ">
                    <div>
                      <span className="text-3xl text-gray-900 font-bold">
                        90 Days
                      </span>
                      <span className="float-right text-2xl text-green-700 font-semibold ">
                        ₹17,564 *
                      </span>
                      <p className="paraofvisa">Tourist Long Term Visa</p>
                    </div>
                    <hr  className="hr-offphone"/>
                    <ul class="list-disc pl-4 text-sm">
                      <li className="mb-1 text-gray-500">Get your visa in 3-4 working days</li>
                      <li className="mb-1 text-gray-500">Single/multiple entry visa</li>
                      <li className="mb-1 text-gray-500">58 days validity</li>
                      <li className="mb-1 text-gray-500">All Inclusive Prices</li>
                      <li className="mb-1 text-gray-500">No Hidden Charges</li>
                      <li className="mb-1 text-gray-500">Express Visa Facility Available @ Minimum Cost</li>
                      <li className="mb-1 text-gray-500">
                        All-inclusive price including covid insurance worth ₹699
                      </li>
                    </ul>
                    <div className="d-sm-inline-block mt-2">
                      <button
                        className="btn btn-siteorange done-vel"
                        onClick={() => setVisa("90 Days Long Tourist Visa")}
                      >
                        Selected
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6} lg={5} xl={4}>
              <div className="contact-classic sticky applyvisa-ins top-15">
                <div className="loginbox-journey-2 p-0">
                  <div className="w-100 form-contact-site">

                    <div className="w-100"> 
                      <h3 className="text-2xl font-bold mb-4 title-dtcont mt-0 pb-3"> Apply For Dubai Visa Online</h3>

                      <input
                        type="text"
                        placeholder="Enter Email ID"
                        className="form-control mb-3"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="form-control mb-3"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="form-control mb-3"
                        maxLength={10}
                        minLength={10}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <input
                        type="text"
                        value="United Arab Emirates"
                        className="form-control mb-3"
                        onChange={(e) => setPlace(e.target.value)}
                      />

                      <input type="text" value={visa}  className="form-control mb-4"/>
 
                      <div className="loginbox-journey-2 p-0 mb-4">
                        <div className="form-check gstcheck">
                          <input
                            class="form-check-input" type="checkbox" id="check" name="check"
                            value={checkstatus} onChange={(e) => handleChange(e.target.checked)}
                          />
                          <label htmlFor="check" className="d-flex">
                            I have submit the form
                          </label>
                        </div>
                      </div>
 
                      {/* <p className="text-left mt-2 text-white text-xl font-bold">
                  {filed}
                </p> */}
                      <button
                       className="btn btn-siteorange contact shadow-0"
                        disabled={applystatus}
                        onClick={() => applyBuuton()}
                      >
                        {apply}
                      </button>

                  
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  );
};

export default Types;
