import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productoRoutes from "./routes/producto.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});

app.use("/api/productos", productoRoutes);