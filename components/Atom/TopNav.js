import React from "react";
import logowhite from "../../public/Image/logo-white.png";
import logo from "../../public/Image/logo.png";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Dropdown } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap";

import {
  faSearch,
  faBars,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

import google from "../../public/Image/google_logo.png";
import Link from "next/link";

import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import Country from "./Country";

import playstore from "../../public/Image/play_store.png";
import appstore from "../../public/Image/app_store.png";
import { useDispatch, useSelector } from "react-redux";
import { Log_OUT, Sign_IN } from "../Redux/ActionType";
import {
  authCode,
  cms_trav,
  testapi,
  domain,
  forgot,
  stage,
  staging,
} from "../static/static";
import GoogleLogin from "react-google-login";

const TopNav = (props) => {
  const dispatch = useDispatch();
  // UseSelector
  const { status, user_id, user_name, user_email, mobile } = useSelector(
    (state) => state.auth
  );

  const navigate = useRouter();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen1, setIsOpen1] = useState(false);
  let [email, setEmail] = useState("");
  let [emailf, setEmailF] = useState("");
  let [password, setPassword] = useState("");
  const [heading, setHeading] = useState("SIGN IN");
  const [displaylogin, setDisplaylogin] = useState("block");
  const [displaysignup, setDisplaysignup] = useState("none");
  const [loginError, setLoginError] = useState("");
  const [signupResponse, setSignupResponse] = useState({});

  // ----------singup -------------------
  let [emailsign, setEmailsign] = useState("");
  let [namesign, setNamesign] = useState("");
  let [passwordsign, setPasswordsign] = useState("");
  let [confirm, setConfirm] = useState("");

  // ----------singup end -------------------

  function closeModal() {
    setLoginError("");
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function openModal1() {
    setIsOpen1(true);
  }

  const logInFun = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_email: email,
      oldpassword: "",
      password: password,
      newpassword: "",
      type: "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const loginapi = await fetch(
      `${staging}/user/login-travel?authcode=${authCode}`,
      requestOptions
    );
    const authapi = await loginapi.json();
    if (authapi.baseResponse.status === 1) {
      dispatch({
        type: Sign_IN,
        payload: {
          status: authapi.baseResponse.status,
          user_id: authapi.response.user_id,
          user_name: authapi.response.user_name,
          user_email: authapi.response.user_email,
          mobile: authapi.response.mobile,
        },
      });
      setIsOpen(false);
      setLoginError("");
    } else {
      setLoginError("Your email & password is invalid");
    }
  };

  const TodayDateTime =
    new Date().getDate() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear() +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const signupFun = async () => {
    setShow2(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      login_id: emailsign,
      user_type: 6,
      registrationDate: `"${TodayDateTime}"`,
      user_name: namesign,
      user_email: emailsign,
      password: passwordsign,
      password_value: passwordsign,
      user_profile_photo: "trvo.png",
      user_permanentCountryId: 99,
      mobile: "",
      referuser_code: "",
      parent_id: "1",
      login_status: "Online",
      account_status: "Active",
      user_profile_dob: "",
      nationality: "IN",
      brand_name: "1",
      deportment_id: 0,
      gender: "1",
      role_id: 6,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${testapi}/user/addUser?authcode=${authCode}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSignupResponse(result);

        if (result.baseResponse.status === 1) {
          setShow2(false);
          setHeading("SIGN IN");
          setDisplaylogin("block");
          setDisplaysignup("none");
        }
      });
    // .catch((error) => console.log("error", error));
  };

  const [forgetResponse, setForgetResponse] = useState({});
  const forgetpassword = async () => {
    setSend("Please wait");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_email: emailf,
      type: "reset",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const emailChange = await fetch(
      `${testapi}/user/updatebyEmail?authcode=Trav3103s987876`,
      requestOptions
    );

    const ab = await emailChange.json();
    // setForgetResponse(ab)

    if (ab.baseResponse.status === 1) {
      setForgetDone(false);
    } else {
    }
  };

  function closeForget() {
    setShow3(false);
    setForgetDone(true);
    setSend("Send");
  }

  //   const forgetpassword = () => {
  // console.log("sreyufgberigjb")
  //   }

  // const forgetMail = async (data) => {
  //   const newData = JSON.parse(data.response)
  //   const newpassword = newData.NewPassword;

  //   console.log(newpassword)
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   // var pass = "SVC758F";

  //   var raw = JSON.stringify({
  //     FromEmail: "booking@travomint.com",
  //     ToEmail: emailf,
  //     CcEmail: "",
  //     BccEmail: "",
  //     MailSubject: "Forget Mail",
  //     MailBody: `<table\n" +
  //       '  cellspacing="0"\n' +
  //       '  border="0"\n' +
  //       '  cellpadding="0"\n' +
  //       '  width="100%"\n' +
  //       '  bgcolor="#f2f3f8"\n' +
  //       ">\n" +
  //       "  <tr>\n" +
  //       "    <td>\n" +
  //       "      <table\n" +
  //       '        style="background-color: #f2f3f8; max-width: 670px"\n' +
  //       '        width="100%"\n' +
  //       '        border="0"\n' +
  //       '        cellpadding="0"\n' +
  //       '        cellspacing="0"\n' +
  //       "      >\n" +
  //       "        <tr>\n" +
  //       "          <td>\n" +
  //       "            <table\n" +
  //       '              width="95%"\n' +
  //       '              border="0"\n' +
  //       '              align="center"\n' +
  //       '              cellpadding="0"\n' +
  //       '              cellspacing="0"\n' +
  //       '              style="\n' +
  //       "                max-width: 670px;\n" +
  //       "                background: #fff;\n" +
  //       "                border-radius: 3px;\n" +
  //       "                text-align: center;\n" +
  //       "                -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);\n" +
  //       "                -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);\n" +
  //       "                box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);\n" +
  //       '              "\n' +
  //       "            >\n" +
  //       "              <tr>\n" +
  //       '                <td style="height: 40px">\n' +
  //       "                  <img\n" +
  //       '                    class="svg_logo"\n' +
  //       '                    src="https://www.travomint.com/resources/images/logo.svg"\n' +
  //       '                    style="width: 200px; height: 70px"\n' +
  //       "                  />\n" +
  //       "                </td>\n" +
  //       "              </tr>\n" +
  //       "\n" +
  //       "              <tr>\n" +
  //       '                <td style="padding: 0 35px">\n' +
  //       "                  <h1\n" +
  //       '                    style="\n' +
  //       "                      color: #1e1e2d;\n" +
  //       "                      font-weight: 200;\n" +
  //       "                      margin: 0;\n" +
  //       "                      font-size: 19px;\n" +
  //       "                      text-align: left;\n" +
  //       '                    "\n' +
  //       "                  >\n" +
  //       "                    Dear <strong>Shivam sharma</strong>\n" +
  //       "                  </h1>\n" +
  //       "                  <span\n" +
  //       '                    style="\n' +
  //       "                      display: inline-block;\n" +
  //       "                      vertical-align: middle;\n" +
  //       "                      margin: 10px 0 10px;\n" +
  //       "                      /* border-bottom: 1px solid #cecece; */\n" +
  //       "                      width: 100px;\n" +
  //       '                    "\n' +
  //       "                  ></span>\n" +
  //       "                  <p\n" +
  //       '                    style="\n' +
  //       "                      color: #455056;\n" +
  //       "                      font-size: 15px;\n" +
  //       "                      line-height: 24px;\n" +
  //       "                      margin: 0;\n" +
  //       "                      text-align: left;\n" +
  //       '                    "\n' +
  //       "                  >\n" +
  //       "                    Sorry, you have been facing trouble logging into your\n" +
  //       "                    account. Please use the below password for login and reset\n" +
  //       "                    it after get back to your account.\n" +
  //       "                  </p>\n" +
  //       "                </td>\n" +
  //       "              </tr>\n" +
  //       "              <tr>\n" +
  //       '                <td style="padding: 20px 10px 0px 35px; text-align: left">\n' +
  //       "                  Your <span>password</span>:\n" +
  //       '                  <b style="color: #f14f20">'+${newpassword}+'</b>\n' +
  //       "                </td>\n" +
  //       "              </tr>\n" +
  //       "              <tr>\n" +
  //       "                <td\n" +
  //       '                  style="\n' +
  //       "                    padding: 20px 10px 0px 35px;\n" +
  //       "                    text-align: left;\n" +
  //       "                    color: #455056;\n" +
  //       "                    font-size: 15px;\n" +
  //       "                    line-height: 24px;\n" +
  //       "                    margin: 0;\n" +
  //       "                    text-align: left;\n" +
  //       '                  "\n' +
  //       "                >\n" +
  //       "                  Thanks & Regards,\n" +
  //       "                  <br />Travomint\n" +
  //       "                </td>\n" +
  //       "              </tr>\n" +
  //       "\n" +
  //       "              <tr>\n" +
  //       '                <td style="height: 40px">&nbsp;</td>\n' +
  //       "              </tr>\n" +
  //       "            </table>\n" +
  //       "          </td>\n" +
  //       "        </tr>\n" +
  //       "\n" +
  //       "        <tr>\n" +
  //       '          <td style="height: 20px">&nbsp;</td>\n' +
  //       "        </tr>\n" +
  //       "\n" +
  //       "        <tr>\n" +
  //       '          <td style="height: 80px">&nbsp;</td>\n' +
  //       "        </tr>\n" +
  //       "      </table>\n" +
  //       "    </td>\n" +
  //       "  </tr>\n" +
  //       "</table>`,
  //     BookingID: 8,
  //     MailType: "",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     `http://testapi.traveloes.com/SMTP/SendEMailVersion2?authcode=${authCode}`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => console.log("result123", result))
  //     .catch((error) => console.log("error", error));
  // };

  // -------------------signUp ---------------------

  function signUp() {
    setHeading("SIGN UP");
    setDisplaylogin("none");
    setDisplaysignup("block");
  }
  function loginchange() {
    setHeading("SIGN IN");
    setDisplaylogin("block");
    setDisplaysignup("none");
  }

  // -------------------signUp ---------------------

  //--------------------- modal response-----------------
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  //--------------------- modal response-----------------
  const logOutUser = () => {
    dispatch({
      type: Log_OUT,
      payload: {
        isLoggedIn: false,
        status: 0,
        user_id: 0,
        user_name: "",
        user_email: "",
        mobile: "",
      },
    });
  };

  var InitialName = user_name;
  const InitialWord = InitialName.split(" ")[0][0];

  const goonMytrip = () => {
    // mytrip;
    navigate.push("/mytrip");
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/airline-logo/${src}.png`;
  };

  const responseGoogle = (response) => {};

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  function popForget() {
    setIsOpen(false);
    setShow3(true);
  }

  const [loginButtonstatus, setloginButtonstatus] = useState(false);
  function checkBox(e) {
    // setloginButtonstatus(!loginButtonstatus)
  }

  const [forgetDone, setForgetDone] = useState(true);
  const [send, setSend] = useState("Send");
  const [sendStatus, setsendStatus] = useState(true);

  function sendMailData(e) {
    setEmailF(e.target.value);
    const regExmail =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,8}(.[a-z{0,8}])?/g;
    if (regExmail.test(e.target.value)) {
      setsendStatus(false);
    } else {
      setsendStatus(true);
    }
  }

  return (
    <>
      <header className="header-classic">
        <Container fluid>
          <nav className=" navbar navbar-expand-lg navbar-dark bg-unique p-0">
            <div className="fabars-mr-3">
              <Image
                src={"/Image/menubarhdr.png"}
                onClick={() => props.setside(true)}
                width={24}
                height={20}
                className="navbar-toggler-icon crsrpointer"
              />
            </div>

            <div className="navbar-brand">
              <Link href="/">
                <a className="crsrpointer">
                  <Image src={logo} className="" width="150" />
                </a>
              </Link>
            </div>

            <div className=" d-flex justify-content-end align-items-center ml-auto">
              <div className="d-none d-md-block">
                <Country />
              </div>

              {status === 1 ? (
                <>
                  <div className="">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="dropdown-basic-New  Newdropdown-basic"
                      >
                        <div className="avtar">{InitialWord}</div>
                        <div className="Namesign">{user_name}</div>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="menu-new ml-4">
                        <Dropdown.Item className="bg-graytravomint">
                          {" "}
                          <div className="Login-wrapp d-flex align-items-center justify-content-start ">
                            <div className="avtar mr-4">{InitialWord}</div>
                            <div className="">
                              <div>{user_name}</div>
                              <div>{user_email}</div>
                            </div>
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <div onClick={() => goonMytrip()}>My Booking</div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          {" "}
                          <div onClick={() => logOutUser()}>Log Out</div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <div className="login-base ml-4">
                  <div className="Login-wrapp">
                    <a
                      href={void 0}
                      onClick={openModal}
                      className="text-sm Login-button "
                    >
                      <FontAwesomeIcon icon="fa-solid fa-user" />
                      <span className="d-none d-md-inline-block  align-middle">
                        Log In/ Sign Up
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </Container>
      </header>
      <div className="header-classic-empty w-100"></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed bg-slate-200 inset-0 z-100 overflow-y-auto loginbox-journey-2"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            className="d-flex align-items-center justify-content-center flex-column minh-100"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-100">
              <Container className="bg-white relative">
                <button
                  onClick={() => closeModal()}
                  className="btn-close"
                ></button>

                <Row className="login-pagebox">
                  <Col xs={12} lg={6} className="image-bgtraovomint p-0">
                    <div className="p-10 h-100 d-flex flex-column">
                      <div className="flex-grow-1">
                        <div className="mb-5 logowhite-169">
                          <Image
                            src={logowhite}
                            alt="G8"
                            width={169}
                            height={40}
                          />
                          {/* <Image
                             loader={myLoader}
                             src={logowhite}
                             alt="G8"
                             width={169} height={40}
                           /> */}
                        </div>
                        <hr></hr>
                        <h3 className="text-white font-600">
                          Enjoy the journey and try to get better every day
                        </h3>
                      </div>

                      <div className="mt-auto">
                        <div className="footer-social_media">
                          <div className="social_media_box">
                            <ul className="p-0 m-0">
                              <li className="d-inline-block align-top">
                                <a
                                  href="https://www.facebook.com/travomint/"
                                  className="facebook"
                                >
                                  <i className="fab fa-facebook"></i>{" "}
                                </a>
                              </li>
                              <li className="d-inline-block align-top">
                                <a
                                  href="https://www.instagram.com/travomint/"
                                  className="instagram"
                                >
                                  <i className="fab fa-instagram"></i>{" "}
                                </a>
                              </li>
                              <li className="d-inline-block align-top">
                                <a
                                  href="https://twitter.com/travomint1"
                                  className="twitter"
                                >
                                  <i className="fab fa-twitter"></i>{" "}
                                </a>
                              </li>
                              <li className="d-inline-block align-top">
                                <a
                                  href="https://www.pinterest.com/travomint/"
                                  className="pinterest"
                                >
                                  <i className="fab fa-pinterest"></i>{" "}
                                </a>
                              </li>
                              <li className="d-inline-block align-top">
                                <a
                                  href="https://www.linkedin.com/company/travomint/"
                                  className="linkedin"
                                >
                                  <i className="fab fa-linkedin"></i>{" "}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="app-btn">
                          <div className="d-flex mt-4">
                            <Image
                              alt="props"
                              src={appstore}
                              className=""
                              width={118}
                              height={40}
                            />
                            <div className="mr-3"></div>

                            <Image
                              alt="props"
                              src={playstore}
                              className=""
                              width={118}
                              height={40}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="payment_new align-self-center p-0"
                  >
                    <div className="p-10">
                      {loginError ? (
                        <div>
                          <h6 className="loginError text-sm p-2">
                            {loginError}
                          </h6>
                        </div>
                      ) : (
                        ""
                      )}

                      <Dialog.Title as="h3" className="dialog-title">
                        {heading}
                      </Dialog.Title>

                      <div className="mt-6">
                        <Form>
                          <div style={{ display: displaylogin }}>
                            <Form.Group
                              className="mb-4"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <Form.Text className="text-muted form-text mt-1 d-block">
                                We{"'"}ll never share your email with anyone
                                else.
                              </Form.Text>
                            </Form.Group>

                            <Form.Group
                              className="mb-4"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Form.Group>

                            <Row className="rememberpass">
                              <Col xs={6}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicCheckbox"
                                >
                                  <Form.Check
                                    onClick={(e) => checkBox(e.target.value)}
                                    type="checkbox"
                                    label="Remember Me"
                                  />
                                </Form.Group>
                              </Col>
                              <Col xs={6} className="text-right ">
                                <span
                                  className="cursor-pointer"
                                  onClick={() => popForget()}
                                >
                                  {" "}
                                  Forgot Password{" "}
                                </span>
                                {/* </a> */}
                              </Col>
                            </Row>
                          </div>

                          <div style={{ display: displaysignup }}>
                            <Form.Group
                              className="mb-4"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Username"
                                onChange={(e) => setNamesign(e.target.value)}
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-4"
                              controlId="formBasicEmail"
                            >
                              <Form.Control
                                type="email"
                                placeholder="Email ID"
                                onChange={(e) => setEmailsign(e.target.value)}
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-4"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) =>
                                  setPasswordsign(e.target.value)
                                }
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-4"
                              controlId="formBasicPassword"
                            >
                              <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirm(e.target.value)}
                              />
                            </Form.Group>

                            {/* <Row className="rememberpass">
                              <Col xs={6}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicCheckbox"
                                >
                                  <Form.Check
                                    type="checkbox"
                                    label="I have submit the form"
                                  />
                                </Form.Group>
                              </Col>
                            </Row> */}
                          </div>

                          <div
                            className="mt-4"
                            style={{ display: displaylogin }}
                          >
                            <button
                              type="button"
                              disabled={loginButtonstatus}
                              className="btn btn-siteorange"
                              onClick={() => logInFun()}
                            >
                              LOG IN
                            </button>

                            <p className="text-sm mt-3">
                              Don{"'"}t have an account?
                              <span
                                className="text-orange-600 font-bold cursor-pointer"
                                onClick={() => signUp()}
                              >
                                {" "}
                                Sign up
                              </span>
                            </p>
                          </div>

                          <div
                            className="mt-4"
                            style={{ display: displaysignup }}
                          >
                            <button
                              type="button"
                              className="btn btn-siteorange"
                              onClick={() => signupFun()}
                            >
                              Sign Up
                            </button>

                            <p className="text-sm mt-3">
                              Already have an account!{" "}
                              <span
                                className="text-orange-600 font-bold cursor-pointer"
                                onClick={() => loginchange()}
                              >
                                {" "}
                                Login
                              </span>
                            </p>
                          </div>

                          <div className="seprator-hr">
                            <hr></hr>
                            <span className="bg-white">Or</span>
                          </div>

                          <div className="mt-4">
                            {/* <button className="google-signin-button d-flex align-items-center" onClick={()=>onSignIn()}>
                              <div className="d-flex align-items-center">
                                <Image
                                  alt="props"
                                  width={20}
                                  height={20}
                                  src={google.src}
                                  className="logo-brand"
                                />
                               
                              </div>
                              <span className="flex-grow-1">
                                {" "}
                                Sign In With Google
                              </span>
                             
                              <div className="opacity-0">
                                <Image
                                  alt="props"
                                  src={google.src}
                                  className="logo-brand"
                                  width={20}
                                  height={20}
                                />
                               
                              </div>
                            </button> */}

                            {/* <div class="g-signin2" id="buttonDiv" data-onsuccess="onSignIn">Sign in</div> */}
                            {/* <GoogleLogin
                              clientId="1015992214224-p5v0ca8saj0lt1e2p1g3ht8clj79kr72.apps.googleusercontent.com"
                              buttonText="Sign in with Google"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              isSignedIn={true}
                              cookiePolicy={"single_host_origin"}
                            /> */}
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Body>Please Wait while we update</Modal.Body>
      </Modal>

      <Modal
        className="modalbooknow-classic modalgetfare-cheap"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show3}
        onHide={handleClose3}
      >
        <Modal.Body>
          <div className="">
            <Container>
              <div className="row">
                <div className="col-xl-12 col-12">
                  {forgetDone ? (
                    <div className="promo regcode-1">
                      <div className="d-flexvpromo">
                        <div className="w-100">
                          <div className="upper ml-4">
                            <h2 id="pageviews">
                              <i className="fas fa-user"></i>Forgot Password{" "}
                              {/* <font className="bold">₹1154 off</font> our fees */}
                            </h2>
                            <div className="Small_Txt">
                              <p></p>
                            </div>
                          </div>
                          <div className="bottom">
                            <div className="inputGetPromo">
                              <input
                                type={`email`}
                                className="forn-control"
                                placeholder="Email Address"
                                onChange={(e) => sendMailData(e)}
                                required
                              />
                              {/* <input
                                type="submit"
                                className="btn PromoButton w-1/3"
                                onClick={(e) => forgetpassword(e)}

                                value={`Send`}
                              /> */}

                              <button
                                className="btn PromoButton w-1/3"
                                disabled={sendStatus}
                                onClick={() => forgetpassword()}
                              >
                                {send}
                              </button>
                            </div>

                            <div className="new-policy">
                              <Row>
                                <Col xs={12} md={8}>
                                  <span className="font-semibold ml-4 d-block text-xs text_1">
                                    Kindly fill your email ID and you will get a
                                    new password in your email shortly !
                                  </span>
                                </Col>
                                <Col xs={12} md={4}></Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                    Please check your Email, we have sent your new password to your Email ID.
                      <br />
                      <div className="flex justify-center mt-3 ">
                      <button
                        onClick={() => closeForget()}
                        className="btn btn-primary"
                      >
                        Okay
                      </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        </Modal.Body>
      </Modal>

      {/* <TopNav/> */}
    </>
  );
};

export default TopNav;
