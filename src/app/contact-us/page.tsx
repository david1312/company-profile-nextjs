/* eslint-disable @next/next/no-img-element */
import styles from "./contact-us.module.css";
import { Button, FloatingLabel, Textarea } from "flowbite-react";

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
              <div className="pb-4">BitBoltz, Inc.</div>
              <div className={`pb-2 pr-12 ${styles.leftSideFirst}`}>
                Jl. Merdeka Utara gg Pelita III No.1 (Libra) Ciledug - Cirebon,
                Ciledug Kulon, Kec. Ciledug, Kab. Cirebon, Jawa Barat 45188{" "}
                <br />
                T: 0231-661-2000
              </div>
              <div className="pb-4">Investor Relation</div>
              <div className={`pb-2 pr-12 ${styles.leftSideFirst}`}>
                T: 0231-661-2000
                <br />
                <a
                  href="mailto:example@example.com"
                  className={styles.emailCol}
                >
                  ir@bitboltz.inc
                </a>
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
              <FloatingLabel
                variant="outlined"
                label="First Name"
                sizing="sm"
              />
            </div>
            <div className="pb-2">
              <FloatingLabel variant="outlined" label="Last Name" sizing="sm" />
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
              <Button className={`${styles.btnCommon}`}>Submit</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-b-fourth p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="flex w-full justify-center flex-col">
          <div className="flex self-center pb-10 pt-10 text-4xl">
            Stay up-to-date
          </div>
          <div className="flex self-center pb-10">
            <Button className={`${styles.btnCommon}`}>
              Subscribe News From Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
