import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const SideNavigationBarComponent = ({
  hamburgerMenuIcon = images.hamburgerMenuIcon,
  dashboardIcon = images.dashboardIcon,
  liveOrdersIcon = images.liveOrdersIcon,
  completedOrdersIcon = images.completedOrdersIcon,
  pendingRscQuotesIcon = images.pendingRscQuotesIcon,
  shippingAndTrackingIcon = images.shippingAndTrackingIcon,
  preQuotedCooksIcon = images.preQuotedCooksIcon,
  inStoreFlipsIcon = images.inStoreFlipsIcon,
  userManagementIcon = images.userManagementIcon,
  hamburgerMenuIcon0 = images.hamburgerMenuIcon0,
  hamburgerMenuIcon1 = images.hamburgerMenuIcon1,
  dashboardNavigationLabel = texts.dashboardNavigationLabel,
  liveOrdersNavigationLabel = texts.liveOrdersNavigationLabel,
  completedOrdersNavigationLabel = texts.completedOrdersNavigationLabel,
  pendingRscQuotesNavigationLabel = texts.pendingRscQuotesNavigationLabel,
  shippingTrackingNavigationLabel = texts.shippingTrackingNavigationLabel,
  preQuotedCooksNavigationLabel = texts.preQuotedCooksNavigationLabel,
  inStoreFlipsNavigationLabel = texts.inStoreFlipsNavigationLabel,
  userManagementNavigationLabel = texts.userManagementNavigationLabel,
  analyticsNavigationLabel = texts.analyticsNavigationLabel,
  logoutNavigationLabel = texts.logoutNavigationLabel,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[280px] w-full box-border min-h-[1024px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_16px_0px__16px] bg-[#000000ff]">
        {/* logo + Collapse1 */}
        <section className="max-w-[248px] w-full box-border min-h-[56px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_0px_16px__0px] bg-[#000000ff]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${hamburgerMenuIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Hamburger menu icon"
            />{" "}
          </div>
        </section>
        {/* Navigations1 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${dashboardIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Dashboard icon"
            />{" "}
          </div>

          <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {dashboardNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations2 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${liveOrdersIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Live orders icon"
            />{" "}
          </div>

          <div className="max-w-[83px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {liveOrdersNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations3 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${completedOrdersIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Completed orders icon"
            />{" "}
          </div>

          <div className="max-w-[131px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {completedOrdersNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations4 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${pendingRscQuotesIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Pending RSC quotes icon"
            />{" "}
          </div>

          <div className="max-w-[154px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {pendingRscQuotesNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations5 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${shippingAndTrackingIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Shipping and tracking icon"
            />{" "}
          </div>

          <div className="max-w-[143px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {shippingTrackingNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations6 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${preQuotedCooksIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Pre-quoted cooks icon"
            />{" "}
          </div>

          <div className="max-w-[133px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {preQuotedCooksNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations7 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[7]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${inStoreFlipsIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="In-store flips icon"
            />{" "}
          </div>

          <div className="max-w-[96px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {inStoreFlipsNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations8 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[8]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffff1f]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${userManagementIcon}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="User management icon"
            />{" "}
          </div>

          <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffffff]">
              {userManagementNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations9 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[9]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${hamburgerMenuIcon0}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Analytics icon"
            />{" "}
          </div>

          <div className="max-w-[65px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {analyticsNavigationLabel}
            </span>
          </div>
        </section>
        {/* Navigations10 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[10]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <img
              src={`${hamburgerMenuIcon1}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="Logout icon"
            />{" "}
          </div>

          <div className="max-w-[49px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {logoutNavigationLabel}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SideNavigationBarComponent;
