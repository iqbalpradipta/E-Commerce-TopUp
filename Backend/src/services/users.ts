import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default new (class UsersService {
  async GetUser() {
    try {
      const users = await prisma.user.findMany();

      return {
        status: "Success",
        messages: "Success get All data",
        data: users,
      };
    } catch (error) {
      throw error;
    }
  }

  async GetUserById(id: number) {
    try {
      const users = await prisma.user.findUnique({
          where: {
            id: id,
          }
      });

      return {
        status: "Success",
        messages: `Success get users id = ${id} `,
        data: users,
      };
    } catch (error) {
      throw error;
    }
  }

  async UpdateUser(id: number, data: Prisma.UserCreateInput) {
    try {
        const user = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            name: data.name,
            address: data.address,
            image: data.image,
          }
        })

      return {
        status: "Success",
        messages: "Success Update Users",
        data: user
      }
    } catch (error) {
      throw error
    }
  }

  async DeleteUser(email: string) {
    try {
      const user = await prisma.user.delete({
        where: {
          email: email
        }
      })


      return {
        status: "Success",
        messages: `Success delete users with email = ${email} `
      }

    } catch (error) {
      throw error
    }
  }

})();
