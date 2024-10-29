import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const TopNavAdminComponent = ({
  searchMagnifyingGlassIcon = images.searchMagnifyingGlassIcon,
  bellNotificationIcon = images.bellNotificationIcon,
  userProfileAvatar = images.userProfileAvatar,
  searchInputPlaceholder = texts.searchInputPlaceholder,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1160px] w-full box-border min-h-[80px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_16px_16px__16px] bg-[#000000ff] box-border border-l-[1px] border-l-[#f2f2f266] border-r-[0px] border-r-[#f2f2f266] border-t-[0px] border-t-[#f2f2f266] border-b-[0px] border-b-[#f2f2f266]">
        {/* Search1 */}
        <section className="w-[343px] h-[48px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffff1f]">
          <div className="w-[20px] h-[23.91px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${searchMagnifyingGlassIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Search magnifying glass icon"
            />{" "}
          </div>

          <div className="max-w-[45px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[14px] whitespace-nowrap text-[#ffffff99]">
              {searchInputPlaceholder}
            </span>
          </div>
        </section>
        {/* Nav icons1 */}
        <section className="max-w-[80px] w-full box-border min-h-[40px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${bellNotificationIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Bell notification icon"
            />{" "}
          </div>

          <div className="w-[40px] h-[40px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-full">
            <img
              src={`${userProfileAvatar}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="User profile avatar"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default TopNavAdminComponent;
