import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import image_1 from "/./public/images/landing_page/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import image_2 from "/./public/images/landing_page/jason-goodman-vbxyFxlgpjM-unsplash.jpg";
import image_3 from "/./public/images/landing_page/redd-f-5U_28ojjgms-unsplash.jpg";

import logo_1 from "/./public/images/services_page/Logo.png";
import logo_2 from "/./public/images/services_page/Logo_1.png";
import logo_3 from "/./public/images/services_page/Logo_2.png";
import logo_4 from "/./public/images/services_page/Logo_3.png";
import logo_5 from "/./public/images/services_page/Logo_4.png";

import icon_1 from "/./public/images/landing_page/icon_1.png";
import icon_2 from "/./public/images/landing_page/icon_2.png";
import icon_3 from "/./public/images/landing_page/icon_3.png";

import image_4 from "/./public/images/services_page/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";

import profile_1 from "/./public/images/services_page/team/austin-distel-7uoMmzPd2JA-unsplash.jpg";
import profile_2 from "/./public/images/services_page/team/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg";
import profile_3 from "/./public/images/services_page/team/dragos-gontariu-GH-mSApoKO0-unsplash.jpg";
import profile_4 from "/./public/images/services_page/team/gift-habeshaw-KBv5dEN3QtY-unsplash.jpg";
import profile_5 from "/./public/images/services_page/team/joycoast-wood-watches-sunglasses-hAfdnOHB_X8-unsplash.jpg";
import profile_6 from "/./public/images/services_page/team/usman-yousaf-q2q5CdLuWnI-unsplash.jpg";
import profile_7 from "/./public/images/services_page/team/usman-yousaf-yIOViGQmjJ4-unsplash.jpg";
import profile_8 from "/./public/images/services_page/team/kato-blackmore-4J99AigVymE-unsplash.jpg";

import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 mt-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full text-center lg:text-start flex flex-col items-center gap-5 lg:items-start">
        <span className="text-black tracking-wider uppercase">Company</span>

        <div className="w-full flex flex-col items-center gap-4 max-w-md lg:items-start">
          <h2 className="text-[25px] font-semibold max-w-md">
            The company leads entire webdesign process from concept to delivery.
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
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
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full lg:gap-20 text-center lg:text-start flex flex-col items-center gap-10 lg:flex-row lg:justify-between ">
        <div className="flex flex-col items-center gap-3 lg:items-start max-w-md w-full">
          <span className="text-[#232536] uppercase font-medium">
            Our Story 👇
          </span>
          <h2 className="text-[25px] font-semibold text-[#232536]">
            From Startups to Titans of Industry
          </h2>
          <p className="leading-7 text-[#232536]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic unsatiable saw his giving Remain expense of gay produce
            excited perceived do an a china mean its so ye when in explained
            Hearts am next over match mr partiality not shoud latter thus as out
            no passed forming middleton exercise up
          </p>
        </div>

        <div className="bg-[rgb(255,211,175,57%)] p-8 w-full">
          <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:place-items-center w-full">
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
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full">
        <div className="bg-[#FAFAFC] flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:place-items-center lg:flex lg:flex-row lg:justify-between px-10">
          <Image src={logo_1} alt="" width={120} objectFit="cover"></Image>
          <Image src={logo_2} alt="" width={120} objectFit="cover"></Image>
          <Image src={logo_3} alt="" width={120} objectFit="cover"></Image>
          <Image src={logo_4} alt="" width={120} objectFit="cover"></Image>
          <Image src={logo_5} alt="" width={120} objectFit="cover"></Image>
        </div>
      </section>

      <section className="bg-[#ECF8F9] mb-20 py-12 lg:py-14  px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-start">
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

      <section className="px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-8 lg:items-start">
        <div className="flex flex-col items-center lg:items-start gap-3 max-w-md">
          <span className="text-[#5D5F6D] tracking-wider uppercase">
            Our VISION
          </span>
          <h2 className="text-[25px] font-semibold text-[#232536]">
            We want to get local identification in every corner of the world in
            this era of global citizenship.
          </h2>
          <p className="text-[#5D5F6D] leading-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <Image
          src={image_4}
          alt=""
          className="w-full h-64 object-cover"
        ></Image>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex flex-col items-center gap-8 lg:items-start">
        <div className="flex flex-col items-center lg:items-start gap-3 max-w-md">
          <span className="text-[#5D5F6D] tracking-wider uppercase">
            MEET OUR TEAM
          </span>
          <h2 className="text-[25px] font-semibold text-[#232536]">
            Teamwork is the only way we work
          </h2>
          <p className="text-[#5D5F6D] leading-7">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_1} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_2} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_3} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_4} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_5} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_6} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_7} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer transition-all">
            <Image src={profile_8} alt="" objectFit="cover h-44"></Image>
            <div className="left-0 bottom-[-170px] group-hover:top-0 duration-200 hidden group-hover:flex items-center lg:justify-start p-4 justify-center absolute w-full h-full bg-[rgb(35,37,54,80%)]">
              <div className="flex flex-col items-center lg:items-start gap-1 text-white">
                <p className="font-semibold">Javena Melo</p>
                <span className="text-[14px] text-[#c9c9c9]">
                  Support Assist
                </span>

                <div className="flex items-center gap-3 text-[14px] mt-1">
                  <UilFacebook></UilFacebook>
                  <UilTwitter></UilTwitter>
                  <UilInstagram></UilInstagram>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
