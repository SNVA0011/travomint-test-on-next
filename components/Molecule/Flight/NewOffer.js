import Image from "next/image";
import React from "react";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import offer1 from "../../../public/Image/offer_slider1.jpg";
import offer2 from "../../../public/Image/offer_slider2.jpg";
import offer3 from "../../../public/Image/offer_slider3.jpg";
import offer4 from "../../../public/Image/offer_slider4.jpg";
import offer5 from "../../../public/Image/offer_slider5.jpg";

const options = {
    margin: 30,
    responsiveClass: true,
    autoplay:true,
    loop:true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    },
  };

const NewOffer=()=>{
    return(
        <>
        <div className="grid grid-cols-1 lg:pl-60 lg:pr-40 mt-4">
            <div className=" up rounded-xl p-4 ">
            <div className=" ">
            <h1 className="font-bold text-black inline-block pl-8 pr-8 pt-2 up rounded-xl navigate">Exclusive Offers </h1>

            </div>
            <div className="pt-2">
         {/* <OwlCarousel className="slider-items owl-carousel" {...options}> */}
         <div className="grid grid-cols-5">
         <div>
                        <Image alt="props" src={offer1} className=" w-full"></Image>
                    </div>
                    <div>
                        <Image alt="props" src={offer2} className="w-full"></Image>
                    </div>
                    <div>
                        <Image alt="props" src={offer3} className="w-full"></Image>
                    </div>
                    <div>
                        <Image alt="props" src={offer4} className="w-full"></Image>
                    </div>
                    <div>
                        <Image alt="props" src={offer5} className="w-full"></Image>
                    </div>
         </div>
                    
        {/* </OwlCarousel> */}
            </div>
            </div>
        </div>

        </>
    )
}

export default NewOffer;