"use client";
import React, { useState } from "react";
import Style from "./UploadNFT.module.css";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import images from "../img";
import Image from "next/image";
import { Button } from "../components/componentsIndex";
import {Dropzone} from './uploadNFTIndex' 
import formStyle from "../accountPage/Form/Form.module.css";
const UploadNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [roylties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");

  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image_2,
      category: "Arts",
    },
    {
      image: images.nft_image_3,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_2,
      category: "Time",
    },
    {
      image: images.nft_image_3,
      category: "Photgraphy",
    },
  ];
  return (
    <div className={Style.uplaod}>
      <Dropzone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or Browser media on your device"
        itemName={itemName}
        website={website}
        description={description}
        roylties={roylties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
      />
      <div className={Style.uplaod_box}>
        <div className={Style.form_box_inputs}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="Mohd Shahzil"
            className={Style.form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className={Style.form_box_inputs}>
          <label htmlFor="website">Website</label>
          <div className={Style.form_box_input_box}>
            <div className={Style.form_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input
              type="text"
              placeholder="website"
              className={Style.form_box_input_website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <p className={Style.uplaod_box_input_para}>
            Ciscrypt will include a like to this URL on this item's page, so
            that users can click to learn more about it. You are welcome to link
            to your own webpage with more details
          </p>
        </div>
        <div className={Style.form_box_inputs}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Something about yourself in couple of words"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported
          </p>
        </div>
        <div className={Style.form_box_inputs}>
          <lable htmlFor="name">Choose collection</lable>
          <p className={Style.uplaod_box_input_para}>
            Choose an existing collection or craete a new one
          </p>
          <div className={Style.uplaod_box_slider_div}>
            {categoryArray.map((ei, i) => (
              <div
                className={`${Style.uplaod_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(ei.category))}
              >
                <div className={Style.uplaod_box_slider_box}>
                  <div className={Style.uplaod_box_slider_box_img}>
                    <Image
                      src={ei.image}
                      alt="Background image"
                      width={70}
                      height={70}
                      className={Style.uplaod_box_slider_box_img_img}
                      // layout="responsive"
                    />
                  </div>
                  <div className={Style.uplaod_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>Crypto Legend - Professer</p>
              </div>
            ))}
          </div>
        </div>
        <div className={Style.form_box_input_social}>
          <div className={Style.form_box_inputs}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={Style.form_box_input_boxs}>
              <div className={Style.form_box_input_boxs_icon}>
                <FaPercent />
              </div>
              <input
                type="text"
                placeholder="20%"
                onChange={(e) => setRoyalties(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.form_box_inputs}>
            <label htmlFor="size">Size</label>
            <div className={Style.form_box_input_boxs}>
              <div className={Style.form_box_input_boxs_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="165MB"
                onChange={(e) => setFileSize(e.target.value)}
              />
            </div>
          </div>
          <div className={Style.form_box_inputs}>
            <label htmlFor="Propertie">Propertie</label>
            <div className={Style.form_box_input_boxs}>
              <div className={Style.form_box_input_boxs_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Propertie"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={Style.uplaod_box_btn}>
          <Button
            btnName="Upload"
            handelClick={() => {}}
            classStyle={Style.uplaod_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadNFT;
