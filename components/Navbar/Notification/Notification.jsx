import React from "react";
import Style from "./Notification.module.css";
import Image from "next/image";
import images from "../../../img/index";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notficatio_box}>
        <div className={Style.notficatio_box_img}>
          <Image
            src={images.user1}
            width={50}
            height={50}
            alt="User Profile"
            className={Style.notficatio_box_img}
          />
        </div>
        <div className={Style.notficatio_box_info}>
          <h4>Mohd Shahzil</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <small>3 Minutes Ago</small>
        </div>
        <span className={Style.notficatio_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
