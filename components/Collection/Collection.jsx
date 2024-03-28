"use client";
import React, { useState, useEffect } from "react";
import Style from "./Collection.module.css";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar,
} from "react-icons/bs";
import DayComponents from "./DayComponents/DayComponents";
import images from '../../img'

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  // const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];
  // const followingArray = [1, 2, 3, 4];
  // const newsArray = [1, 2, 3, 4, 5, 6];

  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground3,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground11,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground3,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground11,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground11,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const openPopulor = () => {
    if (!popular) {
        setPopular(true);
        setFollowing(false);
        setNews(false)
    }
  }

  const openFollower = () => {
    if (!following) {
        setFollowing(true);
        setPopular(false);
        setNews(false)
    }
  }

  const openNews = () => {
    if (!news) {
        setNews(true)
        setFollowing(false);
        setPopular(false);
    }
  }

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopulor()}>
              <BsFillAlarmFill /> Last 24 Hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar /> Last 7 Days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> Last 30 Days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((el, i) => (
            <DayComponents key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DayComponents key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DayComponents ents key={i + 1} el={el} i={i}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
