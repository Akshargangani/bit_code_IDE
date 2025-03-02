import React from 'react'
import deleteImg from "../images/delete.png"
import codeImg from  "../images/code.png"

const GridCard = () => {
  return (
   <>
     <div className="gridCard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50">
      <img className='w-[90px]' src =  {codeImg} alt="" />
      <h3 className='text-[20px] w-[90%] line-clamp-1'>My first project</h3>
      
      <div className='flex items-center justify-between'>
          <p className='text-[14px] text-[gray]'>Created in 3 mon 2025</p>
          <img  className='w-[30px] cursor-pointer' src={deleteImg} alt="" />
          </div>
          </div>
   </>
  )
}

export default GridCard