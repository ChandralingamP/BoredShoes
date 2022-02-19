import React from "react";
import Nav from "./NavBar";
import Scroll from "../images/scrolldn.png";
const Hero = () => {
  return (
    <>
     
      <div className="hero">
      <div className="black">
        <Nav />
          <div className="hero-text">
            <h1>BORED SHOES</h1>
            <h4>
              Every Bored Shoes are ready to take over the Metaverse,
              <br /> Get yours Now!
            </h4>
            <a href="#Gallery"><button >OWN BORED SHOES</button></a>
          </div>
          <a href="#Gallery"><img  src={Scroll} alt="" /></a>
        </div>
      </div>
    </>
  );
};

export default Hero;
