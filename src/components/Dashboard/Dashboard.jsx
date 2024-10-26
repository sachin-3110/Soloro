import React, { useEffect, useState } from 'react';
import InvestmentSummary from './InvestmentSummary';
import EnvironmentalImpact from './EnvironmentalImpact';


const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load transactions from localStorage
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg shadow-md p-6">
              <h2 className="font-semibold mb-4 text-white text-2xl">Investment Summary</h2>
              <InvestmentSummary />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-black rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl text-white font-semibold mb-4">Environmental Impact</h2>
              <EnvironmentalImpact />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">Recent Transactions</h2>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Share</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Quantity</th>
                      <th className="px-4 py-2">Price</th>
                      <th className="px-4 py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(transaction => (
                      <tr key={transaction.id}>
                        <td className="border px-4 py-2">{transaction.date}</td>
                        <td className="border px-4 py-2">{transaction.shareName}</td>
                        <td className="border px-4 py-2">{transaction.type}</td>
                        <td className="border px-4 py-2">{transaction.quantity}</td>
                        <td className="border px-4 py-2">${transaction.price.toFixed(2)}</td>
                        <td className="border px-4 py-2">${transaction.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
