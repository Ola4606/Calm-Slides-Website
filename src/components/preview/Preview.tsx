import PreviewImagesGridMarquee from "./PreviewImagesGridMarquee";
import StartBtn from "../StartBtn";

function Preview() {
  return (
    <div className="pt-12 pb-5">
      <div className="px-32 pb-5">
        <div className="flex justify-between items-center pb-4">
          <span className="underline underline-offset-4 font-causal font-extrabold text-2xl decoration-purple-400 text-center">
            A Preview:
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

        <p className="font-mono text-lg font-bold">With just 200 images:</p>
      </div>

      <PreviewImagesGridMarquee />

      <div className="flex justify-center pt-10">
      <div className="inline-block transform duration-300 hover:scale-110">
        <StartBtn btnColor="black" />
      </div>
      </div>
    </div>
  );
}

export default Preview;
