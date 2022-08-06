// import { useState, useEffect } from "react";
// import AirPortData from "../Sample_Data/AirPortData.json";
// import Favourite from "../Sample_Data/Favourite.json";

// import { useSelector } from "react-redux";

// const people = AirPortData;
// const Fav = Favourite;

// export default function To(props) {
//   const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);
//   const [selected, setSelected] = useState(people);
//   const [FavData, SetFavData] = useState(Fav);
//   const [city, setcity] = useState(selected[60].cityName);
//   const [finalcity, setfinalcity] = useState("");
//   const [generate, setgenerate] = useState("none");
//   const [inputselect, setinputselect] = useState(" ");
//   const [FavGen, setFavGen] = useState("none");
//   const [active, setActive] = useState("")

//   const AirportFilter = AirPortData.filter(
//     (item) => item.countryCode === currency_Name_rd.currency_Code
//   );

//   function changecity(e) {
//     const cities = e.target.value;
//     setcity(cities);
//     setfinalcity(e.target.value);
//     {
//       cities == "" ? setgenerate("none") : setgenerate("block");
//     }
//     setFavGen("none");
//   }
//   function changeAirport(e) {
//     setgenerate("none");
//     setFavGen("none");
//     const airport = e;
//     setfinalcity(airport);
//     setinputselect(selected);
//     setActive("active")
//   }
//   function clickCity() {
//     document.querySelectorAll('.menuflitem-4').forEach(function (el) {
//       el.style.display = 'block';
//     });
//     document.querySelectorAll('.menuflitem-1,.menuflitem-2,.menuflitem-3,.menuflitemb-3').forEach(function (el) {
//       el.style.display = 'none';
//     });
//     setFavGen("block");
//   }
//   function clearAll() {
//     setfinalcity("");
//     setgenerate("none");
//     setFavGen("none");
//     setActive("")
//   }

//   const ending_data = selected.filter((item) => item.airportName == finalcity);
//   if (ending_data[0] == undefined) {
//     props.setdeparture("");
//   } else {
//     props.setdeparture(ending_data[0].cityCode);
//     props.setArCountryCode(ending_data[0].countryCode);
//   }

//   // dropdown hide > outside click hide
//   useEffect(() => {
//     document.addEventListener("click", function (event) {
//       setFavGen("none");
//       setgenerate("none");
//     });
//   }, []);
//   function documentoutside(e) {
//     e.isPropagationStopped()
//     e.stopPropagation();
//     e.isPropagationStopped()
//   }

//   return (
//     <>
//       <div
//         className="relative search-engine-in se-pd  w-full text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
//         <div className="text-black documentoutside" onClick={(e) => documentoutside(e)}>

//           {selected.filter((items) => items.airportName == finalcity).length > 0 ?
//             <div className="city-deprtright">
//               {selected
//                 .filter((items) => items.airportName == finalcity)
//                 .map((items, i) => (
//                   <span key={i} className="text-sm text-black city-Name">
//                     <i className="fa fa-map-marker-alt text-blue-500"></i> &nbsp;{" "}
//                     {items.cityName}
//                   </span>
//                 ))}
//               {selected
//                 .filter((items) => items.airportName == finalcity)
//                 .map((items, i) => (
//                   <span key={i} className="foot rounded-lg w-full col-span-3 text-lg px-4 font-semibold ml-3">
//                     {items.cityCode}
//                   </span>
//                 ))}
//             </div>
//             : ''}

//           <span onClick={() => clearAll()}> <i className="fa fa-window-close close-icon cityclose" /></span>

//           <div className={`${'input-group '}` + active} >
//             <span className="input-group-text align-items-center justify-content-center">
//               <span className="block truncate col-span-6 font-bold text-sm font-sans  py-1">
//                 {" "}
//                 <i className="fa fa-plane-departure mr-2 mt-2   text-blue-500"></i>
//               </span>
//             </span>
//             <input
//               type="text"
//               id="selecteds"
//               autoComplete="off"
//               className="city form-control"
//               value={finalcity}
//               placeholder="Country, City or Airport"
//               onChange={(e) => changecity(e)}
//               onFocus={(e) => clickCity()}
//             />
//           </div>

