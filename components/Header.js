"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll	";
    }
  }, [mobileMenu]);

  return (
    <Fragment>
      <header className="flex items-center justify-between  h-[10vh] w-full px-12 py-9 bg-[#232536] text-white sm:px-14 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-[20px] font-bold">
          <Link href="/">STARTWAY</Link>
        </h1>

        <ul className=" items-center hidden lg:flex gap-14 text-[18px] font-normal">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-white" : "text-[rgb(160,160,160)]"
              } hover:text-white`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/services"
              className={`${
                pathname === "/services"
                  ? "text-white"
                  : "text-[rgba(160,160,160)]"
              } hover:text-white`}
            >
              Service
            </Link>
          </li>

          <li>
            <Link
              href="/company"
              className={`${
                pathname === "/company"
                  ? "text-white"
                  : "text-[rgb(160,160,160)]"
              } hover:text-white`}
            >
              Company
            </Link>
          </li>

          <li>
            <Link
              href="/career"
              className={`${
                pathname === "/career"
                  ? "text-white"
                  : "text-[rgb(160,160,160)]"
              } hover:text-white`}
            >
              Career
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className={`${
                pathname === "/blog" ? "text-white" : "text-[rgb(160,160,160)]"
              } hover:text-white`}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact"
                  ? "text-white"
                  : "text-[rgb(160,160,160)]"
              } hover:text-white`}
            >
              Contact
            </Link>
          </li>
        </ul>

        <UilBars
          onClick={() => {
            setMobileMenu(true);
          }}
          className="block lg:hidden"
        ></UilBars>

        <div
          className={`${
            mobileMenu === true ? "test block" : "hidden"
          } w-full h-[100vh] absolute top-0 left-0  bg-[#232536] p-14 z-50`}
        >
          <ul className="flex flex-col items-start gap-14">
            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-white" : "text-[rgb(160,160,160)]"
                }`}
              >
                Home
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/services"
                className={`${
                  pathname === "/services"
                    ? "text-white"
                    : "text-[rgb(160,160,160)]"
                }`}
              >
                Services
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/company"
                className={`${
                  pathname === "/company"
                    ? "text-white"
                    : "text-[rgb(160,160,160)]"
                }`}
              >
                Company
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/career"
                className={`${
                  pathname === "/career"
                    ? "text-white"
                    : "text-[rgb(160,160,160)]"
                }`}
              >
                Career
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/blog"
                className={`${
                  pathname === "/blog"
                    ? "text-white"
                    : "text-[rgb(160,160,160)]"
                }`}
              >
                Blog
              </Link>
            </li>

            <li
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <Link
                href="/contact"
                className={`${
                  pathname === "/contact"
                    ? "text-white"
                    : "text-[rgb(160,160,160)]"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <UilTimes
            onClick={() => {
              setMobileMenu(false);
            }}
            className={`right-10 top-10 absolute`}
          ></UilTimes>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
