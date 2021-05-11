import React from "react";
import SpinImg from "./loadingAnimation.gif";

const Spinner = () => {
  return (
    <>
      <img src={SpinImg} alt="Loading..." className="w-20 m-auto block" />
    </>
  );
};
export default Spinner;
