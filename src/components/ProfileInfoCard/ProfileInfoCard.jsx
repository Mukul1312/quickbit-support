import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const ProfileInfoCard = ({
  pencilEditIcon = images.pencilEditIcon,
  sectiontitle = texts.sectiontitle,
  fieldlabel = texts.fieldlabel,
  userfullname = texts.userfullname,
  fieldlabel1 = texts.fieldlabel1,
  useremail = texts.useremail,
  fieldlabel2 = texts.fieldlabel2,
  useripaddress = texts.useripaddress,
  fieldlabel3 = texts.fieldlabel3,
  userstatus = texts.userstatus,
  fieldlabel4 = texts.fieldlabel4,
  userlogintype = texts.userlogintype,
  fieldlabel5 = texts.fieldlabel5,
  userdiscordid = texts.userdiscordid,
  fieldlabel6 = texts.fieldlabel6,
  usersignupdate = texts.usersignupdate,
  fieldlabel7 = texts.fieldlabel7,
  userlastlogin = texts.userlastlogin,
  buttonlabel = texts.buttonlabel,
  buttonlabel1 = texts.buttonlabel1,
}) => {
  return (
    <div className="max-w-[550px] w-full box-border min-h-[578px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[40px_40px_40px__40px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]">
      {/* Wrap1 */}
      <section className="max-w-[470px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[0px_0px_0px__0px]">
        <div className="max-w-[105px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
          <span className="text-[20px] font-[Arial] font-[700] no-underline none leading-[20px] whitespace-nowrap text-[#ffffffff]">
            {sectiontitle}
          </span>
        </div>

        <div
          className="w-[20px] h-[20px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden"
          onClick={() => alert("Edited")}
        >
          <img
            src={`${pencilEditIcon}`}
            className="absolute cursor-pointer opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
            alt="Pencil edit icon"
          />{" "}
        </div>
      </section>
      {/* Container1 */}
      <section className="max-w-[470px] w-full box-border min-h-[379px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_0px_0px__0px]">
        <div className="max-w-[470px] w-full box-border min-h-[379px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[16px_16px_16px__16px] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#ffffff0a]">
          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[64px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel}
              </span>
            </div>

            <div className="max-w-[64px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {userfullname}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[36px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel1}
              </span>
            </div>

            <div className="max-w-[136px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {useremail}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[68px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel2}
              </span>
            </div>

            <div className="max-w-[90px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {useripaddress}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[25px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[40px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel3}
              </span>
            </div>

            <div className="max-w-[51px] w-full box-border min-h-[25px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[10px] p-[2px_6px_2px__6px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[4px] bg-[#4caf501a]">
              <div className="max-w-[39px] w-full box-border min-h-[21px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[21px] whitespace-nowrap text-[#4caf50ff]">
                  {userstatus}
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[69px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel4}
              </span>
            </div>

            <div className="max-w-[48px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {userlogintype}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[66px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel5}
              </span>
            </div>

            <div className="max-w-[86px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {userdiscordid}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[78px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel6}
              </span>
            </div>

            <div className="max-w-[109px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {usersignupdate}
              </span>
            </div>
          </div>

          <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[7]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
            <div className="max-w-[65px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                {fieldlabel7}
              </span>
            </div>

            <div className="max-w-[105px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                {userlastlogin}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Text + icon1 */}
      <section className="max-w-[470px] w-full box-border min-h-[48px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-end items-center gap-[16px] p-[0px_0px_0px__0px]">
        <button
          className="cursor-pointer max-w-[133px] w-full box-border min-h-[48px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffffff]"
          onClick={(e) => alert("Button 1 clicked")}
        >
          <div className="max-w-[109px] w-full box-border min-h-[16px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#000000ff]">
              {buttonlabel}
            </span>
          </div>
        </button>

        <button
          className="cursor-pointer max-w-[84px] w-full box-border min-h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ff1818ff]"
          onClick={(e) => alert("Button 2 clicked")}
        >
          <div className="max-w-[60px] w-full box-border min-h-[16px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#ffffffff]">
              {buttonlabel1}
            </span>
          </div>
        </button>
      </section>
    </div>
  );
};
export default ProfileInfoCard;
