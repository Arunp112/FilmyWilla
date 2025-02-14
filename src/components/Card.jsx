import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector((state) => state.movieData.imageURL);

  return (
    <Link to={"/"+data.media_type+"/"+data.id} className="w-full min-w-[330px] max-w-[330px] h-full overflow-hidden rounded relative">
      {/* Card
       */}
      <img src={imageURL + data?.poster_path} alt="" />
      <div className="absolute top-5">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trending
          </div>
        )}
      </div>
        <div className= " absolute bottom-0 w-full h-16 backdrop-blur-3xl bg-black/60 p-2 ">
          <h2 className="text-lg font-semibold">{data?.title || data?.name}</h2>
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-400">{data?.release_date}</p>
            <p className="text-sm  "> Rating : {Number(data?.vote_average).toFixed(1)}</p>
          </div>
        </div>
    </Link>
  );
};

export default Card;
