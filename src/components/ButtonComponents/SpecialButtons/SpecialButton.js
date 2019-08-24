import React from "react";

const SpecialButton = (props) => {
  const { someText } = props;
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {someText}
    </button>
  );
};

export default SpecialButton