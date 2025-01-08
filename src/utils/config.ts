import immersion from "@/src/assets/images/common/hardware1.jpeg";
import indo from "@/src/assets/images/icon/indo.jpg";
import project1 from "@/src/assets/images/common/project1.webp";
import project2 from "@/src/assets/images/common/project2.webp";
import project3 from "@/src/assets/images/common/project3.webp";
import solarproj from "@/src/assets/images/common/solar-banner.jpg";
import youtube from "@/src/assets/images/icon/youtube.png";
import instagram from "@/src/assets/images/icon/instagram.png";
import facebook from "@/src/assets/images/icon/facebook.png";
import twitter from "@/src/assets/images/icon/twitter-new.png";

import team1 from "@/src/assets/images/team/team1.webp";
import team2 from "@/src/assets/images/team/team2.webp";
import team3 from "@/src/assets/images/team/team3.webp";

import cost from "@/src/assets/images/icon/cost.webp";
import btc from "@/src/assets/images/icon/btc.webp";
import energy from "@/src/assets/images/icon/energy.webp";
import hashrate from "@/src/assets/images/icon/hashrate.webp";
import efficiency from "@/src/assets/images/icon/efficiency.webp";

interface Card {
  title: string;
  content: string;
}

interface ProjectSpec {
  title: string;
  value: string;
}

interface Project {
  title: string;
  spec: ProjectSpec[];
  icon: string;
  img: string;
  type: string; // This can be a specific type or an enum if you have predefined types
}

interface ProjectData {
  value: string;
  title1: string;
  title2: string;
  image: string;
}
interface CurrentProject {
  title: string;
  spec: ProjectData[];
  icon: string;
}

interface NavSubMenu {
  title: string;
  to: string;
}

interface NavMenu {
  to: string;
  title: string;
  subMenu: NavSubMenu[];
  inFooter: boolean;
}

interface SocialMedia {
  image: string;
  height: number;
  width: number;
  alt: string;
  url: string;
}

export const LIST_CARD: Card[] = [
  {
    title: "Bitcoin Expertise",
    content:
      "We have a deep understanding of Bitcoin and are confident in its future. We comprehend how the Bitcoin blockchain works, our crucial role as miners in validating transactions and discovering new blocks, and how to receive rewards in Bitcoin. ",
  },
  {
    title: "Miners Hardware & Electrical Infrastructure",
    content:
      "We use ASIC miners designed specifically for the SHA-256 algorithm, proven in performance and widely adopted by leading Bitcoin mining companies. With this hardware support and our expertise in electrical infrastructure, our mining operations run very effectively and efficiently.",
  },
  {
    title: "Security Techniques & Self-Custody Management",
    content:
      "We use Bitcoin-only hardware wallets with advanced security features such as multi-sig, air gap, Shamir backup, and passphrase. These wallets are integrated with desktop Bitcoin wallet software that includes UTXO management, bitcoin core node, private server features, and multi-sig to enhance the security of our Bitcoin holdings.",
  },
  {
    title: "Business Operation Management",
    content:
      "Operating a Bitcoin mining company requires deep knowledge, understanding, and experience, similar to any other business. We ensure the effectiveness and efficiency of resources in our business operations by adhering to professional business ethics and practices (Good Corporate Governance, GCG).",
  },
  {
    title: "Profit Realization Strategy in Bitcoin Mining",
    content:
      "Leveraging our experience, knowledge, and real-time information updates, we maximize the proceeds from Bitcoin sales, particularly when planning profit realization from our Bitcoin mining activities. We have devised adaptive strategies to navigate various market trends, whether bearish, bullish, or when prices are moving on average.",
  },
];

export const MINING_TYPE = {
  AIR_COOLED: "AIR_COOLED",
  HYDRO_COOLED: "HYDRO_COOLED",
  IMMERSION: "IMMERSION",
  OTHERS: "OTHERS",
};

export const LIST_PROJECT: Project[] = [
  {
    title: "Air Cooler & Hydro Bitcoin Mining Farm",
    spec: [
      { title: "Hashrates Computing Power", value: "27.000 TH/s" },
      { title: "Electricity Power", value: "327.750 Watt" },
      { title: "Efficiency", value: "12,1 J/T" },
      { title: "Cooling System", value: "Air Cooler & Hydro" },
      { title: "Est. BTC Production Capacity", value: "7,91457605 BTC / Year" },
    ],
    icon: indo.src,
    img: project1.src,
    type: MINING_TYPE.AIR_COOLED,
  },
  {
    title: "Full Hydro Bitcoin Mining Farm",
    spec: [
      { title: "Hashrates Computing Power", value: "29.500 TH/s" },
      { title: "Electricity Power", value: "330.000 Watt" },
      { title: "Efficiency", value: "11,2 J/T" },
      { title: "Cooling System", value: "Full Hydro" },
      { title: "Est. BTC Production Capacity", value: "8,61496367 BTC / Year" },
    ],
    icon: indo.src,
    img: project2.src,
    type: MINING_TYPE.HYDRO_COOLED,
  },
  {
    title: "Full Immersion Bitcoin Mining Farm",
    spec: [
      { title: "Hashrates Computing Power", value: "32.250 TH/s" },
      { title: "Electricity Power", value: "350.000 Watt" },
      { title: "Efficiency", value: "10,9 J/T" },
      {
        title: "Cooling System",
        value: "Full Immersion",
      },
      { title: "Est. BTC Production Capacity", value: "9,41745411 BTC / Year" },
    ],
    icon: indo.src,
    img: immersion.src,
    type: MINING_TYPE.IMMERSION,
  },
  {
    title: "Integrated Hydro & Immersion Bitcoin Mining Farm",
    spec: [
      { title: "Hashrates Computing Power", value: "36.500 TH/s" },
      { title: "Electricity Power", value: "365.000 Watt" },
      { title: "Efficiency", value: "10 J/T" },
      {
        title: "Cooling System",
        value: "Hydro & Immersion",
      },
      {
        title: "Est. BTC Production Capacity",
        value: "10,65825323 BTC / Year",
      },
    ],
    icon: indo.src,
    img: project3.src,
    type: MINING_TYPE.IMMERSION,
  },
  {
    title: "Bitcoin Mining Farm With Solar Energy Resources",
    spec: [
      { title: "Hashrates Computing Power", value: "41.500 TH/s" },
      { title: "Electricity Power", value: "400.000 Watt" },
      { title: "Efficiency", value: "9.2 J/T" },
      {
        title: "Cooling System",
        value: "Air Cooler, Hydro & Immersion",
      },
      {
        title: "Est. BTC Production Capacity",
        value: "12,11864543 BTC / Year",
      },
    ],
    icon: indo.src,
    img: solarproj.src,
    type: MINING_TYPE.OTHERS,
  },
];

