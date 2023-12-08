import express, { Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { getDb } from './utils/db';
import { Firestore, doc, getDocs, query, collection, CollectionReference } from 'firebase/firestore';

const app = express();
const db : Firestore = getDb();

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, TypeScript with Express :)))!');
  res.send('Hello, TypeScript with Express :)))!');
});

app.get('/catalogue', async (req: Request, res: Response) => {

  const spaces : CollectionReference = collection(db, 'spaces');
  const docsSnapshot = await getDocs(spaces);

  console.log(docsSnapshot.docs.map(d => d.data()));
  res.send("got the docs!");
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});