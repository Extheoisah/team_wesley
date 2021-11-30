import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Brand from "./tourComps/Brand";
import Footer from "./tourComps/Footer";
import Post from "./tourComps/Post";

// import Brand from "./tourComps/Brand";
// import Mode from "./tourComps/Mode";
// import Post from "./tourComps/Post";

const url = "https://course-api.com/react-tours-project";

function Tours(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const tours = async () => {
    try {
      const tourImg = await fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          console.log(data);
          setTourData(data);
        });
      setIsLoading(!isLoading);
    } catch (err) {
      console.error("error: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    tours();
  }, [setIsLoading]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="section">
          <Brand />
          {tourData.map((data) => {
            const { id, image, info, name, price } = data;
            return (
              <>
                <div key={id}>
                  <Post image={image} price={price} name={name} info={info} />
                </div>
              </>
            );
          })}
          <Footer />
        </div>
      )}
    </>
  );
}

export default Tours;
