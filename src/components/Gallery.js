import React from "react";
import "./gallery.css";
import RightGallery from "./RightGallery";
import LeftGallery from "./LeftGallery";

const lesser = '<';
const greater ='>';


const Gallery = () => {
  return (
    <>
      <div className="left-gallery">
        <LeftGallery/>
      </div>
      <div className="right-gallery">
        <RightGallery />
      </div>
    </>
  );
};





export default Gallery;
