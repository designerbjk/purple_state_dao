import Image from "next/image";
import React from "react";

const portfolios = [
  {
    imgSrc: "/img/cryp-pur.png",
    title: "CrypPur",
    description:
      "Cryppur is a crypto news curation service. It’s a ultimate guide for Defi, NFT, crypto and financial news. We want to give you insight in money and tech to help your financail status.",
    readMoreUrl: "https://cryppur.com/",
  },
  {
    imgSrc: "/img/microseed.png",
    title: "Microseed",
    description:
      "Micro seed is a investing platform for individuals who are new to crypto industry.",
    readMoreUrl: "https://www.microseed.finance/",
  },
  {
    imgSrc: "/img/crepe.png",
    title: "Crepe",
    description:
      "Crepe is a Defi service that allows users to create on/off chain tokens to trade any assets!",
    readMoreUrl: "https://crepe.fund/",
  },
];

const PortfolioSection = () => {
  return (
    <section className="pt-20 lg:pt-[120px]">
      <div className="px-5">
        <div className="text-center">
          <h6 className="text_gradient text-[16px] lg:text-[20px] leading-[24px] font-semibold mb-2.5 ">
            DAO PORTFOLIO
          </h6>
          <h2 className="text-[24px] lg:text-[36px] leading-[139.52%] font-bold ">
            <p>On going Projects incubated by</p>
            THE PURPLE STATE DAO
          </h2>
        </div>
      </div>

      <div className="px-5 max-w-[calc(1110px+20px)] mx-auto mt-12 lg:mt-[70px] space-y-10">
        {portfolios.map(({ description, imgSrc, readMoreUrl, title }, i) => {
          const isLeftBox = i % 2 === 0;
          return (
            <div
              className={`grid grid-cols-1 ${
                isLeftBox
                  ? "lg:grid-cols-[auto,340px] lg:-translate-x-[114px]"
                  : "lg:grid-cols-[340px,auto]"
              }`}
              key={i}
            >
              <div
                className={`${
                  isLeftBox
                    ? "lg:order-[unset]"
                    : "lg:order-2 flex justify-end lg:translate-x-[114px]"
                }`}
              >
                <Image width={675} height={300} src={imgSrc} alt={title} />
              </div>
              <div className="flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-[24px] font-bold">{title}</h3>
                <p className="__body_text my-5">{description}</p>

                <a
                  href={readMoreUrl}
                  className="text-primary flex items-center justify-center lg:justify-start gap-1.5"
                >
                  Read more
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 9.83337L15.6667 9.83337"
                      stroke="#A637FE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.83331 4L15.6666 9.83333L9.83331 15.6667"
                      stroke="#A637FE"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
