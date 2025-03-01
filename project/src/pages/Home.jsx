import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ListCard from "../components/ListCard.jsx";
import GridCard from "../components/GridCard.jsx";

const Home = () => {
  const [isGridLayout, setIsGridLayout] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hi mahid 👋</h2>
      </div>
      <div className="flex items-center gap-1">
        <div className="inputBox !w-[350px]">
          <input
            type="text"
            placeholder="Search Here... !"
          
          />
        </div>
        <button
          className="btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]"
        >
          +
        </button>
      </div>

      <div className="cards">
        {
          isGridLayout ?
          <div className="grid">
            <GridCard /> 
            </div>
         :   <div className="list">
         <ListCard />

       </div>
        }
      </div>
    </>
  );
};

export default Home;
