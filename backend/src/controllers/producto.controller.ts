import { Request, Response } from "express";
import { crearProductoService } from "../services/producto.service";

export const crearProducto = async (req: Request, res: Response) => {
  try {
    const producto = await crearProductoService(req.body);
    res.json(producto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear producto" });
  }
};