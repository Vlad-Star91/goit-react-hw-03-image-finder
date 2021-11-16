import React from "react";
import Loader from "react-loader-spinner";

import s from "./Loader.module.css";

const Load = () => {
  return (
    <Loader
      type="MutatingDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
      className={s.loader}
    />
  );
};

export { Load };