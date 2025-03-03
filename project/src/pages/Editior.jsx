import React, { useState } from 'react';
import EditiorNavbar from '../components/EditiorNavbar.jsx'
import Editor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineExpandAlt } from "react-icons/ai";

const Editior = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeTheme = () => {
   
    if (isLightMode) {
      document.querySelector(".EditiorNavbar").computedStyleMap.background ='#141414'
      document.body.classList.remove("lightMode");
      setIsLightMode(false);
    } else {
      document.querySelector(".EditiorNavbar").computedStyleMap.background ='#141414'
      document.body.classList.add("lightMode");
      setIsLightMode(true);
    }
  };
  return (
    <>
    <EditiorNavbar />
    <div className='flex'>
      <div className='left w-[50%]'>
        <div className='tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]'>
          <div className='tabs flex items-center gap-2'>
          <div  className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">HTML</div>
          <div  className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">CSS</div>
          <div  className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">JavaScript</div>
          </div>
          <div className='flex items-center gap-2'>
          <i className="text-[20px] cursor-pointer" onClick={changeTheme}><MdLightMode /></i>
          <i className="text-[20px] cursor-pointer"><AiOutlineExpandAlt /></i>
          </div>
        </div>
        <Editor height="82vh"  theme={isLightMode ? "vs-light" : "vs-dark"} defaultLanguage="javascript" defaultValue="// some comment" />
        </div>
      <iframe id='output' className='w-[50%] min-h-[82vh] bg-[#fff] text-black'></iframe>
    </div>
    </> 
  )
}

export default Editior