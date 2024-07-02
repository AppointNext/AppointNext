import React from "react";
import Button from "../utils/Button";

const Hero = () => {
  return (
    <div className=" flex flex-row w-full items-center overflow-hidden px-4">
      <div className="w-1/2 ">
        <p className=" sm:text-[35px] text-[20px] mb-10">
          Hello, <br></br>
          this is appointment management app
        </p>
        <Button className="m-[10px]" title="Get Started" />
      </div>
      <div className="w-1/2 ">
        <img src="../../../hero.svg" className=" w-[800px] " alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
