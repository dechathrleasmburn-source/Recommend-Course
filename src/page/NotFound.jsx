import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container my-5 text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h3 className="mb-3">ไม่พบหน้าเว็บที่คุณต้องการ</h3>
      <p className="text-muted mb-4">ขออภัยด้วยครับ URL ที่คุณเรียกใช้งานอาจไม่ถูกต้องหรือหน้านี้ถูกลบไปแล้ว</p>
      <Link to="/" className="btn btn-primary px-4">กลับสู่หน้าหลัก</Link>
    </div>
  );
}

export default NotFound;