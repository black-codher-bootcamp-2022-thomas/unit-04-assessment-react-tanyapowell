import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div id="header">
      <h1>{props.title}</h1>
      <div className="breadcrumb">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/basket"}>Basket</Link>
      </div>
    </div>
  );
};

export default Header;
