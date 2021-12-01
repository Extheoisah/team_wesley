import React from "react";

import Post from "./tourComps/Post";

function SingleTour(props) {
  return props.tourData.map((data) => {
    const { id, image, info, name, price } = data;
    return (
      <Post
        key={id}
        id={id}
        image={image}
        price={price}
        name={name}
        info={info}
        delete={props.delete}
      />
    );
  });
}

export default SingleTour;
