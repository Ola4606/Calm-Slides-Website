import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";
import {memo} from "react";

type NavPropType = {
  startedSession: boolean;
};

function Nav({ startedSession }: NavPropType) {
  return (
    <div className="bg-purple-700 px-3 py-2 flex justify-between items-center">
      <Link to="/">
        <span className="text-white text-2xl font-bold font-title">
          Calm Slides
        </span>
      </Link>
      {startedSession ? <p></p> : <StartBtn btnColor="white" />}
    </div>
  );
}

export default memo(Nav);
