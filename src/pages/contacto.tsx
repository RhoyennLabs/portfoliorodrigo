import Header from "@/components/Header";
import { useState } from "react";
import { motion } from "framer-motion";

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

        {/* Motion div con info de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-6 rounded-2xl shadow-xl max-w-lg mb-8"
        >
          <p className="text-lg mb-2">
            <span className="font-semibold text-cyan-300">Correo:</span>{" "}
            rodrigomreidenbach@gmail.com
          </p>
          <p className="text-lg">
            <span className="font-semibold text-cyan-300">Celular:</span>{" "}
            +56 9 5158 5787
          </p>
        </motion.div>

        {/* Aquí puedes poner el formulario de contacto si quieres agregarlo después */}
      </main>
    </>
  );
}