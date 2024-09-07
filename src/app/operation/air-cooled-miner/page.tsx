/* eslint-disable @next/next/no-img-element */
import {
  CURRENT_PROJECT,
  LIST_PROJECT,
  MINING_TYPE,
} from "@/src/constants/config";
import hashRate from "@/src/assets/images/common/hashrate.webp";
import electric from "@/src/assets/images/common/electric.webp";
import energy from "@/src/assets/images/common/energy.webp";
import btc from "@/src/assets/images/common/bitcoin.webp";
import cost from "@/src/assets/images/common/cost.webp";
import antminer from "@/src/assets/images/common/antminers21.webp";
import hardware from "@/src/assets/images/common/hardware2.jpeg";
import React from "react";
import Image from "next/image";
import styles from "./air-cooled-miner.module.css";

const AirCooledMiner: React.FC = () => {
  return (
    <div className="flex flex-col first-section">
      <div className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div
          className="text-center b-section-title text-white"
          style={{ marginTop: "-20px", padding: "10px" }}
        >
          <p className="max-w-xl cool-text text-2xl">
            Focused On Bitcoin <br />
            Established in Profitability
          </p>
        </div>

        {CURRENT_PROJECT.map((val, i) => {
          return (
            <div
              className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
              key={`project${i}`}
            >
              <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl flex-auto">
                <div className="grid grid-cols-10 gap-4">
                  <div className="col-span-10 content-center text-center">
                    Bitboltz Mining Performance `as September 2024`
                  </div>
                  <div
                    className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                  >
                    <div>
                      <Image
                        src={hashRate}
                        alt="hash rate"
                        width={72}
                        height={72}
                        className={`${styles.currentMiningImage}`}
                      />
                    </div>
                    <div className="pt-2 text-sm">3548 TH/s</div>
                    <div className="pt-2 text-sm">Compute</div>
                    <div className="pt-0 text-sm">Hashrates Power</div>
                  </div>
                  <div
                    className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                  >
                    <div>
                      <Image
                        src={electric}
                        alt="electric"
                        width={72}
                        height={72}
                        className={`${styles.currentMiningImage}`}
                      />
                    </div>
                    <div className="pt-2 text-sm">61.620 Watt</div>
                    <div className="pt-2 text-sm">Electrical Energy</div>
                    <div className="pt-0 text-sm">Usage in Operations</div>
                  </div>
                  <div className="col-span-2 content-center text-center gap-2">
                    <div
                      className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                    >
                      <div>
                        <Image
                          src={btc}
                          alt="btc"
                          width={72}
                          height={72}
                          className={`${styles.currentMiningImage}`}
                        />
                      </div>
                      <div className="pt-2 text-sm">1,03624639 BTC/Year</div>
                      <div className="pt-2 text-sm">Bitcoin Production</div>
                      <div className="pt-0 text-sm">Capacity</div>
                    </div>
                  </div>
                  <div className="col-span-2 content-center text-center gap-2">
                    <div
                      className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                    >
                      <div>
                        <Image
                          src={energy}
                          alt="btc"
                          width={72}
                          height={72}
                          className={`${styles.currentMiningImage}`}
                        />
                      </div>
                      <div className="pt-2 text-sm">17,4 J/T</div>
                      <div className="pt-2 text-sm">Energy Efficieny in</div>
                      <div className="pt-0 text-sm">Operations</div>
                    </div>
                  </div>
                  <div className="col-span-2 content-center text-center gap-2">
                    <div
                      className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                    >
                      <div>
                        <Image
                          src={cost}
                          alt="btc"
                          width={72}
                          height={72}
                          className={`${styles.currentMiningImage}`}
                        />
                      </div>
                      <div className="pt-2 text-sm">Rp.553.285.980 / Year</div>
                      <div className="pt-2 text-sm">Electricity Cost</div>
                      <div className="pt-0 text-sm">Yearly</div>
                    </div>
                  </div>
                  <div className="col-span-5 gap-4 place-self-center">
                    <img
                      src={antminer.src}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                  <div className="col-span-5 place-self-center">
                    <img
                      src={hardware.src}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-b-third p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="text-center b-section-title text-white pt-6">
          <p className="max-w-xl ">Air Cooled Miner</p>
        </div>
        {LIST_PROJECT.filter((val) => val.type === MINING_TYPE.AIR_COOLED).map(
          (val, i) => {
            return (
              <div
                className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
                key={`project${i}`}
              >
                <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl flex-auto">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-8 sm:col-span-4 content-center">
                      <img
                        src={val.img}
                        className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                        alt="bitcoin-expert"
                      />
                    </div>
                    <div className="col-span-8 sm:col-span-4 ">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-3 text-lg">{val.title}</div>
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
                              <div className="col-span-2 text-sm">
                                {spec.title}
                              </div>
                              <div className="col-span-2 text-sm">
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
          }
        )}
        {/* <div className="b-section-subtitle text-center pt-4 pb-6">
          <p className="max-w-xl text-white">
            These five projects will be merged and formed into a single holding
            company in preparation for an IPO on the Indonesia Stock Exchange
            (IDX) to continue our vision, mission, and large-scale projects
            sustainably, BitBoltz is determined to build a Bitcoin Mining
            facility on a 10,000m2 land, complete with a Bitcoin mining data
            center building and infrastructure including electrical and solar
            panels with the following estimate:
          </p>
        </div> */}
        {/* {PROJECT_COMBINED.map((val, i) => {
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
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-3 text-lg">{val.title}</div>
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
                            <div className="col-span-2 text-sm">
                              {spec.title}
                            </div>
                            <div className="col-span-2 text-sm">
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
        })} */}
      </div>
    </div>
  );
};

export default AirCooledMiner;
