"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./contact.module.css";
import { Button, FloatingLabel, Textarea } from "flowbite-react";
import { LIST_SOCIAL_MEDIA } from "@/src/utils/config";
import Link from "next/link";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col first-section">
      <div
        className={`text-center b-section-title text-white ${styles.header}`}
      >
        <div className={styles.aboutHeaderTxt}>
          <p className={styles.secondText}>Contact Us</p>
          <p className={styles.firstText}>BitBoltz</p>
        </div>
      </div>
      <div className="p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4 xl:pr-24 xl:pl-24 bg-white">
        <div className="flex justify-center p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <div className={styles.leftSide}>
            <div className={styles.leftTitle}>
              <div className="pb-4">BitBoltz Group</div>
              <div className={`pb-2 pr-12 ${styles.leftSideFirst}`}>
                Jl. Merdeka Utara, RT.003/RW005, Bojongnegara, Kec. Ciledug,
                Kabupaten Cirebon Jawa Barat 45188, Indonesia
                <div>
                  <a
                    href="https://maps.app.goo.gl/KkfU9hf2idFTPZWN7"
                    target="_blank"
                    className="c-orange"
                  >
                    Google Map Location
                  </a>
                </div>
                <br />
              </div>
              <div className="pb-4 text-lg">Contact Info:</div>
              <div className={`pb-2 pr-12 ${styles.tableContact}`}>
                <table>
                  <tbody>
                    <tr>
                      <td>General Inquiry</td>
                      <td className={styles.tableContactSeparator}>:</td>
                      <td>
                        <a
                          href="mailto:info@bitboltz.co.id"
                          className={`c-orange`}
                        >
                          info@bitboltz.co.id
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Joint Ventures/Partnership</td>
                      <td className={styles.tableContactSeparator}>:</td>
                      <td>
                        <a
                          href="mailto:jv@bitbotlz.co.id"
                          className={`c-orange`}
                        >
                          jv@bitbotlz.co.id
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Investor Relations</td>
                      <td className={styles.tableContactSeparator}>:</td>
                      <td>
                        <a
                          href="mailto:ir@bitboltz.co.id"
                          className={`c-orange`}
                        >
                          ir@bitboltz.co.id
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Career Application</td>
                      <td className={styles.tableContactSeparator}>:</td>
                      <td>
                        <a
                          href="mailto:hrd@bitboltz.co.id"
                          className={`c-orange`}
                        >
                          hrd@bitboltz.co.id
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className="pb-2">
              <FloatingLabel
                variant="outlined"
                label="Email Address"
                sizing="sm"
              />
            </div>
            <div className="pb-2">
              <FloatingLabel variant="outlined" label="Full Name" sizing="sm" />
            </div>
            <div className="pb-2">
              <FloatingLabel
                variant="outlined"
                label="Company Name"
                sizing="sm"
              />
            </div>
            <div className="pb-2">
              <FloatingLabel variant="outlined" label="Phone" sizing="sm" />
            </div>
            <div className="pb-4">
              <Textarea placeholder="Comments" />
            </div>
            <div className="pb-2">
              <Button className={`${styles.btnCommon}`}>
                <a href="mailto:ir@bitboltz.co.id">Submit</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-b-fourth p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="flex w-full justify-center flex-col">
          <div className="flex self-center pb-4 pt-10 text-xl">
            Stay up-to-date with our social media:
          </div>
          <div className={styles.socialMediaRow}>
            {LIST_SOCIAL_MEDIA.map((val, index) => {
              return (
                <div className={styles.socialMediaItem} key={index}>
                  <Link href={val.url} target="_blank">
                    <Image
                      src={val.image}
                      width={val.width}
                      height={val.height}
                      alt={val.alt}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
