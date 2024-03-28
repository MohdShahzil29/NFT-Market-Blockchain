import React from 'react'
import Style from './NFTDetailsPage.module.css'
import { NFTDiscription, NFTDetailsImg } from './NFTDetailsIndex'
const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImg />
        <NFTDiscription />
      </div>
    </div>
  )
}

export default NFTDetailsPage