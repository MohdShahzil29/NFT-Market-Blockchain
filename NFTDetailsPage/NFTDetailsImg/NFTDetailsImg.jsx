"use client";
import React, { useState, useEffect } from "react";
import Style from "./NFTDetailsImg.module.css";
import Image from "next/image";
import { BsImage } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import images from "../../img";
const NFTDetailsImg = () => {
  const [description, setDiscription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const likeNFT = () => {
    {
      !like ? setLike(true) : setLike(false);
    }
  };

  const openDescription = () => {
    {
      !description ? setDiscription(true) : setDiscription(false);
    }
  };

  const openDetails = () => {
    {
      !details ? setDetails(true) : setDetails(false);
    }
  };

  return (
    <div className={Style.NFTDetailsImg}>
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImage className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={Style.NFTDetailsImg_box_NFT_like_icon}
                />
              )}
              <span>23</span>
            </p>
          </div>
          <div className={Style.NFTDetailsImg_box_NFT_img}>
            <Image
              src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT Image"
              width={700}
              height={800}
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </div>
        <div
          className={Style.NFTDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {description && (
          <div className={Style.NFTDetailsImg_box_description_box}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quasi
              odio qui placeat iste harum, nostrum quos dolores, incidunt,
              aspernatur voluptatibus. Magnam, vitae! Fuga aliquid veritatis
              voluptatem eaque unde voluptatum deleniti repudiandae possimus
              provident.
            </p>
          </div>
        )}
        <div
          className={Style.NFTDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={Style.NFTDetailsImg_box_details_box}>
            <small>2000 x 2000 px.IMAGE(685KB)</small>
            <p>
              <small>Contract Address</small>
              <br></br>
              0x5MySbMbEGrbKDhJqRrb7FzC8WFrQaBxxakNtdcqkzb2n
            </p>
            <p>
              <small>Token ID</small>
              100300372864
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImg;
