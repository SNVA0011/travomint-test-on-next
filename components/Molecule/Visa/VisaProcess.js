import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Container from "react-bootstrap/Container"; 

const VisaProcess = () => {
  return (
    <>
      <div className="dubaivisa-alprice bg-gray-50">
        <Container>
          <Disclosure defaultOpen="true">
            {({ open }) => (
              <>

                <Disclosure.Button className="btn btn-siteorange search-fl w-100 pr-fq-0 d-flex shadow-md flex align-items-center justify-between w-full  text-left  focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className=" text-white">Dubai Visa Process</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180 text-white ' : ''
                      } w-5 h-5`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="p-3 mt-2 rounded-2xl pb-2 text-gray-900 shadow-escm"> 
                  <ul className="text-sm list-disc pl-4">
                    <li className="font-normal mb-2 ">Visit xxxxx@yyyyy.com Select the type of visa according to your requirementxxxxx</li>
                    <li className="font-normal mb-2">Submit the documents</li>
                    <li className="font-normal mb-2">Pay the required fee</li>
                    <li className="font-normal">You will get your Dubai Visa through e-mail</li>
                  </ul>


                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Container>
      </div>
    </>
  )
}

export default VisaProcess;