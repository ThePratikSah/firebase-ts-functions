import { RequestHandler } from "express";
import { Product } from "../interfaces/product.interface";
import { addProduct, getProducts } from "../services/product.services";

export const getProduct: RequestHandler = async (_req, res, next) => {
  try {
    return res.status(200).json({ product: await getProducts() });
  } catch (error) {
    next(error);
  }
};

export const addNewProduct: RequestHandler = async (req, res, next) => {
  try {
    const body: Product = req.body;
    return res.status(201).json({
      msg: "Product added successfully",
      product: await addProduct(body),
    });
  } catch (error) {
    next(error);
  }
};
