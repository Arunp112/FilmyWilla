import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  const query = location?.search?.slice(3);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: {
          query: location?.search?.slice(3),
          page: page,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (query) {
      setPage(1);
      setData([]);
      fetchData();
    }
  }, [location.search]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (pageNo < totalPageNo) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="py-16">
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          value={query?.split("%20").join(" ")}
          className=" px-4 py-1 text-lg w-full bg-white text-neutral-900 rounded-full"
        />
      </div>
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold my-2 lg:text-xl capitalize">
          Search result
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,330px)] gap-6 justify-center">
          {data.map((searchData, index) => (
            <div key={searchData.id + "search" + index}>
              <Card data={searchData} media_type={searchData.media_type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
