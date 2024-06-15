"use client";
import React from "react";
import Image from "next/image";

export default function TestiMonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      {/* Background elements */}
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl" aria-hidden="true"></div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end" aria-hidden="true"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 leading-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-tittle">
            We solved our problems with you
          </p>
        </div>

        {/* Testimonials grid */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
        >
          {/* Testimonial 1 */}
          <figure className="rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p className="font-tittle">
               {` Meera Foundation Truly impactful work that's making a tangible
                difference in people's lives`}
              </p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap relative">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={"/reviewbyman1.png"}
                alt="Vikram Shah"
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold font-tittle">Vikram Shah</div>
              </div>
            </figcaption>
          </figure>

          {/* Testimonial 2 */}
          <div className="space-y-8 xl:contents xl:space-y-0 shadow-2xl">
            <figure className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p className="font-tittle">
                  An exceptional foundation dedicated to empowering communities
                  and changing lives
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 relative">
                <Image
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={"/reviewbyman2.png"}
                  alt="Mohan Das"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold font-tittle">Mohan Das</div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Testimonial 3 */}
          <div className="space-y-8 xl:row-start-1 shadow-2xl">
            <figure className="rounded-2xl bg-white p-6 ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p className="font-tittle">
                  Consistently demonstrating compassion and effectiveness in
                  helping those facing adversity
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 relative">
                <Image
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={"/reviewbygirl1.png"}
                  alt="Natasha Oberoi"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold font-tittle">Natasha Oberoi</div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Testimonial 4 */}
          <div className="space-y-8 xl:contents xl:space-y-0 shadow-2xl">
            <figure className="rounded-2xl bg-white p-6 ring-1 ring-gray-900/5">
              <blockquote className="text-gray-900">
                <p className="font-tittle">
                  Meera Foundation Remarkable dedication to addressing societal
                  challenges and fostering positive change
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4 relative">
                <Image
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src={"/reviewbygirl2.png"}
                  alt="Sarita Mishra"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold font-tittle">Sarita Mishra</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}