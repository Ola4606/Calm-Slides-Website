import React from "react";

type StartBtnPropType = {
  btnColor: String;
};

function StartBtn({ btnColor }: StartBtnPropType) {
  return (
    <span
      className={
        btnColor === "white"
          ? "text-black text-sm bg-white p-[6px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md "
          : "text-white text-sm bg-black p-[10px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md"
      }
    >
      Start Session
    </span>
  );
}

export default StartBtn;
