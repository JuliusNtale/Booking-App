import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false); // Toggle Date Picker
  const [openOptions, setOpenOptions] = useState(false); // Toggle Guests Options
  const [options, setOptions] = useState({
    adult: 1,
    Children: 0,
    room: 1,
  });

  return (
    <div className="p-6 bg-gray-100">
      {/* Header Section */}
      <div className="space-y-6">
        {/* Header List */}
        <div className="headerList flex flex-wrap justify-between items-center gap-4">
          {[
            { icon: faBed, label: "Hotels" },
            { icon: faPlane, label: "Flights" },
            { icon: faCar, label: "Car Rental" },
            { icon: faTaxi, label: "Airport Taxis" },
            { icon: faBed, label: "Attractions" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 rounded-lg ring-8 ring-transparent active:ring-4 active:ring-blue-500 active:ring-opacity-50 hover:bg-black hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Conditionally Render Details Section */}
        {type !== "List" && (
          <>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800">
                Live the life of your dreams with us
              </h1>
              <p className="text-gray-700 mt-2">
                Book with us and experience the ultimate life you've desired. A
                real place you can call home—a place of relaxation and comfort.
              </p>
            </div>

            {/* Button Section */}
            <div className="mt-6 text-center">
              <button className="px-6 py-3 rounded-lg ring-1 ring-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-300">
                Login / Register
              </button>
            </div>
             {/* Search Section */}
      <div className="flex flex-wrap justify-between items-center gap-6 mt-8 bg-white p-4 rounded-lg shadow-lg">
        {/* Destination Input */}
        <div className="flex items-center flex-grow space-x-2">
          <FontAwesomeIcon icon={faCar} className="text-gray-500" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="outline-none border-none text-gray-700 w-full"
          />
        </div>

        {/* Date Picker */}
        <div className="relative flex items-center space-x-2 flex-grow">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          />
          <span
            className="text-blue-700 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {`${date[0].startDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })} to ${date[0].endDate.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}`}
          </span>
          {showDatePicker && (
            <div className="absolute top-12 left-0 z-10 bg-white shadow-lg rounded-lg">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            </div>
          )}
        </div>

        {/* Guests Options */}
        <div className="flex items-center space-x-2 relative flex-grow">
          <FontAwesomeIcon
            icon={faPerson}
            className="text-gray-500 cursor-pointer"
          />
          <span
            className="text-blue-700 cursor-pointer"
            onClick={() => setOpenOptions(!openOptions)}
          >
            {`${options.adult} adults · ${options.Children} children · ${options.room} room`}
          </span>
          {openOptions && (
            <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg p-4 z-10 w-full max-w-xs">
              {[
                { label: "Adults", key: "adult", min: 1 },
                { label: "Children", key: "Children", min: 0 },
                { label: "Rooms", key: "room", min: 1 },
              ].map((option) => (
                <div
                  key={option.key}
                  className="flex justify-between items-center space-x-4 mb-4"
                >
                  <span className="text-gray-700">{option.label}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 bg-gray-200 rounded-lg"
                      onClick={() =>
                        setOptions((prev) => ({
                          ...prev,
                          [option.key]:
                            prev[option.key] > option.min
                              ? prev[option.key] - 1
                              : option.min,
                        }))
                      }
                    >
                      -
                    </button>
                    <span>{options[option.key]}</span>
                    <button
                      className="p-2 bg-gray-200 rounded-lg"
                      onClick={() =>
                        setOptions((prev) => ({
                          ...prev,
                          [option.key]: prev[option.key] + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto">
          Search
        </button>
      </div>
          </>
          
        )}
      </div>

     
    </div>
  );
};

export default Header;
