"use client";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UilBars, UilTimes } from "@iconscout/react-unicons";
import { usePathname } from "next/navigation";

import hero_image from "/./public/images/landing_page/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import arrow from "/./public/images/landing_page/arrow.png";
import logo_1 from "/./public/images/landing_page/Logo.png";
import logo_2 from "/./public/images/landing_page/Logo_1.png";
import logo_3 from "/./public/images/landing_page/Logo_2.png";
import logo_4 from "/./public/images/landing_page/Logo_3.png";
import logo_5 from "/./public/images/landing_page/Logo_4.png";
import image_1 from "/./public/images/landing_page/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import image_2 from "/./public/images/landing_page/jason-goodman-vbxyFxlgpjM-unsplash.jpg";
import image_3 from "/./public/images/landing_page/redd-f-5U_28ojjgms-unsplash.jpg";
import arrow_1 from "/./public/images/landing_page/arrow_1.png";
import icon_1 from "/./public/images/landing_page/icon_1.png";
import icon_2 from "/./public/images/landing_page/icon_2.png";
import icon_3 from "/./public/images/landing_page/icon_3.png";
import icon_4 from "/./public/images/landing_page/Icon_4.png";
import icon_5 from "/./public/images/landing_page/Icon_5.png";
import icon_6 from "/./public/images/landing_page/Icon_6.png";
import icon_7 from "/./public/images/landing_page/Icon_7.png";
import icon_8 from "/./public/images/landing_page/Icon_8.png";
import icon_9 from "/./public/images/landing_page/Icon_9.png";
import icon_10 from "/./public/images/landing_page/Icon_10.png";
import icon_11 from "/./public/images/landing_page/Icon_11.png";
import icon_12 from "/./public/images/landing_page/Icon_12.png";
import profile_1 from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import profile_2 from "/./public/images/landing_page/podpros-GEnCnYhA1J4-unsplash.jpg";
import profile_3 from "/./public/images/landing_page/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_4 from "/./public/images/landing_page/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";
import blog_1 from "/./public/images/landing_page/blog_1.jpg";
import blog_2 from "/./public/images/landing_page/blog_2.jpg";

import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";

