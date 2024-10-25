import React, { useState } from 'react';

const SolarPlants = () => {
  const [plants, setPlants] = useState([
    {
      id: 1,
      name: "SunValley Solar Farm",
      description: "A sprawling solar farm in the heart of Arizona, harnessing the abundant desert sunlight to power thousands of homes.",
      capacity: "50 MW",
      location: "Arizona, USA",
      image: "https://imgs.search.brave.com/gbKdKyRXnz7RKhUqVW3H4Gowk-Kd-yO-qYaf_pfiVyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzE4LzI1Lzkz/LzM2MF9GXzgxODI1/OTM5OF91V25ncENz/NGRWR0VQTTBrcmhz/WkRVVE8xUFhoWGdT/di5qcGc",
    },
    {
      id: 2,
      name: "Coastal Breeze Solar Park",
      description: "Situated along the California coastline, this solar park combines ocean breezes with solar power for optimal energy generation.",
      capacity: "30 MW",
      location: "California, USA",
      image: "https://imgs.search.brave.com/FwOduGCiBhPFWs7ivv6W1ru3Nq1QmmeY9dI1A_1G5eA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zb2xhci1wYW5l/bHMtd2hpdGUtYmFj/a2dyb3VuZC0zZC1y/ZW5kZXJpbmctcGlj/dHVyZV8xMjg4ODk2/LTIyMzc2LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
    },
    {
      id: 3,
      name: "Mountain Peak Solar Array",
      description: "High in the Colorado Rockies, this solar array takes advantage of the thin air and intense sunlight for maximum efficiency.",
      capacity: "25 MW",
      location: "Colorado, USA",
      image: "https://img.freepik.com/premium-photo/photo-solar-panel-with-sun-shining-through-clouds_1313119-2583.jpg?uid=R170480116&ga=GA1.1.38336339.1729876652&semt=ais_hybrid",
    },
  ]);

  const handleBuy = (plantId) => {
    console.log(`Buying shares in plant ${plantId}`);
    // Implement buy logic here
  };

  const handleSell = (plantId) => {
    console.log(`Selling shares in plant ${plantId}`);
    // Implement sell logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Solar Plants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plants.map((plant) => (
          <div key={plant.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 flex justify-center items-center px-5">
                <img className="h-48 w-full object-cover md:w-48" src={plant.image} alt={plant.name} />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{plant.capacity}</div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{plant.name}</h2>
                <p className="mt-2 text-gray-500">{plant.description}</p>
                <p className="mt-2 text-sm text-gray-600">{plant.location}</p>
                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleBuy(plant.id)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Buy Shares
                  </button>
                  <button
                    onClick={() => handleSell(plant.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sell Shares
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarPlants;
