import React, { useState, Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import PaymentQR from './PaymentQR';


export default function ParticularResCard() {

    const [openPaymentModal, setopenPaymentModal] = useState(false)

    const location = useLocation();
    const resDetail = location.state ? location.state.resDetail : null;

    const { name, email, imageUrl, date } = resDetail || {};
    console.log(resDetail)

    const [Userinfo, setUserinfo] = useState({ Veg: "", Nonveg: "", Messege: "" });

    const onchange = (e) => {
        setUserinfo({ ...Userinfo, [e.target.name]: e.target.value })
    }

    const handleonSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <>
            <div className="content text-center mt-10">
                <h1 className='text-[#003F88] text-3xl font-bold '>Welcome to the {name} </h1>
                <hr className='mx-auto bg-blue-600 h-[1px] w-[250px]' />
            </div>

            <div className='flex mt-4 justify-around ' >
                <form className="mt-14" action="#" method="POST" onSubmit={handleonSubmit} >
                    <h1 className='text-3xl font-medium text-center text-green-500'>
                        Please Add Packets to Donate</h1>

                    <div className="form mt-10">
                        <label className='text-sm font-medium text-center text-gray-500'>Enter the No of Veg Packets <i className="fa-solid fa-circle text-green-500 mr-4"></i></label><br />
                        <input type='number' placeholder='0' className='px-2 my-2 py-1 border-green-500 rounded-lg border' name='Veg' value={Userinfo.Veg}
                            onChange={onchange} /> <br />
                    </div>

                    <div className="form mt-2">
                        <label className='text-sm font-medium text-center text-gray-500'>Enter the No of NonVeg Packets <i className="fa-solid fa-circle text-red-500 mr-4"></i></label><br />
                        <input type='number' placeholder='0' className='px-2 my-4 py-1 border-red-500 rounded-lg border' name='Nonveg' value={Userinfo.Nonveg} onChange={onchange} />
                    </div>

                    <div className="form mt-2">
                        <label className='text-sm font-medium text-center text-gray-500'>Messege : <span className='text-red-600 '>*</span> </label><br />
                        <input type='text' placeholder='0' className='px-2 my-2 py-1 border-blue-500 rounded-lg border' name='Messege' value={Userinfo.Messege} onChange={onchange} />
                    </div>

                    {openPaymentModal ? <PaymentQR show={openPaymentModal} close={() => setopenPaymentModal(false)} /> : <></>}

                    {/* ****** Payemnt Qr********  */}
                    <button onClick={() => setopenPaymentModal(true)} className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg mt-10'>
                        <i className="fa-brands fa-google-pay fa-2xl "></i></button>
                </form>

                <div className="image mt-[10%]   ">
                    <img src={imageUrl} alt="ngo" className='w-72 rounded-sm' />
                </div>
            </div>
        </>
    )
}