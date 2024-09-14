/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import "./Footer.css";
import Image from "next/image";
import { LIST_SOCIAL_MEDIA, NAV_MENUS } from "@/src/utils/config";

const Footer: React.FC = () => {
  return (
    <footer className="footer ">
      <div className="footer-container p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="footer-logo">
          <Link href="/">BitBoltz</Link>
        </div>
        <div className="footer-links">
          {NAV_MENUS.filter((val) => val.inFooter === true).map(
            (val, index) => {
              return (
                <div key={index}>
                  <h4>{val.title}</h4>
                  <ul>
                    {val.subMenu.map((sub, index) => (
                      <li key={`subMenu${index}`}>
                        <Link href={sub.to} className="b-link text-white">
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          )}

          <div className="contact">
            <h4>Contact Info:</h4>
            <div className={`pb-2 pr-12 footer-table`}>
              <table>
                <tbody>
                  <tr>
                    <td>General Inquiry</td>
                    <td className={"footer-table-separator"}>:</td>
                    <td>
                      <Link
                        href={"mailto:info@bitboltz.co.id"}
                        className="b-link c-orange"
                      >
                        info@bitboltz.co.id
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Joint Ventures/Partnership</td>
                    <td className={"footer-table-separator"}>:</td>
                    <td>
                      <Link
                        href={"mailto:jv@bitbotlz.co.id"}
                        className="b-link c-orange"
                      >
                        jv@bitbotlz.co.id
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Investor Relations</td>
                    <td className={"footer-table-separator"}>:</td>
                    <td>
                      <Link
                        href={"mailto:ir@bitboltz.co.id"}
                        className="b-link c-orange"
                      >
                        ir@bitboltz.co.id
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Career Application</td>
                    <td className={"footer-table-separator"}>:</td>
                    <td>
                      <Link
                        href={"mailto:hrd@bitboltz.co.id"}
                        className="b-link c-orange"
                      >
                        hrd@bitboltz.co.id
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p>Connect with us in social media</p>
            <div className={"footer-social"}>
              {LIST_SOCIAL_MEDIA.map((val, index) => {
                return (
                  <div className={"footer-social-item"} key={index}>
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
      <div className="footer-bottom">
        <p>&copy; 2024 BitBoltz All Rights Reserved.</p>
        <p>
          <Link href="/coming-soon">Terms and Conditions</Link> |
          <Link href="/coming-soon">{` `}Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
