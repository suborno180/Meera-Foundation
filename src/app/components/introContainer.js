"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function IntroContainer({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="text-gray-800 bg-white body-font overflow-x-hidden">
        <div className="px-5 max-lg:py-12 py-24 mx-auto">
          <div className="flex flex-col">
            <div className=" flex flex-wrap sm:-m-4 -mx-5 -mb-10 -mt-4">
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="p-4 md:w-1/3 sm:mb-0 mb-6"
              >
                <div className="rounded-lg h-64 overflow-hidden relative">
                  <Image
                    src={"/educationalhelp.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="educationimage"
                  />
                </div>
                <h2 className="text-xl font-medium text-black mt-5 font-tittle">
                  Educational empowerment
                </h2>
                <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                  Our mission focuses on empowering impoverished children
                  through education breaking barriers and providing quality
                  learning opportunities Together we aim to break the cycle of
                  poverty and create a more equitable society where every child
                  has the opportunity to learn and thrive
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="p-4 md:w-1/3 sm:mb-0 mb-6 "
              >
                <div className="rounded-lg h-64 max-lg:mt-6 overflow-hidden relative">
                  <Image
                    src={"/cleanenvironment.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="nature"
                  />
                </div>
                <h2 className="text-xl font-medium text-black mt-5 font-tittle">
                  Preserving Tomorrow
                </h2>
                <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                  Our foundation is dedicated to fostering a clean environment
                  and striving for a pollution-free world Through collaborative
                  efforts and sustainable initiatives, we aim to preserve our
                  planet for future generations write a beautifull heading for
                  this paragraph
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1500"
                className="p-4 md:w-1/3 sm:mb-0 mb-6"
              >
                <div className="rounded-lg h-64 max-lg:mt-6 overflow-hidden relative">
                  <Image
                    src={"/medicalhelp2.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="medical image"
                  />
                </div>
                <h2 className="text-xl font-medium text-black mt-5 font-tittle">
                  Medical helps
                </h2>
                <p className="text-base leading-relaxed mt-2 font-tittle font-normal">
                  Meera Foundation Bridging gaps in healthcare access providing
                  medical assistance with care and compassion Empowering lives
                  through vital support ensuring no one faces medical challenges
                  alone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}