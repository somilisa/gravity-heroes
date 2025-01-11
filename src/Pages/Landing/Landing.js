import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="one">One</Link>
      <Link to="two">Two</Link>
      <Link to="three">Three</Link>
      <Link to="four">Four</Link>
      <Link to="five">Five</Link>
      <Link to="six">Six</Link>
      <Link to="seven">Seven</Link>
    </div>
  );
};

export default Landing;
