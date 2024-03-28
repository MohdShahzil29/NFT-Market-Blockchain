import React from 'react'
import Style from './Banner.module.css'
import Image from 'next/image'

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image
         src={bannerImage}
         objectFit="cover"
         alt="Background Image"
         width={1600}
         height={300}
        //  layout="responsive"
        />
      </div>
      <div className={Style.banner_img_mobile}>
       <Image
         src={bannerImage}
         objectFit="cover"
         alt="Background Image"
         width={1600}
         height={900}
         layout="responsive"
        />
      </div>
    </div>
  )
}

export default Banner