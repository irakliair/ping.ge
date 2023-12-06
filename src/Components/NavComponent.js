import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function NavComponent() {
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (<header>
        <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
                <div className="hidden w-full text-gray-600 md:flex md:items-center">
                </div>
                <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                    Brand
                </div>
                <div className="flex items-center justify-end w-full">
                    <div className="flex sm:hidden">
                        <button onClick={handleIsOpen} type="button"
                                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                                aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                <path fillRule="evenodd"
                                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <nav className={`sm:flex sm:justify-center sm:items-center mt-4 ${isOpen ? '' : 'hidden'}`}>
                <div className="flex flex-col sm:flex-row">
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/">Home</Link>
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/ping">Ping</Link>
                    <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" to="/port-check">Port
                        Check</Link>
                </div>
            </nav>
        </div>
    </header>);
}

export default NavComponent;