import express from 'express';
const route = express.Router();

route.get('/', (req, res) => {
  res.send('Hello, this is auth endpoint');
});

route.get('/register', (req, res) => {
  res.send('Hello, this is auth register endpoint');
});

export default route;
