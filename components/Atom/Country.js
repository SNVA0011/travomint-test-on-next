import Image from "next/image";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { language, currency } from "../Api/currency";
import { CURRENCY } from "../Redux/ActionType";
import Row from "react-bootstrap/Row";

const Country = () => {
  const dispatch = useDispatch();
  const { currency_Name_rd } = useSelector((item) => item.currency_Reducer);


  const [languages, setLanguages] = useState("English");
  const [currencys, setcurrencys] = useState(currency_Name_rd.currency_Name);



  const getCurrency = (item) => {
    dispatch({ type: CURRENCY, payload: item });
    setcurrencys(item.currency_Name);
  };

  const getLanguage = (item) => {
    setLanguages(item.language);
  };


  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com/resources/images/${src}`
  }

  return (
    <Dropdown> 

      <div class="btn-group selectgetbtn-btngroup">
      <Dropdown.Toggle
        variant="danger"
        className="btn btn-siteorange search-fl selectgetbtn btn-1"
      >
        {languages}
      </Dropdown.Toggle>
      <Dropdown.Toggle
        variant="danger"
        className="btn btn-siteorange search-fl selectgetbtn btn-2">
        {currency_Name_rd.currency_Name}
      </Dropdown.Toggle>
</div>

      <Dropdown.Menu className="selectgetlang">
      <h4 className=" text-base text-dark font-semibold">Select Language </h4>

      <Row className="formrow-exm exp-2"> 
          {language.map((item) => {
            return (
              <div className="col-6 col-md-4 select-currency">
                <Dropdown.Item className="p-0">
                  <button
                    value={item.language}
                    className={"button-infant btn-block "+(languages === item.language? 'active':'')}
                    href=""
                    onClick={(e) => getLanguage(item)}
                  >
                    {item.language}
                  </button>
                </Dropdown.Item>
              </div>
            );
          })}
        </Row>

        <hr className="my-4"/>

        <h4 className="text-base text-dark font-semibold">Select Currency </h4>

        <Row className="formrow-exm"> 
          {currency.map((item, i) => {
            return (
              <div key={i} className="col-3 select-currency mb-3">
                <Dropdown.Item className="p-0">
                  <button
                    className={"btn-currency-name btn btn-outline-secondary btn-block d-flex align-items-center " +(currencys === item.currency_Name? 'active':'')} 
                    // value={item.currency_Name}
                    onClick={() => getCurrency(item)}>
                    {/* <Image
                    alt="logo"
                      src={`https://www.travomint.com/resources/images/${item.currency_Logo_Img}`}
                      className="w-1/6 absolute left-7 "
                    />{" "} */}
                    <span className="align-middle d-inline-block mr-2 imgflag"> 
                    <Image
                      loader={myLoader}
                      src={item.currency_Logo_Img}
                      alt="G8"
                      className=""
                      width={20}
                      height={20}
                    /> 
                       </span>
                    <span className="align-middle d-inline-block currency-name-it">
                    {item.currency_Name}
                    </span>
                  </button>
                </Dropdown.Item>
              </div>
            );
          })}
        </Row>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Country;
