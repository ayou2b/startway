import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import profile_1 from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import arrow_1 from "/./public/images/landing_page/arrow_1.png";
import image_1 from "/./public/images/blog_page/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import profile_2 from "/./public/images/landing_page/podpros-GEnCnYhA1J4-unsplash.jpg";
import profile_3 from "/./public/images/landing_page/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import profile_4 from "/./public/images/landing_page/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";
import image_2 from "/./public/images/blog_page/austin-distel-jpHw8ndwJ_Q-unsplash.jpg";
import image_3 from "/./public/images/blog_page/austin-distel-mpN7xjKQ_Ns-unsplash.jpg";
import image_4 from "/./public/images/blog_page/austin-distel-wD1LRb9OeEo-unsplash.jpg";
import image_5 from "/./public/images/blog_page/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import image_6 from "/./public/images/blog_page/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import image_7 from "/./public/images/blog_page/christina-wocintechchat-com-eS72kLFS6s0-unsplash.jpg";
import image_8 from "/./public/images/blog_page/mimi-thian-vdXMSiX-n6M-unsplash.jpg";
import image_9 from "/./public/images/blog_page/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg";
import image_10 from "/./public/images/blog_page/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import image_11 from "/./public/images/blog_page/redd-f-5U_28ojjgms-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 mt-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 w-full text-center lg:text-start flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
        <div className="max-w-md flex flex-col items-center lg:items-start gap-5">
          <span className="text-[#232536] uppercase font-medium tracking-widest">
            TREnding
          </span>
          <h1 className="text-[#232536] font-bold text-[35px]">
            Breaking the code How did we build our Figma plugin
          </h1>
          <p className="text-[#232536] leading-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the.
          </p>
          <Link
            href="/blog-post"
            className="text-[#444CFC] flex items-center gap-3"
          >
            Read More
            <Image src={arrow_1} alt="" width={20} objectFit="cover"></Image>
          </Link>
          <div className="flex flex-col items-center gap-4 lg:flex-row w-full lg:justify-between">
            <div className="flex flex-col items-center lg:flex-row gap-3">
              <Image
                src={profile_1}
                alt=""
                className="w-[45px] h-[45px] rounded-full object-cover"
              ></Image>
              <p className="text-[#232536]">Andrew Jonson</p>
            </div>
            <p className="text-[#585b74]">Posted on 27th January 2021</p>
          </div>
          <Image
            src={image_1}
            alt=""
            className="h-64 object-cover w-full"
          ></Image>
        </div>
        <div className="bg-[#FFDFC6] max-w-md p-10 flex flex-col items-center lg:items-start gap-8">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h4 className="text-[17px] font-medium">
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div className="flex flex-col items-center lg:flex-row gap-4">
              <Image
                src={profile_4}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              ></Image>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h4 className="text-[17px] font-medium">
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div className="flex flex-col items-center lg:flex-row gap-4">
              <Image
                src={profile_2}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              ></Image>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h4 className="text-[17px] font-medium">
              Great design expectations prejudice in digital products in Next
              Year
            </h4>
            <div className="flex flex-col items-center lg:flex-row gap-4">
              <Image
                src={profile_3}
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              ></Image>
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start flex flex-col items-center lg:items-start gap-8 w-full">
        <h2 className="text-[35px] font-semibold text-[#232536]">
          Read Recent Post
        </h2>
        <div className="flex flex-col items-center gap-5 lg:gap-12 lg:grid lg:grid-cols-2">
          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:flex-row lg:h-48"
          >
            <Image
              src={image_2}
              alt=""
              className="lg:h-48 lg:w-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-[#F9F9FF] p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_4}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:flex-row lg:h-48"
          >
            <Image
              src={image_3}
              alt=""
              className="lg:h-48 lg:w-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-[#F9F9FF] p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_3}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:flex-row lg:h-48"
          >
            <Image
              src={image_4}
              alt=""
              className="lg:h-48 lg:w-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-[#F9F9FF] p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/blog-post"
            className="flex flex-col items-center lg:flex-row lg:h-48"
          >
            <Image
              src={image_5}
              alt=""
              className="lg:h-48 lg:w-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-[#F9F9FF] p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#F9F9F9] px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-20 text-center lg:text-start py-12 flex flex-col items-center lg:items-start gap-8 w-full">
        <h2 className="text-[35px] font-semibold text-[#232536]">All posts</h2>
        <div className="flex flex-col items-center gap-5 lg:gap-12 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3">
          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_6}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_7}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_8}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_3}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_9}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_4}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_10}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_2}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog-post" className="flex flex-col items-center">
            <Image
              src={image_11}
              alt=""
              className="lg:h-48 max-h-48 w-full object-cover"
            ></Image>
            <div className="bg-white p-7 h-full flex flex-col items-center lg:items-start gap-4 justify-center">
              <h4 className="text-[18px] font-medium">
                Today’s best design trends for digital products
              </h4>
              <div className="flex flex-col items-center lg:flex-row gap-4">
                <Image
                  src={profile_1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full object-cover"
                ></Image>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
                  <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
