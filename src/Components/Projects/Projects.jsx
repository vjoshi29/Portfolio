
import ProjectCard from "./ProjectCard";

import p1 from "../../assets/Projects.jpg";
import p2 from "../../assets/Portfolio.jpg";
import p3 from "../../assets/News.jpg";
import p4 from "../../assets/Notes.jpg";
import p5 from "../../assets/Pokedex.jpg";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen bg-gradient-to-r from-stone-900 via-stone-800 to-stone-700 py-10 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-100 mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            isrc={p1}
            title="Basic Projects"
            main="Includes projects like a Quiz App, Calculator, Random Quote Generator and Number Guessing Game built using HTML, CSS, and JavaScript."
            href="https://github.com/vjoshi29/Projects"
          />
          <ProjectCard
            isrc={p2}
            title="Portfolio"
            main="A responsive portfolio built with HTML, Tailwind CSS, JavaScript and ReactJS."
            href="https://github.com/vjoshi29/Portfolio"
          />
          <ProjectCard
            isrc={p3}
            title="News App"
            main="A dynamic NEWS site created with the MERN Stack to deliver global news updates."
            href="https://github.com/vjoshi29/NewsApp"
          />
          <ProjectCard
            isrc={p4}
            title="Notes App"
            main="A CRUD-based MERN app to store, update, delete, and manage your notes."
            href="https://github.com/vjoshi29/iNotebook"
          />
          <ProjectCard
            isrc={p5}
            title="Pokemon App"
            main="Explore and search Pokémons in this interactive app powered by the MERN Stack."
            href="https://github.com/vjoshi29/Pokedex"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

