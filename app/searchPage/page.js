"use client"
import React from 'react'
import Style from '../../style/searchPage.module.css'
import {Slider, Brand} from '../../components/componentsIndex'
import { SearchPage } from '@/searchPages/searchIndex'
import {Filter} from './../../components/componentsIndex';
import { Banner, NFTCardTwo } from '@/collectionPages/collectionPage';
import images from '../../img'
const page = () => {
    const collectionArray = [
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_2,
        images.nft_image_3,
    ]
  return (
    <div className={Style.searchPage}>
        <Banner bannerImage={images.creatorbackground2}/>
        <SearchPage /> 
        <Filter />
        <NFTCardTwo NFTData={collectionArray}/>
        <Slider />
        <Brand />
    </div>
  )
}

export default page