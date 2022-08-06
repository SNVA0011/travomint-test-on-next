import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import Header from "../../components/Atom/Header";
import TopNav from "../../components/Atom/TopNav";
import Footer from "../../components/Atom/Footer";
import Bread from "../../components/Atom/Breadcrumb/bread";
import { authCode, cms_trav } from "../../components/static/static";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullEngine from "../../components/Molecule/Flight/FullEngine";
import SideNavs from "../../components/Atom/SideNav";

const BlogsDetailsContent = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      {props.singleblog.map((item, i) => (
        <Head key={i}>
         <title>{item.title}</title>
          <meta name="description" content={item.keywords} />
          <meta name="keywords" content={item.description} />
           <link rel="canonical" href={`https://www.travomint.com/blog/${item.titleUrl}`} />
           <link rel="alternate" href={`https://www.travomint.com/blog/${item.titleUrl}`} />
        </Head>
      ))}

      <Header />

      <SideNavs />

      <Bread title="BLOG DETAILS" html={
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

          <li className="d-inline-block align-middle">
            <Link href="/blog">
              <a className="text-white">BLOG</a>
            </Link>
          </li>
          <li className="d-inline-block align-middle mx-3 opacity-50 text-sm">
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </li>
          <li className="d-inline-block align-middle active text-white" aria-current="page">
            {props.singleblog.map((item, i) => (
              <span key={i} className="font-normal">{item.title}</span>
            ))}
          </li>
        </>
      } />



<FullEngine/>

      <Container>
        <div className="themepy-spacing">
          <div className="content-blog-default blogdeatils-wrapper">
            {props.singleblog.map((items, i) => (
              <div dangerouslySetInnerHTML={{ __html: items.content }} />
            ))}
          </div>
        </div>
      </Container>


      <Footer />
    </>
  );
};

export default BlogsDetailsContent;

export async function getServerSideProps(context) {
  const { params } = context;

  // single blogDetail
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    id: "",
    title: "",
    titleUrl: `${params.blogDetail}`,
    content: "",
    description: "",
    keywords: "",
    posttime: "",
    status: "",
    heading: "",
    img_url: "",
    siteId: "6",
    categoryName: "",
    blogdes2: "",
    blogTagsName2: "",
    extarTag: "",
    tfnHeader: "",
    tfnFooter1: "",
    tfnFooter2: "",
    tfnFooter3: "",
    tfnPopup: "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const res = await fetch(
    `${cms_trav}/travoles-content/blogdatabyid?authcode=${authCode}`,
    requestOptions
  );
  const onejson = await res.json();

  return {
    props: {
      singleblog: onejson.response,
      para: params,
    },
  };
}
