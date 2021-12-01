import React from "react";

function NoMoreTours(props) {
  return (
    <main>
      <h2 className="loading">No More Tours Remaining</h2>
      <div className="loading">
        <button className="btn" onClick={props.refresh}>Refresh</button>
      </div>
    </main>
  );
}

export default NoMoreTours;
