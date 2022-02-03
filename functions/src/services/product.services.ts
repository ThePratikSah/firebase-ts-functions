import { db } from "../firebase";
import { Product } from "../interfaces/product.interface";

const getProducts = async () => {
  try {
    const product: Product[] = [];
    const querySnapshot = await db.collection("products").get();
    querySnapshot.forEach((doc: any) => product.push(doc.data()));
    return product;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};

const addProduct = async (product: Product) => {
  try {
    const newProduct = await db.collection("products").doc();
    newProduct.set(product);
    return product;
  } catch (error) {
    throw new Error("Failed to add new product");
  }
};

export { getProducts, addProduct };
