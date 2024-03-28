import React from "react";
import Style from "../../style/uploadnft.module.css";
import { UploadNFTFile } from '@/UploadNFT/uploadNFTIndex';


const uploadNFTData = () => {
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>Create new NFT</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal setting
          </p>
        </div>
        <div className={Style.uploadNFT_box_title}>
          <h2>Image, Video, Audio, or 3d Model</h2>
          <p>
            File types supporeted JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF, Max size 100 MB
          </p>
        </div>
        <div className={Style.uploadNFT_box_form}>
          <UploadNFTFile />
        </div>
      </div>
    </div>
  );
};

export default uploadNFTData;
