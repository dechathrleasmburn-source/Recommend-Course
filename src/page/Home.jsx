import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container my-5 text-center py-5 bg-light rounded-3 shadow-sm">
      <h1 className="display-4 fw-bold text-primary mb-3">ยินดีต้อนรับสู่ Course Online</h1>
      <p className="lead text-muted mb-4">
        ยกระดับทักษะของคุณด้วยคอร์สเรียนออนไลน์คุณภาพสูง เรียนได้ทุกที่ ทุกเวลา
      </p>
      <Link to="/courses" className="btn btn-primary btn-lg px-4 gap-3">
        ดูคอร์สเรียนทั้งหมด
      </Link>
    </div>
  );
}

export default Home;