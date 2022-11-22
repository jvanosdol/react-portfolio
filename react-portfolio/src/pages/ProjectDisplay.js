import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/project-display.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (

    <div>
        <div className="project">
            <h1> {project.name}</h1>

            <a href={project.link}><img src={project.image}/></a>

            <h2>Click on the project to be redirected to the live site!</h2>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
        </div>
    </div>


    
  );
}

export default ProjectDisplay;