import React from 'react';

const NavBarLoader = () => {
    return (
        <div className="flex items-center justify-center h-10">
            <div className="animate-pulse flex space-x-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
};

export default NavBarLoader;