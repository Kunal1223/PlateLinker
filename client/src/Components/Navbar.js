import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import SigninN from './NGO/SigninN';
import SigninR from './Restaurant/SigninR';

const Navbar = () => {

  const navigate = useNavigate();

  const removeToken = (e) => {
    e.preventDefault();
    localStorage.removeItem('ngoAuthToken');
    navigate('/');
  }

  const removerToken = (e) => {
    e.preventDefault();
    localStorage.removeItem('restroAuthToken');
    navigate('/');
  }

  const restroOpen = (e) => {
    e.preventDefault();
    navigate('/ngo')
  }

  const ngoOpen = (e) => {
    e.preventDefault();
    navigate('/restro')
  }

  const [SigninNOpen, setSigninNOpen] = useState(false)
  const [SigninROpen, setSigninROpen] = useState(false)

  return (
    <div className='h-20 bg-slate-100 w-full flex justify-between mx-auto items-center'>
      <div className="nav-container ml-11 text-blue-500 font-bold text-lg">
        {/* <NavLink to={'/'}>PlateLinker</NavLink> */}
        <NavLink to={'/'}><img src="/images/logo.png" alt='logo' className='w-48' /></NavLink>

      </div>

      <div className="heading-container">
        <NavLink to={'/'} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">Home</NavLink>

        {(!localStorage.getItem('ngoAuthToken')) ?
          <>
            {(!localStorage.getItem('restroAuthToken')) ?
              <>
                <button button onClick={() => setSigninNOpen(true)} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600">NGO</button>
                {SigninNOpen ? <SigninN show={SigninNOpen} close={() => setSigninNOpen(false)} /> : <></>}
              </>
              :
              <>
              </>
              }
          </>
          :
          <>
            <button onClick={restroOpen} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600" >Restaurant</button>
            <button button onClick={removeToken} className="mr-14 text-red-500 font-bold text-lg hover:text-red-600">Log Out</button>
          </>
        }


        {(!localStorage.getItem('restroAuthToken')) ?
          <>
            {(!localStorage.getItem('ngoAuthToken')) ?
              <>
                <button onClick={() => setSigninROpen(true)} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600" >Restaurant</button>
                {SigninROpen ? <SigninR show={SigninROpen} close={() => setSigninROpen(false)} /> : <></>}
              </>
              :
              <>
              </>
            }
          </>
          :
          <>
            <button onClick={removerToken} className="mr-14 text-red-500 font-bold text-lg hover:text-red-600" >Log Out</button>
            <button onClick={ngoOpen} className="mr-14 text-blue-500 font-bold text-lg hover:text-blue-600" >NGO</button>
          </>
        }


        <NavLink to={'/about'} className="mr-20 text-blue-500 font-bold text-lg hover:text-blue-600">About</NavLink>
      </div>
    </div >
  )
}

export default Navbar
