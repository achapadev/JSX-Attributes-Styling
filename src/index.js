import React from "react";
import ReactDOM from "react-dom";

//variable to hold random photo from picsum
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />
    <div></div>
  </div>,
  document.getElementById("root")
);
