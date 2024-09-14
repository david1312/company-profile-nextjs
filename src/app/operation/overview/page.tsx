"use client";
import { CURRENT_PROJECT } from "@/src/utils/config";
import Image from "next/image";
import styles from "./overview.module.css";
import { OverviewWrapper } from "./overview.styles";
import React from "react";

const OperationOverview: React.FC = () => {
  return (
    <OverviewWrapper
      id="Team"
      className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
    >
      <div className="section-title">
        <p>
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
                  {val.title}
                </div>
                {val.spec.map((spec, indexSpec) => {
                  return (
                    <React.Fragment key={indexSpec}>
                      <div
                        className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                      >
                        <div>
                          <Image
                            src={spec.image}
                            alt="hash rate"
                            width={72}
                            height={72}
                            className={`${styles.currentMiningImage}`}
                          />
                        </div>
                        <div className="pt-2 text-sm">{spec.value}</div>
                        <div className="pt-2 text-sm">{spec.title1}</div>
                        <div className="pt-0 text-sm">{spec.title2}</div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </OverviewWrapper>
  );
};

export default OperationOverview;
