import {memo} from "react";


function About() {
  return (
    <div className="px-5 pt-5 pb-3 lg:px-32 lg:pt-12 lg:pb-5">
      <p className="underline underline-offset-4 font-causal font-extrabold text-center text-xl md:text-2xl decoration-purple-400 pb-4">
        What is Calm Slides?
      </p>
      <p className="font-causal font-normal text-center text-base md:text-lg">
        Calm Slides is a simple-to-use web product that makes relaxing easier
        (by using images and music). <br /> Calm Slides exposes
        users to hundreds of randomly picked images in a short time span, while playing soothing
        music to help relax and tune off.
      </p>

      <br />

      <div className="block md:flex justify-center text-center">
        <div>
          <span className="block md:flex font-causal font-normal text-base md:text-lg">
          Built by
          <a
            href="https://twitter.com/4real_Dev"
            target={"_blank"}
            rel="noreferrer"
            className="font-causal font-normal text-base md:text-lg underline text-blue-400"
          >
        &nbsp;Adeyemo OlaOluwa
          </a>
        </span>
        </div>
        <span className="font-mono font-normal text-base md:text-lg">
        &nbsp;[Development Mode]
        </span>
      </div>
    </div>
  );
}

export default memo(About);
