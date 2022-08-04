import { memo, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import getImagesFromMongoDB from "../../functions/getImagesFromMongoDB";
import previewImages from "../../data/previewImages";


function PreviewImagesGridMarquee() {
  let imgsUrls: String[] = [];
  let loopCount = Math.trunc(imgsUrls.length / 3);

  let [marqueeElements, setMarqueeElements] = useState([]);

  async function setElements() {
    let holderArray: any = [];

    for (var i = 0; i < loopCount; i++) {
      let startIndex = i * 3;
      let middleIndex = startIndex + 1;
      let endIndex = startIndex + 2;

      holderArray.push(
        <div
          key={i}
          className="flex flex-col w-[150px] h-[600px] overflow-hidden justify-between gap-5"
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
    // async function getAndSetImages() {
    //   const imagesData: any[] = await getImagesFromMongoDB(200); //here

    //   if (imagesData !== null) {
    //     imgsUrls = imagesData.map((i) => {
    //       return i.url;
    //     });
    //     loopCount = Math.trunc(imgsUrls.length / 3);
    //     setElements();
    //   }
    // }

    // getAndSetImages();


    //the actually function is above for the session.. but for preview
        imgsUrls = previewImages;
        loopCount = Math.trunc(imgsUrls.length / 3);
    setElements();
  }, []);

  return (
    <div>
      {marqueeElements === [] ? (
        <div className="flex justify-center items-center font-mono text-lg font-bold">
          <p>Loading Images.. Please Wait</p>
        </div>
      ) : (
        <Marquee>
          <div className="flex gap-5 justify-start">{marqueeElements}</div>
        </Marquee>
      )}
    </div>
  );
}

export default memo(PreviewImagesGridMarquee);
