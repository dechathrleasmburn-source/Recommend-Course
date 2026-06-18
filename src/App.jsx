import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

// Import หน้าทั้งหมดจากโฟลเดอร์ page
import Home from './page/Home';
import Courses from './page/Courses';
import Instructors from './page/Instructors';
import Profile from './page/Profile'; // เปลี่ยนตามที่แก้ไขชื่อไฟล์นะครับ
import NotFound from './page/NotFound';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light text-dark">
        
        {/* Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold text-info" to="/">
              CourseOnline
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-info' : ''}`} to="/">
                    หน้าแรก
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-info' : ''}`} to="/courses">
                    คอร์สเรียน
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-info' : ''}`} to="/instructors">
                    ผู้สอน
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-info' : ''}`} to="/profile">
                    โปรไฟล์
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/profile" element={<Profile />} />
            {/* ดักหน้าเว็บที่ไม่มีอยู่จริง (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto border-top border-secondary">
          <div className="container">
            <small>&copy; {new Date().getFullYear()} course-online-web. All Rights Reserved.</small>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;