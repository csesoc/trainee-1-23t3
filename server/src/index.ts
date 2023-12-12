import express, { Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { getDb } from './utils/db';
import { Firestore } from 'firebase/firestore';

import { catalogue } from './catalogue';
import { login } from './login';
import { register } from './register';
import { forgot } from './forgot';
import { getIndividualSpace } from './individual';
import { review } from './review';

const cors = require('cors');
const app = express();
const db: Firestore = getDb();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log('Hello, TypeScript with Express :)))!');
  res.send('Hello, TypeScript with Express :)))!');
});

app.get('/catalogue', async (req: Request, res: Response) => {
  const result = await catalogue(db);
  res.json(result);
});

app.get('/space/:spaceTitle', async (req: Request, res: Response) => {
  const spaceTitle = req.params.spaceTitle;
  const result = await getIndividualSpace(db, spaceTitle);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});


app.post('/space/:spaceTitle/review', async (req: Request, res: Response) => {
  const spaceTitle = req.params.spaceTitle;
  const newReview = req.body;

  const result = await review(db, spaceTitle, newReview);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});


app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await login(db, email, password);
  if (result.error) {
    res.status(403).json(result);
  } else {
    res.status(200).json(result);
  };
});

app.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const result = await register(db, username, email, password);
  if (result.error) {
    res.status(403).json(result);
  } else {
    res.status(200).json(result);
  };
});


app.put('/forgot', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await forgot(db, email, password);
  if (result.error) {
    res.status(403).json(result);
  } else {
    res.status(200).json(result);
  }
});


app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});