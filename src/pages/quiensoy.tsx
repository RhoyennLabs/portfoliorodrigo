
import Header from "@/components/header";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QuienSoy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
        <motion.h1
          className="text-4xl font-bold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Quién soy?
        </motion.h1>

        {/* Imagen redonda animada */}
        <motion.div
          className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/yo.jpeg"
            alt="Rodrigo"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Texto descriptivo animado */}
        <motion.div
          className="max-w-2xl text-center text-zinc-300 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Soy Rodrigo, desarrollador fullstack con experiencia real en proyectos de impacto. Trabajé
            creando un sistema de conversión contable para la empresa <strong className="text-white">PyC Consultores</strong>.
          </p>

          <p>
            Me apasiona el diseño de sistemas complejos, estables y escalables. Administro clusters con <strong className="text-cyan-400">Kubernetes</strong> y creo APIs y microservicios que soportan carga real.
          </p>

          <p>
            Amo construir software que resuelva problemas grandes, y lo hago con excelencia técnica y con
            <strong className="text-white"> propósito: lo hago con Dios.</strong> Él me guía y me sostiene en cada línea de código.
          </p>
        </motion.div>
      </main>
    </>
  );
}