import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNagivation from "./components/MobileNagivation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieSlice";

// Set axios base URL
axios.defaults.baseURL = "https://api.themoviedb.org/3";

function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(setBannerData(response?.data?.results));
    } catch (error) {
      console.log("Error fetching trending data:", error);
    }
  };

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url + "original"));
    } catch (error) {
      console.log("Error fetching configuration:", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="min-h-[90hv]">
          <Outlet />
        </div>
        <Footer />
        <MobileNagivation />
      </main>
    </>
  );
}

export default App;
