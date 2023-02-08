import connection from '../models/connection';
import LoginModel from '../models/login.model';
import User from '../interfaces/user.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(username: string, password: string): Promise<User | null> {
    const user = this.model.getUserByUsername(username, password);
    if (!user) {
      return null;
    } return user;
  }
}