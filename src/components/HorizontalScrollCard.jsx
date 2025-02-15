import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const HorizontalScrollCard = ({ data = [], heading,trending ,media_type}) => {
  const containerRef = useRef();

  const handleNext =()=>{
    containerRef.current.scrollLeft += 300
  }
  const handlePrevious =()=>{
    containerRef.current.scrollLeft -= 300
  }
  return (
    <div>
      {/* HorizontalScrollCard */}
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-xl  lg:text-2xl font-bold mb-2 text-white">
          {heading}
        </h2>

        <div className=" relative">
          <div
            ref={containerRef}
            className="grid grid-cols-[repeat(auto-fit,330px)] grid-flow-col gap-6 mx-auto overflow-hidden relative z-10 overflow-x-scroll scroll-smooth transition-all scrollbar-none"
          >
            {data.map((data, index) => (
              <Card
                key={data.id + "heading" + index}
                data={data}
                index={index + 1}
                trending={trending}
                media_type={media_type}
              />

            ))}
          </div>

          <div className="absolute top-0 hidden lg:flex  items-center h-full justify-between w-full">
            <button className="bg-white text-black rounded-full p-1 z-10 -ml-2" onClick={handlePrevious}><FaAngleLeft/></button>
            <button className="bg-white text-black rounded-full p-1 z-10 -mr-2" onClick={handleNext}><FaAngleRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
