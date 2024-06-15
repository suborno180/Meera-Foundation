import Image from "next/image";
import ImagesPage from "../secondcomponents/whatwedogallary";

export default async function Whatwedo() {
  return (
    <>
      <div className="max-w-screen-3xl mx-auto p-2 sm:p-10 md:p-16">
        <div className="rounded overflow-hidden flex flex-col max-w-3xl mx-auto">
          <a href="#">
            <Image
              className="w-full"
              src="/poorblackwhite.jpg"
              alt="Sunset in the mountains"
              width={1920} // specify appropriate width
              height={1080} // specify appropriate height
              layout="responsive"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-auto max-lg:w-[90%]">
            <a
              href="#"
              className="font-semibold text-lg text-[#27AB61] transition duration-500 ease-in-out inline-block mb-2 font-title text-[22px]"
            >
              The Empowering Humanity Preserving Nature: A Beacon of Hope and
              Assistance for the Vulnerable
            </a>
            <p className="text-gray-500 font-normal font-title">
              In the tender embrace of our foundation, we weave threads of
              compassion to uplift the downtrodden, restore dignity to the
              marginalized, and nurture the fragile harmony between humanity and
              nature. With every act of support, we paint a tapestry of hope
              where the whispers of gratitude echo in the hearts of those we
              serve, forging a brighter tomorrow for all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
