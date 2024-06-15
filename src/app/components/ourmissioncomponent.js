"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import OurMissionSlider from "../secondcomponents/ourmissionslider";

export default function OurMissionComponent() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="relative m-10 h-auto pt-10 sm:pt-0">
        {/* First Section */}
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
          <div className="content">
            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight mt-5 sm:mt-0 font-tittle">
              No One Sleeps Hungry: Our Mission to Feed Every Soul in Need
            </h2>
            <p className="mt-5 md:text-lg font-tittle">
              No One Sleeps Hungry encapsulates our unwavering commitment to
              eradicating hunger from every corner. Our mission is clear: to
              ensure that no soul goes to bed on an empty stomach. Through
              dedicated efforts and community support, we strive to provide
              nourishment and hope to those facing food insecurity, one meal at
              a time. Join us in our quest to create a world where hunger is
              but a distant memory and every individual is afforded the basic
              right to sustenance and dignity.
            </p>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <Image
              src="/poorfood.jpg"
              alt="food"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="animate__animated animate__fadeInRight animate__delay-.5s"
            />
          </div>
        </section>

        {/* Second Section */}
        <section
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="container mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20"
        >
          <div className="content">
            <div className="flex items-center gap-3">
              <hr className="w-10 bg-orange-500 border" />
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight mt-5 sm:mt-0 font-tittle">
              Empowering Every Ability: Lighting the Path for Disabled Lives
            </h2>
            <p className="mt-5 md:text-lg font-tittle">
              Empowering Every Ability embodies our dedication to fostering
              inclusivity and empowerment for individuals of all abilities. By
              lighting the path for disabled lives, we aim to break down
              barriers and create opportunities for growth and fulfillment.
              Through advocacy, support, and community engagement, we strive to
              build a world where every person, regardless of ability, is
              empowered to thrive and contribute their unique gifts to society.
              Join us as we champion equality and celebrate the diversity of
              human potential.
            </p>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <Image
              src="/poordisabled.jpg"
              alt="poor people"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="animate__animated animate__fadeInRight animate__delay-.5s"
            />
          </div>
        </section>

        {/* Third Section */}
        <section
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="container mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20"
        >
          <div className="content">
            <div className="flex items-center gap-3">
              <hr className="w-10 bg-orange-500 border" />
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight mt-5 sm:mt-0 font-tittle">
              Building Brighter Futures: Educating Underprivileged and Orphaned
              Children with Compassion and Care
            </h2>
            <p className="mt-5 md:text-lg font-tittle">
              Building Brighter Futures is our guiding principle as we strive to
              provide education to underprivileged and orphaned children. With
              compassion and care at the forefront, we aim to create a nurturing
              environment where every child can thrive academically and
              emotionally. Through our dedicated efforts, we seek to break the
              cycle of poverty and empower these children to create a brighter
              future for themselves and their communities. Join us in our mission
              to unlock the potential of every child, one classroom at a time.
            </p>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <Image
              src="/educationchild.jpg"
              alt="education image"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="animate__animated animate__fadeInRight animate__delay-.5s"
            />
          </div>
        </section>

        {/* Fourth Section */}
        <section
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="container mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20"
        >
          <div className="content">
            <div className="flex items-center gap-3">
              <hr className="w-10 bg-orange-500 border" />
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight mt-5 sm:mt-0 font-tittle">
              Guiding Hope: Advocating for Justice and Solutions in Times of Need
            </h2>
            <p className="mt-5 md:text-lg font-tittle">
              Guiding Hope represents our commitment to advocating for justice
              and providing solutions during times of need. With unwavering
              dedication, we stand as a beacon of hope guiding individuals
              through the complexities of legal challenges and societal issues.
              Through our advocacy efforts and community outreach, we strive to
              bring about positive change and ensure that every voice is heard
              and every individual is treated with fairness and dignity. Join us
              in our mission to create a more just and equitable world for all.
            </p>
          </div>
          <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
            <Image
              src="/problem.jpg"
              alt="problem image"
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="animate__animated animate__fadeInRight animate__delay-.5s"
            />
          </div>
        </section>
      </div>
      <OurMissionSlider />
    </>
  );
}