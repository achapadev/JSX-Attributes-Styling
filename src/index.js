import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAUb9xlu8HbqDL96b-C5zegaWEgXGhp2gqQ&usqp=CAU"
      />
      <img
        className="food-img"
        src="https://store.anxodc.com/wp-content/uploads/2020/06/image-asset-3.jpeg"
      />
      <img
        className="food-img"
        src="https://www.washingtonpost.com/news/voraciously/wp-content/uploads/sites/68/2020/01/v-rr-lunarnewyear_01_leadweb.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
