import React from "react";
import Bottom from "./Bottom";
import Carousel from "react-bootstrap/Carousel";
import appImg from "../../public/Image/one-bg.png";
import info from "../../public/Image/covidinfo.png";
import Image from "next/image";
const Graterates = () => {
  return (
    <>
      <div className="col-xl-6 col-12">
        <div className="promo wp next-carosal covid-restriction">
        
          <div className="w-100">
            <Carousel className="px-10">
              <Carousel.Item>
              <div className="d-flexvpromo">
                <div className="d-flex flex-column flex-sm-row item_1 w-100">
                  <div className="mrpxtrip info">
                    <Image alt="logo" src={info} width={100} height={100}/>
                  </div>
                  <div className="sliderZoom flex-grow-1 pt-1 pb-2 text-sm-left">
                    <h2>Want to know about covid 19 Travel Restriction?
</h2>
                    <p className="text-gray-500"> 
                    Check updated information regarding possible restrictions that might impact visiting your destination
                    </p>
                    <a href="https://www.who.int/docs/default-source/coronaviruse/covid-strategy-update-14april2020.pdf" target="_blank" className="btn travomint-color-bg text-white">Learn More</a>
                  </div>
                </div> 
                </div> 
              </Carousel.Item>

              <Carousel.Item>
              <div className="d-flexvpromo">
                <div className="d-flex flex-column flex-sm-row align-items-lg-center item_2 w-100">
                  <div className="mrpxtrip">
                    <div className="media-objectmobile">
                    <Image alt="logo" src={appImg} width={100} height={200}/>
                    </div>
                  </div>
                  <div className=" pt-2 text-left">
                     <h2>Book in the Travomint App!</h2>
                    <ul className="list-disc-circle text-gray-500"> 
                      <li>Earn 2x points on every flight, hotel and car booking</li>
                      <li>Get live trip updates on the go</li>
                      <li>24/7 chat support</li>
                    </ul> 
                  </div> 
                  </div> 
                </div> 
              </Carousel.Item>
            </Carousel>
            </div>
    
        </div>
      </div>
    </>
  );
};

export default Graterates;
