import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controller/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const route = express.Router();

//CREATE
route.post('/:hotelid', verifyAdmin, createRoom);
//UPDATE
route.put('/:id', verifyAdmin, updateRoom);
//DELETE
route.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//GET BY ID
route.get('/:id', getRoom);
//GET ALL
route.get('/', getRooms);

export default route;
