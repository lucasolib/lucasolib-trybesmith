import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT orders.id as id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) as productsIds
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products On orders.id = products.order_id
    GROUP BY orders.id, orders.user_id`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}