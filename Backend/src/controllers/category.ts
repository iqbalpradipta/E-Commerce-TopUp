import { Request, response, Response } from "express";
import category from "../services/category";

export default new (class CategoryController {
  async GetCategory(req: Request, res: Response) {
    try {
      const response = await category.GetCategory();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async GetCategoryById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await category.GetCategoryById(id);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async CreateCategory(req: Request, res: Response) {
    try {
      const data = req.body;
      const response = await category.CreateCategory(data);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async UpdateCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;

      const response = await category.UpdateCategory(id, data);

      res.status(500).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async DeleteCategory(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const response = await category.DeleteCategory(id);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
