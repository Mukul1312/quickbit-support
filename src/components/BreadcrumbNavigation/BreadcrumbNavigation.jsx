import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const BreadcrumbNavigation = ({
  rightArrowIcon = images.rightArrowIcon,
  rightArrowIcon1 = images.rightArrowIcon1,
  rightArrowIcon2 = images.rightArrowIcon2,
  dashboardLink = texts.dashboardLink,
  userManagementLink = texts.userManagementLink,
  johnDoeProfileLink = texts.johnDoeProfileLink,
  editPageLink = texts.editPageLink,
}) => {
  return (
    <div className="w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]">
      {/* Back btn1 */}
      <section className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
        <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
          <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
            {dashboardLink}
          </span>
        </div>
      </section>

      <div className="w-[7px] h-[14.01px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
        <img
          src={`${rightArrowIcon}`}
          className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
          alt="Right arrow icon"
        />{" "}
      </div>
      {/* Back btn2 */}
      <section className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
        <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
          <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
            {userManagementLink}
          </span>
        </div>
      </section>

      <div className="w-[7px] h-[14.01px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden">
        <img
          src={`${rightArrowIcon1}`}
          className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
          alt="Right arrow icon"
        />{" "}
      </div>
      {/* Back btn3 */}
      <section className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
        <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
          <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
            {johnDoeProfileLink}
          </span>
        </div>
      </section>

      <div className="w-[7px] h-[14.01px] opacity-[1] z-[5]  rotate-[0deg]   overflow-hidden">
        <img
          src={`${rightArrowIcon2}`}
          className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
          alt="Right arrow icon"
        />{" "}
      </div>
      {/* Back btn4 */}
      <section className="max-w-[28px] w-full box-border min-h-[18px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
        <div className="max-w-[28px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
          <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
            {editPageLink}
          </span>
        </div>
      </section>
    </div>
  );
};
export default BreadcrumbNavigation;
