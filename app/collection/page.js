import React from "react";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo
} from "../../collectionPages/collectionPage";
import { Slider, Brand, } from "../../components/componentsIndex";
import Filter from "../../components/Filter/Filter";
import images from "../../img";
import Style from "../../style/collection.module.css";
const Collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default Collection;
