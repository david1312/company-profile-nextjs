/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import logo from "@/src/assets/images/icon/logo-green.png";
import "./Header.css";
import { MegaMenu, Navbar, Toast } from "flowbite-react";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { NAV_MENUS } from "@/src/utils/config";
import { ScrapingResponse } from "@/src/types/apiResponses";
import { HeaderContent, TopBar, TopBarSpan } from "./Header.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/src/store/store";
import { setData } from "@/src/store/btcSlice";
import { setLangID, setShowToast } from "@/src/store/configSlice";
import { API_INTERNAL } from "@/src/utils/configApi";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const headerData: ScrapingResponse = useSelector(
    (state: RootState) => state.btcData.data
  );
  const { langID, showToast } = useSelector((state: RootState) => state.config);

  const onClickLang = (isID: boolean) => {
    dispatch(setLangID(!langID));
    dispatch(setShowToast(true));
    setLangID(isID);
    setTimeout(() => {
      if (document.querySelector(".toast")) {
        document.querySelector(".toast")?.classList.add("fade-out");
      }
      dispatch(setShowToast(false));
    }, 2000);
  };

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get<ScrapingResponse>(API_INTERNAL.BTC_SCRAP, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch(setData(res.data));
    } catch (error) {
      console.error("error when fetch Header Data:", error);
    }
  }, [dispatch]);

  const checkAndFetchData = useCallback(() => {
    const storedDate = headerData.time;
    const currentDate = new Date().toISOString().split("T")[0];

    // Check if the stored date is the same as today's date
    if (storedDate === currentDate) {
      console.log("Data is already up to date:", headerData);
      return; // No need to fetch new data
    }

    // Fetch new data if no valid data is found in localStorage
    fetchData();
  }, [fetchData, headerData]);

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
                      style={{ zIndex: 99 }}
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
