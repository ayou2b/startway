import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import profile_1 from "/./public/images/landing_page/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import image from "/./public/images/blog_page/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mt-14 mb-14 flex items-center lg:items-start text-center lg:text-start">
        <div className="max-w-md flex flex-col items-center lg:items-start gap-4">
          <h1 className="text-[25px] font-bold text-[#232536]">
            Breaking the code How did we build our Figma plugin
          </h1>
          <p className="leading-7 text-[#232536]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized. We aim to attain the greatest satisfaction for
            our clients.
          </p>

          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Image
              src={profile_1}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            ></Image>
            <div className="flex flex-col items-center lg:items-start lg:flex-row  lg:gap-5">
              <p className="text-[14px] text-[#232536]">Andrew Jonson</p>
              <p className="text-[14px] text-[#232536]">Jan 19, 2021</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 mb-14">
        <Image src={image} alt="" className="h-64 object-cover w-full"></Image>
      </section>

      <section className="px-16 sm:px-20 md:px-28 lg:px-40 xl:px-44 text-center lg:text-start flex flex-col items-center lg:items-start gap-5 mb-20">
        <h2 className="text-[25px] font-semibold text-[#232536]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p className="text-[#232536] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>
        <p className="text-[#232536] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p className="text-[#232536] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged.
        </p>
        <p className="text-[#232536] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice.
        </p>
        <h3 className="text-[#232536] font-semibold text-[20px]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>
        <ul className="flex flex-col items-center lg:items-start gap-4">
          <li>
            Step 1: Download the plugin from Figma community, search Ghost
            UXWriter
          </li>
          <li>Step 2: Open the plugin on your artboard</li>
          <li>
            Step 3: Search for your copy or look through the different
            categories of the copies
          </li>
          <li>
            Step 4: Select the type of error you are looking for. You will get
            three different copies for each error
          </li>
          <li>Step 5: Tap on the cards to insert text in your frames</li>
          <li>
            And you are all geared up to make your UX copies more fun and
            exciting 😎
          </li>
        </ul>
        <h3 className="text-[#232536] font-semibold text-[20px]">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h3>
        <p className="text-[#232536] leading-7">
          Writing UX copies can be a little frustrating and confusing, and
          sometimes we are unsure about how to get the right word. To crack the
          code for the UX copies, we at Zeta Design wanted to build a Figma
          plugin for the larger design community. The plugin is called the Ghost
          UXWriter and has a set of UX copies cataloged and categorized with a
          voice and tone variation ranging from plain, casual to playful. The
          intention to build this Figma plugin originated from our Medium blog
          post, ‘Designing voice and tone for error messages.
        </p>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
