import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom'
import Signup from './SignupR';

export default function Signin(props) {
    let [isOpen, setIsOpen] = useState(true)
    let [SignUpOpen, setSignUpOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        props.close();
    }

    function openSignUpModal() {
        setSignUpOpen(true);
        closeModal();
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-medium leading-6 text-gray-900"
                                    >
                                        <NavLink to={'/'}><img src="/images/logo.png" alt='logo' className='w-48 mx-auto' /></NavLink>

                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                            

                                            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                                <form className="space-y-6" action="#" method="POST">
                                                    <div>
                                                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                                        <div className="mt-2">
                                                            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center justify-between">
                                                            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                                            <div className="text-sm">
                                                                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                                            </div>
                                                        </div>
                                                        <div className="mt-2">
                                                            <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                                    </div>
                                                </form>

                                                <p className="mt-10 text-center text-sm text-gray-500">
                                                    Not a member?
                                                    <span onClick={() => {
                                                        // closeModal();
                                                        setSignUpOpen(true);
                                                        }} 
                                                        className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</span>
                                                </p>
                                                {SignUpOpen ? <Signup showSignUp={SignUpOpen} closeSignUp={() => {
                                                    // closeModal()
                                                    setSignUpOpen(false)
                                                }} /> : <></>}
                                            </div>
                                        </div>

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
