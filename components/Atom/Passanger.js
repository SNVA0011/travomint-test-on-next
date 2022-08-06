import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Modal from "react-bootstrap/Modal";
import banner2s from "../../public/Image/Banner2.png";
import Image from "next/image";
 


export default function Passanger({settravelleradult,settravellerchildren,settravellerInfant}) {
  // Modal
  const [shows, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setadult(1);
    settravelleradult(1)
    setchildren(0);
    settravellerchildren(0)
    setInfant(0);
    settravellerInfant(0)
    setCount(0);
    setgenerate("none");
  };
  const [selected, setSelected] = useState(true);
  const [generate, setgenerate] = useState("none");
  const [children, setchildren] = useState(0);
  const [adult, setadult] = useState(1);
  const [Infant, setInfant] = useState(0);
  const [count, setCount] = useState(1);
  function addAdult() {
    setadult(adult + 1);
    settravelleradult(adult + 1)
    setCount(count + 1);
    setSelected();
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function minusAdult() {
    if (adult > 0) {
      setadult(adult - 1);
      settravelleradult(adult - 1)
    }
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function minuschildren() {
    if (count > 0) {
      setCount(count - 1);
    }
    if (children > 0) {
      setchildren(children - 1);
      settravellerchildren(children - 1)
    }
  }
  function addchildren() {
    setchildren(children + 1);
    settravellerchildren(children + 1)
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function addInfant() {
    setInfant(Infant + 1);
    settravellerInfant(Infant + 1)
    setCount(count + 1);
    {
      count > 8 ? handleShow() : handleClose();
    }
  }
  function minusInfant() {
    if (Infant > 0) {
      setInfant(Infant - 1);
      settravellerInfant(Infant - 1);
    }
    if (count > 0) {
      setCount(count - 1);
    }

    if (count > 8) {
      handleShow();
    } else {
      handleClose();
    }
  }
  function done() {
    setgenerate("none");
    document.querySelectorAll('.menuflitem-1').forEach(function (el) {el.style.display = 'none';});

  }
  function show() {
    document.querySelectorAll('.menuflitem-1').forEach(function (el) {el.style.display = 'block';});
 
    document.querySelectorAll('.menuflitem-2').forEach(function (el) { el.style.display = 'none'; });
    document.querySelectorAll('.menuflitem-3').forEach(function (el) { el.style.display = 'none'; });
    document.querySelectorAll('.menuflitem-4').forEach(function (el) { el.style.display = 'none'; });
    document.querySelectorAll('.menuflitem-5').forEach(function (el) { el.style.display = 'none'; });
    document.querySelectorAll('.menuflitem-6').forEach(function (el) { el.style.display = 'none'; });

  }




  // dropdown hide > outside click hide
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setgenerate("none");
      document .querySelectorAll( ".menuflitem-2,.menuflitem-3,.menuflitemb-3,.menuflitem-4,.menuflitem-5,.menuflitem-6" ) .forEach(function (el) { el.style.display = "none"; });
    });
  }, []);
  function documentoutside(e) {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  }

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative documentoutside w-100" onClick={(e) => documentoutside(e)}>
          <Listbox.Button className="btnid-3 text-left button-infant-parent button-infant d-flex  align-items-center justify-content-center w-100"
            onClick={() => show()}>
            <span className="inline-block mr-3">
              <i className="fa fa-users text-blue-500"></i>
            </span>

            <div className="text-truncate flex-grow-1">
              <div className="text-truncate w-100">
                {adult} Adult, {children} Children, {Infant} Infant
              </div>
            </div>

            <span className="pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <div
            className="menuflitem-1 button-infant-menu absolute pl-0 w-full mt-1  text-base bg-white rounded-md shadow-lg max-h-auto z-50 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            style={{ display: generate }}
          >
            <div className="w-100">
              <h4 className="trav-1">Travellers</h4>

              {/* Adult */}

              <div className="px-3 py-2 mb-3 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h4 className="text-gray-800 text-lg">Adult</h4>
                  <span className="text-gray-600 font-meium text-left text-sm font-medium">
                    16+ years
                  </span>
                </div>
                <div className="passengers d-flex align-items-center infantaddbok">
                  <button
                    type="button"
                    onClick={() => minusAdult()}
                    className={"button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white "+(adult == 0 ? 'hidden':'')}
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">{adult}</span>
                  <button
                    type="button"
                    onClick={() => addAdult()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              {/* children */}

              <div className="px-3 py-2 mb-3 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h4 className="text-gray-800 text-lg">Children</h4>
                  <span className="text-gray-600 font-meium text-left text-sm font-medium">2-15 years</span>
                </div>
                <div className="passengers d-flex align-items-center infantaddbok">
                  <button
                    type="button"
                    onClick={() => minuschildren()}
                    className={"button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white "+(children == 0 ? 'hidden':'')}
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">
                    {children}
                  </span>
                  <button
                    type="button"
                    onClick={() => addchildren()}
                    className="button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white"
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              {/* infants */}

              <div className="px-3 py-2 d-flex align-items-center justify-content-between passH">
                <div className="left-tag">
                  <h4 className="text-gray-800 text-lg">Infant</h4>
                  <span className="text-gray-600 font-meium text-left text-sm font-medium">0-2 years</span>
                </div>
                <div className="passengers d-flex align-items-center infantaddbok">
                  <button
                    type="button"
                    onClick={() => minusInfant()}
                    className={"button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white  "+(Infant == 0 ? 'hidden':'')}
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-minus " aria-hidden="true"></i>
                  </button>

                  <span className="text-sm text-black font-bold">{Infant}</span>
                  <button
                    type="button"
                    onClick={() => addInfant()}
                    className={"button hollow circle border-2 text-blue-500 border-blue-500 rounded-2xl py-1 hover:border-white hover:bg-blue-500 hover:text-white "+(Infant >= adult ? 'hidden':'')}
                    data-quantity="plus"
                    data-field="quantity"
                  >
                    <i className="fa fa-plus " aria-hidden="true"></i>
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className="px-3 py-2">
                <span className="text-sm text-gray-700 tracking-normal">
                  Your age at time of travel must be valid for the age category
                  booked. Airlines have restrictions on under 18s travelling
                  alone.
                </span>
              </div>

              {/* button */}

              <div className="px-3 py-3 clearfix border-top mt-3">
                <button
                  className="btn btn-siteorange done-vel"
                  onClick={() => done()}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </Listbox>

      <Modal
        show={shows}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">&nbsp;</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-1">
          <Image alt="logo" src={banner2s} className="rounded" />
        </Modal.Body>
      </Modal>
    </>
  );
}
