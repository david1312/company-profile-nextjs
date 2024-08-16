/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import logo from "@/src/assets/images/icon/logo-green.png";
import "./Header.css";
import { MegaMenu, Navbar, Toast } from "flowbite-react";
import { useState } from "react";

const Header: React.FC = () => {
  const [langID, setLangID] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);

  const onClickLang = (isID: boolean) => {
    setShowToast(true);
    setLangID(isID);
    setTimeout(() => {
      if (document.querySelector(".toast")) {
        document.querySelector(".toast")?.classList.add("fade-out");
      }
      setShowToast(false);
    }, 2000);
  };
  const MENUS = [
    {
      id: 1,
      to: "/",
      title: "Company",
      subMenu: [
        { title: "About Us", to: "/", id: 11 },
        { title: "Team & Management Structures", to: "/coming-soon", id: 12 },
        {
          title: "BitBoltz Academy",
          to: "/operation/bitboltz-academy",
          id: 22,
        },
        // {
        //   title: "Company Structures ",
        //   to: "/coming-soon",
        //   id: 13,
        // },
        // {
        //   title: "Tata Kelola Perusahaan ",
        //   to: "/coming-soon",
        //   id: 14,
        // },
        // { title: "Careers ", to: "/coming-soon", id: 15 },
        // { title: "ESG ", to: "/coming-soon", id: 16 },
      ],
    },
    {
      id: 2,
      to: "/",
      title: "Operation",
      subMenu: [
        { title: "Bitcoin Mining", to: "/operation/bitcoin-mining", id: 21 },
      ],
    },
    {
      id: 3,
      to: "/",
      title: "Bitcoin",
      subMenu: [
        { title: "Bitcoin Overview", to: "/coming-soon", id: 31 },
        { title: "Blog & News", to: "/coming-soon", id: 32 },
      ],
    },
    {
      id: 4,
      to: "/",
      title: "Investor Relations",
      subMenu: [
        { title: "Financial Highlights", to: "/coming-soon", id: 33 },
        { title: "Deviden & Yields", to: "/coming-soon", id: 34 },
        { title: "Annual Reports", to: "/coming-soon", id: 35 },
        { title: "Event & Press Released", to: "/coming-soon", id: 36 },
      ],
    },
    {
      id: 5,
      to: "/coming-soon",
      title: "Partnership",
      subMenu: [],
    },
    {
      id: 6,
      to: "/contact-us",
      title: "Contact Us",
      subMenu: [],
    },
  ];
  return (
    <>
      <div className="top-bar">
        <span>Global Hashrates: 592.87 EH/s</span>
        <span>Bitcoin Price (IDR): Rp 1.050.657.659,00</span>
        <span>Network Difficulty : 79.50 T</span>
      </div>
      <MegaMenu className="text-white header bg-b-black relative">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8 text-white text-nowrap bg-b-black">
          <Navbar.Brand as={Link} href="/" key={"myRandomekey"}>
            <img alt="asd" src={logo.src} className="mr-3 h-6 sm:h-9" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              BITBOLTZ
            </span>
          </Navbar.Brand>
          <Navbar.Toggle className="ml-4" />
          <Navbar.Collapse>
            {MENUS.map((val) => {
              if (val.subMenu.length > 0) {
                return (
                  <MegaMenu.Dropdown
                    toggle={<div className="b-link">{val.title}</div>}
                    key={`MenuHeader${val.id}`}
                  >
                    <ul className="grid grid-cols-2 ">
                      <div className="space-y-4 p-4">
                        {val.subMenu.map((sub) => (
                          <li key={`subMenu${sub.id}`}>
                            <Link href={sub.to} className="b-link text-white">
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </MegaMenu.Dropdown>
                );
              }
              return (
                <Link href={val.to} key={`MenuHeader${val.id}`}>
                  {val.title}
                </Link>
              );
            })}
          </Navbar.Collapse>
        </div>
        <div className="langToogle">
          <span
            className={langID ? "langToogle-Active" : ""}
            onClick={() => onClickLang(true)}
          >
            ID
          </span>{" "}
          |{" "}
          <span
            className={!langID ? "langToogle-Active" : ""}
            onClick={() => onClickLang(false)}
          >
            EN
          </span>
        </div>
      </MegaMenu>
      {showToast && (
        <Toast className="toast">
          <div className="ml-3 text-sm font-normal cool-text">
            Language changed successfully!.
          </div>
          <Toast.Toggle />
        </Toast>
      )}
    </>
  );
};

export default Header;
