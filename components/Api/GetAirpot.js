import axios from "axios";
import React, { useEffect } from "react";
import { authCode, domain, testapi } from "../static/static";

const GetAirpot=()=>{
    async function AirpotData(){
        const getairpotdataapi = await fetch(
          `${testapi}/Flights/GetAirport?authcode=${authCode}&data`
        );
        const jsondata= await getairpotdataapi.json();
    }

    useEffect(()=>{
        AirpotData();  
      },[])
    return(
        <>
        <h1>ello</h1>
        
        
        </>
    )
}
export default GetAirpot;