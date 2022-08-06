
import * as Realm from "realm-web";

export default async function getImagesFromMongoDB(imgCount: number): Promise<any> {
  


const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID! });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
  const images: any[] = await user.functions.getRandomImages(imgCount);
  
  console.log("Mongo Realm ran");
  return images;
} catch(err) {
  console.error("Failed to log in", err);
  return null;
}




}
