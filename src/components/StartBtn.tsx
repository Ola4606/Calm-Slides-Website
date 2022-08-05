import { Link } from "react-router-dom";
import {memo} from "react";

type StartBtnPropType = {
  btnColor: String;
};

function StartBtn({ btnColor }: StartBtnPropType) {
  return (
    <Link to="session">
      <span
        className={
          btnColor === "white"
            ? "text-black text-sm bg-white p-[5px] md:p-[6px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md "
            : "text-white text-sm bg-black p-[6px] md:p-[10px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md"
        }
      >
        Start Session
      </span>
    </Link>
  );
}

export default memo(StartBtn);
