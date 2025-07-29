import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import courses from '../data/courses.json';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');

  if (!course) {
    return <div className="p-6">Course not found. <Link to="/" className="text-blue-500">Go back to Dashboard</Link></div>;
  }

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-500">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <span className="mx-2"></span>
        <span className="text-gray-700">{course.title}</span>
      </nav>

      <header className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <p className="text-gray-600">Instructor: {course.instructor}</p>
      </header>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'assignments' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assignments
            </button>
            <button
              onClick={() => setActiveTab('grades')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'grades' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Grades
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Course Overview</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">This is a detailed overview of {course.title}. In this course, you will learn the fundamentals and advanced concepts. The instructor is {course.instructor}. Welcome and we hope you enjoy the course material!</p>
          </div>
        )}
        {activeTab === 'assignments' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Assignments</h2>
            <ul className="mt-4 space-y-4">
              <li className="p-4 bg-gray-50 rounded-md">Assignment 1: Due 2025-08-05</li>
              <li className="p-4 bg-gray-50 rounded-md">Assignment 2: Due 2025-08-12</li>
              <li className="p-4 bg-gray-50 rounded-md">Final Project: Due 2025-08-20</li>
            </ul>
          </div>
        )}
        {activeTab === 'grades' && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Grades</h2>
            <p className="mt-4 text-gray-700">Your current grade is: <span className="font-bold text-green-600">A-</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;