import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import GalleryNavBar from './GalleryNavBar'
import GalleryFooter from './GalleryFooter'

function Searched() {

    const[searchedImages, setSearchedImages] = useState([])
    let params = useParams()

    const getSearched = async (name) => { 
        const api = await fetch(`https://picsum.photos/id/${name}/info`)
        const data = await api.json()
        setSearchedImages(data)
        console.log(data)
    }

    useEffect(() => {
        getSearched(params.search)
        console.log(params.search)
    },[params.search])

  return (
    <DetailWrapper>
        <GalleryNavBar />
        <Card key={searchedImages.id}>
            <img src={searchedImages.download_url} style={{height: "100%", width: "100%"}} alt="image"></img>
            <h4>{searchedImages.author}</h4>
            <h4>id: {searchedImages.id}</h4>
            <h4>height: {searchedImages.height}</h4>
            <h4>width: {searchedImages.width}</h4> 
        </Card>
        <GalleryFooter />
    </DetailWrapper>  
  )
}

const DetailWrapper = styled.div`
      
    `;
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

export default Searched