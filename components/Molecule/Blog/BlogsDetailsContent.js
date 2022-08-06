import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Helmet } from "react-helmet";
// import BreadHero from '../Atoms/BreadHero';

import { Link, useParams } from "react-router-dom";

import loading from "../../../public/Image/blogs6.jpg";
import { authCode, cms_trav } from "../../static/static";



const BlogsDetailsContent = () => {
  const path = "https://www.travomint.com";
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const url=useParams()


  function Getdata() {
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

    fetch(
      `${cms_trav}/travoles-content/showblogdata?authcode=${authCode}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.response);
        setLoad(true);
      })
      // .catch((error) => console.log("error"));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    Getdata();

  }, []);


  return (
   <>
   <div className='blogadda'>

      <div title="Blog Details" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog Details</li> </ul></>} />

      <div className='popular-destination blogaddalist details full-w'>
        <Container>
{data.filter((items)=>items.titleUrl===url.blogid).map((items,i)=>(
  <div key={i} className='blogaddalist-round'>
  <div className='blogaddalist-inner'>

    <div className="blog-inner-box2">
      <p dangerouslySetInnerHTML={{ __html: items.content }}/>
    </div>

  </div>
</div>
))}

          {/*============ blogaddalist-round ============*/}
         
          {/*============ end blogaddalist-round ============*/}

        </Container>
      </div>
    </div>
  )

    </>
  );
};

export default BlogsDetailsContent;
