import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import TodoList from '../components/TodoList';
import courses from '../data/courses.json';

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 p-4 sm:p-6 bg-gray-100">
        {/* Bonus Notification Banner */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6 rounded-md" role="alert">
          <p className="font-bold">New Announcement</p>
          <p>The final exam schedule has been updated. Please check the calendar.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Courses</h2>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
          <div className="xl:col-span-1">
            <TodoList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;