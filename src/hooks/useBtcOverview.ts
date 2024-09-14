import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store"; // Adjust the import path as needed
import hashrate from "@/src/assets/images/icon/hashrate.webp";
import blockchain from "@/src/assets/images/icon/blockchain.webp";
import blockchainEst from "@/src/assets/images/icon/blockchain-estimate.webp";
import blockTime from "@/src/assets/images/icon/blocktime.webp";

interface OverviewData {
  title: string;
  info: string[];
  image: string;
}

interface BTCOverview {
  title: string;
  data: OverviewData[];
}

const useBTCOverview = (): BTCOverview[] => {
  // Access the Redux state
  const btcData = useSelector((state: RootState) => state.btcData.data);

  // Create the BTCOverview structure dynamically
  const BTC_OVERVIEW: BTCOverview[] = [
    {
      title: `Bitcoin Market Data per today (${btcData.time})`,
      data: [
        {
          title: "Global HashRates",
          info: [`${btcData.hashRate} EH/s`, "~"],
          image: hashrate.src,
        },
        {
          title: "Bitcoin Current Difficulty",
          info: [
            `${btcData.btcDifficulty} T`,
            `Current Block Height: ${btcData.blockHeightCurrent}`,
          ],
          image: blockchain.src,
        },
        {
          title: "Bitcoin Next Difficulty Estimate",
          info: [
            `${btcData.btcDifficultyNextEst} (${btcData.btcDifficultyNextEstRate})`,
            `${btcData.btcDifficultyNextEstInfo}`,
          ],
          image: blockchainEst.src,
        },
        {
          title: "Bitcoin Block Time Average",
          info: [`${btcData.btcBlockTimeAvg} avg`, "Block Time Target 10 min."],
          image: blockTime.src,
        },
      ],
    },
  ];
  return BTC_OVERVIEW;
};

export default useBTCOverview;
