import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { PORT } = process.env;
console.log(path.join(__dirname, '../assets'));
app.use('/', express.static(`${__dirname}/build`));
app.use('/', express.static(path.join(__dirname, '../assets')));

app.listen(PORT, () => {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
  });
});

