import Header from "@/components/Header";
import HeroCard from "@/components/HeroCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center">
        <HeroCard />

        <section className="mt-24 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Gestor Contable"
              description="App confidencial, para PyC consultores. con java JSP y un fuerte backend de SQL Server e implementa paquetes SSIS que generan reportes."        
            />
            <ProjectCard
              title="Clon de Instagram"
              description="¡hice un clon de Instagram con Angular! visita la DEMO gratuita en el link de abajo:"
              demo="https://angular-instagram-clone.vercel.app/home"
              repoUrl="https://github.com/RhoyennLabs/angular-instagram-clone"
            />
            <ProjectCard
              title="Sistema de administración de presupuesto con to-do list para 2 personas"
              description="Se compone con React y un API de node con Express. entra a la demo con el usuario 'test' y la contraseña 'test':"
              demo="https://budgetfront.vercel.app/"
              repoUrl="https://github.com/RhoyennLabs/budgetfront"
            />

<ProjectCard
              title="Esta web"
              description="React + Nextjs, con un formulario simple para el contacto conmigo."
            />
          </div>
        </section>
      </main>
    </>
  );
}