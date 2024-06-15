import Image_View from "./components/Image_View";
import UploadImage from "./components/Upload";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
const HOST_URL = process.env.HOST_URL; 
  return (
    <>
      <div className="container mx-auto">
        upload image
        <UploadImage />
        <div className="flex col-span-2 md:col-span-3 lg:col-span-5 mt-60">
          <Image_View hostUrl={HOST_URL} />
        </div>
      </div>
    </>
  );
}
