import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux"

import "./style.scss"
import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const HeroBanner = () => {
  const [background, setBackground]= useState("");
  const [query, setQuery]= useState("");
  const navigate = useNavigate();
  const {url} =useSelector((state)=> state.home)

  const {data,loading}=useFetch("/movie/upcoming")
  useEffect(()=>{
    const bg=url.backdrop + 
    data?.results[Math.floor(Math.random()*20)]?.backdrop_path
    setBackground(bg);
  },[data])
  // const searchQueryHandeler = (event)=>{
  //   if(event.key==="Enter" && query.length>0){
  //     navigate(`/search/${query}`)
  //   }
  // }
  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchQueryHandler();
    }
  };

  const handleButtonClick = () => {
    searchQueryHandler();
  };
  return (
    <div className="herobanner">
{!loading && <div className="backdrop-img">
  <img src={background}/>
</div>}

<div className="Opacity"></div>
<ContentWrapper>
<div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">
             <img className='logoImg' src='../../../../public/logoImg.png' />
          </span>
          <span className="subTitle">
              Millons of movies, Tv shows and people to discover. Explore Now...
            </span>
            <div className="searchInput">
              <input type="text" placeholder='Search for a movie or tv show...' id="" 
              onChange={(e)=>setQuery(e.target.value)}
              onKeyUp={handleKeyPress}
              
              />
              <button onClick={handleButtonClick}>Search</button>
            </div>
        </div>
      </div>
</ContentWrapper>
      
    </div>
  )
}

export default HeroBanner