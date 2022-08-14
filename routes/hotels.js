import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controller/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const route = express.Router();

//CREATE
route.post('/', verifyAdmin, createHotel);
//UPDATE
route.put('/:id', verifyAdmin, updateHotel);
//DELETE
route.delete('/:id', verifyAdmin, deleteHotel);
//GET BY ID
route.get('/:id', getHotel);
//GET ALL
route.get('/', getHotels);

export default route;
