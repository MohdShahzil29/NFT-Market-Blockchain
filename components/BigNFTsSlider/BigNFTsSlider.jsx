"use client";
import React, { useEffect, useState, useCallback } from "react";
import Style from "./BigNFTsSlider.module.css";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

import Button from "../Button/Button";
import images from "../../img";
import Image from "next/image";

const BigNFTsSlider = () => {
  const [idNumber, setIdNumber] = useState(1);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Mohd Shahzil",
      collection: "Cricket",
      price: "00000434 ETH",
      like: 323,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 23,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "Mohd Shahzil",
      collection: "Cricket",
      price: "00000434 ETH",
      like: 323,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 23,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Bareilly NFT",
      id: 3,
      name: "Mohd Shahzil",
      collection: "Cricket",
      price: "00000434 ETH",
      like: 323,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 23,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
    {
      title: "Bareilly NFT",
      id: 4,
      name: "Mohd Shahzil",
      collection: "Cricket",
      price: "00000434 ETH",
      like: 323,
      image: images.user4,
      nftImage: images.nft_image_3,
      time: {
        days: 23,
        hours: 10,
        minutes: 11,
        seconds: 35,
      },
    },
  ];

  const increment = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);  
  
  const decrement = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  // useEffect(() => {
  //   increment()
  // }, [])

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="Profile Photo"
                width={50}
                height={50}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_profile_image}
              >
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />
              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}
                <span>$,221,21</span>
              </p>
            </div>
            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>Minutes</span>
              </div>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>Seconds</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_bidding_button}>
              <Button btnName="Place" handelClick={() => {}} />
              <Button btnName="View" handelClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => decrement()}
            />{" "}
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => increment()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image src={sliderData[idNumber].nftImage} alt="NFT image" 
             className={Style.bigNFTSlider_box_right_box_img}
            />
            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTsSlider;
