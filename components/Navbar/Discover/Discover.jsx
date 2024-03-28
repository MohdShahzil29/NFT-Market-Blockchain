import React from "react";
import Style from "./Discover.module.css";
import Link from "next/link";

const discover = [
  {
    name: "Collection",
    link: "collection",
  },
  {
    name: "Search",
    link: "searchPage",
  },
  {
    name: "Author Profile",
    link: "author",
  },
  {
    name: "NFT Details",
    link: "nft-details",
  },
  {
    name: "Account Setting",
    link: "account",
  },
  {
    name: "Blog",
    link: "blog",
  },
  {
    name: "Upload NFT",
    link: "upload-nft",
  },
  {
    name: "Connect Wallet",
    link: "connect-wallet",
  },
];
const Discover = () => {
  return (
    <div>
      {discover.map((menu, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${menu.link}` }}>{menu.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
