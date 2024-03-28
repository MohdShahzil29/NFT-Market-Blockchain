"use client";
import React, { useState, useEffect, useRef } from "react";
import Style from "./Slider.module.css";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from './SliderCard/SliderCard'
import images from '../../img'

const Slider = () => {
  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground3,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground11,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  const handelScroll = (direction) => {
    const {current} = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction == "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  }
  
  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  })
  return (
    <div className={Style.slider}>
      <div className={Style.slider_box}>
        <h2>Explore NFTs Video</h2>
        <div className={Style.slider_box_button}>
          <p>Click on play icon & enjoy Nfts Video</p>
          <div className={Style.slider_box_button_btn}>
            <div className={Style.slider_box_button_btn_icon} onClick={() => handelScroll("left")}>
              <TiArrowLeftThick  />
            </div>
            <div className={Style.slider_box_button_btn_icon} onClick={() => handelScroll("right")}>
              <TiArrowRightThick  />
            </div>
          </div>
        </div>
        <motion.div className={Style.slider_box_items} ref={dragSlider}>
          <motion.div className={Style.slider_box_item} ref={dragSlider} drag="x" dragConstraints={{right: 0, left: -width}}>
            {followingArray.map((el, i) => (
              <SliderCard key={i+1} el={el} i={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div> 
  );
};

export default Slider;
