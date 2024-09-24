import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 text-white py-4 flex justify-center items-center space-x-2">
            <span className="text-lg font-semibold">DESINFLAMA</span>
            <span>| </span>
            <a
                href="https://www.instagram.com/nutri.marcelaroma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-indigo-500 transition duration-300 ease-in-out"
            >
                @nutri.marcelaroma  
            </a> 
        </footer>
    );
};

export default Footer;
