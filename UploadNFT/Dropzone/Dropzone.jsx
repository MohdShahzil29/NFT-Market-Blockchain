"use client";
import React, { useState, useCallback } from "react";
import Style from "./Dropzone.module.css";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import images from "../../img";
const Dropzone = ({
  title,
  heading,
  subHeading,
  itemName,
  website,
  description,
  roylties,
  fileSize,
  category,
  properties,
  image,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptFile) => {
    setFileUrl(acceptFile[0]);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={Style.drapzone}>
      <div className={Style.drapzone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={Style.drapzone_box_input}>
          <p>{title}</p>
          <div className={Style.drapzone_box_input_img}>
            <Image
              src={image}
              alt="upload"
              width={100}
              height={100}
              objectFit="cover"
              className={Style.drapzone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={Style.drapzone_box_aside}>
          <div className={Style.drapzone_box_aside_box}>
            <Image
              src={images.nft_image_1}
              alt="nft image"
              width={200}
              height={200}
            />
            <div className={Style.drapzone_box_aside_box_preview}>
              <div className={Style.drapzone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name:</span>
                  {itemName || ""}
                </p>
                <p>
                  <span>Website:</span>
                  {website || ""}
                </p>
              </div>

              <div className={Style.drapzone_box_aside_box_preview_two}>
                <p>
                  <span>Description</span>
                  {description || ""}
                </p>
              </div>
              <div className={Style.drapzone_box_aside_box_preview_three}>
                <p>
                  <span>Royalties</span>
                  {roylties || ""}
                </p>
                <p>
                  <span>FileSize</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Dropzone;
