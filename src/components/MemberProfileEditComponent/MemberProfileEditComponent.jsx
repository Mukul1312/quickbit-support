import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const MemberProfileEditComponent = ({
  edittitletext = texts.edittitletext,
  membernamelabel = texts.membernamelabel,
  membernameplaceholder = texts.membernameplaceholder,
  discordidlabel = texts.discordidlabel,
  discordidplaceholder = texts.discordidplaceholder,
  discordrolelabel = texts.discordrolelabel,
  discordrolevalue = texts.discordrolevalue,
  emaillabel = texts.emaillabel,
  emailplaceholder = texts.emailplaceholder,
  statuslabel = texts.statuslabel,
  statusvalue = texts.statusvalue,
  savechangesbuttontext = texts.savechangesbuttontext,
}) => {
  return (
    <div className="w-full box-border opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center   items-center content-space-between p-[40px_40px_40px__40px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]">
      {/* Frame 201 */}
      <section className="max-w-[470px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_0px_0px__0px]">
        <div className="max-w-[470px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]">
          <div className="max-w-[38px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[20px] font-[Arial] font-[700] no-underline none leading-[20px] whitespace-nowrap text-[#ffffffff]">
              {edittitletext}
            </span>
          </div>
        </div>

        <div className="max-w-[470px] w-full box-border opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[24px_24px_24px__24px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#101010ff]">
          <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
            <div className="max-w-[422px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                {membernamelabel}
              </span>
            </div>

            <input
              className="text-[16px] bg-transparent font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99] text-left leading-[0px] max-w-[422px] w-full box-border h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
              type="text"
              placeholder="Enter Text"
            />
          </div>

          <div className="max-w-[422px] w-full box-border  opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
            <div className="max-w-[422px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
              <div className="max-w-[422px] w-full box-border opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                  {discordidlabel}
                </span>
              </div>

              <input
                className="text-[16px] bg-transparent font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99] max-w-[422px] w-full box-border h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
                type="text"
                placeholder="Enter Text"
              />
            </div>
          </div>

          <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
            <div className="max-w-[422px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <se className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                {discordrolelabel}
              </se>
            </div>

            <div className="max-w-[422px] w-full box-border h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]">
              <div className="max-w-[54px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <div className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {discordrolevalue}
                </div>
              </div>

              <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                <div className="w-[12px] h-[7px] top-[9px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-64816724 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
            <div className="max-w-[422px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                {emaillabel}
              </span>
            </div>

            <input
              className="text-[16px] bg-transparent font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99] max-w-[422px] w-full box-border h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
            <div className="max-w-[422px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                {statuslabel}
              </span>
            </div>

            <div className="max-w-[422px] w-full box-border h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]">
              <div className="max-w-[44px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {statusvalue}
                </span>
              </div>

              <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                <div className="w-[12px] h-[7px] top-[9px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-64816734 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[470px] w-full box-border  opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-end items-center gap-[16px] p-[0px_0px_0px__0px]">
          <button
            className="cursor-pointer max-w-[120px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffffff]"
            onClick={() => alert("Changes saved!")}
          >
            <div className="max-w-[96px] w-full box-border  opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
              <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#000000ff]">
                {savechangesbuttontext}
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};
export default MemberProfileEditComponent;
