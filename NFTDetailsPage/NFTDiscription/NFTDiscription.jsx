"use client";
import React, { useState } from "react";
import Style from "./NFTDiscription.module.css";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdTimer,
  MdReportProblem,
  MdOutlineDeleteSweep,
} from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import { BiTransferAlt, BiDollar } from "react-icons/bi";
import images from "../../img";
import { Button } from "@/components/componentsIndex";
import { NFTTabs } from "../NFTDetailsIndex";
const NFTDiscription = () => {
  const [social, setSocial] = useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true);
  const [provanance, setProvanance] = useState(false);
  const [owner, setOwner] = useState(false);

  const historyArray = [
    images.user1,
    images.user3,
    images.user2,
    images.user4,
    images.user5,
  ]

  const provananceArray = [
    images.user1,
    images.user2,
    images.user5,
    images.user4,
    images.user3,
  ]
  const ownerArray = [
    images.user10,
    images.user9,
    images.user8,
    images.user7,
    images.user6,
  ]

  const openSocial = () => {
    {!social ? setSocial(true) : setSocial(false)}
  }

  const openNFTMenu = () => {
    if (!NFTMenu) {
      setNFTMenu(true);
      setSocial(false);
    } else {
      setNFTMenu(false)
    }
  }

  const openTabs = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Bid History") {
      setHistory(true);
      setProvanance(false);
      setOwner(false)
    } else if (btnText == "Provanance") {
      setProvanance(true);
      setOwner(false);
      setHistory(false);
    }
    }

    const openOwner = () => {
      if (!owner) {
        setOwner(true);
        setProvanance(false);
        setHistory(false);
      } else {
        setOwner(false);
        setHistory(true)
      }
    }
  
  return (
    <div className={Style.NFTDiscription}>
      <div className={Style.NFTDiscription_box}>
        {/* Part One */}
        <div className={Style.NFTDiscription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.NFTDiscription_box_share_box}>
            <MdCloudUpload
              className={Style.NFTDiscription_box_share_box_icon}
              onClick={() => openSocial()}
            />
            {social && (
              <div className={Style.NFTDiscription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
                <a href="#">
                  <TiSocialLinkedin /> Linkedin
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
              </div>
            )}
            <BsThreeDots
              className={Style.NFTDiscription_box_share_box_icon}
              onClick={() => openNFTMenu()}
            />

            {NFTMenu && (
              <div className={Style.NFTDiscription_box_share_box_social}>
                <a href="#">
                  <BiDollar /> Change Price
                </a>
                <a href="#">
                  <BiTransferAlt /> Transfer
                </a>
                <a href="#">
                  <MdReportProblem /> Report Problem
                </a>
                <a href="#">
                  <MdOutlineDeleteSweep /> Delete item
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.NFTDiscription_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.NFTDiscription_box_profile_box}>
            <div className={Style.NFTDiscription_box_profile_box_left}>
              <Image
                src={images.user1}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDiscription_box_profile_box_left_img}
                layout="respossive"
              />
              <div className={Style.NFTDiscription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
            <div className={Style.NFTDiscription_box_profile_box_right}>
              <Image
                src={images.user2}
                alt="profile"
                width={40}
                height={40}
                className={Style.NFTDiscription_box_profile_box_left_img}
                layout="respossive"
              />
              <div className={Style.NFTDiscription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>
                  Karli Costa <MdVerified />
                </span>
              </div>
            </div>
          </div>
        
        <div className={Style.NFTDiscription_box_profile_bidding}>
          <p>
            <MdTimer /> <span>Auction ending in:</span>
          </p>
          <div className={Style.NFTDiscription_box_profile_bidding_box_timer}>
            <div
              className={
                Style.NFTDiscription_box_profile_bidding_box_timer_item
              }
            >
              <p>2</p>
              <span>Days</span>
            </div>
            <div
              className={
                Style.NFTDiscription_box_profile_bidding_box_timer_item
              }
            >
              <p>22</p>
              <span>hours</span>
            </div>
            <div
              className={
                Style.NFTDiscription_box_profile_bidding_box_timer_item
              }
            >
              <p>10</p>
              <span>mins</span>
            </div>
            <div
              className={
                Style.NFTDiscription_box_profile_bidding_box_timer_item
              }
            >
              <p>23</p>
              <span>sec</span>
            </div>
          </div>

          <div className={Style.NFTDiscription_box_profile_bidding_box_price}>
              <div className={Style.NFTDiscription_box_profile_bidding_box_price_bid}>
              <small>Current Bid</small>
              <p>1.000 ETH <span>( = $3,221.22)</span></p>
              </div>
              <span>[96 in stock]</span>
          </div>
              <div className={Style.NFTDiscription_box_profile_bidding_box_button}>
                <Button
                icon=<FaWallet />
                 btnName="Place a bid"
                 handelClick={() => {}}
                 classStyle={Style.button}
                /> 
                <Button
                icon=<FaPercentage />
                 btnName="Make offer"
                 handelClick={() => {}}
                 classStyle={Style.button}
                />
              </div>
              <div className={Style.NFTDiscription_box_profile_bidding_box_tabs}>
                <button onClick={(e) => openTabs(e)}>Bid History</button>
                <button onClick={(e) => openTabs(e)}>Provanance</button>
                <button onClick={(e) => openOwner(e)}>Owner</button>
              </div>

              {history && (
                <div className={Style.NFTDiscription_box_profile_bidding_box_card}>
                  <NFTTabs dataTab={historyArray} />
                </div>
              )}
              {provanance && (
                <div className={Style.NFTDiscription_box_profile_bidding_box_card}>
                  <NFTTabs dataTab={provananceArray} />
                </div>
              )}
              {owner && (
                <div className={Style.NFTDiscription_box_profile_bidding_box_card}>
                  <NFTTabs dataTab={ownerArray} icon=<MdVerified />/>
                </div>
              )}

        </div>
      </div>
      </div>
    </div>
  );
};

export default NFTDiscription;
