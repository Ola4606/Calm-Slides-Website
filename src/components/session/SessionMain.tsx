import { memo, useState } from "react";
import Nav from "../Nav";
import AbortSession from "./AbortSession";
import MainSlidesMarquee from "./MainSlidesMarquee";
import SessionSettings from "./SessionSettings";

function SessionMain() {
  const [sessionStarted, setSessionStarted] = useState(false);

  const [sessionTime, setSessionTime] = useState(5);
  const [sessionSpeed, setSessionSpeed] = useState("Medium");

  return (
    <div className="min-h-[100vh]">
      <Nav startedSession={true} />

      <div className="pt-5 lg:pt-12 pb-3 lg:pb-5pb-3 lg:pb-5">
        <div className="px-5 lg:px-32 pb-3 lg:pb-5">
          {/* abort session */}
          <div className="inline-block transform duration-300 md:hover:scale-110">
            <AbortSession />
          </div>
        </div>

        {sessionStarted ? (
          <MainSlidesMarquee
            timeInMins={sessionTime}
            slideSpeed={sessionSpeed}
          />
        ) : (
          <div className="px-5 lg:px-32 pb-3 lg:pb-5">
            <SessionSettings
              sessionTime={sessionTime}
              setSessionTime={setSessionTime}
              sessionSpeed={sessionSpeed}
              setSessionSpeed={setSessionSpeed}
              setSessionStarted={setSessionStarted}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(SessionMain);
