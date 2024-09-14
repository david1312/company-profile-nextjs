"use client";
import { configData } from "@/src/utils/config";
import React, { useCallback, useEffect } from "react";
import LineChart from "@/src/components/chart/LineChart";
import {
  Column,
  Container,
  Content,
  HowBitcoinWork,
  OverviewWrapper,
  SummaryCard,
  Title,
} from "./overview.styles";
import { BTCPriceResponse, ScrapingResponse } from "@/src/types/apiResponses";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { setPrice } from "@/src/store/btcSlice";
import { API_INTERNAL } from "@/src/utils/configApi";
import Image from "next/image";
import styles from "./overview.module.css";
import useBTCOverview from "@/src/hooks/useBtcOverview";

const BitcoinOverview: React.FC = () => {
  const dispatch = useDispatch();
  const btcData: ScrapingResponse = useSelector(
    (state: RootState) => state.btcData.data
  );
  const BTC_OVERVIEW = useBTCOverview();

  const prices: BTCPriceResponse = useSelector(
    (state: RootState) => state.btcData.prices
  );
  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get<BTCPriceResponse>(API_INTERNAL.BTC_PRICES, {
        params: {
          limit: configData.limitTimeFrame,
        },
      });

      if (!!res.data) {
        dispatch(
          setPrice({
            data: res.data.data,
            date: res.data.date,
          })
        );
      }
    } catch (error) {
      console.error("error when fetch Header Data:", error);
    }
  }, [dispatch]);

  const checkAndFetchData = useCallback(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (prices.data && prices.data.length > 0 && currentDate === prices.date) {
      console.log("market data already up to date: ", prices);
      return;
    }
    // Fetch new data if no valid data is found in localStorage
    fetchData();
  }, [fetchData, prices]);

  useEffect(() => {
    checkAndFetchData(); // Fetch the data when the component mounts
  }, [checkAndFetchData]);

  return (
    <>
      <OverviewWrapper
        id="BitcoinOverview"
        className="p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
      >
        <div className="section-title">
          <p>
            Bitcoin Overview <br />
            Today Price {btcData.time}: IDR {btcData.btcIdr}
          </p>
        </div>
        {}
        <LineChart btcPrices={prices.data} idrRate={btcData.idrUsdRate} />
        {BTC_OVERVIEW.map((val, i) => {
          return (
            <SummaryCard key={`project${i}`}>
              <div className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
                <div className="b-container-card bg-b-card-sec p-4 sm:p-6 rounded-2xl text-white max-w-5xl flex-auto pt-14">
                  <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-8 content-center text-center">
                      {val.title}
                    </div>
                    {val.data.map((data, indexdata) => {
                      return (
                        <React.Fragment key={indexdata}>
                          <div
                            className={`col-span-2 content-center text-center gap-2 ${styles.currentMiningContent}`}
                          >
                            <div className="pt-2 text-sm">{data.title}</div>
                            <div>
                              <Image
                                src={data.image}
                                alt="hash rate"
                                width={72}
                                height={72}
                                className={`${styles.currentMiningImage}`}
                              />
                            </div>
                            {data.info.map((info, keyInfo) => {
                              return (
                                <div
                                  className={
                                    info.includes("↓") ||
                                    info.includes("minute")
                                      ? "pt-2 text-sm text-red-700"
                                      : "pt-2 text-sm"
                                  }
                                  style={
                                    info === "~" ? { visibility: "hidden" } : {}
                                  }
                                  key={keyInfo}
                                >
                                  {info}
                                </div>
                              );
                            })}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SummaryCard>
          );
        })}
        <HowBitcoinWork>
          <h2 className="title">How Bitcoin Network Works</h2>
          <p className="pb-8">
            The Bitcoin network operates in a decentralized way, is designed to
            be secure against attacks and censorship. With thousands of nodes
            worldwide, no single entity controls the network.This decentralized
            process ensures secure, transparent, and unchangeable transactions.
            Bitcoin offers a reliable system for transferring and storing value
            globally accessible to anyone, anywhere, anytime worldwide. and
            heres how it works
          </p>

          <Container>
            <Column>
              <Title>1. Transactions</Title>
              <Content>
                Users send Bitcoin from one address to another through the
                network. Each transaction includes sender, receiver, and the
                amount of Bitcoin sent. These transactions are broadcasted
                across the Bitcoin network for verification by Bitcoin miners.
              </Content>
            </Column>
            <Column>
              <Title>2. Nodes</Title>
              <Content>
                Transactions initiated by users are broadcasted to the Bitcoin
                network, which consists of thousands of computer nodes. These
                nodes verify transactions to ensure the sender has the required
                Bitcoin amount and that the transaction is valid. Nodes check
                for things like double-spending to prevent fraud.
              </Content>
            </Column>
            <Column>
              <Title>3. Miners</Title>
              <Content>
                Verified transactions are collected by Bitcoin miners and
                grouped into blocks. Miners use specialized computers to solve
                complex math problems related to each block. This process, known
                as proof of work, requires a lot of computing power.
              </Content>
            </Column>
            <Column>
              <Title>4. Blockchain</Title>
              <Content>
                Once a miner successfully solves a blocks math problem, its
                added to the blockchain. The blockchain is a digital ledger that
                records all Bitcoin transactions. Each block includes a list of
                new transactions and a reference to the previous block, forming
                a secure chain.
              </Content>
            </Column>
            <Column>
              <Title>5. Confirmation</Title>
              <Content>
                When a block is added to the blockchain, the transactions inside
                it are confirmed. The more blocks that follow it, the harder it
                becomes to change or undo a transaction. This confirmation
                ensures that Bitcoin transactions are secure and trustworthy.
              </Content>
            </Column>
          </Container>

          {/* <ParagraphTitleWrapper>
              <ParagraphTitle>2. Nodes</ParagraphTitle>
            </ParagraphTitleWrapper>
            <ParagraphContentWrapper>
              <ParagraphContent>
                Transactions initiated by users are broadcasted to the Bitcoin
                network, which consists of thousands of computer nodes. These
                nodes verify transactions to ensure the sender has the required
                Bitcoin amount and that the transaction is valid. Nodes check
                for things like double-spending to prevent fraud.
              </ParagraphContent>
            </ParagraphContentWrapper>

            <ParagraphTitleWrapper>
              <ParagraphTitle>3. Miners</ParagraphTitle>
            </ParagraphTitleWrapper>
            <ParagraphContentWrapper>
              <ParagraphContent>
                Verified transactions are collected by Bitcoin miners and
                grouped into blocks. Miners use specialized computers to solve
                complex math problems related to each block. This process, known
                as "proof of work," requires a lot of computing power.
              </ParagraphContent>
            </ParagraphContentWrapper>

            <ParagraphTitleWrapper>
              <ParagraphTitle>4. Blockchain</ParagraphTitle>
            </ParagraphTitleWrapper>
            <ParagraphContentWrapper>
              <ParagraphContent>
                Once a miner successfully solves a blocks math problem, its
                added to the blockchain. The blockchain is a digital ledger that
                records all Bitcoin transactions. Each block includes a list of
                new transactions and a reference to the previous block, forming
                a secure chain.
              </ParagraphContent>
            </ParagraphContentWrapper>

            <ParagraphTitleWrapper>
              <ParagraphTitle>5. Confirmation</ParagraphTitle>
            </ParagraphTitleWrapper>
            <ParagraphContentWrapper>
              <ParagraphContent>
                When a block is added to the blockchain, the transactions inside
                it are confirmed. The more blocks that follow it, the harder it
                becomes to change or undo a transaction. This confirmation
                ensures that Bitcoin transactions are secure and trustworthy.
              </ParagraphContent>
            </ParagraphContentWrapper> */}
        </HowBitcoinWork>
      </OverviewWrapper>
    </>
  );
};

export default BitcoinOverview;
