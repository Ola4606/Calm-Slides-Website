import { memo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import previewImages from "../../data/previewImages";


function PreviewImagesGridMarquee() {
  let imgsUrls: String[] = [];
  let loopCount = Math.trunc(imgsUrls.length / 3);

  const [marqueeElements, setMarqueeElements] = useState([]);

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

  useEffect(() => {
        imgsUrls = previewImages;
        loopCount = Math.trunc(imgsUrls.length / 3);
    setElements();
  }, []);

  return (
    <div>
      {marqueeElements.length === 0 ? 
        <div className="flex justify-center items-center font-mono text-lg font-bold">
          <p>Loading Images.. Please Wait</p>
        </div>
      : 
        <Marquee
        speed={40}
        gradient={false}
        >
          <div className="flex pl-5 gap-5 justify-start">{marqueeElements}</div>
        </Marquee>
      }
    </div>
  );
}

export default memo(PreviewImagesGridMarquee);
