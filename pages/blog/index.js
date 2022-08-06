import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import TopNav from "../../components/Atom/TopNav";
import Header from "../../components/Atom/Header";
import Footer from "../../components/Atom/Footer";
import { authCode, cms_trav } from "../../components/static/static";
import Bread from "../../components/Atom/Breadcrumb/bread";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import moment from "moment";
import Head from "next/head";
import SideNavs from "../../components/Atom/SideNav";



const Blogs = (props) => {
  const path = "https://www.travomint.com";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const myLoader = ({ src, width, quality }) => {
    return `https://www.travomint.com//resources/images/blog/${src}?w=${width}&q=${quality || 75
      }`;
  };



  return (
    <>
      {/* <Header />
      <SideNavs /> */}
      <Head >
         <title>Blog- Travomint</title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
           <link rel="canonical" href={`https://www.travomint.com/blog/`} />
           <link rel="alternate" href={`https://www.travomint.com/blog`} />
        </Head>

      <Bread title="Blog" html={
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
            Blog
          </li>
        </>
      } />

      <div className="themepy-spacing">
        <Container>
          <div className="row card-blogitem-row">
            {props.singleblog.map((items, i) => (
              <>
                <Col xs={12} md={6} lg={4}>
                  <div className="card-blogitem">
                    <Link
                      href={`/blog/${items.titleUrl}`}
                      className="image_area_partition"
                    >
                      <a className="rounded-2xl overflow-hidden d-block relative card-blogitem-img">
                        <div className="h-100 img-sh">
                          <Image
                            loader={myLoader}
                            src={items.imgUrl == null ? "IFR.jpg" : items.imgUrl}
                            alt="Picture of the author"
                            layout="fill"
                          />
                        </div>

                        <div className="date-asv-blog absolute">
                          {/* {new Date(items.posttime).getDate() +
                              "/" +
                              (new Date(items.posttime).getMonth() + 1) +
                              "/" +
                              new Date(items.posttime).getFullYear()} */}  
                          <span className="date d-block">{moment(items.posttime).format("DD").toString()}</span>
                          <span className="month">{moment(items.posttime).format("MMM").toString()}, </span>
                          <span className="year">{moment(items.posttime).format("YYYY").toString()}</span>

                        </div>
                      </a>
                    </Link>
                    <div className="blogaddalist-inner travo-card  text-left mt-3">
                      <Link
                        href={`/blog/${items.titleUrl}`}>
                        <a className="h4 title font-bold text-blue-600 travo-h3-link">
                          <h3 className="text-lg travo-h3"> {items.title}</h3>
                        </a>
                      </Link>
                      <p className="text-sm-15 mb-0 block-with-ellipsis">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </Col>
              </>
            ))}
          </div>
        </Container>
      </div>


      {/* <Footer /> */}
    </>
  );
};

export default Blogs;

export async function getServerSideProps() {
  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    contentId: "",
    pageType: "",
    pageValue: "",
    pageName: "",
    metaTitle: "",
    metaKeyword: "",
    metaDesc: "",
    otherMeta: "",
    dealCode: "",
    dealTitle: "",
    contentTitle: "",
    contentData: "",
    contentImage: "",
    siteId: "6",
    status: "",
    count: "",
    url: "",
    modifyBy: "",
    modifyDate: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    `${cms_trav}/travoles-content/showblogdata?authcode=${authCode}`,
    requestOptions
  );
  const onejson = await res.json();

  return {
    props: {
      singleblog: onejson.response,
    },
  };
}
