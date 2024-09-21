import express from "express";
import Users from "../controllers/users";
import auth from "../controllers/auth";
import product from "../controllers/product";
import jwtAuth from "../middlewares/jwtAuth";
import Upload from "../middlewares/uploadFile";
import category from "../controllers/category";

const Routes = express.Router();

//Auth
Routes.post("/users/register", auth.Register);
Routes.post("/users/login", auth.Login);

//Users
Routes.get("/users", jwtAuth.Authentication, Users.GetUsers);
Routes.get("/users/:id", jwtAuth.Authentication, Users.GetUsersById);
Routes.put("/users/:id", jwtAuth.Authentication, Users.UpdateUser);
Routes.delete("/users/:email", jwtAuth.Authentication, Users.DeleteUser)

//Product
Routes.get("/product", jwtAuth.Authentication, product.GetProduct)
Routes.get("/product/:id", jwtAuth.Authentication, product.GetProductById)
Routes.post("/product",jwtAuth.Authentication, Upload.single('image'), product.CreateProduct)
Routes.put("/product/:id", jwtAuth.Authentication, product.UpdateProduct)
Routes.delete("/product/:id", jwtAuth.Authentication, product.DeleteProduct)

// Category
Routes.get("/category", jwtAuth.Authentication, category.GetCategory)
Routes.get("/category", jwtAuth.Authentication, category.GetCategoryById)
Routes.post("/category", jwtAuth.Authentication, category.CreateCategory)
Routes.put("/category", jwtAuth.Authentication, category.UpdateCategory)
Routes.delete("/category", jwtAuth.Authentication, category.DeleteCategory)


export default Routes
