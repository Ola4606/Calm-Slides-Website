import DescriptionImageGridPreview from "./DescriptionImageGridPreview";
import StartBtn from "../StartBtn";
import {memo} from "react";

function Description() {
  return (
    <div className="px-5 pt-5 pb-3 lg:px-32 lg:pt-12 lg:pb-5">
      <div className="flex flex-col justify-start items-center md:flex-row md:justify-between md:items-center">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl text-center md:text-start font-title font-semibold text-purple-500">
            Listen,
          </p>
          <p className="text-5xl md:text-6xl lg:text-7xl text-center md:text-start font-title font-bold text-purple-600">
            Watch,
          </p>
          <p className="text-6xl md:text-7xl lg:text-8xl text-center md:text-start font-title font-extrabold text-purple-700">
            Relax.
          </p>

          <p className="text-base lg:text-lg text-center md:text-start font-causal font-normal text-black my-5 md:my-7">
            View thousands of random images as you relax to calm music...
          </p>

          <div className="flex justify-center md:inline-block transform duration-300 md:hover:scale-110">
            <StartBtn btnColor="black" />
          </div>
        </div>

        <div className="inline-block rounded-md w-60 h-60 md:rounded-lg mt-6 xsm:mt-12 md:mt-0 overflow-hidden">
          <DescriptionImageGridPreview />
        </div>

      </div>
    </div>
  );
}

export default memo(Description);