export const CURRENT_PROJECT: CurrentProject[] = [
  {
    title: "BitBoltz Bitcoin Mining Performance `as September 2024`",
    spec: [
      {
        title1: "Compute",
        title2: "Hashrates Power",
        value: "3548 TH/s",
        image: hashrate.src,
      },
      {
        title1: "Electrical Energy",
        title2: "Usage in Operations",
        value: "61.620 Watt",
        image: energy.src,
      },
      {
        title1: "Bitcoin Mining",
        title2: "Production Capacity",
        value: "1,03624639 BTC/Year",
        image: btc.src,
      },
      {
        title1: "Energy Efficieny in",
        title2: "Operations",
        value: "17,4 J/T",
        image: efficiency.src,
      },
      {
        title1: "Electricty ",
        title2: "Cost",
        value: "Rp.553.285.980 / Year",
        image: cost.src,
      },
    ],
    icon: indo.src,
  },
];

export const headerKey = "header-data";

export const NAV_MENUS: NavMenu[] = [
  {
    to: "/",
    title: "Company",
    subMenu: [
      { title: "About Us", to: "/" },
      { title: "Team & Management", to: "/coming-soon" },
      { title: "Partnership", to: "/company/partnership" },
    ],
    inFooter: true,
  },
  {
    to: "/",
    title: "Operations",
    subMenu: [{ title: "Overview", to: "/operation/overview" }],
    inFooter: true,
  },
  {
    to: "/",
    title: "Bitcoin",
    subMenu: [
      { title: "Bitcoin Overview", to: "/bitcoin/overview" },
      {
        title: "BitBoltz Academy",
        to: "/bitcoin/bitboltz-academy",
      },
    ],
    inFooter: false,
  },
  {
    to: "/",
    title: "Investors",
    subMenu: [
      { title: "Financial Highlights", to: "/coming-soon" },
      { title: "Deviden & Yields", to: "/coming-soon" },
      { title: "Annual Reports", to: "/coming-soon" },
      { title: "News & Events", to: "/coming-soon" },
    ],
    inFooter: false,
  },
  {
    to: "/coming-soon",
    title: "Careers",
    subMenu: [],
    inFooter: false,
  },

  {
    to: "/contact",
    title: "Contact",
    subMenu: [],
    inFooter: false,
  },
];

export const LIST_SOCIAL_MEDIA: SocialMedia[] = [
  {
    image: youtube.src,
    width: 40,
    height: 40,
    alt: "youtube icon",
    url: "https://youtube.com/@bitboltz?si=GtRLr-rZ2AEvuKAx",
  },
  {
    image: instagram.src,
    width: 40,
    height: 40,
    alt: "instagram icon",
    url: "https://www.instagram.com/bitboltz_group?utm_source=qr&igsh=aGR5YzJzbDZuZXQx",
  },
  {
    image: twitter.src,
    width: 36,
    height: 36,
    alt: "twitter icon",
    url: "https://x.com/bitboltz?t=q5SOvdQS3lKDjKUZ4rXfvg&s=09",
  },
  {
    image: facebook.src,
    width: 40,
    height: 40,
    alt: "facebook icon",
    url: "https://www.facebook.com/share/dGDW1FRjfCLXkoFN/?mibextid=qi2Omg",
  },
];

interface Breakpoints {
  smallDevice: number;
  mobile: number;
  tablet: number;
  desktop: number;
}
export const breakpoints: Readonly<Breakpoints> = {
  smallDevice: 481,
  mobile: 769,
  tablet: 1025,
  desktop: 1201,
};

interface TeamMember {
  image: string;
  name: string;
  title: string;
  desc: string;
}

export const TEAM_MANAGEMENT: TeamMember[] = [
  {
    image: team3.src,
    name: "David Bernadi",
    title: "CTO",
    desc: "Engaged and working in IT & Cybersecurity since 2019, focusing on blockchain technology and AI since 2021 which continues to this day.",
  },
  {
    image: team1.src,
    name: "Michael Kristianto",
    title: "CEO",
    desc: "An entrepreneur and investor. Has a deep understanding of capital markets investment, experiences in business operation management and bitcoin network, actively engaged in bitcoin network & bitcoin mining since 2020.",
  },
  {
    image: team2.src,
    name: "Sugiono",
    title: "Electrical Engineering ",
    desc: "A graduate in electrical engineering in 1983, with over 40 years of experience in electro & electrical engineering.",
  },
];

export const configData = {
  limitTimeFrame: 30,
};
