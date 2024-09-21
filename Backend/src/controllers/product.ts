import { Request, Response } from "express";
import product from "../services/product";

export default new class ProductController {
    async GetProduct(req: Request, res: Response) {
        try {
            const response = await product.GetProduct()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async GetProductById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await product.GetProductById(id)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async CreateProduct(req: Request, res: Response) {
        try {
            const data = {
                title: req.body.title,
                price: parseInt(req.body.price),
                stock: parseInt(req.body.stock),
                image: req.file?.filename 
            }
            const response = await product.CreateProduct(data as any)

            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    async UpdateProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const data = {
                title: req.body.title,
                price: parseInt(req.body.price),
                stock: parseInt(req.body.stock),
                image: req.file?.filename 
            }

            const response = await product.UpdateProduct(id, data as any)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async DeleteProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await product.DeleteProduct(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}