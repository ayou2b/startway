import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";

import arrow_1 from "/./public/images/landing_page/arrow_1.png";

function Footer() {
  return (
    <Fragment>
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

export default Footer;
