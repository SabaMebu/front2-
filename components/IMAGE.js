// components/IMAGE.js
import React from "react";

const IMAGE = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default IMAGE;
