import { Button } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

const myProjects = [
  {
    image: "/images/project-2.png",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "/images/project-bg.jpg",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "/images/project-3.png",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "/images/project-4.png",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
  {
    image: "/images/project-3.png",
    title: "name",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    liveLink: "",
    demoLink: "",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container pb-5">
        <div className="heading-section">
          <h1>My Projects</h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project) => {
              return (
                <Col md={4} className="mb-5">
                  <Tilt
                    className="parallax-effect-glare-scale"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                  >
                    <div className="inner-element">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <Button color="white" variant="outlined">
                          Source Code
                        </Button>
                        <Button color="white" variant="outlined">
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </Tilt>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
