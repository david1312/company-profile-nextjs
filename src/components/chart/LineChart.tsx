// LineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BTCPrice } from "@/src/types/apiResponses";

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  btcPrices: BTCPrice[];
  idrRate: number;
}

const LineChart: React.FC<LineChartProps> = ({ btcPrices, idrRate }) => {
  console.log({ btcPrices, idrRate });
  const { labels, prices } =
    btcPrices.length > 0
      ? btcPrices.reduce(
          (acc, price) => {
            acc.labels.push(
              new Date(price.time_period_start).toLocaleDateString()
            );
            acc.prices.push(price.value_close * idrRate);
            return acc;
          },
          { labels: [] as string[], prices: [] as number[] }
        )
      : { labels: [], prices: [] };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "BTC IDR Price",
        data: prices,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bitcoin Chart Last 30 Days",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
