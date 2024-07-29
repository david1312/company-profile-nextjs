/* eslint-disable @next/next/no-img-element */
import {
  CURRENT_PROJECT,
  LIST_PROJECT,
  PROJECT_COMBINED,
} from "@/src/constants/data";
import React from "react";

const BitcoinMining: React.FC = () => {
  return (
    <div className="flex flex-col first-section">
      <div className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div
          className="text-center b-section-title text-white"
          style={{ marginTop: "-20px", padding: "10px" }}
        >
          <p className="max-w-xl ">Bitcoin Mining Operations</p>
        </div>

        {CURRENT_PROJECT.map((val, i) => {
          return (
            <div
              className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
              key={`project${i}`}
            >
              <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl">
                <div className="grid grid-cols-8 gap-4">
                  <div className="col-span-8 sm:col-span-4 content-center">
                    <img
                      src={val.img}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-4 ">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 text-lg">{val.title}</div>

                      {val.spec.map((spec, indexSpec) => {
                        return (
                          <React.Fragment key={`spec${indexSpec}`}>
                            <div className="col-span-1 text-sm">
                              {spec.title}
                            </div>
                            <div className="col-span-1 text-sm">
                              : {spec.value}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-b-third p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="text-center b-section-title text-white pt-6">
          <p className="max-w-xl ">OUR MEGA PROJECT PLAN</p>
        </div>
        <div className="b-section-subtitle text-center pt-4 ">
          <p className="max-w-xl text-white">
            BitBoltz intends to become the Best Bitcoin mining company from
            Indonesia.
          </p>
        </div>
        {LIST_PROJECT.map((val, i) => {
          return (
            <div
              className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
              key={`project${i}`}
            >
              <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl">
                <div className="grid grid-cols-8 gap-4">
                  <div className="col-span-8 sm:col-span-4 content-center">
                    <img
                      src={val.img}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-4 ">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 text-lg">{val.title}</div>
                      <div className="col-span-1 float-right">
                        <img
                          src={val.icon}
                          className="border-2 border-white w-8 h-8 rounded-full float-right"
                          alt="indoFlag"
                        />
                      </div>
                      {val.spec.map((spec, indexSpec) => {
                        return (
                          <React.Fragment key={`spec${indexSpec}`}>
                            <div className="col-span-1 text-sm">
                              {spec.title}
                            </div>
                            <div className="col-span-1 text-sm">
                              : {spec.value}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="b-section-subtitle text-center pt-4 pb-6">
          <p className="max-w-xl text-white">
            These five projects will be merged and formed into a single holding
            company in preparation for an IPO on the Indonesia Stock Exchange
            (IDX) to continue our vision, mission, and large-scale projects
            sustainably, BitBoltz is determined to build a Bitcoin Mining
            facility on a 10,000m2 land, complete with a Bitcoin mining data
            center building and infrastructure including electrical and solar
            panels with the following estimate:
          </p>
        </div>
        {PROJECT_COMBINED.map((val, i) => {
          return (
            <div
              className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
              key={`project${i}`}
            >
              <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl">
                <div className="grid grid-cols-8 gap-4">
                  <div className="col-span-8 sm:col-span-4 content-center">
                    <img
                      src={val.img}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-4 ">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1 text-lg">{val.title}</div>
                      <div className="col-span-1 float-right">
                        <img
                          src={val.icon}
                          className="border-2 border-white w-8 h-8 rounded-full float-right"
                          alt="indoFlag"
                        />
                      </div>
                      {val.spec.map((spec, indexSpec) => {
                        return (
                          <React.Fragment key={`spec${indexSpec}`}>
                            <div className="col-span-1 text-sm">
                              {spec.title}
                            </div>
                            <div className="col-span-1 text-sm">
                              : {spec.value}
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BitcoinMining;
