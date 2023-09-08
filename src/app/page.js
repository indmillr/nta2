import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-8 px-5">
      <div className="text-center flex flex-col justify-center xl:text-left h-full mx-auto">
        {/* title */}
        <h1 className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-6 font-semibold">
          Becoming a <br />
          Future Black Belt
          <br /> Starts <span className="text-red-600">Here</span>.
        </h1>

        {/* subtitle */}
        <p className="max-w-sm xl:max-w-xl mx-auto mb-6">
          NTA has been in business for over 20 years. We specialize in
          TaeKwon-Do and Tactical Self-Defense for individuals of all ages.
        </p>
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-12 xl:mb-14">
          <span className="text-blue-600 font-semibold">
            Chief Instructor and Owner
          </span>
          <br />
          Bill Taylor, 4th Degree Black Belt
        </p>
        <div className="justify-center relative flex items-center">
          <Image
            src="/ntabadge.png"
            width={125}
            height={125}
            className="animate-spin-slow"
          ></Image>
        </div>
      </div>
    </div>
  );
}
