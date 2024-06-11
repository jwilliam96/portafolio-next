import { AboutMe, Contact, DarkButton, Footer, Header, Project, Skills } from "@/components";
import Sidebar from "@/components/sidebar/Sidebar";

export default function HomePage() {
  return (
    <main className="
    bg-Light-Fondo transition-colors duration-1000 overflow-hidden bg-fondo 
    dark:bg-Dark-fondo min-h-screen dark:text-Dark-text ">
      <div className="progress" ></div>
      <DarkButton />

      <Sidebar />

      {/* HEADER */}
      <Header />

      <div className="w-10/12  max-w-[1025px] mx-auto relative">

        {/* ABOUT ME */}
        <AboutMe />

        {/* PROJECTS */}
        <Project />

        {/* SKILL */}
        <Skills />

        {/* CONTACT */}
        <Contact />
      </div>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}
