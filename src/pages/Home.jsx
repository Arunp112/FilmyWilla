import React from "react";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";

const Home = () => {
  const treadingMovie = useSelector(state=>state.movieData.bannerData)
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={treadingMovie} heading={"Trending"}/>

      
    </div>
  );
};

export default Home;
