import * as functions from "firebase-functions";
import * as express from 'express';

import { addEntry } from './entryController';

const app = express();

app.get('/', (req, res) => res.status(200).send('Hello for Lukas app.express.'))
app.post('/entries', addEntry);

exports.app = functions.https.onRequest(app);




export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
