import React from "react";

const SpecialButton = (props) => {
  const { specText } = props;
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {specText}
    </button>
  );
};

export default SpecialButton