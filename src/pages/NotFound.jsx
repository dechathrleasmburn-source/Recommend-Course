import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-75 py-5 animate__animated animate__fadeIn">
      <div className="text-center p-5 bg-white rounded-5 shadow-sm border border-light-subtle max-width-md m-3">
        
        {/* ไอคอนแสดงความผิดพลาด */}
        <div className="d-inline-flex p-4 bg-danger-subtle text-danger rounded-circle mb-4 display-1 fw-bold">
          🔍❌
        </div>

        {/* รหัส Error */}
        <h1 className="display-1 fw-extrabold text-danger mb-2">404</h1>
        
        {/* ข้อความแจ้งเตือน */}
        <h3 className="fw-bold text-dark mb-3">ไม่พบหน้าเว็บที่คุณต้องการ</h3>
        
        <p className="text-secondary mb-4 mx-auto max-width-sm">
          ขออภัยด้วยครับ หน้าเว็บที่คุณกำลังพยายามเข้าถึงอาจถูกลบไปแล้ว เปลี่ยนชื่อใหม่ 
          หรือ URL อาจจะคลาดเคลื่อนไปเล็กน้อย กรุณาตรวจสอบความถูกต้องอีกครั้ง
        </p>

        {/* ปุ่มพากลับหน้าหลัก */}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link to="/Home" className="btn btn-primary btn-lg px-4 gap-3 shadow-sm fw-semibold rounded-3">
            🏠 กลับสู่หน้าหลัก
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline-secondary btn-lg px-4 rounded-3"
          >
            ⬅️ ย้อนกลับไปก่อนหน้า
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound