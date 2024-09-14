"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import moduleName from "@/src/assets/images/common/Academy.webp";

const BitBoltzAcademy: React.FC = () => {
  return (
    <div className="flex flex-col first-section">
      <div className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div
          className="text-center b-section-title text-white"
          style={{ marginTop: "-20px", padding: "10px" }}
        >
          <p className="max-w-xl cool-text">
            Mastering the Entire Bitcoin Ecosystem with BitBoltz Academy
          </p>
        </div>

        <div className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-8 sm:col-span-4 content-center">
                <img
                  src={moduleName.src}
                  className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                  alt="bitcoin-expert"
                />
              </div>
              <div className="col-span-8 sm:col-span-4 ">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 text-lg">
                    Deep Learning about Bitcoin, the Bitcoin network, Bitcoin
                    miners, secure self-custody, and more.
                  </div>

                  <div className="col-span-2 text-xl">WILL AVAILABLE SOON!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitBoltzAcademy;
