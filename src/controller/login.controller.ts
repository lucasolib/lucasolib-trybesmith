import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { config, secret } from '../utils/jwtConfig';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await this.loginService.login(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    } const token = jwt.sign({ data: { id: user.id, username: user.username } }, secret, config);
    return res.status(200).json({ token });
  };
}