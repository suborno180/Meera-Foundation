import Image from "next/image";

export default function IntroBigBanner() {
    return (
        <>
            <div className="h-screen w-screen bg-purple-500 text-center relative max-md:h-[350px]">
                <Image
                    src={"/emotionbanner.jpg"}
                    layout="fill"
                    objectFit="cover"
                    alt="introimage"
                />
            </div>
            {/* Optional: Add additional content below the image */}
            <div className="py-8 text-center">
                <p className="text-lg text-gray-800 font-tittle">
                    Your additional content here
                </p>
            </div>
        </>
    );
}
