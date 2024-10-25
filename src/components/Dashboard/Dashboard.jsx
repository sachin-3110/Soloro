import React from 'react';
import InvestmentSummary from './InvestmentSummary';
import EnvironmentalImpact from './EnvironmentalImpact';
import PortfolioOverview from './PortfolioOverview';
import RecentTransactions from './RecentTransactions';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
              <PortfolioOverview />
            </div>
            <div className=" bg-black rounded-lg shadow-md p-6">
              <h2 className="font-semibold mb-4 text-white text-2xl">Investment Summary</h2>
              <InvestmentSummary />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-black rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl text-white font-semibold mb-4 ">Environmental Impact</h2>
              <EnvironmentalImpact />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Transactions</h2>
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
