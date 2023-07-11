import React from 'react'
import  "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Tranding from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'



// HeroBanner
// Popular
// TopRated
const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Tranding/>
      <Popular/>
      <TopRated/>
      {/* <div style={{height:1000}}></div> */}
    </div>
  )
}

export default Home