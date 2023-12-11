import express, { Request, Response } from 'express';
import { SERVER_PORT } from '../../config.json';
import { getDb } from './utils/db';
import {
  Firestore,
  getDocs,
  collection,
  CollectionReference,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';

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
  const spacesReference: CollectionReference = collection(db, 'spaces');
  const docsSnapshot = await getDocs(spacesReference);

  res.json(docsSnapshot.docs.map(d => d.data()));
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => d.data());

  const user = users.filter(user => user.email === email && user.password === password)[0];
  if (user === undefined) {
    res.status(403).json({ message: "Invalid email or password." });
  } else {
    res.status(200).json({ username: user.username });
  }
});

app.post('/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => d.data());

  const emailTaken = users.filter(user => user.email === email).length > 0;
  if (emailTaken) {
    res.status(403).json({ message: "Email has already been taken." });
  } else {
    const newUser = {
      username: username,
      email: email,
      password: password
    };

    await addDoc(usersReference, newUser);
    res.status(200).json({ username: username });
  }
});

app.put('/forgot', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const usersReference: CollectionReference = collection(db, 'users');
  const docsSnapshot = await getDocs(usersReference);
  const users = docsSnapshot.docs.map(d => {
    const id = d.id;
    const email = d.data().email;
    return { id, email };
  });

  const user = users.filter(user => user.email === email)[0];
  if (user === undefined) {
    res.status(403).json({ message: "Invalid email, user does not exist." });
  } else {
    await updateDoc(doc(db, "users", user.id), { password: password });
    res.status(200).json({});
  }
});


app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});