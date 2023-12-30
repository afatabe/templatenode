import express from 'express';

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
