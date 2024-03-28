"use client";
import React, { useState } from "react";
import Style from "./Filter.module.css";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";

import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => {
    {!filter ? setFilter(true) : setFilter(false)}
  } 
  const openImage = () => {
    {!image ? setImage(true) : setImage(false)}
  }
  const openMusic = () => {
    {!music ? setMusic(true) : setMusic(false)}
  }
  const openVideo = () => {
    {!video ? setVideo(true) : setVideo(false)}
  }
  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Arts</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photogtaphy</button>
        </div>

        <div className={Style.filter_box_right}>
          <div
            className={Style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className={Style.filter_box_items}>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <FaWallet /> <span>10 ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>

          <div className={Style.filter_box_items_box}>
            <div
              className={Style.filter_box_items_box_item_trans}
              onClick={() => openImage()}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item_trans}
            onClick={() => openVideo()}
            >
              <FaVideo /> <small>Video</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item_trans}
            onClick={() => openMusic()}
            >
              <FaMusic /> <small>Musics</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={Style.filter_box_items_box}>
            <div className={Style.filter_box_items_box_item}>
              <FaUserAlt /> <small>Verified</small>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
