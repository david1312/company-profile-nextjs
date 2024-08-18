import React from "react";

import hardware2 from "@/src/assets/images/common/hardware2.jpeg";
import immersion from "@/src/assets/images/common/hardware1.jpeg";
import antminer from "@/src/assets/images/common/antminer.webp";
import management from "@/src/assets/images/common/management.webp";
import btc1 from "@/src/assets/images/common/btc1.jpeg";
import btc2 from "@/src/assets/images/common/btc2.jpeg";
import btc3 from "@/src/assets/images/common/btc3.webp";
import indo from "@/src/assets/images/icon/indo.jpg";
import project1 from "@/src/assets/images/common/project1.webp";
import project2 from "@/src/assets/images/common/project2.webp";
import project3 from "@/src/assets/images/common/project3.webp";
import project4 from "@/src/assets/images/common/project4.webp";
import solarproj from "@/src/assets/images/common/solar-banner.jpg";

interface Card {
  title: string;
  content: React.ReactNode;
  image: string;
}

export const LIST_CARD: Card[] = [
  {
    title: "1. Bitcoin Expertise",
    content: (
      <>
        <br />
        <p className="text-sm">
          Kami memiliki pemahaman yang mendalam dan luas serta keyakinan yang
          kuat terhadap masa depan Bitcoin. Kami memahami bagaimana jaringan
          blockchain Bitcoin beroperasi, peran krusial kami sebagai miners yang
          menyebarkan daya komputasi hashrate untuk memvalidasi transaksi dan
          penemuan block baru, serta mekanisme penerimaan reward berupa Bitcoin.
        </p>
        <br />
        <p className="text-sm">
          Kami menjalankan bitcoin full node dan electrum server sendiri serta
          menguasai manajemen UTXO secara efektif, dan memanfaatkan Lightning
          Network serta Liquid Network untuk mengelola kepemilikan dan transaksi
          Bitcoin. Hal ini memungkinkan kami untuk memaksimalkan pendapatan dari
          kegiatan penambangan Bitcoin. Kami menganggap Bitcoin sebagai aset
          ideal dan nilai penyimpan yang sangat penting dalam ekosistem ekonomi
          dunia.
        </p>
      </>
    ),
    image: btc1.src,
  },
  {
    title: "2. Miners Hardware & Infrastruktur Kelistrikan",
    content: (
      <>
        <br />
        <p className="text-sm">
          Kami menggunakan mesin miners ASIC (Application Specific Integrated
          Circuit) yang dirancang khusus untuk algoritma SHA-256 dari pabrikan
          Bitmain Antminer. Mesin ini telah terbukti kinerjanya sesuai dengan
          perhitungan dan banyak digunakan oleh perusahaan penambangan Bitcoin
          kelas dunia lainnya. Dengan dukungan hardware ASIC miners tersebut,
          serta pengalaman dan pengetahuan kami yang mendalam dalam menyediakan
          infrastruktur kelistrikan yang dibutuhkan, aktivitas penambangan
          Bitcoin kami dapat berjalan dengan sangat efektif dan efisien.
        </p>
        <br />
        <p className="text-sm">
          Kami juga memiliki pemahaman dan perhitungan kalkulasi biaya investasi
          yang efisien untuk setiap unit ASIC miner, termasuk hashrate yang
          dapat dicapai dan seberapa efisien penggunaan daya listrik yang
          dibutuhkan. Kombinasi dari teknologi terdepan dan manajemen
          infrastruktur yang optimal memastikan bahwa operasi penambangan kami
          tidak hanya produktif, tetapi juga hemat biaya. Hal ini memberikan
          keunggulan kompetitif dalam industri penambangan Bitcoin dan
          menegaskan komitmen kami untuk memberikan hasil terbaik bagi para
          pemangku kepentingan.
        </p>
      </>
    ),
    image: hardware2.src,
  },
  {
    title: "3. Teknik Keamanan & Manajemen Self Custody",
    content: (
      <>
        <br />
        <p className="text-sm">
          Kami memahami bahwa keamanan dalam self custody aset digital adalah
          kunci utama dalam mengelola hasil penambangan Bitcoin kami. Untuk itu,
          kami menggunakan tiga jenis hardware wallet khusus Bitcoin only wallet
          yang telah diakui keamanannya oleh komunitas global. Wallet ini
          dilengkapi dengan fitur canggih seperti multi-sig, air gap, Shamir
          backup, passphrase, dan lain sebagainya. Kami mengintegrasikan
          hardware wallet ini dengan perangkat lunak desktop Bitcoin wallet yang
          memiliki fitur-fitur seperti UTXO management, multi-sig, dan private
          server. Integrasi ini menambahkan lapisan keamanan ekstra dalam
          mengelola kepemilikan Bitcoin hasil penambangan kami, memastikan bahwa
          aset kami selalu terlindungi dengan optimal.
        </p>
        <br />
        <p className="text-sm">
          Selain itu, kami memanfaatkan keunggulan Liquid Network dan Lightning
          Network untuk mengelola transaksi Bitcoin. Dengan cara ini, kami dapat
          menghindari biaya jaringan yang tinggi dan meningkatkan efisiensi
          transaksi kami. Kami juga memastikan bahwa semua protokol keamanan
          dalam penyimpanan backup seedphrase diterapkan dengan ketat.
          Seedphrase ini disimpan secara aman dan hanya dapat diakses oleh
          eksekutif tingkat tinggi dalam situasi darurat.Dengan kombinasi
          teknologi keamanan mutakhir dan manajemen yang teliti, kami memastikan
          bahwa kepemilikan Bitcoin kami selalu dalam kondisi aman. Pendekatan
          ini memberikan kepercayaan penuh kepada para pemangku kepentingan
          bahwa aset digital kami dikelola dengan standar keamanan tertinggi.
        </p>
      </>
    ),
    image: btc3.src,
  },
  {
    title: "4. Manajemen Operasi Bisnis",
    content: (
      <>
        <br />
        <p className="text-sm">
          Menjalankan bisnis penambangan Bitcoin memerlukan pengetahuan,
          pemahaman, dan pengalaman yang mendalam, sama seperti bisnis lainnya.
          Kami memastikan efektivitas dan efisiensi sumber daya dalam operasi
          bisnis kami dengan menerapkan praktik etika bisnis yang profesional
          (Good Corporate Governance, GCG).Kami juga mengelola keuangan dengan
          kehati-hatian yang sangat tinggi, menjaga arus kas tetap sehat,
          menganalisis laporan laba rugi secara cermat, dan mengelola aset
          neraca dengan baik dan sehat.
        </p>
        <br />
        <p className="text-sm">
          Dengan pendekatan ini, kami dapat menjalankan operasi bisnis
          penambangan Bitcoin secara efektif dan efisien, memberikan hasil yang
          maksimal dan berkelanjutan.Kombinasi dari manajemen operasional yang
          baik, praktik etika bisnis yang kuat, dan pengelolaan keuangan yang
          bijaksana memastikan bahwa bisnis kami berjalan lancar dan dapat
          memberikan kepercayaan penuh kepada para investor. Kami berkomitmen
          untuk menjaga transparansi, akuntabilitas, dan integritas dalam setiap
          aspek operasi kami, menjadikan kami mitra bisnis yang dapat diandalkan
          dan terpercaya.
        </p>
      </>
    ),
    image: management.src,
  },
  {
    title: "5. Strategi Realisasi Keuntungan Hasil Penambangan Bitcoin",
    content: (
      <>
        <br />
        <p className="text-sm">
          Nilai dan harga Bitcoin sangat dipengaruhi oleh sentimen ekonomi
          global dan juga peran perusahaan investasi global terkemuka. Dengan
          pengalaman dan pengetahuan yang kami miliki serta pembaruan informasi
          terkini, kami dapat memaksimalkan hasil penjualan Bitcoin kami,
          terutama saat merencanakan realisasi keuntungan dari aktivitas
          penambangan bitcoin kami.Kami telah menyiapkan strategi yang adaptif
          terhadap berbagai tren pasar, baik itu dalam kondisi bearish, bullish,
          maupun saat harga bergerak secara moving average.
        </p>
        <br />
        <p className="text-sm">
          Pendekatan ini memastikan bahwa setiap langkah kami diarahkan untuk
          mendapatkan hasil terbaik dari penjualan Bitcoin dari aktivitas
          operasi penambangan digital kami. Dengan komitmen pada profesionalisme
          dan transparansi, kami menjamin bahwa keputusan strategis kami
          didasarkan pada analisis yang mendalam dan perencanaan yang matang
          untuk memastikan optimalisasi keuntungan perusahaan aktivitas operasi
          bitcoin mining kami.
        </p>
      </>
    ),
    image: btc2.src,
  },
];

