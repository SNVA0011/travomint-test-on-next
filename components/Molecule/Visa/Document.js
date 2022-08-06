import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Document = () => {
  return (
    <>
      <div className="dubaivisa-alprice">
        <Container>
          <Disclosure defaultOpen="true">
            {({ open }) => (
              <>

                <Disclosure.Button className="btn btn-siteorange search-fl w-100 pr-fq-0 d-flex shadow-md flex align-items-center justify-between w-full  text-left  focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className="text-white">Documents required for Dubai Visa Online</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180 text-white' : ''
                      } w-5 h-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-3 mt-2 rounded-2xl pb-2 text-gray-900 shadow-escm">
                  <ul className="text-sm list-disc pl-4">
                    <li className="font-normal mb-2 ">A valid passport – front and last page</li>
                    <li className="font-normal mb-2 ">ID and address proof- PAN card and Adhar card/ Voter ID/ Driving License or any other document mention on the website</li>
                    <li className="font-normal mb-2 ">Passport size photograph with white background</li>
                    <li className="font-normal">Confirmed return air ticket</li>
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

export default Document;