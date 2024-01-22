import React, { useEffect, useContext } from 'react'
import CardR from './CardR'
import RESContext from '../context/RES/RESContext';
// import { useNavigate } from 'react-router-dom'


const Ngo = () => {
  // let Navigate = useNavigate();

  const context = useContext(RESContext);
  const { RES, getRES } = context;
  console.log(RES)

  useEffect(() => {
      getRES();
  }, []);

  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
      {Array.isArray(RES) && RES.length > 0 ? (
        RES.map((Res) => {
          return (
            
            <CardR res_detail={Res} />
           

            // <Notes_card note={note} updateNote={updateNote} key={note.id} />
          );
        })
      ) : (
        <p>No ngo available</p>
      )}


    </div>
  )
}

export default Ngo;