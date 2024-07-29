/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer ">
      <div className="footer-container p-2 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="footer-logo">
          <Link href="/">BitBoltz</Link>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/coming-soon">Team & Management Structures</Link>
              </li>
              {/* <li>
              <Link href="/coming-soon">Company Structures </Link>
            </li>
            <li>
              <Link href="/coming-soon">Tata Kelola Perusahaan</Link>
            </li>
            <li>
              <Link href="/coming-soon">Careers </Link>
            </li>
            <li>
              <Link href="/coming-soon">ESG </Link>
            </li> */}
            </ul>
          </div>
          <div>
            <h4>Operation</h4>
            <ul>
              <li>
                <Link href="/coming-soon">Bitcoin Mining</Link>
              </li>
              <li>
                <Link href="/operation/bitboltz-academy">
                  BitBoltz Academy (Cooming Soon)
                </Link>
              </li>
            </ul>
          </div>

          <div className="contact">
            <h4>Contact</h4>
            <p>General Inquiries</p>
            <p>+1 (702) 989-7692</p>
            <p>info@bitboltz.com</p>
            <p>PR or Media</p>
            <p>pr@bitboltz.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 BitBoltz All Rights Reserved.</p>
        <p>
          <Link href="/coming-soon">Terms and Conditions</Link> |
          <Link href="/coming-soon">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
