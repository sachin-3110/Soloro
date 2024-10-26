import React from 'react';
import { CheckIcon } from 'lucide-react';

export default function Component() {
  return (
    <div className="min-h-full bg-[#323232] text-white rounded-xl">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center text-green-400 mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516z"/>
              </svg>
              <span className="uppercase font-semibold">Soloro</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
             Join The Solar movement-invest, save, impact.            </h1>
            <ul className="space-y-4 ">
              {[
                'Buy solar panels in rooftop projects',
                'Earn 10-13% returns from electricity your panels generate',
                'Vested takes care of the installation and maintenance of your panels'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-navy-900 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition duration-300">
              Start Investing
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i0.wp.com/powerledger.io/wp-content/uploads/2024/09/wind-power-generation-2023-11-27-05-14-48-utc-1.jpg?fit=1400%2C560&ssl=1"
              alt="Solar panel installation illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}