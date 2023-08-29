import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import arrow from "/./public/images/landing_page/arrow.png";
import arrow_1 from "/./public/images/landing_page/arrow_1.png";

import icon_7 from "/./public/images/landing_page/Icon_7.png";
import icon_8 from "/./public/images/landing_page/Icon_8.png";
import icon_9 from "/./public/images/landing_page/Icon_9.png";
import icon_10 from "/./public/images/landing_page/Icon_10.png";
import icon_11 from "/./public/images/landing_page/Icon_11.png";
import icon_12 from "/./public/images/landing_page/Icon_12.png";

import image_1 from "/./public/images/services_page/annie-spratt-QckxruozjRg-unsplash.jpg";
import image_2 from "/./public/images/services_page/austin-distel-wD1LRb9OeEo-unsplash.jpg";
import image_3 from "/./public/images/services_page/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import image_4 from "/./public/images/services_page/israel-andrade-YI_9SivVt_s-unsplash.jpg";
import image_5 from "/./public/images/services_page/s-o-c-i-a-l-c-u-t-r0saAQNjEjQ-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="lg:h-[90vh] py-12 mb-20 lg:py-14 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 bg-[#FFE6D2] text-center lg:text-start flex items-center justify-center  w-full">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:flex-row lg:justify-between gap-10">
          <div className="flex flex-col items-center gap-5 lg:items-start max-w-md">
            <span className="tracking-wider uppercase text-[#232536]">
              Our Services
            </span>
            <h1 className="text-[35px] font-bold text-[#232536]">
              We Build Software Solutionthat Solve Clients Business Challenges
            </h1>
            <p className="leading-7 text-[#232536]">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <button className="text-white bg-[#444CFC] hover:bg-[#6067f4] px-7 py-3 flex items-center gap-3">
              Request Quote <Image src={arrow} alt="" width={20}></Image>
            </button>
          </div>

          <div className="flex flex-col items-center gap-5 lg:items-start max-w-lg">
            <p className="text-[17px] font-semibold">Technical support</p>
            <p className="text-[17px] font-semibold flex items-center gap-3">
              Development
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </p>
            <p className="text-[17px] font-semibold">AWS/Azure</p>
            <p className="text-[17px] font-semibold">Consulting</p>
            <p className="text-[17px] font-semibold">Information Technology</p>
          </div>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-col items-center gap-4 lg:items-start max-w-md">
            <span className="tracking-wider uppercase">Our Process</span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              The process we are working With Our client Worldwide
            </h2>
            <p className="text-[#232536] leading-7">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
                    We aim to attain the greatest satisfaction for our clients
                    and be one of the prominent.
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
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center ">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#444CFC] uppercase tracking-wider font-medium">
              Technical Support
            </span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              Best in class tech support for your company. We become your tech
              backbone
            </h2>
            <p className="leading-7 text-[#828282]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
              Through True Rich Attended does no end it his mother since real
              had half every.
            </p>
          </div>

          <Image
            src={image_1}
            alt=""
            className="max-w-[500px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <section className="bg-[#ECF8F9] py-5 mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row-reverse lg:justify-between">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#444CFC] uppercase tracking-wider font-medium">
              Developoment
            </span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              Bring your ideas to reality with certified team of developers,
              working with latest technologies
            </h2>
            <p className="leading-7 text-[#828282]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
              Through True Rich Attended does no end it his mother since real
              had half every.
            </p>
          </div>

          <Image
            src={image_2}
            alt=""
            className="max-w-[500px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#444CFC] uppercase tracking-wider font-medium">
              AWS/Azure
            </span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              We help you deploy, manage and secure your application on leading
              web services
            </h2>
            <p className="leading-7 text-[#828282]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
              Through True Rich Attended does no end it his mother since real
              had half every.
            </p>
          </div>

          <Image
            src={image_3}
            alt=""
            className="max-w-[500px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row-reverse lg:justify-between">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#444CFC] uppercase tracking-wider font-medium">
              Consulting
            </span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              Get advice from world class professionals
            </h2>
            <p className="leading-7 text-[#828282]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
              Through True Rich Attended does no end it his mother since real
              had half every.
            </p>
          </div>

          <Image
            src={image_4}
            alt=""
            className="max-w-[500px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#444CFC] uppercase tracking-wider font-medium">
              Information Technology
            </span>
            <h2 className="text-[#232536] font-semibold text-[25px]">
              We want to get local identification in every corner of the world
              in this era of global citizenship.
            </h2>
            <p className="leading-7 text-[#828282]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.
              Through True Rich Attended does no end it his mother since real
              had half every.
            </p>
          </div>

          <Image
            src={image_5}
            alt=""
            className="max-w-[500px] w-full object-cover"
          ></Image>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
