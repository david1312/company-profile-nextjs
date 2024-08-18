/* eslint-disable @next/next/no-img-element */
import React from "react";
import moduleName from "@/src/assets/images/common/Academy.webp";

const Partneship: React.FC = () => {
  return (
    <div className="flex flex-col first-section">
      <div className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div
          className="text-center b-section-title text-white"
          style={{ marginTop: "-20px", padding: "10px" }}
        >
          <p className="max-w-xl cool-text">Partnership</p>
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
                    We are open to establishing strategic partnerships with
                    renewable energy operator/businesses, global manufacturers
                    and distributors of ASIC miners and equipment solutions, and
                    the influencers, tutors or other Bitcoin/crypto educators.
                    Through this partnership, we hope to provide each other with
                    optimal benefits and support mutual growth in the Bitcoin
                    ecosystem.
                    <br /> <br />
                    <span className="text-sm">
                      Contact us at:{" "}
                      <a href="mailto:ir@bitboltz.co.id" className="c-blue">
                        ir@bitboltz.co.id
                      </a>
                    </span>
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

export default Partneship;
