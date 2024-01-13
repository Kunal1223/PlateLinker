import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'



export default function Signup(props) {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
        props.closeSignUp();
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
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Sign up
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                                <div className="nav-container ml-11 text-blue-500 font-bold text-lg">
                                                    <NavLink to={'/home'}>PlateLinker</NavLink>
                                                </div>
                                                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up your NGO Account</h2>
                                            </div>

                                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                                <form class="space-y-6" action="#" method="POST">
                                                    <div>
                                                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">NGO Name</label>
                                                        <div class="mt-2">
                                                            <input id="name" name="name" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                                        <div class="mt-2">
                                                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div class="flex items-center justify-between">
                                                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                                            <div class="text-sm">
                                                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                                            </div>
                                                        </div>

                                                        <div class="mt-2">
                                                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                        </div>
                                                        <div>
                                                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">NGO Manager Name</label>
                                                            <div class="mt-2">
                                                                <input id="name" name="name" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">NGO Description</label>
                                                            <div class="mt-2">
                                                                <input id="name" name="name" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">NGO Social Media Handle</label>
                                                            <div class="mt-2">
                                                                <input id="name" name="name" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                            </div>
                                                        </div>


                                                        <label class="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload Images</label>
                                                     <input class="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer   focus:outline-none placeholder-black" aria-describedby="file_input_help" id="file_input" type="file" />
                                                        <p class="mt-1 text-sm text-gray-600" id="file_input_help">SVG, PNG, JPG or GIF</p>


                                                    </div>


                                                    <div>
                                                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                                    </div>
                                                </form>

                                                <p class="mt-10 text-center text-sm text-gray-500">
                                                    Already a member?
                                                    <span onClick={closeModal} class="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</span>
                                                </p>


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
