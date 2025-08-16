import { cn } from "../lib/utils";
import { ArrowUpRight } from 'lucide-react';
import MajicButton from "./ui/MajicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function Hero() {
  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full w-[50vw] h-[80vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 w-[50vw] h-[80vh]" fill="blue" />
      </div>

      <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>

        <div className="flex justify-center relative my-20 z-10">
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
            <TextGenerateEffect words="Transforming Concepts Into Seamless Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center text-white text-sm md:text-lg lg:text-2xl md:tracking-wider my-4 ">
              Hi I&apos;m Fethulmubin a passionate full-stack developer based in Ethiopia.
            </p>

            <a href="">
                <MajicButton title='Show my work' icon={<ArrowUpRight />} position="right"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
