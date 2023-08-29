"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import arrow from "/./public/images/landing_page/arrow.png";
import { UilCheck } from "@iconscout/react-unicons";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Page() {
  const [details, setDetails] = useState(true);
  const [requirements, setRequirements] = useState(false);
  const [responsibilities, setResponsibilities] = useState(false);

  const [check, setChek] = useState(true);

  return (
    <Fragment>
      <Header></Header>
      <section className="mb-20 px-14 sm:px-16 text-center lg:text-start  md:px-20 lg:px-24 xl:px-28 mt-14  w-full flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start lg:flex-row lg:justify-between gap-10">
          <div className="max-w-md transition-all flex flex-col items-center lg:items-start gap-4">
            <span className="text-[#232536] text-[14px] font-medium tracking-widest uppercase">
              CAREER AT Ether
            </span>
            <h1 className="text-[#232536] font-bold text-[35px]">
              Full Stack Developer
            </h1>
            <p className="text-[#232536]  leading-7">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages.
            </p>
            <button className="px-7 py-3 bg-[#444CFC] hover:bg-[#666DFF] duration-200 flex items-center gap-3 text-white">
              Apply Now
              <Image src={arrow} alt="" objectFit="cover" width={20}></Image>
            </button>
          </div>

          <div className="p-10 bg-[#FFE0C7] flex flex-col items-center lg:items-start gap-4 max-w-md">
            <h3 className="text-[20px] font-semibold text-[#232536]">
              Job Description
            </h3>

            <p className="text-[#232536] text-[14px]">
              Remote, India , 4 to 5 Years Of Experience
            </p>

            <p className="text-[#232536] text-[14px]">
              Department: Product Engineering
            </p>

            <p className="text-[#232536] text-[14px]">
              Full Time 5 Position Available.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center w-full lg:text-start  flex items-center justify-center">
        <div className="bg-[#ECF8F9] 2xl:max-w-[1300px] py-14 pt-0 flex flex-col gap-10 w-full">
          <div className="flex flex-col items-center font-medium  gap-4 md:flex-row md:justify-center md:gap-10 lg:gap-16 py-4 border-b-[2px] w-full xl:gap-24">
            <button
              onClick={() => {
                setDetails(true);
                setRequirements(false);
                setResponsibilities(false);
              }}
              className={`${
                details === true ? "text-[#454DFD]" : "text-[#000000]"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => {
                setDetails(false);
                setRequirements(true);
                setResponsibilities(false);
              }}
              className={`${
                requirements === true ? "text-[#454DFD]" : "text-[#000000]"
              }`}
            >
              Requirements
            </button>
            <button
              onClick={() => {
                setDetails(false);
                setRequirements(false);
                setResponsibilities(true);
              }}
              className={`${
                responsibilities === true ? "text-[#454DFD]" : "text-[#000000]"
              }`}
            >
              Responsibilities
            </button>
          </div>

          <div className="px-28">
            {details === true && (
              <ul className="list-disc flex flex-col items-center lg:items-start gap-3 text-[#474747]">
                <li>
                  Create and edit video content for multi-platform use and
                  distribution for social media channels (Facebook, Youtube,
                  Instagram, Snapchat, IGTV, Facebook Stories and Instagram
                  Stories).
                </li>
                <li>
                  Design & Create highly engaging industry-related content in
                  both photo, gif & video format
                </li>
                <li>Publish Posts on various social media channels</li>
                <li>
                  Promote content on social networks and monitor engagement
                  (e.g. comments and shares)
                </li>
                <li>Research industry-related topics</li>
                <li>Editing audio and sound design on projects</li>
                <li>
                  Engage in opportunities to develop original content and
                  concepts for web and mobile
                </li>
                <li>
                  Create motion graphics and animations using 2D and 3D
                  applications for marketing and promotional usage.
                </li>
                <li>
                  Manage the day-to-day handling of all social media channels
                  such as LinkedIn, Facebook, Twitter, Pinterest, Instagram,
                  Tiktok and YouTube, adapting content to suit different
                  channels
                </li>
              </ul>
            )}

            {requirements === true && (
              <ul className="list-disc flex flex-col items-center lg:items-start gap-3 text-[#474747]">
                <li>
                  Create and edit video content for multi-platform use and
                  distribution for social media channels (Facebook, Youtube,
                  Instagram, Snapchat, IGTV, Facebook Stories and Instagram
                  Stories).
                </li>
                <li>
                  Design & Create highly engaging industry-related content in
                  both photo, gif & video format
                </li>
                <li>Publish Posts on various social media channels</li>
                <li>
                  Promote content on social networks and monitor engagement
                  (e.g. comments and shares)
                </li>
                <li>Research industry-related topics</li>
                <li>Editing audio and sound design on projects</li>
                <li>
                  Engage in opportunities to develop original content and
                  concepts for web and mobile
                </li>
              </ul>
            )}

            {responsibilities === true && (
              <ul className="list-disc flex flex-col items-center lg:items-start gap-3 text-[#474747]">
                <li>
                  Create and edit video content for multi-platform use and
                  distribution for social media channels (Facebook, Youtube,
                  Instagram, Snapchat, IGTV, Facebook Stories and Instagram
                  Stories).
                </li>
                <li>
                  Design & Create highly engaging industry-related content in
                  both photo, gif & video format
                </li>
                <li>Publish Posts on various social media channels</li>
                <li>
                  Promote content on social networks and monitor engagement
                  (e.g. comments and shares)
                </li>
                <li>Research industry-related topics</li>
                <li>Editing audio and sound design on projects</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center w-full lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start gap-8">
          <h2 className="text-[25px] font-semibold text-[#232536]">
            Apply Now
          </h2>
          <form className="w-full flex flex-col items-center lg:items-start gap-5 lg:gap-8">
            <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-10 w-full">
              <input
                placeholder="First Name"
                className="px-10 py-3 w-full outline-none bg-[#F9F9FF] placeholder:text-center lg:placeholder:text-start"
              ></input>

              <input
                placeholder="Last Name"
                className="px-10 py-3 w-full outline-none bg-[#F9F9FF] placeholder:text-center lg:placeholder:text-start"
              ></input>
            </div>

            <div className="flex flex-col items-center lg:flex-row gap-5 lg:gap-10 w-full">
              <input
                placeholder="Email"
                className="px-10 py-3 w-full outline-none bg-[#F9F9FF] placeholder:text-center lg:placeholder:text-start"
              ></input>

              <input
                placeholder="Mobile"
                className="px-10 py-3 w-full outline-none bg-[#F9F9FF] placeholder:text-center lg:placeholder:text-start"
              ></input>
            </div>
            <textarea
              className="px-10 py-3 w-full outline-none bg-[#F9F9FF] placeholder:text-center lg:placeholder:text-start"
              placeholder="Why do you thing you are good fit for Ether?"
            ></textarea>

            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4 ">
              <div
                onClick={() => {
                  setChek((prev) => !prev);
                }}
                className={`${
                  check === true
                    ? "bg-[#454DFD] text-white"
                    : "border-[1.5px] bg-transparent border-[#797979]"
                } w-[30px] h-[30px] flex items-center cursor-pointer justify-center`}
              >
                {check === true && <UilCheck></UilCheck>}
              </div>

              <p className="max-w-xl">
                I agree to accept the privacy policy, We will add your contact
                details provided in this form to our system for contacting you
                regarding your request.
              </p>
            </div>

            <button className="px-7 py-3 bg-[#444CFC] hover:bg-[#666DFF] duration-200 flex items-center gap-3 text-white">
              Submit Application
              <Image src={arrow} alt="" objectFit="cover" width={20}></Image>
            </button>
          </form>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default Page;
