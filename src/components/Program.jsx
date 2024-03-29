import React from "react";

const Program = ({ children, title, order, style, imgStyle, image }) => {
  return (
    <div className={`row  ${style}`}>
      <div
        className={`col-12 col-lg-6 p-0 rounded shadow-lg ${
          order ? "order-1 order-lg-2" : null
        }`}
      >
        <div className={`${imgStyle} rounded-3`}>
          {image ? <img className="rounded-3" src={image} alt="" /> : null}
        </div>
      </div>
      <div
        className={`mt-5 mt-md-5 mt-lg-0 col-12 col-lg-6 d-flex flex-column justify-content-center ${
          order ? "order-2 order-lg-1" : null
        }`}
      >
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Program;
