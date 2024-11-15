import React from "react";

function Container({ variant, children }) {
  return <div className={`wrapper ${variant}`}>{children}</div>;
}
export default Container;
