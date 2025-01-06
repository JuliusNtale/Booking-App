import React from 'react';

const Featured = () => {
  const destinations = [
    {
      name: 'Tanzania',
      properties: 'Over 205 Properties',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/5e/c8/d3/vista-aerea-y-playa.jpg?w=1200&h=-1&s=1',
    },
    {
      name: 'Malaysia',
      properties: 'Over 105 Properties',
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/e2/15/1b/caption.jpg?w=300&h=300&s=1',
    },
    {
      name: 'Canada',
      properties: 'Over 205 Properties',
      img: 'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2015/02/four-seasons-resort-whistler-british-columbia.jpg?ssl=1',
    },
    {
      name: 'South Africa',
      properties: 'Over 205 Properties',
      img: 'https://www.telegraph.co.uk/content/dam/Travel/hotels/2021/Jan/south-africa-noka-camp-terrace.jpg?imwidth=480',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className="relative h-60 w-full rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={destination.img}
            alt={`${destination.name}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            <h1 className="text-lg font-bold">{destination.name}</h1>
            <h2 className="text-sm">{destination.properties}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
