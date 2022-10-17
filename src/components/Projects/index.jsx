import Project from "./Project";
import { projects } from "../../utils/data";
import "./style.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="title">Projetos</h2>
        {projects.map((project) => {
          return (
            <div>
              <Project
                key={project.id}
                name={project.name}
                images={project.images}
                description={project.description}
                technicals={project.technicals}
                components={project.components}
                link={project.link}
                className="project"
              /> 
            </div>
          );
        })}
    </section>
  );
}
