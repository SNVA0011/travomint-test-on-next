import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const VisaProcess = () => {
  return (
    <>
      <div className=" px-80 py-4 ">
        <div className="grid grid-cols-1 px-4 py-2 up">
          <Disclosure defaultOpen="true">
            {({ open }) => (
              <>

                <Disclosure.Button className="flex justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className="text-lg font-bold top-visa navigate rounded-xl px-10 py-2">Dubai Visa Process</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-900`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-2 pt-1  rounded-2xl pb-2 text-gray-600 text-xs">
                  <br />
                  <div className="text-xs">
                    <li className="text-sm font-semibold ">Visit xxxxx@yyyyy.com Select the type of visa according to your requirementxxxxx</li>
                    <li className="text-sm font-semibold">Submit the documents</li>
                    <li className="text-sm font-semibold">Pay the required fee</li>
                    <li className="text-sm font-semibold">You will get your Dubai Visa through e-mail</li>
                  </div>


                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  )
}

export default VisaProcess;