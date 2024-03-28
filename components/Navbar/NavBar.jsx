"use client";
import React, { useState } from "react";
import Style from "./NavBar.module.css";
import Image from "next/image";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, HelpCenter, Profile, Notification, SideBar } from "./index";
import { Button } from "../componentsIndex";
import images from "../../img";

const NavBar = () => {
  // use state
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notifcation, setNotifcation] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  // Open Menu Functions

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotifcation(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp(true);
      setDiscover(false);
      setNotifcation(false);
      setProfile(false);
    } else {
      setHelp(false);
      setDiscover(false);
      setNotifcation(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notifcation) {
      setNotifcation(true);
      setHelp(false);
      setDiscover(false);
      setProfile(false);
    } else {
      setNotifcation(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotifcation(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image src={images.logo} alt="NFT LOGO" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />
            {notifcation && <Notification />}
          </div>

          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handelClick={() => {}} />
          </div>

            <div className={Style.navbar_container_right_profile_box}>
          <div className={Style.navbar_container_right_profile}>
            <Image
              src={images.user1}
              alt="Profile"
              width={40}
              height={40}
              className={Style.navbar_container_right_profile}
              onClick={() => openProfile()}
            />
            {profile && <Profile />}
          </div>
            </div>

          <div className={Style.navbar_container_right_btn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SideBar Componets */}

      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
