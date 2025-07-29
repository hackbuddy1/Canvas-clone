import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import courses from '../data/courses.json';

const CoursesPage = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100">
      {/* Breadcrumb jaisa ek header */}
      <nav className="text-sm mb-4 text-gray-500">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <span className="mx-2"></span>
        <span className="text-gray-700">Courses</span>
      </nav>

      {/* Page ka main content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Courses</h1>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;