import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export default new (class JWTAuth {
  Authentication(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = req.headers.authorization;

      if (!auth) {
        return res.status(401).json({ messages: "You don't have token" });
      }

      const token = auth.split(" ")[1]

      const jwtLogin = jwt.verify(token, `${process.env.SECRET_KEY}`)

      res.locals.loginSession = jwtLogin
      next()
    } catch (error) {
      throw error;
    }
  }
})();
