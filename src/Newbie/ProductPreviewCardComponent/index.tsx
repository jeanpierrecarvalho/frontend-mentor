import React from "react";
import "./index.css";
import imgDesktop from "./assets/images/image-product-desktop.jpg";
import imgMobile from "./assets/images/image-product-mobile.jpg";
import IconCart from "./assets/images/icon-cart.svg";

function ProductPreviewCardComponent() {
  return (
    <div className="flex h-screen w-screen bg-[#F2EAE2] justify-center items-center">
      <div className="flex flex-col md:flex-row w-[343px] md:w-[600px] h-[611px] md:h-[450px] bg-white rounded-[10px]">
        <div className="w-full md:w-1/2 h-[240px]">
          <img
            src={imgDesktop}
            className="hidden md:block w-full rounded-l-[10px] rounded-r-[0px]"
            alt={"Some alt"}
          />
          <img
            src={imgMobile}
            className="md:hidden md:w-full rounded-t-[10px] md:rounded-l-[10px] md:rounded-r-[0px]"
            alt={"Some alt"}
          />
        </div>
        <div className="w-full md:w-1/2 px-[32px] mt-[24px] md:mt-[32px]">
          <div className="text-overline tracking-[5px]">PERFUME</div>
          <div className="text-display mt-[12px] md:mt-[20px]">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="text-body mt-[16px] md:mt-[24px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="mt-[16px] md:mt-[29px]">
            <div className="flex flex-row items-center">
              <div className="text-display">
                <span className="text-[#3D8168]">$149.99</span>
              </div>
              <div className="text-body ml-[20px]">
                <span className="text-[13px] line-through">$169.99</span>
              </div>
            </div>
            <div className="mt-[20px] md:mt-[30px]">
              <button className="bg-[#3D8168] hover:bg-[#1A4032] text-button-text w-full h-[48px] rounded-[8px]">
                <div className="flex flex-row justify-center">
                  <img
                    src={IconCart}
                    className="w-[14.39px] h-[16px]"
                    alt={"Some alt"}
                  />
                  <span className="ml-[10px]">Add to Cart</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreviewCardComponent;
