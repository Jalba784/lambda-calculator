import React from "react";

const Display = (props) => {
    const { answerProp } = props;
  return <div className='calcDisplay'>{answerProp}</div>;
};

export default Display