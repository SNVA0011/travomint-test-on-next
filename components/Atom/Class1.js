import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function Class1(props) {
  const [selected, setSelected] = useState(true);
  const [generate, setgenerate] = useState("none");
  const [classes, setclasses] = useState(props.classData);
  const [classesNo, setclassesNo] = useState(1);
  const [children, setchildren] = useState(0);
  const [adult, setadult] = useState(1);

  function done() {
    setgenerate("none");
  }
  function show() {
    document.querySelectorAll(".menuflitem-2").forEach(function (el) {
      el.style.display = "block";
    });
    document
      .querySelectorAll(
        ".menuflitem-1,.menuflitem-3,.menuflitemb-3,.menuflitem-4,.menuflitem-5,.menuflitem-6"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
    setgenerate("block");
  }
  function Economy() {
    setclasses("ECONOMY");
    setclassesNo(1);
    setgenerate("none");
  }
  function PremiumEconomy() {
    setclasses("PREMIUM ECONOMY");
    setclassesNo(2);
    setgenerate("none");
  }
  function BusinessClass() {
    setclasses("BUSINESS CLASS");
    setclassesNo(3);
    setgenerate("none");
  }
  function FirstClass() {
    setclasses("FIRST CLASS");
    setclassesNo(4);
    setgenerate("none");
  }

  props.setclasse(classesNo);
  props.setnameofclassName(classes);

  // dropdown hide > outside click hide
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setgenerate("none");

      document .querySelectorAll( ".menuflitem-1,.menuflitem-3,.menuflitemb-3,.menuflitem-4,.menuflitem-5,.menuflitem-6" ) .forEach(function (el) { el.style.display = "none"; });

    });
  }, []);
  function documentoutside(e) {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
            <label class="form-label d-block p-0 labelverdify-dark text-white">Class</label> 
      <div
        className="relative w-full documentoutside"
        onClick={(e) => documentoutside(e)}
      >
        <Listbox.Button
          className="btnid-2 text-left button-infant-parent button-infant d-flex  align-items-center justify-content-center w-100"
          onClick={() => show()}
        >
          <span className="inline-block mr-3">
            <i className="fa fa-couch text-blue-500"></i>
          </span>
          <div className="text-truncate flex-grow-1">
            <div className="text-truncate w-100">{classes}</div>
          </div>
          <span className="pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <div
          className="menuflitem-2 sbeco-icongent button-infant-menu absolute pl-0 w-full py-1 mt-1 bg-white rounded-md shadow-lg max-h-auto z-50 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm"
          style={{ display: generate }}
        >
          <div
            className="py-2 px-3 text-black cursor-pointer hover:bg-gray-100 "
            onClick={() => setclasses(() => Economy())}
          >
            <div className="sbeco-icon">
              <i className="fas fa-wheelchair text-blue-500"></i>
            </div>
            ECONOMY
          </div>
          <div
            className="py-2 px-3 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => PremiumEconomy())}
          >
            <div className="sbeco-icon">
              <i className="fas fa-chair text-blue-500"></i>
            </div>
            PREMIUM ECONOMY
          </div>
          <div
            className="py-2 px-3 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => BusinessClass())}
          >
            <div className="sbeco-icon">
              <i className="fas fa-couch text-blue-500"></i>
            </div>
            BUSINESS CLASS
          </div>
          <div
            className="py-2 px-3 text-black cursor-pointer hover:bg-gray-100"
            onClick={() => setclasses(() => FirstClass())}
          >
            <div className="sbeco-icon">
              <i className="fas fa-couch text-blue-500"></i>
            </div>
            FIRST CLASS
          </div>
        </div>
      </div>
    </Listbox>
  );
}
