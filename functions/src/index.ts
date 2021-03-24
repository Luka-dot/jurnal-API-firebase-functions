import * as functions from "firebase-functions";
import * as express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).send('Hello for Lukas app.express.'))

exports.app = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
