import axios from "axios";
import * as Realm from "realm-web";

export default async function getImagesFromMongoDB(imgCount: number): Promise<any> {
  
//   var data = JSON.stringify({
//     collection: "images",
//     database: "slidesData",
//     dataSource: "Cluster0",
//     pipeline: [ { $sample: { size: imgCount } } ]
//   });

//   var config = {
//     method: "post",
//     url: "https://data.mongodb-api.com/app/data-gpjqp/endpoint/data/v1/action/aggregate",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Request-Headers": "*",
//       "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,DELETE",
//       "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//       "api-key":
//         "ORAzmVpBfG1VV49giOEUL5kH2L3fJqEAnVwJqPBnQXwCiGd4khyhUKy10rZwpSnA",
//     },
//     data: data,
//   };

//   await axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//       return response.data;
//     })
//     .catch(function (error) {
//       return null;
//     });


const app = new Realm.App({ id: "calmslidesdataapihelper-nmjpe" });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
  const images = await user.functions.getRandomImages(imgCount);
  console.log(images);
  return images;
} catch(err) {
  console.error("Failed to log in", err);
  return null;
}




}
