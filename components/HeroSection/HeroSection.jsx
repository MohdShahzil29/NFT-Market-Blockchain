"use client"
import React from "react";
import Style from "./HeroSection.module.css";
import Image from "next/image";
import images from "../../img";
import { Button } from "../componentsIndex";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Dicover, collect, and sell NFTs 🌅</h1>
          <p>
            Discover the most outstanding NFTs in all topic of life, Create your NFTs and sell
            them
          </p>
          <div className={Style.btn_button}>
          <Button btnName="Start Your Search" handleClick={() => {}} />
          </div>
          {/* Button section */}
          {/* <div className={Style.box}>
            <button className={Style.button}>Start Your Search</button>
          </div> */}
          {/* End Button */}
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="HeroSection image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
