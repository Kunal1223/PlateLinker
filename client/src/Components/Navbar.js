import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import SigninN from './NGO/SigninN';
import SigninR from './Restaurant/SigninR';

const Navbar = () => {

  const [SigninNOpen, setSigninNOpen] = useState(false)
  const [SigninROpen, setSigninROpen] = useState(false)
  return (
    <div className='h-20 bg-slate-100 w-full flex justify-between mx-auto items-center'>
      <div className="nav-container ml-11 text-blue-500 font-bold text-lg">
        <NavLink to={'/'}>PlateLinker</NavLink>
      </div>

      <div className="heading-container">
        <NavLink to={'/'} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">Home</NavLink>
        <button onClick={() => setSigninNOpen(true)} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">NGO</button>
        {SigninNOpen ? <SigninN show={SigninNOpen} close={() => setSigninNOpen(false)} /> : <></>}
       
        <button onClick={() => setSigninROpen(true)} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600" >Restaurant</button>
        {SigninROpen ? <SigninR show={SigninROpen} close={() => setSigninROpen(false)} /> : <></>}

        <NavLink to={'/about'} className="mr-32 text-blue-500 font-bold text-lg hover:text-blue-600">About</NavLink>
      </div>
    </div> 
  )
}

export default Navbar
