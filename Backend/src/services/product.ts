import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default new class ProductServices {
    async GetProduct() {
        try {

            const product = await prisma.product.findMany()

            return {
                status: "Success",
                messages: 'Success get All Product',
                data: product
            }
        } catch (error) {
            throw error
        }
    }

    async GetProductById(id: number) {
        try {

            const product = await prisma.product.findUnique({
                where: {
                    id: id
                }
            })

            return {
                status: "Success",
                messages: 'Success get All Product',
                data: product
            }
        } catch (error) {
            throw error
        }
    }
    
    async CreateProduct(data: Prisma.ProductCreateInput) {
        try {
            const product = await prisma.product.create({
                data: data
            })

            return {
                status: "Success",
                messages: 'Success Create Product',
                data: product
            }

        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async UpdateProduct(id: number, data: Prisma.ProductCreateInput) {
        try {
            const product = await prisma.product.update({
                where: {
                    id: id
                },
                data: {
                    title: data.title,
                    price: data.price,
                    stock: data.stock,
                    image: data.image
                }
            })
            return {
                status: "Success",
                message: 'Succes update Product',
                data: product
            }
        } catch (error) {
            throw error
        }
    }

    async DeleteProduct(id: number) {
        try {
            const product = await prisma.product.delete({
                where: {
                    id: id
                }
            })
            return {
                status: "Success",
                message: `Succes Delete Product ${product.title}`,
                data: product
            }
        } catch (error) {
            throw error
        }
    }
}