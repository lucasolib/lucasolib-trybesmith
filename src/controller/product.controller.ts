import { Request, Response } from 'express';
// import statusCodes from '../statusCodes';
import ProductService from '../services/product.service';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  // public getById = async (req: Request, res: Response) => {
  //   const id = Number(req.params.id);
  //   const book = await this.bookService.getById(id);

  //   if (!book) {
  //     return res.status(statusCodes.NOT_FOUND)
  //       .json({ message: 'Book not found!' });
  //   }

  //   res.status(statusCodes.OK).json(book);
  // };

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const bookCreated = await this.productService.create(book);
    res.status(201).json(bookCreated);
  };
}

export default ProductsController;