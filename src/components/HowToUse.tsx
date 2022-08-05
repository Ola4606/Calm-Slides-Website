import StartBtn from "./StartBtn";
import {memo} from "react";

function HowToUse() {
  return (
    <div className="px-5 pt-5 pb-3 lg:px-32 lg:pt-12 lg:pb-5">
      <p className="underline underline-offset-4 font-causal font-extrabold text-center text-xl md:text-2xl decoration-purple-400 pb-4">
        How to use Calm Slides:
      </p>
      <ol className="list-disc list-inside flex flex-col justify-center items-start gap-2 font-causal font-normal text-base md:text-lg text-justify leading-loose pb-7">
        <li>
          Click on the <span className="highlight">Start Session</span> button,
          which will redirect you to a{" "}
          <span className="highlight">Session Settings Page</span>.
        </li>
        <li>
          On the <span className="highlight">Session Settings Page</span>, you
          can set the{" "}
          <span className="highlight">
            <b>speed</b> (the images will move at)
          </span>
          , and the{" "}
          <span className="highlight">
            <b>time period</b> (for which the relaxing session will last)
          </span>
          .
        </li>
        <li>
          Click on the <span className="highlight">Start</span> button, then{" "}
          <span className="highlight">Listen, Watch, Relax</span>.
        </li>
      </ol>
      <div className="flex justify-center transform duration-300 md:hover:scale-110">
        <StartBtn btnColor="black" />
      </div>
    </div>
  );
}

export default memo(HowToUse);
