import React, { useState } from "react";

import SliderData from "./context/shoes";

const lesser = "<";
const greater = ">";
let count = 0;
const ad = Object.entries(SliderData).length -1;

function LeftGallery() {
  let value = SliderData[count]["image"];
  console.log(value);
  const [image, setImage] = useState(0);
  const toPervious = () => {
    if (count !== 0) {
      count--;
      setImage(count);
    } else {
      count = ad;
      setImage(count);
    }
    value = SliderData[image]["image"];
  };
  const toNext = () => {
    if (count !== ad) {
      count++;
      setImage(count);
    } else {
      count = 0;
      setImage(count);
    }
    console.log(count);
  };
  return (
    <>
      <h2>GOLDEN SHOES</h2>
      <div className="showcase">
        <p className="sc-hd">
          COUNT <span className="countno">10</span>
        </p>
        <div className="carousel">
          <p onClick={() => toPervious()} className="right arrow">
            {lesser}
          </p>
          <img src={value} />
          <p onClick={() => toNext()} className="left arrow">
            {greater}
          </p>
        </div>
        <p className="label">
          BORED SHOES <br /> #{SliderData[count]['id']}
        </p>
      </div>
    </>
  );
}

export default LeftGallery;
