import React, { useEffect, useContext } from 'react'
import CardR from './CardR'
import RESContext from '../context/RES/RESContext';
import { useNavigate } from 'react-router-dom'


const Ngo = () => {
  let Navigate = useNavigate();

  const res_details = {


    name: "Couple Goals",
    email: "couple@gmail.com",
    manager_name: "Vinayak",
    desc: "couple goals nfgngnvnvbnbvnbvnvb v bv vn bv vb bnbvbv bv bvbvnbvnv ",
    phone: "12334",
    social_link: "@couple",
    imageUrl: "/images/res.jpg"


  }
  const context = useContext(RESContext);
  const { RES, getRES } = context;
  console.log(RES)

  useEffect(() => {
    if (localStorage.getItem('token'))
      getRES();
    else {
      Navigate('/login')
    }
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
        <p>No notes available</p>
      )}


    </div>
  )
}

export default Ngo;