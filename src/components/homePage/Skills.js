import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";

const skills = [
  {
    logo: "/images/skills/html.png",
    name: "Html",
  },
  {
    logo: "/images/skills/css-3.png",
    name: "Css",
  },
  {
    logo: "/images/skills/js.png",
    name: "Javascript",
  },
  {
    logo: "/images/skills/java.png",
    name: "Java",
  },
  {
    logo: "/images/skills/c-sharp.png",
    name: "C#",
  },
  {
    logo: "/images/skills/git-logo.png",
    name: "Git",
  },
  {
    logo: "/images/skills/bootstrap.png",
    name: "Bootstrap",
  },
  {
    logo: "/images/skills/spring.png",
    name: "Spring",
  },
  {
    logo: "/images/skills/react.png",
    name: "React",
  },
  {
    logo: "/images/skills/redux.png",
    name: "Redux",
  },
  {
    logo: "/images/skills/sass.png",
    name: "Sass",
  },
  // {
  //   logo: "/images/skills/postman.png",
  //   name: "Postman",
  // },
];

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Ski</span>lls
          </h1>
        </div>
        <Row>
          {skills.map((skill) => {
            return (
              <Col>
                <div className="skills">
                  <img src={skill.logo} alt="" />
                  <h6>{skill.name}</h6>
                </div>
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default Skills;
