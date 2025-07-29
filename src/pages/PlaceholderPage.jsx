import React from 'react';
import { Link } from 'react-router-dom';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-500">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <span className="mx-2"></span>
        <span className="text-gray-700">{title}</span>
      </nav>

      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600">This feature is currently under construction.</p>
        <p className="text-gray-600">Please check back later!</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;