import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlinePicture } from "react-icons/ai";
import { RiArrowGoBackLine } from "react-icons/ri";
import {Link} from "react-router-dom"


function GalleryNavBar() {
  return (
    <div>
      <Navbar bg="dark bg-gradient" variant="dark">
        <Container>
          <Link class="text-light text-decoration-none" to={"/home"} >
          <Navbar.Brand>
          {" "}
            <AiOutlinePicture /> Art Gallery{" "}
          </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
              <Nav.Link >
              <Link class="text-light text-decoration-none" to={"/"}>
                Main page <RiArrowGoBackLine />
                </Link>
              </Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>  
  )
}

export default GalleryNavBar