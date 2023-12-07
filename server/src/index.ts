import express, { Request, Response } from 'express';
import { join } from 'path';
import { SERVER_PORT } from '../../config.json';

const app = express();

app.use(express.static(join(__dirname, '../../client/dist')));


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express :))))!');
});

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});