import { Router } from "express";
import { crearProducto } from "../controllers/producto.controller";

const router = Router();

router.post("/", crearProducto);

export default router;