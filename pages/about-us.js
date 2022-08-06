import React from "react";
import Bread from "../components/Atom/Breadcrumb/bread";
import Footer from "../components/Atom/Footer";
import Header from "../components/Atom/Header";
import Navs from "../components/Atom/Nav";
import TopNav from "../components/Atom/TopNav";
import HeaderB from "../components/Molecule/Blog/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import SideNavs from "../components/Atom/SideNav";
import Head from "next/head";

const About = () => {
  return (
    <>
    <Head>
    <title>{`About US | Travomint`}</title>
          <meta name="description" content={`Travomint is an online travel Agency, Providing services to book cheap flight tickets, hotels, car rentals, vacation packages etc... To get expert advice contact Travomint.`} />
          <meta name="keywords" content={``} />
           <link rel="canonical" href={`https://www.travomint.com/about-us/`} />
           <link rel="alternate" href={`https://www.travomint.com/about-us/`} />

    </Head>
      <Header />
      <SideNavs />

      <Bread title="About Us" html={
        <>
          <li className="d-inline-block align-middle">
            <Link href="/">
              <a>
                <FontAwesomeIcon icon="fa-solid fa-house" className="mr-2" />
                Home</a>
            </Link>
          </li>
          <li className="d-inline-block align-middle mx-3 opacity-50 text-sm">
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </li>
          <li className="d-inline-block align-middle active text-white" aria-current="page">
            About Us
          </li>
        </>
      } />

      

      <Container>
        <div className="themepy-spacing">
          <span className="badge badge-site-orange">About Us</span> 
          <div className="mt-3 text-sm-15 text-justify">
            Founded in 2017, Travomint is a pioneer in offering online travel services for years with a user base of 5 million. Headquarter Based in Waldorf, Maryland (USA) . It operates in USA, UK and India currently and It has a dedicated team of specialized people who put in tremendous efforts to change the scenario of the travel industry. Travomint offers travelers ease of booking travel destinations online at attractive prices. While providing constant assistance to the customers.
            <br /><br />
            More than 600 notable passenger airlines are operating in the world. Some of them operate autonomously, some of them cooperate with others, creating alliances to be able to offer more destinations. Unfortunately, many low-cost carriers do not have cooperation agreements with the big airlines, severely limiting the combination options available to travelers.
            <br /><br />
            Travomint removes this limitation by allowing travelers to create itineraries from nearly limitless flight combinations. They provide services almost 25% cheaper than the competition, while in some cases the savings can be as high as 60%.
            <br /><br />
            By collecting real-time flight data from countless airlines and flight data aggregators and Travomint stores it in their high-end database. For busy consumers, it would take days to find the optimal flight combination to match their needs. With Travomint, one can just fill out minor details about travel plans - and yes! it is normal if one does not know the destination yet - the unique and cutting-edge algorithm does all the work for you in a matter of seconds, giving out the best deals.
          </div>

        </div>
      </Container>
      <Navs />
      <Footer />
    </>
  );
};

export default About;
