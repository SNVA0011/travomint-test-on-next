import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const VisaPrice = () => {
  return (
    <>
      <div className=" px-80 py-4 ">
        <div className="grid grid-cols-1 px-4 py-2 up">
          <Disclosure defaultOpen="true">
            {({ open }) => (
              <>

                <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className="text-lg font-bold navigate top-visa rounded-xl px-10 py-2">Dubai Visa Price</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-900`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pt-1  rounded-2xl pb-2 text-gray-900">
                  <br />
                  <span className="text-gray-500 font-normal text-xs">You get the option of short term and long term visas ranging from 96 hours to 9 days for Dubai. The choice of the right Visa depends on the nature and duration of your trip. We
                    provide you with the facility Dubai visa for single and multiple entries at the most economical price and minimum documents. We provide Visa from cities like Pune, Banglore,
                    Delhi, Mumbai, Kochi, Hyderabad, Chennai and many more according to the requirement of the passengers. Our Visa cost includes-</span>
                  <br />
                  <br />
                  <input type="radio" /><span className=" text-xs font-semibold text-gray-800"> Consular fee</span><br />
                  <input type="radio" /><span className=" text-xs font-semibold text-gray-800"> Coronavirus and other medical insurance</span><br />
                  <input type="radio" /><span className=" text-xs font-semibold text-gray-800"> Service charges</span><br />
                  <input type="radio" /><span className=" text-xs font-semibold text-gray-800"> Other taxes applicable</span><br />

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  )
}

export default VisaPrice;