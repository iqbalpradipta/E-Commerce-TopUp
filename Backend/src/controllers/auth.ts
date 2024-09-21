import { Request, Response } from "express";
import bcrypt from "bcrypt";
import auth from "../services/auth";

export default new (class AuthController {
  async Register(req: Request, res: Response) {
    try {
      const data = req.body;
      data.password = bcrypt.hashSync(req.body.password, 10);
      data.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
      
      const response = await auth.Register(data);

      if (response.status == "Failed") {
        res.status(400).json(response);
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async Login(req: Request, res: Response) {
    try {
      const data = req.body;
      const response = await auth.Login(data);

      if (response.status == "Success") {
        res.status(200).json(response);
      } else {
        res.status(401).json(response)
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
