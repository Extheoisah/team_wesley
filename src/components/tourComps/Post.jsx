import React from "react";
import Footer from "./Footer";
import Heading from "./Heading";
import Info from "./Info";
import Preview from "./Preview";

function Post(props) {
  const { image, name, price, info } = props;
  return (
    <div className="single-tour">
      <Preview image={image} />
      <Heading name={name} price={price} />
      <Info info={info} /> 
      <Footer />
    </div>
  );
}

export default Post;
