import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url('/img/hero-bg.png')] bg-contain bg-bottom lg:bg-center lg:bg-cover bg-no-repeat min-h-[85vh] lg:min-h-screen flex flex-col justify-center items-center text-center px-5">
      <h1 className="text-[40px] md:text-[50px] lg:text-[72px] leading-[105%] tracking-[-0.01em] font-extrabold uppercase ">
        The Purple State <span className="text_gradient">DAO</span>
      </h1>
      <p className="mt-[30px] __body_text leading-[147%] max-w-[860px]">
        The Purple State is the decentralized venture capital organization,
        where it invests in early stage Web3 startups. Our mission is tokenizing
        on/off chain reputation, activity and career into SoulBound Token, that
        can be interactively verified between other DAO’s, hence creating
        decentralized network society.
      </p>

      <button className="mt-[60px] rounded-lg bg-primary border border-primary hover:bg-transparent hover:text-primary flex items-center gap-1.5 px-6 py-[11px] ">
        Join Us{" "}
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 9.83337L15.6667 9.83337"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.83331 4L15.6666 9.83333L9.83331 15.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
