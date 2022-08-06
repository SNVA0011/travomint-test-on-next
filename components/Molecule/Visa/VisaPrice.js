import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VisaPrice = () => {
  return (
    <>
      <div className="dubaivisa-alprice">
        <Container>
          <Disclosure defaultOpen="true">
            {({ open }) => (
              <>

                <Disclosure.Button className="btn btn-siteorange search-fl w-100 pr-fq-0 d-flex shadow-md flex align-items-center justify-between w-full  text-left  focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                <span className=" text-white">Dubai Visa Price</span>

                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180  text-white' : ''
                      } w-5`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="p-3 mt-2 rounded-2xl pb-2 text-gray-900 shadow-escm">
                  <p className="text-gray-500 font-normal text-sm leading-loose mb-3">You get the option of short term and long term visas ranging from 96 hours to 9 days for Dubai. The choice of the right Visa depends on the nature and duration of your trip. We
                    provide you with the facility Dubai visa for single and multiple entries at the most economical price and minimum documents. We provide Visa from cities like Pune, Banglore,
                    Delhi, Mumbai, Kochi, Hyderabad, Chennai and many more according to the requirement of the passengers. Our Visa cost includes-</p>

 
                  <Row>
                    <Col className="mb-3" xs={12} >
                      <div className="border-top "></div>
                    </Col>
                    <Col xs={12}>
                      <div className="form-check mb-2">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="optradio" />
                          <span className="text-sm font-normal text-gray-800"> Consular fee</span>
                        </label>
                      </div>

                    </Col>

                    <Col xs={12}>
                      <div className="form-check mb-2">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="optradio" />
                          <span className="text-sm font-normal text-gray-800"> Coronavirus and other medical insurance</span>
                        </label>
                      </div>

                    </Col>

                    <Col xs={12}>
                      <div className="form-check mb-2">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="optradio" />
                          <span className="text-sm font-normal text-gray-800"> Service charges</span>

                        </label>
                      </div>
                    </Col>

                    <Col xs={12}>
                      <div className="form-check mb-3">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="optradio" />
                          <span className="text-sm font-normal text-gray-800"> Other taxes applicable</span>

                        </label>
                      </div>
                    </Col>


                  </Row>

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </Container>
      </div>
    </>
  )
}

export default VisaPrice;