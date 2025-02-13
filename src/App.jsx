import { useEffect, useState } from "react";

// import './App.css'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNagivation from "./components/MobileNagivation";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { setBannerData } from "./store/movieslice";


function App() {

  // const dispatch = useDispatch()


  // const fetchTrendingData = async () => {
  //   try {
  //     const response = await axios.get("/trending/all/week");
  //     // dispatch(setBannerData)
  //     console.log("respose", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTrendingData();
  // }, []);

  return (
    <>
      <main className="pb-14 lg:pb-0">
        <Header />
        <div className="pt-16 ">
          <Outlet />
        </div>
        <Footer />
        <MobileNagivation />
      </main>
    </>
  );
}

export default App;
