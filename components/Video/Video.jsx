import React from 'react'
import Style from './Video.module.css'
import Image from 'next/image';
import images from '../../img'
const Video = () => {
  return (
    <div className={Style.video}>
        <div className={Style.video_box}>
            <h1>
                <span>🎬</span> The Videos
            </h1>
            <p>Check out our honest videos. View more perspectives on jusr about any topic. Everyone's welcome</p>
            <div className={Style.video_box_frame}>
                <div className={Style.video_box_frame_left}>
                    <Image />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Video