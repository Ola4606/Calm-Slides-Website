import React from "react";
import StartBtn from "./StartBtn";

function Nav() {
  return (
    <div className="bg-mainColor px-3 py-2 flex justify-between items-center">
      <span className="text-white text-2xl font-bold font-title">
        Calm Slides
      </span>
      <StartBtn btnColor="white"/>
    </div>
  );
}

export default Nav;
