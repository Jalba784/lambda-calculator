import React from "react";

const OperatorButton = (props) => {
  const { operText } = props;
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operText}
    </button>
  );
};

export default OperatorButton