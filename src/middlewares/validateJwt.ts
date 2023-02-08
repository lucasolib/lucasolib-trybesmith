import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

require('dotenv/config');
// const { UserService } = require('../services');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

export default async function validatejwt(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  jwt.verify(token, secret);
  // const user = await UserService.getByUserId(decoded.data.userId);
  // if (!user) {
  //   return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
  // }
  // req.user = decoded;
  next();
}