import React from "react";

import offer1 from "../../../public/Image/offer_deal1.svg";
import offer2 from "../../../public/Image/offer_deal2.svg";

import googlePlay from "../../../public/Image/google-play.png";
import PhoneIC from "../../../public/Image/phone_icon.png";
import apple from "../../../public/Image/apple.png";
import downloadApp from "../../../public/Image/download-app.jpg";

import QrAnd from "../../../public/Image/android-travomint.svg";
import Image from "next/image";




const options = {
    margin: 30,
    responsiveClass: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        250: {
            items: 2,
        },
        500: {
            items: 3,
        },
        750: {
            items: 4,
        },
        1000: {
            items: 5,
        }
    },
};

const Deals = () => {
    return (
        <>

            

<div className="grid grid-cols-1 mt-0 lg:mt-4 mb-0 lg:mb-2 lg:pl-40 lg:pr-40 lg:block hidden mt-6 spacing-b ">
                            <div className="  pr-0 lg:pr-4 pr-0 ">
                                <div className="  mt-3  text-left ">
                                    <h2 className="font-bold text-black">Partners Deals & Offers
                                    </h2>


                                </div>
                                <div className="pt-2 pb-4">
                                    {/* <OwlCarousel className="slider-items owl-carousel " {...options}> */}
                                    <div className="grid grid-cols-5">
                                        <div className="border-4 border-white shadow">
                                            <Image alt="props" src={offer1} className=" w-full" ></Image>
                                        </div>



                                        <div className="border-4 border-white shadow">
                                            <Image alt="props" src={offer2} className="w-full" ></Image>
                                        </div>
                                        <div className="border-4 border-white shadow">
                                            <Image alt="props" src={offer1} className="w-full" ></Image>
                                        </div>
                                        <div className="border-4 border-white shadow">
                                            <Image alt="props" src={offer2} className="w-full" ></Image>
                                        </div>
                                        <div className="border-4 border-white shadow">
                                            <Image alt="props" src={offer1} className="w-full" ></Image>
                                        </div>
                                        </div>
                                    {/* </OwlCarousel> */}
                                </div>
                            </div>
                        </div>



        </>
    )
}

export default Deals;