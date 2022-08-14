import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
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
route.get('/find/:id', getHotel);
//GET ALL
route.get('/', getHotels);
route.get('/countByCity', countByCity);
route.get('/countByType', getHotels);

export default route;
