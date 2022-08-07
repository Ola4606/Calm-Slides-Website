import PreviewImagesGridMarquee from "./PreviewImagesGridMarquee";
import StartBtn from "../StartBtn";
import {memo} from "react";

function Preview() {
  return (
    <div className="pt-5 lg:pt-12 pb-3 lg:pb-5pb-3 lg:pb-5">
      <div className="px-5 lg:px-32 pb-3 lg:pb-5">
        <div className="flex flex-col justify-start items-center md:flex md:flex-row md:justify-between md:items-center pb-4">
          <span className="underline underline-offset-4 font-causal font-extrabold text-center text-xl md:text-2xl decoration-purple-400 pb-4">
            A Preview:
          </span>

          <span className="font-causal font-normal text-base md:text-lg ">
            Images by{" "}
            <a
              href="https://unsplash.com/"
              target={"_blank"}
              rel="noreferrer"
              className="font-causal font-normal text-base md:text-lg underline text-blue-400"
            >
              Unsplash
            </a>
          </span>
        </div>

        <p className="font-mono text-base md:text-lg font-bold text-center md:text-start">With just 200 images:</p>
      </div>

      <PreviewImagesGridMarquee />

      <div className="flex justify-center pt-10">
        <div className="md:inline-block transform duration-300 md:hover:scale-110">
          <StartBtn btnColor="black" />
        </div>
      </div>
    </div>
  );
}

export default memo(Preview);
