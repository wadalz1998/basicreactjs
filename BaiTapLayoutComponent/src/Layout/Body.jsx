import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";
class Body extends Component {
  render() {
    return (
      <div className="container px-lg-5">
        <Banner />
        <div style={{ display: "flex" }}>
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
export default Body;
