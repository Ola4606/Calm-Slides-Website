
import StartBtn from "./StartBtn";

function HowToUse() {
  return (
    <div className="px-32 pt-12 pb-5 flex flex-col items-center">
      <p className="underline underline-offset-4 font-causal font-extrabold text-2xl decoration-purple-400 pb-4 text-center">
        How to use Calm Slides:
      </p>
      <ol className="list-disc list-inside flex flex-col justify-center items-start gap-2 font-causal font-normal text-lg text-justify leading-loose pb-7">
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
          </span>.
        </li>
        <li>
          Click on the <span className="highlight">Start</span> button, then{" "}
          <span className="highlight">Listen, Watch, Relax</span>.
        </li>
      </ol>

      <div className='inline-block transform duration-300 hover:scale-110'>
        <StartBtn btnColor="black"/>
      </div>
    </div>
  );
}

export default HowToUse;
