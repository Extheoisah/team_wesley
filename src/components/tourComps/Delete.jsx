import React from "react";

function Delete(props) {
  return (
    <button className="delete-btn" onClick={props.delete} id={props.id}>
      Not Interested
    </button>
  );
}

export default Delete;
