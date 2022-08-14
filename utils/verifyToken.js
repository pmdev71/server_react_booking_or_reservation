import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

//CHECK USER LOGGED IN OR NOT
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(createError(401, 'You are not authorized !'));
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) {
        return next(createError(401, 'Token is not valid !'));
      }
      req.user = user;
      next();
    });
  } catch (err) {
    next(err);
  }
};
//CHECK USER ADMIN OR LOGGED IN OWN ACCOUNT
export const verifyUser = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req?.user?.id === req?.params?.id || req?.user?.isAdmin) {
      next();
    } else {
      return next(
        createError(403, 'You are not authorized to delete this account !')
      );
    }
  });
};
//CHECK USER ADMIN OR NOT
export const verifyAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req?.user?.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not an admin !'));
    }
  });
};
