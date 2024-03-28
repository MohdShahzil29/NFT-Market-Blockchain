"use client";
import React from "react";
import Style from "./Form.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { Button } from "@/components/componentsIndex";
const Form = () => {
  return (
    <div className={Style.form}>
      <div className={Style.form_box}>
        <form>
          <div className={Style.form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="Mohd Shahzil"
              className={Style.form_box_input_userName}
            />
          </div>
          <div className={Style.form_box_input}>
            <lable htmlFor="email">Email</lable>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email*" />
            </div>
          </div>
          <div className={Style.form_box_input}>
            <lable htmlFor="description">Description</lable>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Something about yourself in couple of words"
            ></textarea>
          </div>
          <div className={Style.form_box_input}>
            <label htmlFor="website">Website</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>
          <div className={Style.form_box_input_social}>
            <div className={Style.form_box_input}>
              <label htmlFor="facebook">Facebook</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialFacebook />
                </div>
                <input type="text" placeholder="http://shahzil" />
              </div>
            </div>{" "}
            <div className={Style.form_box_input}>
              <label htmlFor="twitter">Twitter</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialTwitter />
                </div>
                <input type="text" placeholder="http://shahzil" />
              </div>
            </div>{" "}
            <div className={Style.form_box_input}>
              <label htmlFor="instagram">Instagram</label>
              <div className={Style.form_box_input_box}>
                <div className={Style.form_box_input_box_icon}>
                  <TiSocialInstagram />
                </div>
                <input type="text" placeholder="http://shahzil" />
              </div>
            </div>
          </div>
          <div className={Style.form_box_input}>
            <label htmlFor="wallet">Wallet address</label>
            <div className={Style.form_box_input_box}>
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="5MySbMbEGrbKDhJqRrb7FzC8WFrQaBxxakNtdcqkzb2n"
              />
              <div className={Style.form_box_input_box_icon}>
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>
          <div className={Style.form_box_btn}>
            <Button
              btnName="Upload profile"
              handelClick={() => {}}
              classStyle={Style.button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
