"use client";
import React from "react";

import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../collectionPages/collectionPage";
import FollowerTabCard from "@/components/FollowesTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];
  const createdArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];
  const likeArray = [
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
  ];
  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user2,
    },
    {
      background: images.creatorbackground2,
      user: images.user10,
    },
    {
      background: images.creatorbackground3,
      user: images.user10,
    },
    {
      background: images.creatorbackground9,
      user: images.user9,
    },
    {
      background: images.creatorbackground6,
      user: images.user8,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground2,
      user: images.user10,
    },
    {
      background: images.creatorbackground1,
      user: images.user2,
    },
    {
      background: images.creatorbackground9,
      user: images.user9,
    },
    {
      background: images.creatorbackground3,
      user: images.user10,
    },
    {
      background: images.creatorbackground6,
      user: images.user8,
    },
  ];

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectiables && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard el={el} i={i} />
          ))} 
        </div>
      )}
      {following && (
        <div className={Style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard el={el} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
