import React from "react";
import BannerHome from "../components/BannerHome";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const treadingMovie = useSelector(state=>state.movieData.bannerData)
  return (
    <div>
      <BannerHome />

      <div className="container mx-auto px-3 my-10">
      <h2 className="text-xl  lg:text-2xl font-bold">Treding Show </h2>
      {
        treadingMovie.map((data,index)=>(
          <Card key={data.id} data={data}/>
          
        ))
      }
      </div>
    </div>
  );
};

export default Home;
