import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Logo</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
              {isLoggedIn && (
                <>
                  <Link href="/dashboard" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Dashboard</Link>
                  <Link href="/solar-plants" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Solar Plants</Link>
                  <Link href="/trading" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Trading</Link>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {isLoggedIn ? (
              <button onClick={logout} className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Log Out</button>
            ) : (
              <button onClick={login} className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Log In</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
