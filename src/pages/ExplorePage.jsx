import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      // Append new data to the previous data (infinite scroll)


      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);

      
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (pageNo < totalPageNo) {
        setPageNo((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([])
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold my-2 lg:text-xl capitalize">
          Popular {params.explore} show
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,330px)] gap-6">
          {data.map((exploreData, index) => (
            <div key={exploreData.id + "exploresection" + index}>
              <Card data={exploreData} media_type={params.explore} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
