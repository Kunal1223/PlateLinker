import React from 'react'

const About = () => {
  return (
    <div className="container mt-20 justify-around flex">
      <div className='about-content ml-40'>
        About
      </div>

      <div className="container-pic">
        <div className="pic2 h-64 bg-green-500 w-64 rounded-[50%] ml-[60%]">
          <img src="../images//hungry.jpeg" alt="child" className='h-64 w-64 rounded-[50%] ml-2'/>
        </div>
      </div>
    </div>
  )
}

export default About
