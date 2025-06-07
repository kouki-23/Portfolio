import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khouloud Zidi </span>
            from <span className="purple"> Gafsa, Tunisia.</span>
            <br />
            I am currently seeking as a full-stack developer.
            <br />
            I have gained experience in full-stack development, cloud
            technologies, and automation, and I am passionate about solving complex challenges and learning new things.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching TV-shows
            </li>
            <li className="about-activity">
              <ImPointRight /> cooking and baking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Khouloud</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