export const MINING_TYPE = {
  AIR_COOLED: "AIR_COOLED",
  HYDRO_COOLED: "HYDRO_COOLED",
  IMMERSION: "IMMERSION",
  OTHERS: "OTHERS",
};

export const LIST_PROJECT = [
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

export const CURRENT_PROJECT = [
  {
    title: "Our Current Bitcoin Mining Farm Capacity “as September 2024”",
    spec: [
      { title: "Hashrates Computing Power", value: "3510 TH/s" },
      { title: "Electricity Power", value: "52.650 Watt" },
      { title: "Efficiency", value: "15 J/T" },
      { title: "Cooling System", value: "Air Cooling" },
      { title: "Energy Source", value: "PLN Grid Electricity" },
    ],
    icon: indo.src,
    img: antminer.src,
  },
];

export const PROJECT_COMBINED = [
  {
    title:
      "BitBoltz Bitcoin Mining Capacity (Planned After All Projects are Merged)",
    spec: [
      { title: "Hashrates Computing Power", value: "166.750 Th/s" },
      { title: "Electricity Power", value: "1.772.750 Watt (1,7 MW)" },
      { title: "Efficiency", value: "10,63 J/T" },
      { title: "Cooling System", value: "Air Cooling, Hydro & Immersion" },
      {
        title: "Energy Source",
        value: "Solar Panels & Grid Electricity (50:50)",
      },
      { title: "Est. BTC Production Capacity", value: "48,6 BTC / Year" },
    ],
    icon: indo.src,
    img: project4.src,
  },
];

export const headerKey = "header-data";

export const NAV_MENUS = [
  {
    id: 1,
    to: "/",
    title: "Company",
    subMenu: [
      { title: "About Us", to: "/", id: 11 },
      { title: "Team & Management", to: "/coming-soon", id: 12 },
      { title: "Partnership", to: "/company/partnership", id: 13 },
    ],
    inFooter: true,
  },
  {
    id: 2,
    to: "/",
    title: "Operations",
    subMenu: [
      { title: "Overview", to: "/coming-soon", id: 21 },
      { title: "Air Cooled Miners", to: "/operation/air-cooled-miner", id: 22 },
      {
        title: "Hydro Cooled Miners",
        to: "/operation/hydro-cooled-miner",
        id: 23,
      },
      {
        title: "Immersion Cooled Miners",
        to: "/operation/immersion-cooled-miner",
        id: 24,
      },
    ],
    inFooter: true,
  },
  {
    id: 3,
    to: "/",
    title: "Bitcoin",
    subMenu: [
      { title: "Bitcoin Overview", to: "/coming-soon", id: 31 },
      {
        title: "BitBoltz Academy",
        to: "/bitcoin/bitboltz-academy",
        id: 32,
      },
    ],
    inFooter: false,
  },
  {
    id: 4,
    to: "/",
    title: "Investors",
    subMenu: [
      { title: "Financial Highlights", to: "/coming-soon", id: 41 },
      { title: "Deviden & Yields", to: "/coming-soon", id: 42 },
      { title: "Annual Reports", to: "/coming-soon", id: 43 },
      { title: "News & Events", to: "/coming-soon", id: 44 },
    ],
    inFooter: false,
  },
  {
    id: 5,
    to: "/coming-soon",
    title: "Careers",
    subMenu: [],
    inFooter: false,
  },

  {
    id: 6,
    to: "/contact",
    title: "Contact",
    subMenu: [],
    inFooter: false,
  },
];
