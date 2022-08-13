import express from 'express';
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from '../controller/hotel.js';
const route = express.Router();

//CREATE
route.post('/', createHotel);
//UPDATE
route.put('/:id', updateHotel);
//DELETE
route.delete('/:id', deleteHotel);
//GET BY ID
route.get('/:id', getHotel);
//GET ALL
route.get('/', getHotels);

export default route;
