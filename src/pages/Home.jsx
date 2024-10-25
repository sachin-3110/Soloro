import React from 'react';
import HomeElement from './HomeElement'
const Home = () => {
    return (
        <div className="container text-black mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Soloro</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Is solar the key to a greener future? </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Sustainable and renewable energy source</li>
                        <li>Growing market with high potential returns</li>
                        <li>Contribute to reducing carbon emissions</li>
                        <li>Government incentives and tax benefits</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Platform Highlights</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Easy-to-use investment dashboard</li>
                        <li>Diverse portfolio of solar projects</li>
                        <li>Real-time performance tracking</li>
                        <li>Low minimum investment threshold</li>
                    </ul>
                </div>
            </div>
            <HomeElement />
            <div className="mt-8 bg-green-100 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Latest Solar Project</h2>
                <p className="mb-4">
                    <strong>Project Name:</strong> SunValley Solar Farm
                    <br />
                    <strong>Location:</strong> Arizona, USA
                    <br />
                    <strong>Capacity:</strong> 50 MW
                    <br />
                    <strong>Expected ROI:</strong> 8-10% annually
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Invest Now
                </button>
            </div>

        </div>


    );
};

export default Home;
