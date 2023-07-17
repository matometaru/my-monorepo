import * as functions from "firebase-functions";
import { name, formatDate } from "common"

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!" + name + ', ' + formatDate(new Date()));
});
