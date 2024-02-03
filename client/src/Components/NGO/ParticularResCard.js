import React, { useState, Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';


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

    const handleonSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnSubmit1 = (e) =>{
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

                    {/* {openPaymentModal ? <PaymentQR show={openPaymentModal} close={() => setopenPaymentModal(false)} /> : <></>} */}


                    {openPaymentModal ?

                        <>
                            <Transition appear show={openPaymentModal} as={Fragment}>
                                <Dialog as="div" className="relative z-10" onClose={()=>setopenPaymentModal(false)}>
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="fixed inset-0 bg-black/25" />
                                    </Transition.Child>

                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                            >
                                                <Dialog.Panel className=" max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all w-auto">
                                                    <Dialog.Title
                                                        as="h3"
                                                        className="text-lg text-center font-medium leading-6 text-gray-900"
                                                    >
                                                        <NavLink to={'/'}><img src="/images/logo.png" alt='logo' className='w-48 mx-auto' /></NavLink>

                                                        <h1 className='text-xl mt-2 font-bold'>Pay Using QR</h1>

                                                    </Dialog.Title>
                                                    <div className='mt-2 flex flex-col'>
                                                        <img src='/images/paymentqr.jpg' className='h-[400px] mx-auto px-12 py-6' alt='/' />
                                                        <button className='bg-green-500 text-white font-base px-4 py-2 rounded-xl ml-[20%] w-[60%] hover:bg-green-700' onClick={handleOnSubmit1} >Place Order</button>
                                                    </div>
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </>

                        : <></>}






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