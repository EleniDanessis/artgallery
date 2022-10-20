import React from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import Container from 'react-bootstrap/esm/Container'

function GalleryFooter() {
  return (
        
    
    <div className="p-5 bg-dark bg-gradient text-light text-center position-relative min-height: 100%">
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
  )
}

export default GalleryFooter