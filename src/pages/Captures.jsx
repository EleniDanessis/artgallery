import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {Link, useParams} from 'react-router-dom'
import GalleryNavBar from './GalleryNavBar'
import GalleryFooter from './GalleryFooter'

function Captures() {

    const [captures, setCaptures] = useState([])
    let params = useParams()

    const getCaptures = async () => {
        const api = await fetch(`https://picsum.photos/v2/list`)
        const data = await api.json()
        setCaptures(data)
        console.log(data)
    }

    useEffect(() => { 
        getCaptures(params.category)
        console.log(params.category)
    },[params.category])

  return (
    <>
    <Wrapper>
        <GalleryNavBar />
        <h3>Top Thirty Images</h3>
        <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false, 
            drag: 'free',
            gap: '2.5rem',
            heightRatio: 33,
            padding: '2.5rem',
            height: '15rem'  
          }}>
              {captures.map((image) => {
                  return(
                      <SplideSlide key={image.id}>
                          <Card>
                              <Link to={"/specifics/" + image.id}>
                                  <img src={image.download_url} style={{height: "100%", width: "100%"}} alt="" />
                                  <p>{image.author}</p>
                              </Link>
                          </Card>
                      </SplideSlide>
                  )
              })}
        </Splide>
    </Wrapper>

<GalleryFooter />
</>
  )
}

const Wrapper = styled.div`
    h3{
        margin: 4rem 2.5rem;
    }
`;

const Card = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    download.url{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%,0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


export default Captures