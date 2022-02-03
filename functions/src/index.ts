import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import productRouter from "./routes/product.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Thanks for your visit, you can go to /products for products list",
  });
});

app.use((err: Error, _req: express.Request, res: express.Response) => {
  if (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
});

exports.app = functions.https.onRequest(app);
