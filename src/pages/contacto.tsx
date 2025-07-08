
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "exito" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");

    const payload = { nombre, correo, mensaje };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setEstado("exito");
        setNombre("");
        setCorreo("");
        setMensaje("");
      } else {
        setEstado("error");
      }
    } catch (error) {
      console.error(error);
      setEstado("error");
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contacto</h1>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <Input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Tu mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          <Button className="bg-cyan-600 hover:bg-cyan-500" type="submit">
            {estado === "enviando" ? "Enviando..." : "Enviar"}
          </Button>

          {estado === "exito" && (
            <p className="text-green-400">Mensaje enviado correctamente 🙌</p>
          )}
          {estado === "error" && (
            <p className="text-red-500">Ocurrió un error. Intenta de nuevo 😓</p>
          )}
        </form>
      </main>
    </>
  );
}