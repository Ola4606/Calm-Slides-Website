import { memo, useState, useEffect, useMemo } from "react";
import Marquee from "react-fast-marquee";
import getImagesFromMongoDB from "../../functions/getImagesFromMongoDB";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
import { Howl, Howler } from "howler";
import AbortSession from "./AbortSession";

type MainSlidesMarqueePropType = {
  timeInMins: number;
  slideSpeed: String;
};

let functionRan = false;
let imagesData: any = [];

function MainSlidesMarquee({
  timeInMins,
  slideSpeed,
}: MainSlidesMarqueePropType) {
  let imgsUrls: String[] = [];
  let loopCount = Math.trunc(imgsUrls.length / 3);

  const [marqueeElements, setMarqueeElements] = useState<any>([]);
  const [faultyInternetConnection, setFaultyInternetConnection] =
    useState<boolean>(false);

  async function getImageDataFromMDB() {
    console.log("Started func");
    let imagesMetaData: any = await getImagesFromMongoDB(1500);
    // console.log(imagesMetaData.length)
    imagesData = imagesMetaData;
    console.log(imagesData);
  }

  if (!functionRan) {
    getImageDataFromMDB();
  }

  functionRan = true;

  useEffect(() => {
    console.log("ran effect");
    getAndSetImages();
  }, [imagesData]);

  function getAndSetImages() {
    if (imagesData === null) {
      setFaultyInternetConnection(true);
    } else {
      if (imagesData.length !== 0) {
        console.log("got here");
        imgsUrls = imagesData.map((i: any) => {
          return i.url;
        });
        loopCount = Math.trunc(imgsUrls.length / 3);
        console.log(loopCount);

        setElements();
      }
    }
  }

  async function setElements() {
    let holderArray: any = [];

    for (var i = 0; i < loopCount; i++) {
      let startIndex = i * 3;
      let middleIndex = startIndex + 1;
      let endIndex = startIndex + 2;

      holderArray.push(
        <div
          key={i}
          className="flex flex-col w-[150px] h-[500px] md:h-[600px]  overflow-hidden justify-between gap-5"
        >
          <img
            src={imgsUrls[startIndex] + "&w=150&q=90&auto=format"}
            alt=""
            className="w-[100%] h-auto"
          />
          <img
            src={imgsUrls[middleIndex] + "&w=150&q=90&auto=format"}
            alt=""
            className="w-[100%] h-auto"
          />
          <img
            src={imgsUrls[endIndex] + "&w=150&q=90&&auto=formatfit=crop"}
            alt=""
            className="w-[100%] h-auto"
          />
        </div>
      );
    }

    setMarqueeElements(holderArray);
  }

  // useEffect(() => {
  //   async function getAndSetImages() {
  //     const imagesData: any[] = await getImagesFromMongoDB(1500); //here

  //     if (imagesData !== null) {
  //       imgsUrls = imagesData.map((i) => {
  //         return i.url;
  //       });
  //       loopCount = Math.trunc(imgsUrls.length / 3);
  //       setElements();
  //     }
  //   }

  //   getAndSetImages();
  // }, []);

  const marqueeSpeedCalculated = useMemo(() => {
    return calcSpeed(slideSpeed);
  }, [slideSpeed]);

  function calcSpeed(speedinText: String) {
    let speed: number;

    switch (speedinText) {
      case "Slow":
        speed = 20;
        break;

      case "Medium":
        speed = 40;
        break;
      case "Fast":
        speed = 60;
        break;

      default:
        speed = 40;
        break;
    }

    return speed;
  }

  let navigate = useNavigate();

  //timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeInMins * 60);

  const {
    seconds,
    minutes,
    // hours,
    // days,
    isRunning,
    // start,
    pause,
    resume,
    // restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      functionRan = false;
      imagesData = [];
      navigate("/sessionEnded");
    },
    autoStart: true,
  });

  const format = (t: number) => {
    return t < 10 ? "0" + t : t;
  };

  var sound = new Howl({
    src: ["../../audios/1.mp3", "../../audios/2.mp3", "../../audios/3.mp3"],
    loop: true,
    volume: 1,
    autoplay: true,
  });

  return (
    <div>
      <div className="px-5 lg:px-32 pb-3 lg:pb-5">
        {/* abort session */}
        <div className="inline-block transform duration-300 md:hover:scale-110">
          <AbortSession
            handleClick={() => {
              functionRan = false;
      imagesData = [];
      navigate("/sessionEnded");
              
            }}
          />
        </div>
      </div>

      {faultyInternetConnection ? (
        <div className="flex justify-center items-center font-mono text-lg text-center font-bold mt-9">
          <p>
            Seems like there might be some issuses with your internet
            connection, please fix it and refresh the website
          </p>
        </div>
      ) : (
        <div>
          {marqueeElements.length === 0 ? (
            <div className="flex justify-center items-center font-mono text-lg text-center font-bold mt-9">
              <p>Loading Images.. Please Wait</p>
            </div>
          ) : (
            <div>
              <div className="flex justify-start items-center gap-3 mt-9 mb-4 md:mb-7 px-5 lg:px-32">
                <span className="font-causal font-bold text-start text-xl md:text-2xl ">
                  {format(minutes)}:{format(seconds)}
                </span>

                <div>
                  {isRunning ? (
                    <div onClick={pause} className="text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[34px] w-[34px] md:h-[40px] md:w-[40px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div onClick={resume} className="text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[34px] w-[34px] md:h-[40px] md:w-[40px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}

                  <span className="font-causal text-start text-base text-gray-500 ">
                    Audio is currently unavaliable
                  </span>
                </div>
              </div>

              <div
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Marquee
                  speed={marqueeSpeedCalculated}
                  gradient={false}
                  play={isRunning}
                >
                  <div className="flex pl-5 gap-5 justify-start">
                    {marqueeElements}
                  </div>
                </Marquee>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(MainSlidesMarquee);
