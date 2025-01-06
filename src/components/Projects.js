import React from "react";
import styled from "styled-components";
import projects from "../data/projects";
import ProjectItems from "./ProjectItems";

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ul {
    position: relative;
    flex-shrink: 0;
    max-width: 800px;
    list-style: none;
    width: 100%;
  }
`;

const Projects = () => {
  return (
    <>
      <StyledProjectsContainer>
        <ul>
          {projects.map((project) => (
            <ProjectItems
              key={project.id}
              name={project.name}
              src={project.image}
            ></ProjectItems>
          ))}
        </ul>
      </StyledProjectsContainer>
    </>
  );
};

export default Projects;
