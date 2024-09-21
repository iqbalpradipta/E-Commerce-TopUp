import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default new (class CategoryServices {
  async GetCategory() {
    try {
      const category = await prisma.category.findMany();

      return {
        status: "Success",
        messages: "Success Get All Category",
        data: category,
      };
    } catch (error) {
      throw error;
    }
  }

  async GetCategoryById(id: number) {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: id,
        },
      });

      return {
        status: "Success",
        messages: `Success Get Category with id = ${id}`,
        data: category,
      };
    } catch (error) {
      throw error;
    }
  }

  async CreateCategory(data: Prisma.CategoryCreateInput) {
    try {
      const category = await prisma.category.create({
        data: data,
      });

      return {
        status: "Success",
        messages: "Success Create Category",
        data: category,
      };
    } catch (error) {
      throw error;
    }
  }

  async UpdateCategory(id: number, data: Prisma.CategoryCreateInput) {
    try {
      const category = await prisma.category.update({
        where: {
          id: id,
        },
        data: data,
      });

      return {
        status: "Success",
        messages: "Success Update Category",
        data: category,
      };
    } catch (error) {
      throw error;
    }
  }

  async DeleteCategory(id: number) {
    try {
        const category = await prisma.category.delete({
            where: {
                id: id
            }
        })

      return {
        status: "Success",
        messages: `Success Delete Category ${category.name}`,
      };
    } catch (error) {
      throw error;
    }
  }
})();
