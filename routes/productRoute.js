import express from "express";
import { addProduct, listProduct, removeProduct, singleProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/list", listProduct);
productRouter.post("/single", singleProduct);

export default productRouter;
