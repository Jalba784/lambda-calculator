import React from "react";

const NumberButton = (props) => {
  const { numText } = props;
  return (
    <button className="numButtons" onClick={() => props.addNumber(numText)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {numText}
    </button>
  );
};

export default NumberButton