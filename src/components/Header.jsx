import React from 'react';

const Header = () => {
  const studentName = "Alex";
  // This line has been fixed:
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white shadow-sm p-4 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome, {studentName}
          </h1>
          <p className="text-gray-500">{currentDate}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;