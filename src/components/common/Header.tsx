/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import logo from "@/src/assets/images/icon/logo-green.png";
import "./Header.css";
import { MegaMenu, Navbar, Toast } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { headerKey, NAV_MENUS } from "@/src/constants/config";
import { ScrapingResponse } from "@/src/interfaces/apiResponses";
import { HeaderContent, TopBar, TopBarSpan } from "./Header.styles";

const Header: React.FC = () => {
  const [langID, setLangID] = useState<boolean>(true);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [headerData, setHeaderData] = useState<ScrapingResponse>({
    btcDifficulty: "86.87",
    btcIdr: "935,967,272.00",
    hashRate: "643.38",
    time: "",
  });

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

  const fetchData = async () => {
    try {
      const res = await axios.get<ScrapingResponse>("/api/scraping", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.setItem(headerKey, JSON.stringify(res.data));
      setHeaderData(res.data);
    } catch (error) {
      console.error("error when fetch Header Data:", error);
    }
  };

  const checkAndFetchData = useCallback(() => {
    const storedData = localStorage.getItem(headerKey);
    if (storedData) {
      const parsedData: ScrapingResponse = JSON.parse(storedData);
      const storedDate = parsedData.time;

      const currentDate = new Date().toISOString().split("T")[0];

      // Check if the stored date is the same as today's date
      if (storedDate === currentDate) {
        console.log("Data is already up to date:", parsedData);
        setHeaderData(parsedData);
        return; // No need to fetch new data
      }
    }

    // Fetch new data if no valid data is found in localStorage
    fetchData();
  }, []);

  useEffect(() => {
    checkAndFetchData(); // Fetch the data when the component mounts
  }, [checkAndFetchData]);
  return (
    <>
      <TopBar>
        <TopBarSpan>Global Hashrates: {headerData.hashRate} EH/s</TopBarSpan>
        <TopBarSpan>Bitcoin Price (IDR): Rp {headerData.btcIdr}</TopBarSpan>
        <TopBarSpan>
          Bitcoin Difficulty: {headerData.btcDifficulty} T
        </TopBarSpan>
      </TopBar>
      <HeaderContent>
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
              {NAV_MENUS.map((val, index) => {
                if (val.subMenu.length > 0) {
                  return (
                    <MegaMenu.Dropdown
                      toggle={<div className="b-link">{val.title}</div>}
                      key={`MenuHeader${index}`}
                    >
                      <ul className="grid grid-cols-2">
                        <div className="space-y-4 p-4">
                          {val.subMenu.map((sub, index) => (
                            <li key={`subMenu${index}`}>
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
                  <Link href={val.to} key={`MenuHeader${index}`}>
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
      </HeaderContent>

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
