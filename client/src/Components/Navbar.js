import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 bg-slate-100 w-full flex justify-between mx-auto items-center'>
      <div className="nav-container ml-11 text-blue-500 font-bold text-lg">
        <NavLink to={'/home'}>PlateLinker</NavLink>
      </div>

      <div className="heading-container">
        <NavLink to={'/'} className="mr-14 text-blue-500 font-bold text-lg">Home</NavLink>
        <NavLink to={'/ngo'} className="mr-14 text-blue-500 font-bold text-lg">NGO</NavLink>
        <NavLink to={'/restro'} className="mr-14 text-blue-500 font-bold text-lg" >Restaurant</NavLink>
        <NavLink to={'/about'} className="mr-16 text-blue-500 font-bold text-lg">About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
