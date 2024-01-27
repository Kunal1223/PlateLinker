import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';

const ParticularCard = () => {
    const location = useLocation();
    const ngoDetail = location.state ? location.state.ngoDetail : null;
    const [Userinfo, setUserinfo] = useState({ Veg: "", Nonveg: "",Reason:"" });
    const handleonSubmit = async (e) => {
        e.preventDefault();
        
       
    };

    const onchange = (e) => {
        setUserinfo({ ...Userinfo, [e.target.name]: e.target.value })
    }


    const { name, email, manager_name, desc, phone, social_link, imageUrl, date } = ngoDetail;

    return (
        <>
        {/* <h4 className='text-[#6f6f72] text-3xl mt-14 mx-16'>Food for All: Bridging the Gap Between Abundance and Need.</h4> */}
        <div className='flex mt-28 justify-around ' >
            <div className="content">
                <h1 className='text-[#003F88] text-3xl font-bold'>Welcome to the {name} NGO</h1>
                
                <form className="mt-24" onSubmit={handleonSubmit}>
                <h1 className='text-3xl font-medium text-center text-green-500'>
                    Please Add Packets to Donate</h1>

                <div className="form mt-10">
                    <label className='text-sm font-medium text-center text-gray-500'>Enter the No of Veg Packets <i className="fa-solid fa-circle text-green-500 mr-4"></i></label><br />
                    <input type='number' placeholder='0' className='px-2 my-2 py-1 border-green-500 rounded-lg border' name='Veg' value={Userinfo.Veg} 
                    onChange={onchange}  /> <br />
                </div>

                <div className="form mt-8">
                    <label className='text-sm font-medium text-center text-gray-500'>Enter the No of NonVeg Packets <i className="fa-solid fa-circle text-red-500 mr-4"></i></label><br />
                    <input type='number' placeholder='0' className='px-2 my-4 py-1 border-red-500 rounded-lg border' name='Nonveg' value={Userinfo.Nonveg} onChange={onchange} />
                </div>
                <div className="form mt-8">
                    <label className='text-sm font-medium text-center text-gray-500'>Reason : <span className='text-red-600 '>*</span> </label><br />
                    <input type='number' placeholder='0' className='px-2 my-4 py-1 border-blue-500 rounded-lg border' name='Nonveg' value={Userinfo.Nonveg} onChange={onchange} />
                </div>

                <button className='bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg mt-10'><i className="fa-regular fa-envelope mr-1"></i> Send  </button>
            </form>

            </div>
            <div className="image">
                <img src={imageUrl} alt="ngo" className='w-72' />
            </div>
        </div>
        </>
    );
}

export default ParticularCard;
