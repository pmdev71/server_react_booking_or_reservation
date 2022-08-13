import express from 'express';
const route = express.Router();

route.get('/', (req, res) => {
  res.send('Hello, this is users endpoint');
});

export default route;
