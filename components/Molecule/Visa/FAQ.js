import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
  return (
    <>
                  <hr className="hr-offphone my-0"></hr>

      <div className="dubaivisa-alprice">
        <Container> 
          <Disclosure defaultOpen="false">
            {({ open }) => (
              <>

                <Disclosure.Button className="btn btn-siteorange search-fl w-100 pr-fq-0 d-flex shadow-md flex align-items-center justify-between w-full  text-left  focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span className="text-white">FAQ</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform mt-2 rotate-180 text-white ' : ''
                      } w-5 h-5 m-0`}
                  />
                </Disclosure.Button>

              
                <Disclosure.Panel>

                <div className="faq-classic">
               <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="font-semibold"> <span className="count-fq">1</span>
         <span className="pr-2"> Do I need a visa to travel from India to Dubai ?</span>
         </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="font-semibold"><span className="count-fq">2</span>
         <span className="pr-2"> Do I need a visa to travel from India to Dubai ?</span>
         </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="font-semibold"><span className="count-fq">3</span>
         <span className="pr-2"> Do I need a visa to travel from India to Dubai ?</span>
         </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header className="font-semibold"><span className="count-fq">4</span>
         <span className="pr-2"> Do I need a visa to travel from India to Dubai ?</span>
         </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="font-semibold"><span className="count-fq">5</span>
         <span className="pr-2"> Do I need a visa to travel from India to Dubai ?</span>
         </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

                </Disclosure.Panel>

              </>
            )}
          </Disclosure>
        </Container>
      </div>
    </>
  )
}

export default FAQ;