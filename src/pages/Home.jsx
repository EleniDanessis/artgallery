import React from 'react'
import Search from "../components/Search"
import Category from "../components/Category"
import Hundred from "../components/Hundred";
import GalleryNavBar from './GalleryNavBar';
import GalleryFooter from './GalleryFooter';

function Home() {
  return (
    <div>
        <GalleryNavBar />
        <Search />
        <Category />
        <Hundred />
        <GalleryFooter />
    </div>
  )
}

export default Home