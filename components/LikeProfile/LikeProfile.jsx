import React from "react";
import Style from "./LikeProfile.module.css";
import Image from "next/image";
import images from "../../img/index";

const LikeProfile = () => {
  const imageArray = [images.user1, images.user2, images.user3, images.user4];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image src={el} width={15} height={15} key={i + 1} 
          className={Style.like_img}
          />
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;
