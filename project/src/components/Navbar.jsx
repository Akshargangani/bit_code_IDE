import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-[100px] h-[80px] bg-[#141414]">
       <div className="logo">
          <img className='w-[150px]  cursor-pointer' src={logo} alt=""/>
        </div>
        <div className="links flex items-center gap-2">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Services</Link>
          <Avatar name="Wim Mostmans" size="40" round="50%" className='cursor-pointer ml-2' />
          {/* <button onClick={logout} className='btnBlue !bg-red-500 min-w-[120px] ml-2 hover:!bg-red-600'>Logout</button> */}
          {/* <Avatar onClick={() => { toggleClass(".dropDownNavbar", "hidden") }} name={data ? data.name : ""} size="40" round="50%" className=' cursor-pointer ml-2' /> */}
        </div>
    </div>
  )
}

export default Navbar