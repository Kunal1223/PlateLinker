import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
<div className='home-container flex justify-around mt-20'>
    <div className="home-content">
        <h1 className='text-[#003f88] font-bold text-4xl mt-20 ml-20'>Feed the Hungry, <br /> Spread Joy.</h1>
        <p className='text-gray-700 ml-20 font-semibold mb-12 mt-4'>Empower restaurants to bring smiles by donating excess <br />food through our platform.</p>
        <NavLink className='bg-green-600 text-white px-6 py-2 rounded-lg font-semibold ml-20 hover:bg-green-500' to={'/restro'} >Donate</NavLink>
        {/* <i class="fa-brands fa-whatsapp text-green-600 text-4xl ml-6 mt-10"></i> */}
    </div>

    <div className="home-img h-[21rem] bg-green-600 w-[21rem] rounded-[53%] " >
      <img src="./images/childwfood.jpg" alt="" className='rounded-[50%] h-[20rem] w-[21rem] mb-1 ml-1 mt-1' />
    </div>
</div>


  )
}

export default Home
