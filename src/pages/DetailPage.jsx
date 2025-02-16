import React from "react";
import useFetchDetail from "../hooks/useFetchDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Divider from "../components/Divider";

import PlayVideo from "../components/PlayVideo";

const DetailPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const { data } = useFetchDetail(`/${params.detail}/${params.id}`);
  const { data: castData } = useFetchDetail(
    `/${params.detail}/${params.id}/credits`
  );

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  
 
  const duration = (Number(data?.runtime) / 60).toFixed(1).split(".");
  const handlePlayVideo = (data) => {
    setPlayVideoId(data);
    setPlayVideo(true);
  };

  return (
    <div>
      {/* DetailPage */}
      <div className="w-full h-[500px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover "
            alt=""
          />
        </div>
        <div className="absolute w-full h-full bg-gradient-to-b from-neutral-900/90 to-transparent top-0"></div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-0 flex flex-col justify-center items-center lg:flex-row gap-5 lg:gap-10">
        <div className="relative  mx-auto  lg:-mt-28 lg:mx-0  w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-cover rounded "
            alt=""
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded text-lg font-bold hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Play Now{" "}
          </button>
        </div>
        <div>
          <h2 className="text-2xl lg:font-3xl mt-3 font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />
          <div className="flex  items-center gap-4 ">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {data?.vote_count}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h2 className="text-xl font-bold text-white mb-1 ">Overview</h2>
            <p>{data?.overview}</p>
            <Divider />
            <div className="flex items-center gap-4 my-2 text-center">
              <p>Status : {data?.status}</p>
              <span>|</span>
              <p>Release Date : {data?.release_date}</p>
              <span>|</span>
              <p>Revenue : {data?.revenue}</p>
            </div>
            <Divider />
          </div>
          <div className="my-4">
            <p>
              <span className="text-white">Origin Country</span> :
              {data?.origin_country}
            </p>
          </div>
        </div>
      </div>
      <div></div>
      {playVideo && (
        <PlayVideo
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params.detail}
        />
      )}
    </div>
  );
};

export default DetailPage;
