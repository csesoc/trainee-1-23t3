import express, { Request, Response } from 'express';
import { join } from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(join(__dirname, '../../client/dist')));


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express :))))!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});