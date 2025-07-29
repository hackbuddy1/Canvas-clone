import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', to: '/', icon: '🏠' },
        { name: 'Courses', to: '/courses', icon: '📚' },
        { name: 'Calendar', to: '/calendar', icon: '📅' },
        { name: 'Inbox', to: '/inbox', icon: '✉️' },
        { name: 'Help', to: '/help', icon: '❓' },
    ];

    return (
        <>
            
            <button
                className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>

            
            {isOpen && <div className="lg:hidden fixed inset-0 bg-black opacity-50 z-20" onClick={() => setIsOpen(false)}></div>}

            
            <aside
                className={`bg-gray-900 text-white h-full fixed top-0 left-0 z-20 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 flex flex-col`}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    
                    <Link 
                        to="/" 
                        className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)} 
                    >
                        Canvas Clone
                    </Link>
                    
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-2xl text-white">×</button>
                </div>

                <nav className="flex-1 p-4">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                                            isActive ? 'bg-blue-600' : ''
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="ml-4 text-lg hidden md:inline">{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;