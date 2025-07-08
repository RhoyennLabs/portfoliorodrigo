import { motion } from "framer-motion";
import { Code, User, Mail } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-2xl shadow-xl p-8 border border-zinc-700 max-w-xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
        <Code size={32} /> Desarrollador Fullstack
      </h2>
      <p className="text-zinc-300 mb-6">
        Construyo aplicaciones modernas con tecnologías como Angular, Node.js, Next.js y más.
        Apasionado por la estética y la funcionalidad.
      </p>
      <div className="flex gap-4">
        <a
          href="/quiensoy"
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 shadow-lg transition"
        >
          <User size={18} /> Sobre mí
        </a>
        <a
          href="/contacto"
          className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600 shadow-lg transition"
        >
          <Mail size={18} /> Contacto
        </a>
      </div>
    </motion.div>
  );
}