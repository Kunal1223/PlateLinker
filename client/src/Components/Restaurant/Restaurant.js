import React,{useContext,useEffect} from 'react'
import CardN from './CardN'
import NGOContext from '../context/NGO/NGOContext';
import { useNavigate } from 'react-router-dom'

const Restaurant = () => {
  let Navigate = useNavigate();

  const context = useContext(NGOContext);
  const { NGO, getNGO} = context;
  console.log(NGO)

  useEffect(() => {
    // if (localStorage.getItem('token'))
      getNGO();
    // else {
    //   Navigate('/login')
    // }
  }, [NGO, getNGO]);
  return (
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
  )
}

export default Restaurant