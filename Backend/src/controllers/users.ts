import { Request, Response } from "express";
import users from "../services/users";

export default new class UsersController {
    async GetUsers(req: Request, res: Response) {
        try {
            const response = await users.GetUser()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async GetUsersById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await users.GetUserById(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async UpdateUser(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const data = req.body
            const response = await users.UpdateUser(id, data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async DeleteUser(req: Request, res: Response) {
        try {
            const email = res.locals.loginSession.data.email
            const response = await users.DeleteUser(email)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}