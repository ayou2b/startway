import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import image_1 from "/./public/images/landing_page/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import arrow_1 from "/./public/images/landing_page/arrow_1.png";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="mt-14 flex flex-col items-center text-center gap-3 px-14  sm:px-16 md:px-20 lg:px-24 xl:px-28">
        <span className="text-[#232536] uppercase font-medium max-w-md">
          CAREER AT FINSWEET
        </span>
        <h1 className="text-[#232536] text-[35px] font-bold max-w-md">
          We hired people who are Always Passionate about what they do
        </h1>
        <p className="leading-7 text-[#232536] max-w-md">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          .
        </p>
      </section>

      <section className=" px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 flex items-center justify-center">
        <h1
          style={{
            backgroundImage: `url(${image_1.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="lg:text-[170px] text-[60px] md:text-[100px] font-bold bg-clip-text text-transparent m-0"
        >
          Careers
        </h1>
      </section>

      <section className="mb-20 flex flex-col items-center gap-2 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center">
        <p>See Our open positions</p>
        <p>👇</p>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start w-full">
        <div className="bg-[#ECF8F9] py-12 lg:gap-10 flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3 lg:place-content-between w-full">
          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Full Stack Developer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>
          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Testing Engineer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Hr Manager</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Product Designer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Wordpress Developer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Jr. QA Tester</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Sr. UX Designer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Social Media Manager</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <span className="text-[#] font-medium">Golang Developer</span>
            <div className="flex flex-col gap-1">
              <p className="text-[#4d506b]">Bengaluru · Full Time </p>
              <p className="text-[#4d506b]">$10K - $18K · No equity</p>
            </div>
            <Link
              href="/single-career"
              className="flex items-center gap-3 text-[#5D5FEF]"
            >
              Apply Now
              <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFC] py-12 px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 text-center lg:text-start w-full flex flex-col items-center lg:items-start gap-8">
        <div className="flex flex-col items-center lg:items-start gap-3 max-w-md">
          <span className="text-black tracking-wider uppercase">
            OUR WORK & CULTURE
          </span>

          <h2 className="text-[25px] font-semibold max-w-md">
            Come and join a team of highly skilled professionals.
          </h2>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3">
          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>😷</p>
            </div>
            <span className="text-[#232536] font-medium">
              Covid-19 insurance
            </span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>⏱</p>
            </div>
            <span className="text-[#232536] font-medium">
              Flexible working time
            </span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>🏡</p>
            </div>
            <span className="text-[#232536] font-medium">Work from home</span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>🎉</p>
            </div>
            <span className="text-[#232536] font-medium">Annual retreats</span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>💰</p>
            </div>
            <span className="text-[#232536] font-medium">Learning stipend</span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>

          <div className="bg-white p-5 flex flex-col items-center lg:items-start gap-3">
            <div className="bg-[rgb(255,211,175,50%)] flex items-center justify-center w-[50px] h-[50px] rounded-full">
              <p>💪</p>
            </div>
            <span className="text-[#232536] font-medium">Gym membership</span>
            <p className="text-[#575974]">
              Through True Rich Attended does no end it his mother since real
              had halfdoes no end it
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
