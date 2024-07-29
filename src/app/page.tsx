/* eslint-disable @next/next/no-img-element */
import logoGreenText from "@/src/assets/images/icon/logo-green-text.png";
import Image from "next/image";
import { LIST_CARD } from "@/src/constants/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen first-section">
      <section className="flex flex-col justify-center items-center  text-white h-screen p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <Image
          alt=""
          src={logoGreenText}
          priority={true}
          className="text-center object-cover h-96 w-96 -mt-24"
        />

        <p className="text-lg max-w-xl text-center ">
          Contribute to securing and building the bitcoin blockchain network
          infrastructure and turning electrical energy into store of value and
          bringing it to the Indonesian people society.
        </p>
        <br />
        <p className="cool-text">
          “We believe the Bitcoin industry, Blockchain Technology and Web 3.0
          are the future”
        </p>
      </section>
      <div className="bg-b-line p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div
          className="text-center b-section-title text-white"
          style={{ marginTop: "-20px", padding: "10px" }}
        >
          <p className="max-w-xl ">Our Strengths & Core Values</p>
        </div>
        <div className="b-section-subtitle text-center">
          <p className="max-w-xl text-white">
            Untuk mencapai kesuksesan dalam menjalankan perusahaan Bitcoin
            Mining Facility, kami memiliki pemahaman yang mendalam dan
            pengalaman dalam <b>5 (lima)</b> aspek kunci sebagai berikut ini:
          </p>
        </div>

        {LIST_CARD.map((val, i) => {
          return (
            <div
              className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4"
              key={`strength${i}`}
            >
              <div className="b-container-card bg-b-card p-4 sm:p-6 rounded-2xl text-white max-w-5xl">
                <div className="grid grid-cols-8 ">
                  <div className="col-span-8 sm:col-span-4 content-center">
                    <img
                      src={val.image}
                      className="rounded-2xl max-w-full sm:max-w-96 sm:w-96 max-h-72 sm:h-72 border-4 border-white"
                      alt="bitcoin-expert"
                    />
                  </div>
                  <div className="col-span-8 sm:col-span-4 ">
                    <p className="text-lg">{val.title}</p>
                    {val.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
