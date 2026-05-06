import { prisma } from "../config/database";

export const crearProductoService = async (data: any) => {
  const { nombre, marca, modelo, tiendaId, variantes } = data;

  return await prisma.producto.create({
    data: {
      nombre,
      marca,
      modelo,
      tiendaId,
      variantes: {
        create: variantes.map((v: any) => ({
          tamano: v.tamano,
          precio: v.precio,
          costo: v.costo,
          stock: v.stock,
          codigoBarras: v.codigoBarras,
        })),
      },
    },
    include: {
      variantes: true,
    },
  });
};