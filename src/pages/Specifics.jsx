import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import GalleryNavBar from './GalleryNavBar'
import GalleryFooter from './GalleryFooter'

function Specifics() {

    const [details, setDetails] = useState({})
    let params = useParams()
    
const fetchDetails = async (name) => {
    const data = await fetch(`https://picsum.photos/id/${name}/info`)
    const detailData = await data.json()
    setDetails(detailData)
    console.log(detailData)
}

useEffect(() => {
    fetchDetails(params.id)
    console.log(params.id)
},[params.id])

  return (
    <DetailWrapper >
        <GalleryNavBar />
        <Card key={details.id}>
                <img src={details.download_url} style={{height: "100%", width: "100%"}} alt="image" />
                <h2>Author: {details.author}</h2>
                <h4>id: {details.id}</h4>
                <h4>height: {details.height}</h4>
                <h4>width: {details.width}</h4>  
            </Card> 
        <GalleryFooter /> 
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`

`
const Card = styled.div`
        padding: 4rem;
        img {
          cover
        }
        h2, h4 {
          text-align: center;
          padding: 1rem;
        }
    `

export default Specifics