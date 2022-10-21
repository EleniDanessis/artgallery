import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import art from "../images/art.svg"
import {
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandBootstrap,
} from "react-icons/tb";
import { DiGit } from "react-icons/di";
import {FaReact} from 'react-icons/fa'
import { AiOutlinePicture } from "react-icons/ai";
import { SiStyledcomponents,} from "react-icons/si";
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

function ReactLandingPage() {
  return (
    // Nav Bar
    <div className="bg-info text-dark bg-opacity-50 ">
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Eleni Danessis</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://https://elenidanessis.github.io/EleniDanessis3.2/index.html#">
              Home
            </Nav.Link>
            <Nav.Link href="https://https://elenidanessis.github.io/EleniDanessis3.2/index.html#about">
              About
            </Nav.Link>
            <Nav.Link href="https://https://elenidanessis.github.io/EleniDanessis3.2/index.html#project">
              Projects
            </Nav.Link>
            <Nav.Link href="https://https://elenidanessis.github.io/EleniDanessis3.2/index.html#collaborate">
              Collaborate
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      {/* Header */}
      <Container className="bg-#75dff5 text-dark bg-opacity-25  text-center text-sm-star mt-sm-5 border-bottom border-dark ">
        <div className="container pt-4 mb-4">
          <div className="d-flex align-items-center justify-content-around">
            <div className="lead text-start ms-5">
              <h1>
                Hi, welcome to my <br /> React project page.
              </h1>
              <p>
                This project was created using APIs from Lorem Picsum, 
                JavaScript, React, and Bootstrap. The idea of the app 
                itself could be applied to creating an app for an art 
                gallery as the user iterface for sales, for example.
              <br /> <br />
                To use this app, simply search with an id number for an 
                image using the search bar. Alternatively, you can see the top 30
                or top 100 images. For more information on the images in the last 
                two categories, click on them!
              </p>
              <Button variant="info" href="./home">
                <Card style={{ width: "18rem" }}>
                  <Card.Body className="bg-info text-light">
                    <Card.Title>
                      <AiOutlinePicture class="h1" />
                      <h3 class="button-title mb-3">
                         Gallery
                      </h3>
                    </Card.Title>
                    <Card.Text>
                      <p class="button-text lead">
                        Click here to see my React Gallery project
                      </p>   
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Button>
              
            </div>
            <img
              className="img-fluid w-50  d-none d-md-block"
              src={art}
              alt="React logo"
            />
          </div>
        </div>
      </Container>

      {/* Skills container */}
      <Container className="bg-#75dff5 text-dark  d-flex flex-column justify-content-center p-3 my-5 border-bottom border-dark">
        <div className="text-center">
          <h1>Languages</h1>
        </div>
        <Row className="d-flex p-3 ">

        <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandHtml5 color="#e34c26 " size="80px" />
              <h4>HTML</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandCss3 color="#264de4" size="80px" />
              <h4>CSS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center ">
            <h4>
              <TbBrandJavascript color="#F0DB4F" size="80px" />{" "}
              <h4>Javascript</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <FaReact color="#264de4" size="80px" />
              <h4>React JS</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <SiStyledcomponents color="" size="80px" />
              <h4>Styled</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <TbBrandBootstrap color="#563d7c" size="80px" />
              <h4>Bootstrap</h4>
            </h4>
          </Col>

          <Col className="d-flex justify-content-center text-center">
            <h4>
              <DiGit color="#F1502F" size="80px" />
              <h4>Git</h4>
            </h4>
          </Col>

        </Row>
      </Container>


      {/* Main page Footer */}
      

      
      <div className="footer">
        <div className="p-5 bg-secondary text-light text-center position-relative">
            <p class="lead">
                Copyright &copy; Eleni Danessis 2022. All rights reserved.<br></br>
                <br></br>
                Special thanks to Undraw, developedbyed, and everyone at Lorem Picsum.
                <br /><br />
                This project was solely created for educational purposes.
            </p>
            <a href="#" class="position-absolut bottom-0 end-0 p-5">
                <BsFillArrowUpCircleFill className="text-light h1"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ReactLandingPage;
