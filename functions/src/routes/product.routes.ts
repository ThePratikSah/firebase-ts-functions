import * as express from "express";
import { addNewProduct, getProduct } from "../controllers/products.controller";

const router = express.Router();

router.get("/", getProduct);
router.post("/", addNewProduct);

export default router;
