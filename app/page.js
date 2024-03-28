import Style from "./index.module.css";
import {
  HeroSection,
  Service,
  BigNFTsSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTcard,
  Collection,
  FollowesTab,
  AudioLive,
  Slider,
  Brand,
  Video
} from "@/components/componentsIndex";
export default function Home() {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTsSlider />
      <Title
        heading="Audio Collection"
        paragraph="lick on the play icon and enjoy the NFT's video"
      />
      <AudioLive />
      {/* <Title heading="New Collection" 
        paragraph="Disover the outstanding NFTs in all topics of life"
       /> */}
      <FollowesTab />
      {/* <Title
        heading="Explore NFTs video"
        paragraph="Click on the play icon and enjoy the NFT's video"
      /> */}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Disover the outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTcard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most features categories"
      />
      <Category />
      <Subscribe />
      <Brand />
      {/* <Video /> */}
    </div>
  );
}
