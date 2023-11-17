// const React = require("react");
import React from "react";
import { Link } from "react-router-dom";

export default function error404() {
  return (
    <div>
      <h1 className="errorpageh1"> 404: PAGE NOT FOUND</h1>
      <div>
        <img
          className="errorpageimg"
          width="330"
          height="450"
          src="https://th.bing.com/th/id/R.0ef4893738237a51cccc335e1984be2f?rik=m49oZyvuk2ykUw&pid=ImgRaw&r=0"
          alt="error img"
        />
      </div>
      <p className="errorpageptag">Oops, sorry, we can't find this page!</p>

      <Link to="/" className="errorpagebuttondiv">
        <button className="errorPageButton">Return To Homepage</button>
      </Link>
    </div>
  );
}
