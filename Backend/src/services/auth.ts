import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export default new (class AuthServices {
  async Register(data: Prisma.UserCreateInput) {
    try {
      const findEmail = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });
      if (!findEmail) {
        const users = await prisma.user.create({
          data: {
            name: data.name,
            email: data.email,
            password: data.password,
            address: data.address,
            image: data.image,
          },
        });

        return {
          status: "Success",
          messages: "success create data users",
          data: users,
        };
      } else {
        return {
          status: "Failed",
          messages: "Email already used !",
        };
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Login(data: Prisma.UserCreateInput) {
    try {
      const findEmail = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

      const obj = {
        name: findEmail?.name,
        email: findEmail?.email,
        address: findEmail?.address,
        image: findEmail?.image
      }


      if (findEmail) {
        const match = bcrypt.compareSync(data.password, findEmail.password);
        if (match) {
            const token = jwt.sign({
                data: obj
              }, `${process.env.SECRET_KEY}`, { expiresIn: '1h' });
              
          return {
            status: "Success",
            messages: "Login Success",
            data: token,
          };
        } else {
          return {
            status: "Failed",
            messages: "Password is Wrong!",
          };
        }
      } else {
        return {
          status: "Failed",
          messages: "Email is Wrong!",
        };
      }
    } catch (error) {
      throw error;
    }
  }
})();
