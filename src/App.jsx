import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CourseDetail from './pages/CourseDetail';
import PlaceholderPage from './pages/PlaceholderPage';

import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden pt-16 lg:pt-0">
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* === YAHAN BADLAV KIYA GAYA HAI === */}
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/calendar" element={<PlaceholderPage title="Calendar" />} />
              <Route path="/inbox" element={<PlaceholderPage title="Inbox" />} />
              <Route path="/help" element={<PlaceholderPage title="Help" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;