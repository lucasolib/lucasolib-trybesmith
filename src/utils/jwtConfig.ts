import { Secret } from 'jsonwebtoken';

export const secret: Secret = process.env.JWT_SECRET || 'secret';

export const config: object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};