"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import images from "../../img";
import Style from "../../style/connectWallet.module.css";
const ConnectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.proider1,
      name: "Metamask",
    },
    {
      provider: images.proider2,
      name: "WalletConnect",
    },
    {
      provider: images.proider3,
      name: "Walletlink",
    },
    {
      provider: images.proider1,
      name: "Formatic",
    },
  ];
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our avaliable wallet providers or create new one
        </p>
        <div className={Style.connectWallet_box_providers}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_providers_item} ${
                activeBtn == i + 1 ? "active" : ""
              }`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_providers_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
