import express, { Router } from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controller/user.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
const route = express.Router();

// route.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('Hello user, You are authenticated and logged in.');
// });

// route.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, You are logged in and you can delete your account.');
// });

// route.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, You can delete all account..');
// });

//CREATE

//UPDATE
route.put('/:id', verifyUser, updateUser);
//DELETE
route.delete('/:id', verifyUser, deleteUser);
//GET BY ID
route.get('/:id', verifyUser, getUser);
//GET ALL
route.get('/', verifyAdmin, getUsers);

export default route;
