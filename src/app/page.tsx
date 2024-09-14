/* eslint-disable @next/next/no-img-element */
"use client";

import logoGreenText from "@/src/assets/images/icon/logo-green-text.png";
import Image from "next/image";
import { LIST_CARD } from "@/src/utils/config";
import usePingServer from "../hooks/usePing";
import { useEffect } from "react";
import {
  HomeContainer,
  HomeHighlight,
  HomeLogo,
  HomeParagraph,
  KeyPoint,
  KeyPointsWrapper,
  StrengthsWrapper,
  TitleWrapper,
} from "./page.styles";

export default function Home() {
  const { pingServer } = usePingServer();

  useEffect(() => {
    pingServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="flex flex-col min-h-screen first-section">
      <HomeContainer>
        <section className="flex flex-col justify-center items-center  text-white h-screen p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <HomeLogo>
            <Image
              alt=""
              src={logoGreenText}
              priority={true}
              className="text-center object-cover h-96 w-96 -mt-24"
            />
          </HomeLogo>

          <HomeParagraph>
            <p className="text-lg max-w-xl text-center ">
              Contribute to securing and building the bitcoin blockchain network
              infrastructure and turning electrical energy into store of value
              and bringing it to the Indonesian people society.
            </p>
            <br />
          </HomeParagraph>
          <HomeHighlight>
            <p className="cool-text">
              “We believe the Bitcoin industry, Blockchain Technology and Web
              3.0 are the future”
            </p>
          </HomeHighlight>
        </section>
        <div className="bg-navy p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <StrengthsWrapper>
            <TitleWrapper>
              <h1>Our Strengths & Core Value</h1>
            </TitleWrapper>

            <KeyPointsWrapper>
              {LIST_CARD.map((val, index) => (
                <KeyPoint key={index}>
                  <div className="icon">{`${index + 1}`}</div>
                  <div className="content">
                    <h3>{val.title}</h3>
                    <p>{val.content}</p>
                  </div>
                </KeyPoint>
              ))}
            </KeyPointsWrapper>
          </StrengthsWrapper>
        </div>
      </HomeContainer>
    </div>
  );
}
