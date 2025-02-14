import React, { useState,useEffect } from "react";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const treadingMovie = useSelector(state=>state.movieData.bannerData)
  // const [nowPlayingData, setNowPlayingData]= useState([])
  const {data : nowPlayingData } = useFetch("/movie/now_playing")
  const {data : topRatedData } = useFetch("/movie/top_rated")
  const {data : popularTvShow } = useFetch("/tv/popular")
  const {data : onTheAirShowData} = useFetch("/tv/on_the_air")



  
  // const fetchNowPlayingData=async()=>{
  //   const response = await axios.get("/movie/now_playing")
  //   setNowPlayingData(response.data.results)
  // }



  // useEffect(()=>{
  //   fetchNowPlayingData()
  // },[])


  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={treadingMovie} heading={"Trending"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"Nowing Playing"}/>
      <HorizontalScrollCard data={topRatedData } heading={"Top Rated Movies"}/>
      <HorizontalScrollCard data={popularTvShow } heading={"Popular Tv show"}/>
      <HorizontalScrollCard data={onTheAirShowData } heading={"On the air show"}/>

      
    </div>
  );
};

export default Home;
