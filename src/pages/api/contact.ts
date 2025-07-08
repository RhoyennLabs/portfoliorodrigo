import type { NextApiRequest, NextApiResponse } from "next";
import { PortfolioDB } from "@/lib/PortfolioDB";
import { z } from "zod";

const contactoSchema = z.object({
  nombre: z.string().min(1),
  correo: z.string().email(),
  mensaje: z.string().min(1),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método no permitido" });

  const parsed = contactoSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }
  //const db = await PortfolioDB.getInstance();
  //const ok = await db.guardarContacto(parsed.data);
//
  //if (ok) return res.status(201).json({ message: "Mensaje guardado correctamente 🙌" });
//
return res.status(201).json({ message: "Mensaje guardado correctamente 🙌" });
  //return res.status(500).json({ error: "No se pudo guardar el mensaje" });
}