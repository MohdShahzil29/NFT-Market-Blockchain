// import React from "react";
// import Style from "./DayComponents.module.css";
// import { MdVerified } from "react-icons/md";
// import images from "../../../img";
// import Image from "next/image";
// const DayComponents = () => {
//   return (
//     <div className={Style.daysComponents}>
//       <div className={Style.daysComponents_box}>
//         <div className={Style.daysComponents_box_img}>
//           <Image
//             src={images.creatorbackground1}
//             className={Style.daysComponents_box_img_img}
//             alt="Profile background image"
//             height={500}
//             width={300}
//              objectFit="cover"
//           />
//         </div>
//         <div classNamw={Style.daysComponents_box_profile}>
//           <Image
//             src={images.creatorbackground2}
//             alt="Profile"
//             width={200}
//             height={200}
//             className={Style.daysComponents_box_img_img_1}
//              objectFit="cover"
//           />
//           <Image
//             src={images.creatorbackground2}
//             alt="Profile"
//             width={200}
//             height={200}
//             className={Style.daysComponents_box_img_img_2}
//              objectFit="cover"
//           />
//           <Image
//             src={images.creatorbackground2}
//             alt="Profile"
//             width={200}
//             height={200}
//             className={Style.daysComponents_box_img_img_3}
//              objectFit="cover"
//           />
//         </div>
//         <div className={Style.daysComponents_box_title}>
//           <h2>Amazing Collection</h2>
//           <div className={Style.daysComponents_box_title_info}>
//             <div className={Style.daysComponents_box_title_info_profile}>
//               <Image
//                 src={images.user1}
//                 width={30}
//                 height={30}
//                 alt="profile"
//                 className={Style.daysComponents_box_title_info_profile_image}
//                  objectFit="cover"
//               />
//               <p>
//                 Creator
//                 <span>
//                   Mohd Shahzil
//                   <small>
//                     <MdVerified />
//                   </small>
//                 </span>
//               </p>
//             </div>
//             <div className={Style.daysComponents_box_title_info_price}>
//               <small>1.255 ETH</small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DayComponents;

import React from "react";
import Style from "./DayComponents.module.css";
import images from "../../../img";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

const DayComponents = ({el, i}) => {
  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        <div className={Style.daysComponents_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponents_box_img_img}
            alt="Profile background image"
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={Style.daysComponents_box_profile}>
          <div className={Style.daysComponents_box_profile_images}>
            <Image
              src={images.creatorbackground2}
              alt="Profile"
              width={200}
              height={150}
              className={Style.daysComponents_box_img_img}
              objectFit="cover"
            />
            <Image
              src={images.creatorbackground2}
              alt="Profile"
              width={200}
              height={150}
              className={Style.daysComponents_box_img_img}
              objectFit="cover"
            />
            <Image
              src={images.creatorbackground2}
              alt="Profile"
              width={200}
              height={150}
              className={Style.daysComponents_box_img_img}
              objectFit="cover"
            />
          </div>
        </div>
        <div className={Style.daysComponents_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponents_box_title_info}>
            <div className={Style.daysComponents_box_title_info_profile}>
              <Image
                src={el.user}
                width={30}
                height={30}
                alt="profile"
                className={Style.daysComponents_box_title_info_profile_image}
                objectFit="cover"
              />
              <p>
                Creator
                <span>
                  Mohd Shahzil
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponents_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayComponents;
