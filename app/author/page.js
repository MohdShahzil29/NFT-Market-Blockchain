"use client";
import React, { useState, useEffect } from "react";
import Style from "../../style/author.module.css";
import { Banner, NFTCardTwo } from "@/collectionPages/collectionPage";
import { Brand, Title } from "@/components/componentsIndex";
import images from "../../img";
import {
  AuthorProfileCard,
  AuthorTab,
  AuthorNFTCardBox,
} from "@/authorPage/authorIndex";
import FollowerTabCard from "@/components/FollowesTab/FollowerTabCard/FollowerTabCard";
const page = () => {
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
  ];

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTab
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
       collectiables={collectiables}
       created={created}
       like={like}
       follower={follower}
       following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on the music and enjoy NFT music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard el={el} i={i}/>
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default page;
