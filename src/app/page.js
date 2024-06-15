import Swiper from "./components/Swiper";
import IntroContainer from "./components/introContainer";
import IntroBigBanner from "./components/introBigBanner";
import TestiMonials from "./components/testimonials";

// import CardWithImage from "./components/cardwithimage";
import DownToUp from "./components/downtoup";
// import TextContentSection from "./components/textContentSection";
import HeroWithImage from "./components/heroWithImage";
import FourBoxSection from "./components/fourBoxSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <Swiper /> */}
      <IntroContainer />
      <IntroBigBanner />

      {/* <CardWithImage/> */}

      {/* <TextContentSection/> */}
      <FourBoxSection />
      <DownToUp />
      <HeroWithImage />
      <TestiMonials />
    </main>
  );
}
