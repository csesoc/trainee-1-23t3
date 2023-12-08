import express, { Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { getDb } from './utils/db';
import { Firestore, doc, getDocs, query, collection, CollectionReference } from 'firebase/firestore';
const cors = require('cors');
const app = express();
const db : Firestore = getDb();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, TypeScript with Express :)))!');
  res.send('Hello, TypeScript with Express :)))!');
});

app.get('/catalogue', async (req: Request, res: Response) => {
  const spaces : CollectionReference = collection(db, 'spaces');
  const docsSnapshot = await getDocs(spaces);

  res.send(docsSnapshot.docs.map(d => d.data()));
});

app.post('/login', async (req: Request, res: Response) => {
  console.log("Body", req.body);

  res.send(req.body);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});