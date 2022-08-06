import React, { useState } from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import pilatus from "../../../public/Image/pilatus.jpg"
import Image from "next/image"
import Link from "next/link"

const Types=()=>{
    const [visa, setVisa] = useState("90 Days Long Term Visa")
    const [apply, setApply] = useState("Apply")
    const [filed, setField] = useState("")
    

    function applyBuuton(){
        setApply("Our Agent will call you soon")
        setField("Your Form is Filled")

    }

    return(
        <>
<div className=" px-80 py-4 ">
<div className="grid grid-cols-3">
<div className="col-span-3">
<div className="px-4  my-5">
<h1 className="px-8  text-center">Please Select Your <b className="text-orange-500">Charter</b></h1>

</div>
<div className="grid grid-cols-3 px-4 py-2">
        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4" onClick={()=>setVisa("48 Hours Transit Visa")}>
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 


        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4">
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 



        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4" onClick={()=>setVisa("48 Hours Transit Visa")}>
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 



        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4" onClick={()=>setVisa("48 Hours Transit Visa")}>
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 



        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4" onClick={()=>setVisa("48 Hours Transit Visa")}>
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 



        <div className="mr-2 mb-4">
           <div className="shadow-xl p-4 rounded-2xl">
           <div>
            <Image alt="logo" src={pilatus} className="w-full h-auto mb-4"/>
           </div>
           <div>
            <span className="text-4xl text-gray-900 font-bold">Pilatus PC 12</span><span className="float-right text-2xl text-green-700 font-semibold "> 3h 15m</span>
            <p>6 Seater Turbo Prop  </p>
           </div>
           <hr/>
           <div className=" text-sm text-xs">
           <p>The Pilatus PC-12 is a versatile single engine aircraft. It is very popular as a business aircraft. High on comfort and quality, this aircraft has stood the test of time. With the interior designed in conjunction with BMW{"'"}s Designworks division, this aircraft is a perfect choice for you to experience the thrill of flying in style</p>
           </div>
           <div>
           <Link href="/charter/detail">
            <button className=" text-white rounded-sm top-visa px-10 py-2 text-lg mt-4" onClick={()=>setVisa("48 Hours Transit Visa")}>
                Selected
            </button>
            </Link>
           </div>
           </div>
        </div> 
</div>
</div>
<div>

</div>
</div>
</div>
        </>
    )
}

export default Types;



