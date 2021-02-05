import React from "react";
import "../styles/_footer.scss";
import { Col, Row } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = () => {
  return (
    <div className="footer pb-5 pt-5 ">
      <div className="container">
        <Row className="justify-content-between align-items-center">
          <Col md={3} xs={12}>
            <div className="d-flex justify-content-between footer-info mt-4">
              <LinkedInIcon />
              <GitHubIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </Col>
          <Col md={5} xs={12}>
            <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 ">
              <li className="p-1">
                <a href="#home">Home</a>
              </li>
              <li className="p-1">
                <a href="#about">About</a>
              </li>
              <li className="p-1">
                <a href="#skills">Skills</a>
              </li>
              <li className="p-1">
                <a href="#projects">Projects</a>
              </li>
              <li className="p-1">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4  footer-end">
          <p>
            Made with{" "}
            <span className="footer-love-icon">
              <FavoriteIcon />
            </span>{" "}
            by <span className="chonburi-font green-text"> Debjyoti Roy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