//         </div>
//       </div>

//       <div className="">
//         <ul
//           role="listbox"
//           className="menuflitem-4 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white w-100 shadow rounded "
//           style={{ display: FavGen }}
//         >
//           {AirportFilter.map((item, i) => (
//             <>
//               {/* <li role='option' onClick={(e)=>changeAirport(e)} className='dataItem w-full list-none '> <i className="fa fa-plane-departure inline   text-blue-500"></i> &nbsp;  <option id='selecteds' value={item.airportName} className='inline text-lg text-gray-600 ' >  {item.airportName} , ({item.airportCode})</option><br/></li> */}
//               <button
//                 className="dataItem w-full  pl-10 pr-4 py-2 text-left"
//                 onClick={(e) => changeAirport(item.airportName)}
//                 value={item.airportName}>
//                 <i className="fa fa-plane-departure  mr-2 mt-2 text-blue-500"></i>
//                 <div className="flex-grow-1 px-2 text-left">
//                   {item.airportName}, {item.cityName}
//                 </div>
//                 <div className="float-right shadow foot px-4 rounded-xl"
//                   value={item.airportName}>
//                   {item.airportCode}
//                 </div>{" "}
//               </button>
//             </>
//           ))}
//         </ul>
//       </div>

//       <ul  role="listbox"
//               className="menuflitemb-4 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white w-100 shadow rounded "
//               style={{ display: generate }}
//             >
//               {selected.filter((item)=>(item.cityCode==city.toUpperCase())).map((item, i) => (
//                   <>
//                     <button
//                       className="dataItem w-full px-4 py-2 text-left"
//                       onClick={(e) => changeAirport(item.airportName)}
//                       value={item.airportName} >
//                       <i className="fa fa-plane-departure  mr-2 mt-2    text-blue-500"></i>{" "}
//                       <div className="flex-grow-1 px-2 text-left">
//                         {item.airportName}, {item.cityName}{" "}
//                       </div>
//                       <span className="float-right shadow foot px-4 rounded-xl">
//                         {item.airportCode}
//                       </span>{" "}
//                     </button>
//                   </>
//                 ))}
//             </ul>
//     </>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import AirPortData from "../Sample_Data/AirPortData.json";

