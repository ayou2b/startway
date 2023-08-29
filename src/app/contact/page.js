import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "/./public/images/landing_page/arrow.png";

import {
  UilFacebook,
  UilInstagram,
  UilTwitter,
  UilLinkedin,
} from "@iconscout/react-unicons";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 transition-all gap-10 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full mt-14 mb-20 text-center lg:text-start flex items-center justify-center">
        <div className="w-full 2xl:max-w-[1300px] flex flex-col items-center lg:items-start lg:justify-between lg:flex-row">
          <div className="max-w-md flex flex-col items-center lg:items-start gap-5">
            <span className="text-[#232536] uppercase tracking-widest">
              CONTACT US
            </span>
            <h1 className="text-[#232536] text-[35px] font-bold">
              Have a Question ? Let’s Get in Touch with us 👋
            </h1>
            <p className="text-[#232536]">
              Fill up the Form and ou team will get back to within 24 hrs
            </p>

            <form className="w-full flex flex-col items-center lg:items-start gap-5 mt-8">
              <input
                placeholder="Name"
                className="pr-10 py-3 placeholder:text-center lg:placeholder:text-start border-b-[1.5px] w-full outline-none"
              ></input>
              <input
                placeholder="E-mail"
                className="pr-10 py-3 placeholder:text-center lg:placeholder:text-start border-b-[1.5px] w-full outline-none"
              ></input>
              <input
                placeholder="Subject"
                className="pr-10 py-3 placeholder:text-center lg:placeholder:text-start border-b-[1.5px] w-full outline-none"
              ></input>
              <textarea
                placeholder="Type your Messege"
                className="pr-10 py-3 placeholder:text-center lg:placeholder:text-start border-b-[1.5px] w-full outline-none"
              ></textarea>
              <button className="px-7 py-3 bg-[#444CFC] hover:bg-[#5f66e7] duration-200 text-white flex items-center gap-3">
                Send Messege{" "}
                <Image src={arrow} alt="" width={20} objectFit="cover"></Image>
              </button>
            </form>
          </div>

          <div className="bg-[#666DFF] text-white p-12 max-w-md w-full flex flex-col items-center lg:items-start gap-6">
            <div className="w-full flex flex-col items-center lg:items-start gap-2">
              <span className="  text-[#e3e3e3] w-full">Location</span>
              <p className="pt-3 border-t-[1.5px] border-[rgb(0,0,0,8%)]">
                DLF Cybercity, Bhubaneswar,
                <br />
                India, &52050
              </p>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start gap-2">
              <span className="  text-[#e3e3e3] w-full">Working Hour</span>
              <p className="pt-3 border-t-[1.5px] border-[rgb(0,0,0,8%)]">
                Monday To Friday
                <br />
                9:00 AM to 8:00 PM
              </p>
              <span className="  text-[#e3e3e3] w-full">
                Our Support Team is available 24Hrs
              </span>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start gap-2">
              <span className="  text-[#e3e3e3] w-full">Contact Us</span>
              <p className="pt-3 border-t-[1.5px] border-[rgb(0,0,0,8%)]">
                020 7993 2905
              </p>
              <span className="  text-[#e3e3e3] w-full">
                startaway@ether.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <UilFacebook></UilFacebook>
              <UilInstagram></UilInstagram>
              <UilTwitter></UilTwitter>
              <UilLinkedin></UilLinkedin>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
