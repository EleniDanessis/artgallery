import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {Link} from 'react-router-dom'


function Hundred() {

  const [hundred, setHundred] = useState([])

  useEffect(() => {
    getHundred()
  },[])

  const getHundred = async() => {
      const check = localStorage.getItem('hundred')
      if(check){
        setHundred(JSON.parse(check))
        }else{
        const api = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`);
        const hundred = await api.json()
        localStorage.setItem('hundred', JSON.stringify(hundred))
        setHundred(hundred)
        console.log(hundred)
      }
  }  
    
    return (
      <Wrapper>
          <h3>Top Hundred Images</h3>
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
              {hundred.map((image) => {
                  return(
                      <SplideSlide key={image.id}>
                          <Card>
                              <Link to={"/specifics/" + image.id}>
                                  <img src={image.download_url} style={{height: "100%", width: "100%",}} alt="" />
                                  <p>{image.author}</p>
                              </Link>
                          </Card>
                      </SplideSlide>
                  )
              })}
          </Splide>
          
      </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
    font-size: 2.4rem;
    width: 100%;
    h3{
        margin-left: 2.5rem;
        margin-bottom: 4rem;
    }
`;

const Card = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    download_url{
        border-radius: 2rem;
        position: absolute;
        left: 0;
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

  
export default Hundred