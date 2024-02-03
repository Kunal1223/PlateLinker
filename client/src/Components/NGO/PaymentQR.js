import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

export default function PaymentQR(props) {
    const Navigate = useNavigate()
    let [isOpen, setIsOpen] = useState(true)
    function closeModal() {
        setIsOpen(false)
        props.close();
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                       <img src='/images/paymentqr.jpg' className='h-[400px] mx-auto px-12 py-6'  alt='/'/>
                                       <button className='bg-green-500 text-white font-base px-4 py-2 rounded-xl ml-[20%] w-[60%] hover:bg-green-700' onClick={handleOnSubmit} >Place Order</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
