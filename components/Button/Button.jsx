"use client"
import React from "react";
import Style from "./Button.module.css";

const Button = ({ btnName, handelClick, icon, classStyle }) => {
  return (
    <div className={Style.box}>
      <button className={`${Style.button} ${classStyle}`} onClick={() => handelClick()}>
       {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
