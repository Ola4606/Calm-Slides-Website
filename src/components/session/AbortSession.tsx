import {memo} from "react";
import { Link } from "react-router-dom";

type AbortSessionPropType = {

  handleClick: any;

}

function AbortSession({handleClick}: AbortSessionPropType) {
  return (
    <div>
      <Link to="/" onClick={handleClick}>
        <div className="inline-flex justify-center items-center gap-1 text-white text-sm bg-red-500 p-[6px] md:p-[10px] rounded-md font-normal font-mono cursor-pointer transition duration-300 ease-out hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[14px] h-[14px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <span>Cancel Session</span>
        </div>
      </Link>
    </div>
  );
}

export default memo(AbortSession);
