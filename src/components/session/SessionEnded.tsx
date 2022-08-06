import React from "react";
import Nav from "../Nav";
import ReturnHomeButton from "../ReturnHomeButton";

function SessionEnded() {
  return (
    <div className="min-h-[100vh]">
      <Nav startedSession={true} />

      <div className="pt-5 lg:pt-12 pb-3 lg:pb-5pb-3 lg:pb-5">
        <div className="px-5 lg:px-32 pb-3 lg:pb-5 flex flex-col justify-center items-center">
          <div className="font-causal text-base lg:text-lg font-normal text-center mb-9">
            <p>
              You just completed a Calm Slides session. <br />
              This is still in the Development stage, and a lot more features
              are yet to be added.
            </p>
            {/* <br />
            <p>
              Please submit your email below, so you can be informed when the
              full version comes out.
            </p> */}
          </div>

          {/* return home */}
          <div className="inline-block transform duration-300 md:hover:scale-110">
            <ReturnHomeButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionEnded;
