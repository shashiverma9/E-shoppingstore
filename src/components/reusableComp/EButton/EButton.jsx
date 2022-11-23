import React from "react";

const EButton = (props) => {
  const { label = "", qbtnCls = "", ...otherProps } = props;

  return (
    <div className="ebutton-wrapper">
      <button className={`btn ${qbtnCls}`} {...otherProps}>
        {label}
      </button>
    </div>
  );
};

export default EButton;
