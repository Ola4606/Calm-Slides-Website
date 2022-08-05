import { Link } from "react-router-dom";
import { memo } from "react";

function ReturnHomeButton() {
  return (
    <Link to="/">
      <span className="text-white text-sm bg-purple-700 p-[6px] md:p-[10px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md">
        Return Home
      </span>
    </Link>
  );
}

export default memo(ReturnHomeButton);
