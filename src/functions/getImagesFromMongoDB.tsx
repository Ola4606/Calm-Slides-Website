
import * as Realm from "realm-web";

export default async function getImagesFromMongoDB(imgCount: number): Promise<any> {
  


const app = new Realm.App({ id: "calmslidesdataapihelper-nmjpe" });
const credentials = Realm.Credentials.anonymous();
try {
  const user = await app.logIn(credentials);
  const images: any[] = await user.functions.getRandomImages(imgCount);
  return images;
} catch(err) {
  console.error("Failed to log in", err);
  return null;
}




}
