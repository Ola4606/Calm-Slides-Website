import React from "react";

function Preview() {
  return (
    <div className="px-32 pt-12 pb-5">
      <div className="flex justify-between items-center pb-4">
        <span className="underline underline-offset-4 font-causal font-extrabold text-2xl decoration-purple-400 text-center">
          Preview:
        </span>

        <span className="font-causal font-normal text-center text-lg">
          Images by{" "}
          <a
            href="https://unsplash.com/"
            target={"_blank"}
            className="font-causal font-normal text-right text-lg underline text-blue-400"
          >
            Unsplash
          </a>
        </span>
      </div>

      <p className="font-causal font-normal text-lg">jhb</p>
    </div>
  );
}

export default Preview;
