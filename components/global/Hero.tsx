import React from "react";
import Wrapper from "./Wrapper";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
          <h1 className="text-center font-bold text-[40px]">
            <span className="text-primary">Lorem</span> ipsum dolor sit amet.
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            blanditiis fuga tenetur! Officia eum, nisi rem provident alias
            corrupti ullam iure incidunt nemo, impedit placeat voluptatem fugit
            saepe et aliquam.
          </p>
          <button className="btn">
            start free now <FaArrowRight />
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
