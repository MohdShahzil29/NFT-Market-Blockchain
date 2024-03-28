import React from "react";
import Link from "next/link";
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
    {
      name: "Sign in",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((menu, i) => (
        <div key={i + 1} className={Style.helpCenter}>
          <Link href={{ pathname: `${menu.link}` }}>{menu.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
