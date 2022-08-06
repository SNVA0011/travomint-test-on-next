import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import loading from "../../../public/Image/blogs6.jpg";

import blogs1 from "../../../public/Image/blogs1.jpg";
import blogs2 from "../../../public/Image/blogs2.jpg";
import blogs3 from "../../../public/Image/blogs3.jpg";
import blogs4 from "../../../public/Image/blogs4.jpg";
import blogs5 from "../../../public/Image/blogs5.jpg";
import blogs6 from "../../../public/Image/blogs6.jpg";
import Image from "next/image";
import { authCode, cms_trav } from "../../static/static";

const Blogs = () => {
  const path = "https://www.travomint.com";
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

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
      {load ? (
        <div className="container">
          <div className="row">
            {data.map((items, i) => (
              <Col key={i} xs={12} md={3}>
                <Link
                  to="/blog/does-delta-airlines-have-a-live-chat"
                  className="image_area_partition"
                >
                  <Image
                    src={
                      "https://www.travomint.com//resources/images/blog/" +
                      items.imgUrl
                    }
                    alt="business_travel"
                  />
                  <div className="wrapper">
                    <span>
                      {new Date(items.posttime).getDate() +
                        "/" +
                        (new Date(items.posttime).getMonth() + 1) +
                        "/" +
                        new Date(items.posttime).getFullYear()}
                    </span>
                  </div>
                </Link>
                <div className="blogaddalist-inner">
                  <Link to={`/blog/${items.titleUrl}`} className="h4 title">
                    {items.title}
                  </Link>
                  <p>{items.description}</p>

                  <hr className="mx-row-hr" />
                  <Link
                    to={`/blog/${items.titleUrl}`}
                    className="btn btn-site ripple-effbtn btn-40"
                  >
                    <span>Read More</span>
                  </Link>
                </div>
              </Col>
            ))}
          </div>
        </div>
      ) : (
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Blogs;
