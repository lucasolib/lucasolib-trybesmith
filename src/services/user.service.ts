import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}