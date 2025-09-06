import { Router } from "express";
import ProductValidation from "../middlewares/productValidation.mjs";

const productRouter = Router();

  productRouter.get("/", ProductController.getAllProducts);

  productRouter.get("/:id", ProductController.getProductById);

  productRouter.post("/", ProductValidation.validateProductInput, ProductController.createProduct);

  productRouter.delete("/:id", ProductValidation.validateProductInput, ProductController.deleteProduct);

  export default productRouter