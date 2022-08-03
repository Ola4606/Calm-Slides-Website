
function About() {
  return (
    <div className="px-32 pt-12 pb-5">
      <p className="underline underline-offset-4 font-causal font-extrabold text-center text-2xl decoration-purple-400 pb-4">
        What is Calm Slides?
      </p>
      <p className="font-causal font-normal text-center text-lg">
        Calm Slides is a simple-to-use web product that makes relaxing easier
        (by using images and music). <br /> Calm Slides exposes
        users to hundreds of randomly picked images in a short time span, while playing soothing
        music to help relax and tune off.
      </p>

      <br />

      <div className="flex justify-center text-center">
        <span className="font-causal font-normal text-lg">
          Built by
          <a
            href="twitter.com/4real_Dev"
            target={"_blank"}
            className="font-causal font-normal text-lg underline text-blue-400"
          >
        &nbsp;Adeyemo OlaOluwa
          </a>
        </span>
        <span className="font-mono font-normal text-lg">
        &nbsp;[Development Mode]
        </span>
      </div>
    </div>
  );
}

export default About;
