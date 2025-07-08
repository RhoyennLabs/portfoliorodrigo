import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b border-zinc-800 bg-black">
      <nav className="flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-cyan-400">Rodrigo</h1>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="text-white hover:text-cyan-300">Inicio</Link>
          <Link href="/quiensoy" className="text-white hover:text-cyan-300">¿Quién soy?</Link>
          <Link href="/contacto" className="text-white hover:text-cyan-300">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}

