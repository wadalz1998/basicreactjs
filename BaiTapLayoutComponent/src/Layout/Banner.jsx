import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";

class Banner extends Component {
  render() {
    return (
      <div className="BannerCustom">
        <div className="textContent"> 
          <h1>A warm welcome!</h1>
          <p>
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <Button variant="primary">Call to action</Button>
        </div>
      </div>
    );
  }
}
export default Banner;
