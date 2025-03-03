import React, { useEffect, useState } from 'react';
import EditiorNavbar from '../components/EditiorNavbar.jsx'
import Editor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineExpandAlt } from "react-icons/ai";

const Editior = () => {
  const [tab, setTab] = useState("html");
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

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const run = () => {
    // console.log(htmlCodecssCodejsCode)
    const html = htmlCode;
    const css = `<style>${cssCode}</style>`;
    const js = `<script>${jsCode}</script>`;
    const iframe = document.getElementById("iframe");
    iframe.srcdoc = html + css + js;
  }

  useEffect(()=>  {
    setTimeout(() => {
      run()
    },200);
  })
 
  return (
    <>
    <EditiorNavbar />
    <div className='flex'>
    <div className="left" style={{ width: isExpanded ? "100%" : "50%" }}>
        <div className='tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]'>
          <div className='tabs flex items-center gap-2'>
           <div onClick={() => { setTab("html"); }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">HTML</div>
              <div onClick={() => { setTab("css"); }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">CSS</div>
              <div onClick={() => { setTab("js"); }} className="tab cursor-pointer p-[6px] bg-[#1E1E1E] px-[10px] text-[15px]">JavaScript</div>
          </div>
          <div className='flex items-center gap-2'>
          <i className="text-[20px] cursor-pointer" onClick={changeTheme}><MdLightMode /></i>
          <i className="text-[20px] cursor-pointer" onClick={() => { setIsExpanded(!isExpanded); }}><AiOutlineExpandAlt /></i>
          </div>
        </div>
          
        {
  tab == "html" ?
  <>
  <Editor onChange={(e)=>
  {setHtmlCode(e);
    run()
  }} height="82vh"  theme={isLightMode ? "vs-light" : "vs-dark"} language="html" value="<h1>hello world</h1>" />
  </> : tab == "css" ?
  <>
  
  <Editor onChange={(e)=>{setCssCode(e);
    run()
  }} height="82vh"  theme={isLightMode ? "vs-light" : "vs-dark"} language="css" value="body {background-color:#f4f4f4; }" />
  </> : <>

  <Editor onChange={(e)=>{setJsCode(e);
    run()
  }} height="82vh"  theme={isLightMode ? "vs-light" : "vs-dark"} language="javascript" value="// some comment" />
  </>
}


        
        </div>

      <iframe 
          id='iframe' 
          className={`min-h-[82vh] bg-[#fff] text-black ${isExpanded ? "hidden" : ""}`} 
          style={{ width: isExpanded ? "0%" : "50%" }}
        ></iframe>
    </div>
    </> 
  )
}

export default Editior