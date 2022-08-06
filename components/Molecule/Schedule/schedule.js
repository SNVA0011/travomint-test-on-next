import React from "react";
import offer from "../../../public/Image/offer_img.jpg";
import AI from "../../../public/Image/AI.png";
import G8 from "../../../public/Image/G8.png";
import SG from "../../../public/Image/SG.png";
import Uk from "../../../public/Image/UK.png";
import I5 from "../../../public/Image/I5.png";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Schedules = () => {
  return (
    <>
      <div className="grid grid-cols-8 gap-4 px-28 mt-4">
        <div className="col-span-2 p-1 ">
          <Image src={offer} className="w-full up" />
          <div className="grid grid-cols-1 up mt-4 ">
            <p className="border-l-8 border-blue-500 px-3 font-bold py-2">
              {" "}
              Top Domestic Airlines from Delhi to Mumbai
            </p>

            <div className="grid grid-cols-9 navigate px-3">
              <div>
                <Image src={AI} />
              </div>
              <div className="col-span-8 p-2">
                <p className="text-xs pl-2">
                  Delhi Mumbai Air India Limited Flights
                </p>
              </div>
            </div>

            <div className="grid grid-cols-9 navigate px-3">
              <div>
                <Image src={G8} />
              </div>
              <div className="col-span-8 p-2">
                <p className="text-xs pl-2"> Delhi Mumbai Air Sahara Flights</p>
              </div>
            </div>

            <div className="grid grid-cols-9 navigate px-3">
              <div>
                <Image src={SG} />
              </div>
              <div className="col-span-8 p-2">
                <p className="text-xs pl-2">Delhi Mumbai Go Air Flights</p>
              </div>
            </div>

            <div className="grid grid-cols-9 navigate px-3">
              <div>
                <Image src={Uk} />
              </div>
              <div className="col-span-8 p-2">
                <p className="text-xs pl-2">
                  Delhi Mumbai IndiGo Airlines Flights
                </p>
              </div>
            </div>

            <div className="grid grid-cols-9  px-3 navigate">
              <div>
                <Image src={I5} />
              </div>
              <div className="col-span-8 p-2 ">
                <p className="text-xs pl-2">Delhi Mumbai Jet Airways Flights</p>
              </div>
            </div>

            <div className="grid grid-cols-9  px-3 navigate">
              <div>
                <Image src={AI} />
              </div>
              <div className="col-span-8 p-2">
                <p className="text-xs pl-2">Delhi Mumbai Spicejet Flights</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 up mt-4 ">
            <p className="border-l-8 border-blue-500 px-3 text-2xl font-bold py-2">
              {" "}
              Popular Flights To Mumbai
            </p>
            <div className="px-3 pb-2">
              <table>
                <tr className="font-bold up">
                  <th className="font-bold text-lg pl-2">Airline</th>
                  <th className="font-bold  text-center">Dep. Date</th>
                  <th className="font-bold text-right pr-2">Lowest Fare</th>
                </tr>
                <br />
                <tr className="navigate ">
                  <td className="w-1/3 ">
                    <Image src={AI} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    May 03 2022
                  </td>
                  <td className=" text-xs float-right font-semibold btn btn-shivam ">
                    2455.00
                  </td>
                </tr>

                <tr className="navigate ">
                  <td className="w-1/3 ">
                    <Image src={SG} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Jan 15 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    2697.00
                  </td>
                </tr>

                <tr className=" navigate">
                  <td className="w-1/3 ">
                    <Image src={I5} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Feb 03 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    3754.00
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 up mt-4 ">
            <p className="border-l-8 border-blue-500 px-3 text-2xl font-bold py-2">
              {" "}
              Popular Flights To Mumbai
            </p>
            <div className="px-3 pb-2">
              <table>
                <tr className="font-bold up relative">
                  <th className="font-bold text-lg pl-2">Airline</th>
                  <th className="font-bold  text-center">Dep. Date</th>
                  <th className="font-bold text-right pr-2">Lowest Fare</th>
                </tr>
                <br />
                <tr className="navigate ">
                  <td className="w-1/3 ">
                    <Image src={G8} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    May 03 2022
                  </td>
                  <td className=" text-xs float-right font-semibold btn btn-shivam ">
                    2455.00
                  </td>
                </tr>

                <tr className="navigate ">
                  <td className="w-1/3 ">
                    <Image src={Uk} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Jan 15 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    2697.00
                  </td>
                </tr>

                <tr className=" navigate">
                  <td className="w-1/3 ">
                    <Image src={AI} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Feb 03 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    3754.00
                  </td>
                </tr>

                <tr className=" navigate">
                  <td className="w-1/3 ">
                    <Image src={I5} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Feb 03 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    3754.00
                  </td>
                </tr>

                <tr className=" navigate">
                  <td className="w-1/3 ">
                    <Image src={SG} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Feb 03 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    3754.00
                  </td>
                </tr>

                <tr className=" navigate">
                  <td className="w-1/3 ">
                    <Image src={G8} className="w-1/2 " />
                  </td>
                  <td className="text-xs font-semibold text-center">
                    Feb 03 2022
                  </td>
                  <td className="float-right text-xs font-semibold btn btn-shivam">
                    3754.00
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 up mt-4 ">
            <p className="border-l-8 border-blue-500 px-3 text-2xl font-bold py-2">
              {" "}
              Popular Flights To Mumbai
            </p>
            <div className="px-3 pb-2">
              <div className="foot text-white rounded-t-xl text-center text-4xl font-bold py-2">
                Need Help For Booking?
              </div>
              <div className="down rounded-b-xl text-center font-bold text-2xl  py-3">
                <i className="fa fa-phone-alt"></i> +91-8010000200
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className=" up p-2">
            <p className="text-xl text-black font-bold mb-2">
              Showing results for Delhi to Mumbai Flight
            </p>
            <span className="text-sm">
              Delhi to Mumbai Flights - Book a flight from Delhi to Mumbai and
              get upto Rs 1000/- off. To avail this offer apply promo code
              {"'"}TRAVOMINT{"'"} while booking your flight via Travomint. We offer
              budget-friendly pricing and commendable services to travellers
              across the World.{" "}
            </span>
          </div>

          <div className="up p-2 mt-2">
            <p className="text-xl text-black font-semibold">
              Delhi to Mumbai Flight Details
            </p>
            <p className="text-3xl text-black font-bold">
              Book Delhi To Mumbai Cheap Flight Tickets Online
            </p>
            <p className="text-2xl text-black font-semibold">
              Plan travel from National capital to industrial capital of India
            </p>
            A large number of flights operate between Delhi and Mumbai due to a
            surge in the number of passengers owing to their businesses or
            tours. Tourism is also an attraction in both places. Delhi and
            Mumbai both acquire a special place in History. Both the places have
            a historical record of being the center of politics in national
            history. A large number of flights have been operated between both
            the places. It takes round about 2 to 2.5 hours in reaching Mumbai
            from Delhi. The flights operated by Jet lite, Air Indi, Go Air,
            Indigo, Spicejet, Vistara and many others covers a distance of
            approx 1153 km
            <p className="text-xl text-black mt-4">
              Direct Flights between Delhi to Mumbai
            </p>
            The distance between Delhi and Mumbai should not bother you now.
            IndiGo, Vistara, SpiceJet, Air India, GoAir, and AirAsia provide
            uninterrupted services which save your time and enable you to plan a
            trip at any point in time as the flights are operated on a daily
            basis. Now you no longer need to worry whether it is a travel trip
            or a business trip. You shall not feel even a bit of inconvenience
            as to how would you manage your trip as the services now have
            reached new heights.
            <br />
            <br />
            You can save the last time unlikely incidents and high fares by
            booking the tickets as early as possible, if possible. Booking of
            tickets at an early stage of 60-90 days provides you maximum
            benefit.
            <br />
            <br />
            <p className="text-xl font-bold text-black ">
              Following Airlines Operating Between Delhi and Mumbai:
            </p>
            <br />
            <h3 className="text-black">IndiGo -</h3>
            <p className="mb-1 text-black">
              <b>Delhi to Mumbai:</b>
            </p>
            <p className="mb-1 text-black">
              <b>Non-stop flights:</b> 6.10 AM, 8.55 AM, 9.55 AM, 10.10 AM,
              12.00 PM, 2.00 PM, 5.45 PM, 7.05PM, 8.30 PM
            </p>
            <p className="mb-1 text-black">
              <b>1 stop flights:</b> 6.20 AM, 8.50 AM, 9.45 AM, 10.40 AM, 11.25
              AM, 1.10 PM
            </p>
            <br />
            <h3 className="text-black">SpiceJet -</h3>
            <p className="mb-1 text-black">
              <b>Delhi to Mumbai:</b>
            </p>
            <p className="mb-1 text-black">
              <b>Non-stop flights:</b> 6.25 AM, 8.50 AM, 2.20 PM, 8.50 PM
            </p>
            <p className="mb-1 text-black">
              <b>1 stop flights:</b> 11.20 AM, 11.30 AM, 2.20 PM, 3.35 PM
            </p>
            <br />
            <h3 className="text-black">AirAsia -</h3>
            <p className="mb-1 text-black">
              <b>Delhi to Mumbai:</b>
            </p>
            <p className="mb-1 text-black">
              <b>Non-stop flights:</b> 6.35 AM, 6.50 AM, 6.40 PM, 8.20 PM
            </p>
            <p className="mb-1 text-black">
              <b>1 stop flights:</b> 11.10 AM, 1.10 PM, 4.30 PM,
            </p>
            <br />
            <h3 className="text-black">Air India -</h3>
            <p className="mb-1 text-black">
              <b>Delhi to Mumbai:</b>
            </p>
            <p className="mb-1 text-black">
              <b>Non-stop flights:</b> 7.00 AM, 8.00 AM, 9.00 AM, 10.40 AM,3.05
              PM, 5.50 PM 7.00 PM, 8.00 PM
            </p>
            <p className="mb-1 text-black">
              <b>1 stop flights:</b>6.00 AM, 8.00 AM,8.40 AM, 9.45 AM
            </p>
            <p className="mb-1 text-black">
              <b>2 stop flights:</b>5.15 AM, 4.35 PM, 9.25 PM
            </p>
            <br />
            <h3 className="text-black">GoAir -</h3>
            <p className="mb-1 text-black">
              <b>Delhi to Mumbai:</b>
            </p>
            <p className="mb-1 text-black">
              <b>Non-stop flights:</b> 2.40 AM, 6.50 AM, 8.00 AM,10.55 AM, 2.30
              PM 3.45 PM, 6.20 PM, 7.45 PM, 8.50 PM, 10.45 PM,{" "}
            </p>
            <p className="mb-1 text-black">
              <b>1 stop flights:</b>7.55 AM, 10.20 AM, 4.45 PM, 8.05 PM
            </p>
            <p className="mb-1 text-black">
              <b>2 stop flights:</b>10.20 AM, 10.40 AM
            </p>
            <br />
            <br />
            <p className="text-3xl font-bold text-black">
              Book Your Tickets and Save with Us at Travomint!
            </p>
            Travomint has been providing uninterrupted services for quite a long
            time. We have never our passengers down. We provide a comparison of
            fares of all the flights to your destination with an updated fare
            list on daily basis. You are capable of taking a good decision by
            striking the most favorable deal. We never let you get stuck in the
            fare comparison. You just need to visit our website and we keep you
            posted at the most optimum levelThe fare between Delhi to Mumbai may
            vary from INR 2200 to 15000
            <br />
            <br />
            <p className="text-lg text-black">Facilities at Bombay Airport</p>
            <div className="px-4">
              <li>
                {" "}
                Wi-Fi is available for all the passengers at Mumbai Airport
              </li>
              <li> Wi- Fi throughout the passenger area</li>
              <li> Children care’s room</li>
              <li>
                {" "}
                Baby strollers are provided by submitting your ID at the
                airport.
              </li>
              <li> Rooms for Prayer and meditation</li>
              <li> Wheelchair assistance for the needy passengers</li>
              <li> Luggage storage</li>
              <li> Smoking area</li>
            </div>
            <br />
            <p className="text-lg text-black ">Facilities at Delhi Airport</p>
            <div className="px-4">
              <li> Free access to wi-fi in the premises of the airport</li>
              <li> Free of cost Medical Care at the airport</li>
              <li> Prayer room for the passengers waiting at the airport</li>
              <li> Counter for currency exchange for the passengers</li>
              <li>
                {" "}
                Information about hotels in the surroundings of the airport
              </li>
              <li>
                {" "}
                Separate counter for the Lost and Found baggage or belongings.
              </li>
            </div>
            <br />
            <h4 className="text-black font-bold">Famous places:</h4>
            <p className="text-black font-bold">In Mumbai:</p>
            Gateway of India, Sanjay Gandhi National Park, Red Carpet Wax
            Museum, Haji Ali Dargah, Elephanta Caves, Siddhivinayak Temple,
            Chhatrapati Shivaji Terminus,
            ChhatrapatiShivajiMaharajVastuSangrahalaya, ISKCON Temple,
            GirgaonChowpatty, Shri Mahalakshmi Temple, Powai Lake, Kidzania,
            Taraporewala Aquarium, VeermataJijabaiBhosale Zoo, EsselWorld, Juhu
            Beach, Marine Drive, Chota Kashmir and many more.
            <br />
            <br />
            <p className="text-black font-bold">In Delhi:</p>
            The Red Fort, Qutub Minar, Gurudwara Bangla Sahib, The Lotus Temple,
            India Gate, Jama Masjid, Humayun{"'"}s Tomb, Akshardham, Purana Qila,
            Rajpath and Rashtrapati Bhawan, Gandhi smriti and mahatma Gandhi
            memorial, The Jantar Mantar observatory, and many more.
          </div>

          <div className="up py-8 mt-4">
            <h3 className="text-black text-3xl font-bold pl-4 pb-2">
              Check out this video for more details:
            </h3>
            <iframe
              width="100%"
              height="700"
              src="https://www.youtube.com/embed/ybFk_9rNtA0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="up mt-4 mb-8">
            <h3 className="border-l-8 border-blue-500 pl-4 text-black py-2">
              Frequently Asked Questions
            </h3>

            <Disclosure defaultOpen="true">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex up justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="text-xl  rounded-xl px-10 py-2">
                      Ques: How many flights operate between Delhi to Mumbai?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform mt-2 rotate-180" : ""
                      } w-5 h-5 mt-2 text-gray-900`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className=" py-2 down px-14 pb-2 text-sm text-gray-900">
                    Ans: Approximately 88 flights operate between Delhi to
                    Mumbai on daily basis. These flights turn out to be 616 in a
                    week.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure defaultOpen="true">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex up  justify-between w-full px-2 py-2 text-sm font-medium text-left text-gray-900  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="text-xl  rounded-xl px-10 py-2">
                      Ques: What is the distance between Delhi to Mumbai by
                      Flight?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform mt-2 rotate-180" : ""
                      } w-5 h-5 mt-2 text-gray-900`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="py-2 down px-14 pb-2 text-sm text-gray-900">
                    Ans: The time consumed in traveling between Delhi and Mumbai
                    varies according to the route chosen by the flight- By road:
                    1430 KMS By flight: 1153 KMS Time taken by the flights
                    depends on the route chosen by the airlines to travel
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;
