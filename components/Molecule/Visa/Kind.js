import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// const options = {
//     margin: 30,
//     responsiveClass: true,
//     autoplay:true,
//     loop:true,
//     smartSpeed: 1000,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         250: {
//             items: 2,
//         },
//         500: {
//             items: 3,
//         },
//         750: {
//             items: 4,
//         },
//         1000: {
//             items: 5,
//         }
//     },
//   };

const Kind=()=>{
    return(
        <>
        <div className="grid grid-cols-1 mt-4 bg-gray-200 mb-2 px-36 ">
            <div className="   pr-4 pr-0 ">
            <div className="  mt-3">
            <h1 className="font-bold text-gray-800 text-3xl inline-block rounded-xl ">The cost for different kinds of Visas is as follows
 </h1>

            </div>
            <div className="pt-2 pb-4">
         {/* <OwlCarousel className="slider-items owl-carousel " {...options}> */}
                    <div className=" border-4 border-white rounded-xl">
                       <div className="text-center px-2  py-2">
                           <p className="text-black text-lg font-bold">96 Hours Transit Visa</p>
                           <h4 className="text-4xl text-blue-500 font-bold"> <i className="fa fa-rupee-sign"></i> 2,499</h4>
                       </div>
                    </div>
                    
                    <div className=" border-4 border-white rounded-xl">
                       <div className="text-center px-2  py-2">
                           <p className="text-black text-lg font-bold">14 Days Tourist Visa</p>
                           <h4 className="text-4xl text-blue-500 font-bold"> <i className="fa fa-rupee-sign"></i> 6,999</h4>
                       </div>
                    </div>

                    <div className=" border-4 border-white rounded-xl">
                       <div className="text-center px-2  py-2">
                           <p className="text-black text-lg font-bold">Express 14 Days Tourist Visa</p>
                           <h4 className="text-4xl text-blue-500 font-bold"> <i className="fa fa-rupee-sign"></i> 2,499</h4>
                       </div>
                    </div>

                    <div className=" border-4 border-white rounded-xl">
                       <div className="text-center px-2  py-2">
                           <p className="text-black text-lg font-bold">30 Days Tourist Visa</p>
                           <h4 className="text-4xl text-blue-500 font-bold"> <i className="fa fa-rupee-sign"></i> 2,499</h4>
                       </div>
                    </div>

                    <div className=" border-4 border-white rounded-xl">
                       <div className="text-center px-2  py-2">
                           <p className="text-black text-lg font-bold">96 Hours Transit Visa</p>
                           <h4 className="text-4xl text-blue-500 font-bold"> <i className="fa fa-rupee-sign"></i> 2,499</h4>
                       </div>
                    </div>

        {/* </OwlCarousel> */}
            </div>
            </div>
        </div>

        </>
    )
}

export default Kind;