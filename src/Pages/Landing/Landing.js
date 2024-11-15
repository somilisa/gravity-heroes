import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="one">Two</Link>
      <Link to="two">Three</Link>
      <Link to="three">Four</Link>
      <Link to="four">Five</Link>
      <Link to="five">Six</Link>
      <Link to="six">Seven</Link>
      <Link to="seven">One</Link>
    </div>
  );
};

export default Landing;
