import React from "react";
import Filter from "../images/filterIcon.png";

import Shoes from "./context/shoes";
const RightGallery = () => {
  return (
    <>
      <div className="right-gallery-header">
        <div className="title">
          <h2>
            BORED SHOES <span>//</span>
          </h2>
          <p>10000</p>
        </div>
        <button>
          <img src={Filter} />
          <p>FILTERS</p>
        </button>
      </div>
      <p className="filter-count">
        FILTERS <span>0</span>
      </p>
      <div className="cards">
        {Shoes.map((shoe,index) => {
          return <Card key={index} shoe={shoe} />;
        })}
      </div>
      <button></button>
    </>
  );
};

const Card = (shoe) => {
  const { id, image } = shoe.shoe;
  return (
    <>
      <section key={id} className="card">
        <img src={image} />
        <h4>BORED SHOES</h4>
        <p>#{id}</p>
      </section>
    </>
  );
};

export default RightGallery;
