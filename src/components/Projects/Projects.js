import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Prescription from "../../Assets/Projects/Prescription.png";
import aswar from "../../Assets/Projects/aswar.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aswar}
              isBlog={false}
              title="ASWAR Platform"
              description=" multi-tenant Identity and Access Management (IAM) platform built on Keycloak, developed with Node.js, Sequelize, RabbitMQ, and React, offering extensible and automated identity services for modern applications."
              ghLink="https://github.com/Cloud-Commit/Cloud-identity-UI.git"
              ghLink2="https://github.com/Cloud-Commit/cloud-identity-backend.git"
              demoLink="dev-app.aswar.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Prescription}
              isBlog={false}
              title="Prescription-Backend"
              description="web healthcare application with using Express.js and Node.js to design and implement APIs, integrating the FHIR HL7 standard to ensure interoperability and standardized data exchange in healthcare systems"
              ghLink="https://github.com/kouki-23/Prescription-Backend.git"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
