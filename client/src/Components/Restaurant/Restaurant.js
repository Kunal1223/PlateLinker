import React, { useContext, useEffect } from 'react'
import CardN from './CardN'
import NGOContext from '../context/NGO/NGOContext';
import { useNavigate } from 'react-router-dom'
import LoginerrorAni from '../../assets/loginfirst.json'
import Lottie from 'lottie-react';

const Restaurant = () => {
  let Navigate = useNavigate();

  const context = useContext(NGOContext);
  const { NGO, getNGO } = context;
  console.log(NGO)

  useEffect(() => {
    getNGO();
  }, [NGO, getNGO]);

  const returback = (e) => {
    e.preventDefault();
    Navigate('/');
  }

  return (
    <>
      {(!localStorage.getItem('restroAuthToken')) && (!localStorage.getItem('ngoAuthToken'))
        ?
        <div className='mt-16'>
          <Lottie animationData={LoginerrorAni} className='animation h-72' />
          <div className="flex justify-center">
            <h1 className='text-red-600 font-bold text-4xl ' >Please Login First</h1>
            <button className='ml-4 text-xl bg-green-600 text-white cursor-pointer 
             px-6 rounded-lg' onClick={returback}>Home</button>
          </div>
        </div>
        :
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            Array.isArray(NGO) && NGO.length > 0 ? (
              NGO.map((ngo) => {
                return (

                  <CardN ngo_detail={ngo} />


                );
              })
            ) : (
              <p>No ngos available</p>
            )}

        </div>
      }
    </>
  )
}

export default Restaurant