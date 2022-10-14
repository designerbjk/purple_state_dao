import Image from "next/image";
import React from "react";

const DecentralizedSocietySection = () => {
  return (
    <section className="mt-32 lg:mt-[200px]">
      <div className="container_lg">
        <h2 className="text-center text-[24px] lg:text-[36px] leading-[129%] font-bold w-fit mx-auto relative">
          We create tools and connect people to{" "}
          <p className="text_gradient">open the decentralized society.</p>
          <div className="absolute bottom-0 left-0 -translate-x-[60%] translate-y-10">
            <Image
              src={"/img/lights-2.png"}
              width={300}
              height={300}
              alt="Lights"
            />
          </div>
        </h2>

        <div className="mt-10">
          <Image src={"/img/banner.png"} width={1080} height={500} alt="" />
        </div>
      </div>

      <h2 className="text-center text-[24px] lg:text-[36px] leading-[129%] font-bold my-20 lg:mt-[170px] lg:mb-[250px]">
        Join Purple State <span className="text_gradient">DAO</span>
      </h2>
    </section>
  );
};

export default DecentralizedSocietySection;
