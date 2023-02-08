import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { config, secret } from '../utils/jwtConfig';

export default class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    await this.userService.create(user);
    const token = jwt.sign({ data: { id: user.id, username: user.username } }, secret, config);
    return res.status(201).json({ token });
  };
}