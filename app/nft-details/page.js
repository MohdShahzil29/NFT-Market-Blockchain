import React from 'react'
import Style from '../../style/NFTDetails.module.css'
import {Button, Category, Brand} from '../../components/componentsIndex'
import NFTDetailsPage from '@/NFTDetailsPage/NFTDetailsPage'

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  )
}

export default NFTDetails