import React from 'react'
import img from "../images/code.png"

const ListCard = () => {
  return (
    <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020]">
        <div className='flex items-center gap-2'>
            <img className='' src={img} alt="" />
        </div>
    </div>
  )
}

export default ListCard