import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUserByUsername(username: string, password: string): Promise<User> {
    // console.log(username);
    
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }
}
