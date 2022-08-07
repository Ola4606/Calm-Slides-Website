import {memo} from "react";
import AbortSession from "./AbortSession";

type SessionSettingsPropType = {
  sessionTime: number,
  setSessionTime: any,
  sessionSpeed: String,
  setSessionSpeed: any,
  setSessionStarted: any
};

function SessionSettings({
  sessionTime,
  setSessionTime,
  sessionSpeed,
  setSessionSpeed,
  setSessionStarted,
}: SessionSettingsPropType) {
  const possibleSessionTimes = [5, 10, 15];

  const possibleSessionSpeeds = ["Slow", "Medium", "Fast"];

  const timeOptionsElements = possibleSessionTimes.map((time, index) => {
    if (time === sessionTime) {
      return (
        <span key={index} className="cursor-pointer rounded-md py-1 px-2 border border-purple-700 text-white bg-purple-700 text-center text-sm font-normal font-mono">
          {time + " mins"}
        </span>
      );
    } else {
      return (
        <span
        key={index} className="cursor-pointer rounded-md py-1 px-2 border border-purple-700 text-black bg-white text-center text-sm font-normal font-mono"
          onClick={() => setSessionTime(time)}
        >
          {time + " mins"}
        </span>
      );
    }
  });

  const speedOptionsElements = possibleSessionSpeeds.map((speed, index) => {
    if (speed === sessionSpeed) {
      return (
        <span key={index} className="cursor-pointer rounded-md py-1 px-2 border border-purple-700 text-white bg-purple-700 text-center text-sm font-normal font-mono">
          {speed}
        </span>
      );
    } else {
      return (
        <span
        key={index} className="cursor-pointer rounded-md py-1 px-2 border border-purple-700 text-black bg-white text-center text-sm font-normal font-mono"
          onClick={() => setSessionSpeed(speed)}
        >
          {speed}
        </span>
      );
    }
  });

  return (
    <div>


          {/* abort session */}
          <div className="inline-block transform duration-300 md:hover:scale-110">
            <AbortSession handleClick={()=>{}}/>
          </div>
        

      <p className="font-causal font-bold text-start text-xl md:text-2xl mt-9 mb-4 md:mb-7">
        Session Settings:
      </p>

      <p className="font-causal text-start font-normal text-base md:text-lg mb-3 md:mb-4">
        How long do you want to relax for?
      </p>
      <div className="mb-4 md:mb-7 inline-flex gap-4">{timeOptionsElements}</div>
      <p className="font-causal text-start font-normal text-base md:text-lg mb-3 md:mb-4">
        What speed do you want the slides to move at?
      </p>
      <p className="mb-7 md:mb-9 inline-flex gap-4">{speedOptionsElements}</p>

      {/*begin button*/}

      <div className="flex justify-center transform duration-300 md:hover:scale-110" onClick={() => setSessionStarted(true)}>
        <div className="transform duration-300 md:hover:scale-110 ">
          <span className="text-white text-sm bg-purple-700 py-[6px] px-[22px] rounded-md font-normal font-mono cursor-pointer">
            Begin
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(SessionSettings);
