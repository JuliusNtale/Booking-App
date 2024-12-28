import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="p-4 bg-gray-100">
            {/* Header List */}
            <div className="headerList flex justify-between items-center">
                
                <div className="headerListItem flex items-center space-x-2 p-2 rounded-lg ring-2 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Hotels</span>
                </div>
                <div className="headerListItem flex items-center space-x-2 p-2 rounded-lg ring-2 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem flex items-center space-x-2 p-2 rounded-lg ring-2 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </div>
                <div className="headerListItem flex items-center space-x-2 p-2 rounded-lg ring-2 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </div>
                <div className="headerListItem flex items-center space-x-2 p-2 rounded-lg ring-2 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mt-4">Header Section</h1>
        </div>
    );
};

export default Header;