const To = ({ setdeparture, setArCountryCode }) => {
  const [active, setActive] = useState("");
  const [inputValue, setInputValue] = useState();
  const [select, setSelectValue] = useState({});
  const [visible, setVisibleValue] = useState(0);
  const [airportName, setAirportName] = useState("");
  const [airportCode, setAirportCode] = useState("");
  const [cityName, setCityname] = useState("");
  const [state, setState] = useState({ data: [], loading: false }); // only one data source
  const { data, loading } = state;

  // Redux
  const { currency_Name_rd } = useSelector((state) => state.currency_Reducer);

  const changecity = (e) => {
    clickCity();
    const arr = e.target.value.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");
    setInputValue(str2);
    setVisibleValue(1);
  };

  const AirportFilter = AirPortData.filter(
    (item) => item.countryCode === currency_Name_rd.currency_Code
  );

  const fetchAPI = () => {
    setState({ data: [], loading: true });
    // const sortAirportDataByCountry = AirportFilter;
    setState({ data: AirportFilter, loading: false });
  };

  const filterdData = inputValue // based on text, filter data and use filtered data
    ? AirPortData.filter((item) => {
        const itemData = item.airportName;
        const airportCode = item.airportCode;
        const cityName = item.cityName;
        const countryName = item.countryName;
        const textData = inputValue;
        return (
          airportCode.indexOf(textData.toUpperCase()) > -1 ||
          itemData.indexOf(textData) > -1 ||
          cityName.indexOf(textData) > -1 ||
          countryName.indexOf(textData) > -1
        );
      })
    : data;

  const airportData = (item) => {
    setSelectValue(item);
    setArCountryCode(item.countryCode);
    setdeparture(item.airportCode);
    setVisibleValue(0);
    setActive("active");
    setAirportName(airportName);
    setCityname(item.cityName);
    setAirportCode(item.airportCode);
  };

  const citybox = useRef();
  const closewithfocus = () => {
    citybox.current.focus();
    citybox.current.value = "";
    setSelectValue({});
    setInputValue("");
    setdisablecity(false);
    setActive("");
    document
      .querySelectorAll(
        ".menuflitem-5,.menuflitem-6,.menuflitem-2,.menuflitem-3,.menuflitemb-3.menuflitem-4,.menuflitem-4"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
  };
  // dropdown hide > outside click hide
  useEffect(() => {
    window.addEventListener("click", function (event) {
      setSelectValue({});
    });
  }, []);
  function documentoutside(e) {
    e.isPropagationStopped();
    e.stopPropagation();
    e.isPropagationStopped();
  }
  function clickCity() {
    document.querySelectorAll(".menuflitem-6").forEach(function (el) {
      el.style.display = "block";
    });
    document
      .querySelectorAll(
        ".menuflitem-1,.menuflitem-2,.menuflitem-3,.menuflitem-5,.menuflitemb-4"
      )
      .forEach(function (el) {
        el.style.display = "none";
      });
  }

  // setdisablecity
  const [disablecity, setdisablecity] = useState(false);
  function clickBlur() {
    if (inputValue?.length != 0) {
      setdisablecity(true);
    } else {
      setdisablecity(false);
    }
  }

  useEffect(() => {
    fetchAPI();
    setInputValue("");
  }, []);

  return (
    <>
      <div
        className={
          "search-engine-in se-pd  border-gray-800 airnp " +
          (active ? "disabled" : "")
        }
        onClick={(e) => documentoutside(e)}
      >
        <div className="text-black documentoutside">
          {active ? (
            <div className="city-deprtright">
              <span className="text-sm text-black city-Name ">
                <i className="fa fa-map-marker-alt text-blue-500"></i> &nbsp;{" "}
                {cityName}
              </span>
              <span className="foot rounded-lg w-full col-span-3 text-lg px-4  font-semibold ml-3">
                {airportCode}
              </span>
            </div>
          ) : (
            ""
          )}

          <span onClick={() => closewithfocus()}>
            {" "}
            <i className="fa fa-window-close close-icon cityclose" />
          </span>

          <div className={`${"input-group "}` + active}>
            <span class="input-group-text align-items-center justify-content-center">
              <span className="block truncate col-span-6 font-bold text-sm font-sans  py-1">
                <i class="fa fa-plane-departure  text-blue-500"></i>
              </span>
            </span>
            <input
              type="text"
              id="selecteds"
              className="city form-control"
              value={select === {} ? "" : select.airportName}
              autocomplete="off"
              placeholder="Country, City or Airport"
              ref={citybox}
              onChange={(e) => changecity(e)}
              onFocus={(e) => clickCity()}
              onBlur={(e) => clickBlur()}
              disabled={active ? true : false}
              required
            />
          </div>
        </div>
      </div>

      {visible === 1 && (
        <ul
          role="listbox"
          className="menuflitem-6 dataResult pl-0 w-1/3 pr-0 absolute z-50 bg-white shadow rounded w-100"
          // style={{ display: FavGen }}
        >
          {filterdData.map((item, i) => (
            <>
              <div
                className="dataItem w-full px-2 py-1 text-left reset-pointer"
                onClick={() => airportData(item)}
              >
                <div className="flex-grow-1 pr-2 text-left">
                  {item.airportName + "," + item.cityName}
                </div>
                <span className="float-right shadow foot px-4 rounded-xl">
                  {item.airportCode}
                </span>
              </div>
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default To;
