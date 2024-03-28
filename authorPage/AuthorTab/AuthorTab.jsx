"use client";
import React, { useState } from "react";
import Style from "./AuthorTab.module.css";
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

const AuthorTab = ({
  setCollectiables,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(0);
  const [selectMenu, setSelectMenu] = useState("Most Recent");

  const listArray = [
    "Created By Admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed ",
  ];
  const openDropDownList = () => {
    {
      !openList ? setOpenList(true) : setOpenList(false);
    }
  };

  const openTab = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Collectiables") {
      setCollectiables(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(1);
    } else if (btnText === "Created") {
      setCreated(true);
      setCollectiables(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText === "Liked") {
      setLike(true);
      setCreated(false);
      setCollectiables(false);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(3);
    } else if (btnText === "Following") {
      setFollowing(true);
      setLike(false);
      setCreated(false);
      setCollectiables(false);
      setFollower(false);
      setActiveBtn(4);
    } else if (btnText === "Follower") {
      setFollower(true);
      setFollowing(true);
      setLike(false);
      setCreated(false);
      setCollectiables(false);
      setActiveBtn(5);
    }
  };

  return (
    <div className={Style.authorTab}>
      <div className={Style.authorTab_box}>
        <div className={Style.authorTab_box_left}>
          <div className={Style.authorTab_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Collectiables
            </button>{" "}
            <button
              className={`${activeBtn == 2 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Created
            </button>{" "}
            <button
              className={`${activeBtn == 3 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Liked
            </button>{" "}
            <button
              className={`${activeBtn == 4 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Follower
            </button>
          </div>
        </div>
        <div className={Style.authorTab_box_right}>
          <div
            className={Style.authorTab_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openList && (
            <div className={Style.authorTab_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  className={Style.authorTab_box_right_list_item}
                  key={i + 1}
                  onClick={() => setSelectMenu(el)}
                >
                  <p>{el}</p>
                  <span>{selectMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTab;
