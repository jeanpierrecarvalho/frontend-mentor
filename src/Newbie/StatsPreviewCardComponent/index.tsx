import React from "react";
import "./index.css";
import imgDesktop from "./assets/images/image-header-desktop.jpg";
import imgMobile from "./assets/images/image-header-mobile.jpg";

function StatsPreviewCardComponent() {
  return (
    <div className="flex h-screen w-screen bg-[#0A0C1C] justify-center items-center">
      <div className="w-[327px] h-[780px] md:w-[1100px] md:h-[446px] bg-[#1b1937] rounded-[8px]">
        <div className="flex md:flex-row flex-col-reverse ">
          <div className="flex flex-col md:w-[560px] md:pl-[71.5px] text-center md:text-left">
            <div className="text-display mt-[40px] md:mt-[71px] md:w-[403px] px-[31.5px] md:px-[0px]">
              Get <span className="text-[#AB5CDB]">insights</span> that help
              your business grow.
            </div>
            <div className="text-body mt-[16px] md:mt-[25px] md:w-[361px] px-[31px] md:px-[0px]">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </div>
            <div className="flex flex-col md:flex-row mt-[40px] md:mt-[72px]">
              <div className="flex flex-col md:w-1/3">
                <div className="text-display">
                  <span className="text-[24px]">10k+</span>
                </div>
                <span className="text-overline uppercase">companies </span>
              </div>
              <div className="flex flex-col md:w-1/3 mt-[24px] md:mt-[0px]">
                <div className="text-display">
                  <span className="text-[24px]">314</span>
                </div>
                <span className="text-overline uppercase">templates </span>
              </div>
              <div className="flex flex-col md:w-1/3 mt-[24px] md:mt-[0px]">
                <div className="text-display">
                  <span className="text-[24px]">12m+</span>
                </div>
                <span className="text-overline uppercase">queries </span>
              </div>
            </div>
          </div>
          <div className="md:w-[540px] bg-[#AB5CDB] opacity-75 rounded-t-[8px] md:rounded-r-[8px]">
            <img
              src={imgDesktop}
              className="hidden md:block w-full mix-blend-multiply rounded-r-[8px]"
              alt={"Some alt"}
            />
            <img
              src={imgMobile}
              className="block md:hidden w-full mix-blend-multiply rounded-t-[8px]"
              alt={"Some alt"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPreviewCardComponent;