export default function Home() {
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

      <section className="py-12 mb-20 lg:py-14 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 bg-[#232536] text-white w-full text-center lg:text-start flex flex-col items-center lg:items-start gap-8">
        <div className="w-full flex flex-col items-center lg:flex-row gap-10 lg:justify-between">
          <div className="flex flex-col items-center gap-5 lg:items-start max-w-md">
            <h1 className="text-[35px] font-bold">
              Transform Your Idea Into Reality with startway
            </h1>
            <p className="leading-7">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="text-white bg-[#444CFC] hover:bg-[#6067f4] px-7 py-3 flex items-center gap-3">
              Request Quote <Image src={arrow} alt="" width={20}></Image>
            </button>
          </div>

          <Image
            src={hero_image}
            alt=""
            className="max-w-[550px] w-full object-cover"
          ></Image>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row w-full lg:justify-between">
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="text-[13px] text-[rgb(255,255,255,80%)]">
              Our Clients
            </span>
            <p className=" whitespace-nowrap">We've Worked with</p>
          </div>
          <div className="flex flex-col items-center  lg:flex md:flex-row gap-6 w-full lg:justify-between">
            <Image src={logo_1} alt="" width={110}></Image>
            <Image src={logo_2} alt="" width={110}></Image>
            <Image src={logo_3} alt="" width={110}></Image>
            <Image src={logo_4} alt="" width={110}></Image>
            <Image src={logo_5} alt="" width={110}></Image>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full text-center lg:text-start flex flex-col items-center gap-5 lg:items-start">
        <span className="text-black tracking-wider uppercase">ABOUT US</span>

        <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-start">
          <h2 className="text-[25px] font-semibold max-w-md">
            The company leads entire webdesign process from concept to delivery.
          </h2>

          <div className="max-w-md flex flex-col gap-2">
            <h3 className="text-[20px] font-semibold">
              The Era Of Technology.
            </h3>
            <p className="leading-7 text-[#5D5F6D]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:grid md:grid-cols-3">
          <Image
            src={image_1}
            alt=""
            className="max-h-64 object-cover h-full w-full"
          ></Image>
          <Image
            src={image_2}
            alt=""
            className="max-h-64 object-cover h-full w-full"
          ></Image>
          <Image
            src={image_3}
            alt=""
            className="max-h-64 object-cover h-full w-full"
          ></Image>
        </div>

        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between w-full mt-3">
          <div className="flex flex-col items-center gap-5 lg:gap-12 md:flex-row md:items-start">
            <div className="flex flex-col items-center md:items-start gap-1">
              <h2 className="text-[25px] font-bold text-[#232536]">1560+</h2>
              <div className="flex mt-1">
                <div className="h-[5px] w-[10px] bg-[#444CFC]"></div>
                <div className="h-[5px] w-[30px] bg-[#FFD3AF]"></div>
                <div className="h-[5px] w-[20px] bg-[#FFA155]"></div>
              </div>
              <p>Project Delivered</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <h2 className="text-[25px] font-bold text-[#232536]">100+</h2>
              <div className="flex mt-1">
                <div className="h-[5px] w-[10px] bg-[#444CFC]"></div>
                <div className="h-[5px] w-[30px] bg-[#FFD3AF]"></div>
                <div className="h-[5px] w-[20px] bg-[#FFA155]"></div>
              </div>
              <p>Professional</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <h2 className="text-[25px] font-bold text-[#232536]">950+</h2>
              <div className="flex mt-1">
                <div className="h-[5px] w-[10px] bg-[#444CFC]"></div>
                <div className="h-[5px] w-[30px] bg-[#FFD3AF]"></div>
                <div className="h-[5px] w-[20px] bg-[#FFA155]"></div>
              </div>
              <p>Happy Client</p>
            </div>

            <div className="flex flex-col items-center md:items-start gap-1">
              <h2 className="text-[25px] font-bold text-[#232536]">10 yrs</h2>
              <div className="flex mt-1">
                <div className="h-[5px] w-[10px] bg-[#444CFC]"></div>
                <div className="h-[5px] w-[30px] bg-[#FFD3AF]"></div>
                <div className="h-[5px] w-[20px] bg-[#FFA155]"></div>
              </div>
              <p>Experience</p>
            </div>
          </div>

          <Link
            href="/about"
            className="flex gap-3 items-center text-[#444CFC]"
          >
            Read about us <Image src={arrow_1} alt="" width={20}></Image>
          </Link>
        </div>
      </section>

      <section className="bg-[#ECF8F9] py-12 lg:py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
        <div className="max-w-md w-full flex flex-col items-center gap-4 lg:items-start">
          <span className="text-[#5D5F6D] tracking-wider uppercase">
            Our expertise
          </span>
          <h2 className="text-[25px] font-semibold text-[#232536]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h2>
          <p className="text-[#5D5F6D] leading-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="max-w-md w-full flex flex-col items-center gap-4 lg:items-start">
          <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start lg:flex-row">
            <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
              <Image src={icon_1} alt="" width={20}></Image>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-[#000000]">
                On Time Delivery
              </h3>
              <p className="leading-7 text-[#5D5F6D]">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start lg:flex-row">
            <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
              <Image src={icon_2} alt="" width={20}></Image>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-[#000000]">
                Best Quality
              </h3>
              <p className="leading-7 text-[#5D5F6D]">
                Through True Rich Attended does no end it his mother since real
                had half every him.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start lg:flex-row">
              <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_3} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Support Assist
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="h-[10px] w-[20%] bg-[#FFA155]"></div>
              <div className="h-[10px] w-[50%] bg-[#FFD3AF]"></div>
              <div className="h-[10px] w-[30%] bg-[#444CFC]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFE6D2] mb-20 py-12 lg:py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-8 lg:items-start">
        <div className="flex flex-col items-center gap-4 lg:items-start max-w-md">
          <span className="tracking-wider uppercase">Our Services</span>
          <h2 className="text-[#232536] font-semibold text-[25px]">
            We build software solutions that solve client's business challenges
          </h2>
          <button className="text-white bg-[#444CFC] hover:bg-[#6067f4] px-7 py-3 flex items-center gap-3">
            Start a Project <Image src={arrow} alt="" width={20}></Image>
          </button>
        </div>

        <div className=" w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start">
            <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
              <Image src={icon_4} alt="" width={20}></Image>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h3 className="text-[18px] font-semibold text-[#000000]">
                Technical support
              </h3>
              <p className="leading-7 text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <Link
                href="/services"
                className="flex items-center gap-3 text-[#444CFC]"
              >
                Read more <Image src={arrow_1} alt="" width={20}></Image>
              </Link>
            </div>
          </div>

          <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start">
            <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
              <Image src={icon_5} alt="" width={20}></Image>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h3 className="text-[18px] font-semibold text-[#000000]">
                Testing Management
              </h3>
              <p className="leading-7 text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <Link
                href="/services"
                className="flex items-center gap-3 text-[#444CFC]"
              >
                Read more <Image src={arrow_1} alt="" width={20}></Image>
              </Link>
            </div>
          </div>

          <div className="bg-white p-5 flex flex-col items-center gap-4 lg:items-start">
            <div className="bg-[#FFE6D2] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
              <Image src={icon_6} alt="" width={20}></Image>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h3 className="text-[18px] font-semibold text-[#000000]">
                Development
              </h3>
              <p className="leading-7 text-[#5D5F6D]">
                We aim to attain the greatest satisfaction for our clients and
                be one of the prominent names when it comes to world-class
                service
              </p>
              <Link
                href="/services"
                className="flex items-center gap-3 text-[#444CFC]"
              >
                Read more <Image src={arrow_1} alt="" width={20}></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-8 lg:items-start">
        <div className="flex flex-col items-center gap-4 lg:items-start max-w-md">
          <span className="tracking-wider uppercase">Our Process</span>
          <h2 className="text-[#232536] font-semibold text-[25px]">
            The process we are working With Our client Worldwide
          </h2>
          <p className="text-[#232536] leading-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="w-full flex flex-col gap-5 lg:gap-0 items-center lg:flex-row">
            <div className="border-[1.5px] w-fit border-b-0 border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_7} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Discover
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                01
              </div>

              <div className="w-full bottom-0 left-0 absolute flex">
                <div className="h-[10px] w-[20%] bg-[#FFA155]"></div>
                <div className="h-[10px] w-[50%] bg-[#FFD3AF]"></div>
                <div className="h-[10px] w-[30%] bg-[#444CFC]"></div>
              </div>
            </div>

            <div className="border-t-[3px] w-[20%] hidden lg:block border-[#DADADD] border-dashed	"></div>

            <div className="border-[1.5px] w-fit  border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_8} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Designing
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                02
              </div>
            </div>

            <div className="border-t-[3px] w-[20%] hidden lg:block border-[#DADADD] border-dashed	"></div>

            <div className="border-[1.5px] w-fit  border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_9} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Development
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                03
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5  lg:gap-0 items-center lg:flex-row">
            <div className="border-[1.5px] w-fit  border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_10} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Testing
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                04
              </div>
            </div>

            <div className="border-t-[3px] w-[20%] hidden lg:block border-[#DADADD] border-dashed	"></div>

            <div className="border-[1.5px] w-fit  border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_11} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Deployment
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                05
              </div>
            </div>

            <div className="border-t-[3px] w-[20%] hidden lg:block border-[#DADADD] border-dashed	"></div>

            <div className="border-[1.5px]  w-fit border-t-0 border-[rgb(35,37,54,17%)] p-7 relative flex flex-col items-center lg:items-start lg:flex-row gap-4">
              <div className="bg-[rgb(255,211,175,17%)] w-[50px] h-[50px] flex items-center justify-center p-2 rounded-full">
                <Image src={icon_12} alt="" width={20}></Image>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-[#000000]">
                  Maintenance
                </h3>
                <p className="leading-7 text-[#5D5F6D]">
                  We aim to attain the greatest satisfaction for our clients and
                  be one of the prominent.
                </p>
              </div>

              <div className="text-[20px] font-bold text-[#797b8c] top-5 right-5 absolute">
                06
              </div>

              <div className="w-full top-0 left-0 absolute flex">
                <div className="h-[10px] w-[20%] bg-[#FFA155]"></div>
                <div className="h-[10px] w-[50%] bg-[#FFD3AF]"></div>
                <div className="h-[10px] w-[30%] bg-[#444CFC]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9FF] py-12 lg:py-14 text-center lg:text-start  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <div className="max-w-md flex flex-col items-center lg:items-start gap-4">
          <h2 className="text-[25px] font-semibold text-[#232536]">
            Our customers love what we do
          </h2>
          <span className="text-[#232536] font-medium">
            Transform your idea into reality with startway
          </span>
          <p className="leading-7 text-[#232536]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex gap-4">
            <Image
              src={profile_1}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            ></Image>
            <Image
              src={profile_2}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            ></Image>
            <Image
              src={profile_3}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            ></Image>
          </div>
          <span>
            <strong>30+</strong> Customer Reviews
          </span>
        </div>

        <div className="bg-white p-10 max-w-md flex flex-col items-center lg:items-start gap-6">
          <h4 className="text-[18px] font-medium">
            startway has been a wonderful partner to work with. I have been a
            customer now for the past few months now and I have had nothing but
            positive experiences!
          </h4>
          <div>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <Image
                src={profile_4}
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              ></Image>
              <div>
                <span className="text-black font-medium">Johnny Andro</span>
                <p className="text-[#C9C9C9]">Director, Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECF8F9] mb-20 py-12 lg:py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex flex-col items-center lg:items-start gap-8 text-center lg:text-start">
        <h2 className="text-[25px] font-semibold text-[#232536]">
          Read our latest blogs & news
        </h2>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col items-center lg:flex-row w-full h-full">
            <Image
              src={blog_1}
              alt=""
              className="h-60 object-cover w-full lg:w-60"
            ></Image>
            <div className="bg-white w-full p-5 h-60 flex flex-col items-center gap-2 lg:items-start justify-center">
              <span className="text-[#C9C9C9]">Jan 19, 2021</span>
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <Link
                href="/blog-post"
                className="flex gap-3 items-center text-[#444CFC]"
              >
                Read More <Image src={arrow_1} alt="" width={20}></Image>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row w-full h-full">
            <Image
              src={blog_2}
              alt=""
              className="h-60 object-cover  w-full lg:w-60"
            ></Image>
            <div className="bg-white p-5 w-full h-60  flex flex-col items-center gap-2 lg:items-start justify-center">
              <span className="text-[#C9C9C9]">Jan 19, 2021</span>
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <Link
                href="/blog-post"
                className="flex gap-3 items-center text-[#444CFC]"
              >
                Read More <Image src={arrow_1} alt="" width={20}></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  px-14 mb-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start">
        <div className="bg-[#666DFF] p-10 flex flex-col items-center lg:flex-row lg:justify-between w-full gap-10">
          <div className="max-w-sm flex flex-col items-center lg:items-start gap-3 text-white">
            <span className="text-[#] uppercase tracking-wider">
              NEWSLETTER
            </span>
            <h2 className="text-[25px] font-semibold">
              Subscribe our News Letter to get Latest Updates.
            </h2>
          </div>

          <input
            placeholder="Your Email"
            className="bg-white placeholder:text-center lg:placeholder:text-start px-10 py-4 outline-none max-w-md text-black w-full"
          ></input>
        </div>
      </section>

      <footer className="w-full  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center md:text-start">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4 max-w-xs">
            <h1 className="text-[#232536] font-bold text-[35px]">
              Let's make something special
            </h1>
            <span className="text-[#232536] font-semibold">
              Let's talk! 🤙{" "}
            </span>
            <div className="text-[15px] text-[#484a62]">
              <p>020 7993 2905</p>
              <p>hi@finsweet.com</p>
            </div>
          </div>

          <ul className="flex flex-col items-center md:items-start gap-4 font-medium">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/services">Service</Link>
            </li>
            <li className="hover:underline">
              <Link href="/company">Company</Link>
            </li>
            <li className="hover:underline">
              <Link href="/career ">Career </Link>
            </li>
          </ul>

          <ul className="flex flex-col items-center md:items-start gap-4">
            <li className="font-medium">Service</li>
            <li className="hover:underline cursor-pointer">
              Technical support
            </li>
            <li className="hover:underline cursor-pointer">Testing</li>
            <li className="hover:underline cursor-pointer">Development</li>
            <li className="hover:underline cursor-pointer">AWS/Azure </li>
            <li className="hover:underline cursor-pointer">Consulting</li>
            <li className="hover:underline cursor-pointer">
              Information Technology
            </li>
          </ul>

          <ul className="flex flex-col items-center md:items-start gap-4">
            <li className="font-medium">Resourses</li>
            <li className="hover:underline">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:underline cursor-pointer">Testimonial</li>
            <li className="hover:underline cursor-pointer">
              <Link href="/privcy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:underline cursor-pointer">Terms of use</li>
            <li className="hover:underline cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col items-center gap-4 md:flex-row md:justify-between mt-4">
          <p className="text-[15px] text-[#484a62]">
            DLF Cybercity, Bhubaneswar,
            <br />
            India, &52050
          </p>

          <Link
            href="/contact"
            className="flex items-center gap-3 text-[#666DFF]"
          >
            Contact Us{" "}
            <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
          </Link>
        </div>
      </footer>

      <div className="bg-[#FFE6D2] w-full py-6 mt-8 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center md:text-start flex flex-col items-center md:flex-row md:justify-between gap-4">
        <h1 className="text-[20px] font-bold">
          <Link href="/">STARTWAY</Link>
        </h1>
        <div className="flex items-center gap-4">
          <UilFacebook className="hover:text-[#888888] cursor-pointer"></UilFacebook>
          <UilInstagram className="hover:text-[#888888] cursor-pointer"></UilInstagram>
          <UilTwitter className="hover:text-[#888888] cursor-pointer"></UilTwitter>
          <UilLinkedin className="hover:text-[#888888] cursor-pointer"></UilLinkedin>
        </div>
      </div>
    </Fragment>
  );
}
