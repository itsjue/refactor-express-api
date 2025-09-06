import express from "express";
import cors from "cors";
import { client, db } from "./utils/db.js";
import { ObjectId } from "mongodb";
import productRouter from "./routes/productRoutes.mjs";

const init = async () => {
  await client.connect();
  const app = express();
  const port = 4001;

  // `cors` เป็น Middleware ที่ทำให้ Client ใดๆ ตามที่กำหนด
  // สามารถสร้าง Request มาหา Server เราได้
  // ในโค้ดบรรทัดล่างนี้คือให้ Client ไหนก็ได้สามารถสร้าง Request มาหา Server ได้
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  productRouter.use("/products", productRouter);

  

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
};
init();
