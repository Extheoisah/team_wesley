import React from "react";
import NotInterested from "./NotInterested";
import Heading from "./Heading";
import Info from "./Info";
import Preview from "./Preview";

function Post(props) {
  const { id, image, name, price, info } = props;
  return (
    <>
      <div className="single-tour">
        <Preview image={image} />
        <footer>
          <Heading name={name} price={price} />
          <Info info={info} />
          <NotInterested delete={props.delete} id={id}/>
        </footer>
      </div>
    </>
  );
}

export default Post;
