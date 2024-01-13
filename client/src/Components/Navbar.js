import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 bg-slate-100 w-full flex justify-between mx-auto items-center'>
      <div className="nav-container ml-11 text-blue-500 font-bold text-lg">
        <NavLink to={'/home'}>PlateLinker</NavLink>
      </div>

      <div className="heading-container">
        <NavLink to={'/'} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">Home</NavLink>
        <NavLink to={'/ngo'} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">NGO</NavLink>
        <NavLink to={'/restro'} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600" >Restaurant</NavLink>
        <NavLink to={'/about'} className="mr-16 text-blue-500 font-bold text-lg hover:text-blue-600">About</NavLink>
      </div>
    </div> 
  )
}

export default Navbar
