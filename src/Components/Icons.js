import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Icons() {
  return (
    <Container>
      <div className="singleCol social-media-icons-black a py-5">
        <a href="https://github.com/KentMa-6534">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href="https://www.linkedin.com/in/kent-ma6534/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </Container>
  );
}

export default Icons;
