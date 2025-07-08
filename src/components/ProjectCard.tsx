import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  repoUrl?: string;
  demo?: string;
}

export default function ProjectCard({ title, description, repoUrl, demo }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-zinc-900 via-black to-zinc-800 rounded-xl shadow-xl border border-zinc-700 p-6 text-white"
    >
      <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{title}</h3>
      <p className="text-zinc-300 mb-4">{description}</p>
{demo &&(
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-sm text-emerald-300 hover:underline mb-2"
      >
        Ver demo
      </a>
)
}
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:underline"
        >
          <Github size={16} /> Ver en GitHub
        </a>
      )}
    </motion.div>
  );
}