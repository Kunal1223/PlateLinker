import React from 'react';
import { useLocation } from 'react-router-dom';

const ParticularCard = () => {
    const location = useLocation();
    const ngoDetail = location.state ? location.state.ngoDetail : null;


    const { name, email, manager_name, desc, phone, social_link, imageUrl, date } = ngoDetail;

    return (
        <>
        {/* <h4 className='text-[#6f6f72] text-3xl mt-14 mx-16'>Food for All: Bridging the Gap Between Abundance and Need.</h4> */}
        <div className='flex mt-28 justify-around ' >
            <div className="content">
                <h1 className='text-[#003F88] text-3xl font-bold'>Welcome to the {name} NGO</h1>
                <h4 className='mt-8 font-medium text-gray-500' >{desc}</h4>
            </div>
            <div className="image">
                <img src={imageUrl} alt="ngo" className='w-72' />
            </div>
        </div>
        </>
    );
}

export default ParticularCard;
