import React from 'react';

function Courses() {
  const courseList = [
    { id: 1, title: 'Full-Stack Web Development', level: 'Beginner', duration: '40 ชม.' },
    { id: 2, title: 'React Hooks & State Management', level: 'Intermediate', duration: '20 ชม.' },
    { id: 3, title: 'UI/UX Design Fundamentals', level: 'Beginner', duration: '15 ชม.' }
  ];

  return (
    <div className="container my-5">
      <h2 className="border-bottom pb-3 mb-4 fw-bold text-secondary">คอร์สเรียนออนไลน์ของเรา</h2>
      <div className="row g-4">
        {courseList.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <span className="badge bg-info text-dark align-self-start mb-2">{course.level}</span>
                <h5 className="card-title fw-bold">{course.title}</h5>
                <p className="card-text text-muted small mt-auto">ระยะเวลาเรียน: {course.duration}</p>
                <button className="btn btn-outline-primary btn-sm w-100 mt-3">สมัครเรียน</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;