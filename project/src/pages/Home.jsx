import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ListCard from "../components/ListCard.jsx";
import GridCard from "../components/GridCard.jsx";

const Home = () => {
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

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
        <button onClick={() => { setIsCreateModelShow(true) }} className='btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]'>+
        </button>
      </div>

      <div className="cards">
        {
          isGridLayout ?
          <div className="grid">
            <GridCard />
            <GridCard />
            <GridCard /> 
            </div>
         :   <div className="list">
         <ListCard />
         <ListCard />
         <ListCard />

       </div>
        }
      </div>

     { isCreateModelShow &&
       <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] flex items-center justify-center">
       <div className="createModel w-[25vw] h-[27vh] shadow-lg shadow-black/50 bg-[#141414] rounded-[10px] p-[20px]">
       <h3 className='text-2xl'>Create New Project</h3>
       <div className="inputBox !bg-[#202020] mt-4">
               <input
           
                 type="text"
                 placeholder='Project Title'
               />
             </div>
             <div className='flex items-center gap-[10px] w-full mt-2'>
               <button className='btnBlue rounded-[5px] w-[49%] mb-4 !p-[5px] !px-[10px] !py-[10px]'>Create</button>
               <button onClick={() => { setIsCreateModelShow(false) }} className='btnBlue !bg-[#1A1919] rounded-[5px] mb-4 w-[49%] !p-[5px] !px-[10px] !py-[10px]'>Cancel</button>
             </div>
       </div>
       </div> 

     }


    </>
  );
};

export default Home;
