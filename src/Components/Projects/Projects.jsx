
import ProjectCard from "./ProjectCard";


import p1 from "../../assets/Projects.jpg";
import p2 from "../../assets/Portfolio.png";
import p3 from "../../assets/News.jpg";
import p4 from "../../assets/Notes.jpg";
import p5 from "../../assets/Pokemon.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-5 md:p-15   text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold md:px-10 md:mx-10 px-5 ">Projects</h1>
      <div className="py-5 flex flex-wrap gap-5 justify-center">
        <ProjectCard        
          isrc={p1}
          title="Basic Projects"
          main="This includes some basic projects like a Quiz App , A Calculator , A Random Quote Generator and A Number Guessing Game made using HTML , CSS and Javascript."
          href="https://github.com/vjoshi29/Projects"
        />
        <ProjectCard
          isrc={p2}
          title="Portfolio"
          main="A portfolio created using HTML , Tailwind CSS , Javascript and ReactJS."
          href="https://github.com/vjoshi29/Portfolio"
        />
      
        <ProjectCard
         isrc={p3}
          title="News App"
          main="A daily News Website created using MERN Stack where you can read the latest news wordwide."
          href="https://github.com/vjoshi29/NewsApp"
        />
        <ProjectCard
         isrc={p4}
          title="Notes App"
          main="A Notes App created using MERN Stack where you can store / retrieve / edit / delete your everyday notes."
          href="https://github.com/vjoshi29/iNotebook"
        />
        <ProjectCard
          isrc={p5}
          title="Pokemon App"
          main="This is a website created using MERN Stack where you can scroll and search and get familiar with all the pokemons."
          href="https://github.com/vjoshi29/Pokedex"
        />
      </div>
    </div>
  );
};

export default Projects;
