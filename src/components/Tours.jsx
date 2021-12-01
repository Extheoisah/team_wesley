import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import Brand from "./tourComps/Brand";
import SingleTour from "./SingleTour";
import NoMoreTours from "./tourComps/NoMoreTours";

const url = "https://course-api.com/react-tours-project";

function Tours() {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);
  const [isTour, setIsTour] = useState(true);
  const [refreshData, setRefreshData] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTourData(data);
        setRefreshData(data)
        setIsLoading(!isLoading);
      })
      .catch((err) => console.log("error:", err));
  }, []);

  const removeTour = (e) => {
    e.preventDefault();
    let tourArray = [...tourData];
    let filteredArray = tourArray.filter((item) => item.id !== e.target.id);
    setTourData(filteredArray);

<<<<<<< HEAD
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
=======
    if (filteredArray.length === 0) {
      setIsTour(false);
>>>>>>> d1195cae920001310ce11cf01c14f1f405a99dd0
    }
  };

  const refresh = () => {
    setTourData(refreshData);
    setIsTour(true);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isTour ? (
        <div className="section">
          <main>
            <Brand />
            <SingleTour tourData={tourData} delete={removeTour} />
          </main>
        </div>
      ) : (
        <NoMoreTours refresh={refresh} />
      )}
    </>
  );
}

export default Tours;
