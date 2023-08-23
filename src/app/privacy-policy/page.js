import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function page() {
  return (
    <Fragment>
      <Header></Header>

      <section className="mt-14 mb-14 px-14 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex-col flex items-center gap-1 lg:items-start text-center lg:text-start">
        <h2 className="text-[25px] font-semibold">Privacy Policy</h2>
        <p className="text-[14px] text-[#232536]">
          Last Updated on 27th January 2021
        </p>
      </section>

      <section className="px-14 mb-20 sm:px-16 md:px-20 lg:px-24 xl:px-28 w-full flex-col flex items-center lg:items-start text-center lg:text-start">
        <div className="p-12 bg-[#ECF8F9] flex flex-col items-center lg:items-start gap-6">
          <h3 className="text-[20px] font-semibold text-[#232536]">
            Transform Your Idea Into Reality with Ether a Leading Digital Agency
          </h3>
          <p className="leading-7 text-[14px] text-[#232536]">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>
          <p className="leading-7 text-[14px] text-[#232536]">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
          <p className="leading-7 text-[14px] text-[#232536]">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged.
          </p>
          <p className="leading-7 text-[14px] text-[#232536]">
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice.
          </p>
          <h4 className="text-[18px] font-semibold text-[#232536]">
            We disclose your information in the following manner:
          </h4>
          <p className="leading-7 text-[14px] text-[#232536]">
            Business partners, suppliers and sub-contractors (“Affiliates”):
            Affiliates may use this information to help provide, understand, and
            improve our services and Affiliate’s own services for the
            performance of any contract we enter into
          </p>
          <p className="leading-7 text-[14px] text-[#232536]">
            Financial Institutions and Auditors: In order to complete third
            party financial, technical and legal audits of our operations to
            help us operate our business, we may need to share your information
            with financial institutions and auditors.
          </p>
          <p className="leading-7 text-[14px] text-[#232536]">
            Advertisers and Advertising Networks: To provide you with select and
            serv e relevant advertisements to you and others, we may share your
            data with advertiser sand advertising networks. We do not disclose
            your Personal Information or Sensitive Personal Information to our
            advertisers, but we may provide them with aggregate information
            about our users (for example, we may inform them that any given
            number of participants in a specified age group who clicked on their
            advertisement on any given day). We may also use such aggregate
            information to help advertisers reach the kind of audience they want
            to target.
          </p>
        </div>
      </section>

      <Footer></Footer>
    </Fragment>
  );
}

export default page;
