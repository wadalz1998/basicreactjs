import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class BaiTapLayout extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <div className="container px-lg-5">
          <Body></Body>
        </div>
        <Footer></Footer>
      </>
    );
  }
}
export default BaiTapLayout;
