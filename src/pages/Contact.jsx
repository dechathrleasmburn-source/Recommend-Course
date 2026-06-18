import React from 'react'

const Contact = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* 1. Header Section */}
      <div className="bg-warning-subtle p-5 rounded-5 shadow-sm text-center border border-warning-subtle m-3">
        <h1 className="display-4 fw-bold text-dark mb-3">ติดต่อเรา</h1>
        <p className="lead text-muted fs-4 max-width-md mx-auto">
          มีคำถาม ข้อเสนอแนะ หรือต้องการความช่วยเหลือ? ส่งข้อความหาเราได้ตลอดเวลา
        </p>
      </div>

      {/* 2. Main Content: Contact Info & Form */}
      <div className="container my-5">
        <div className="row g-5">
          
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ (Contact Information) */}
          <div className="col-12 col-lg-5">
            <h3 className="fw-bold text-dark mb-4">ช่องทางการติดต่อ</h3>
            <p className="text-secondary mb-4">
              คุณสามารถเดินทางมาหาเราที่สำนักงาน หรือติดต่อผ่านช่องทางออนไลน์และเบอร์โทรศัพท์ด้านล่างนี้ ทีมงานของเราพร้อมให้บริการคุณเสมอ
            </p>

            {/* ที่อยู่ */}
            <div className="d-flex align-items-center p-3 bg-light rounded-4 mb-3 shadow-sm border border-light-subtle">
              <div className="p-3 bg-white text-warning rounded-3 shadow-sm me-3 fs-4 fw-bold">
                📍
              </div>
              <div>
                <h6 className="fw-bold mb-1">ที่ตั้งสำนักงาน</h6>
                <p className="text-muted small mb-0">123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</p>
              </div>
            </div>

            {/* เบอร์โทร */}
            <div className="d-flex align-items-center p-3 bg-light rounded-4 mb-3 shadow-sm border border-light-subtle">
              <div className="p-3 bg-white text-warning rounded-3 shadow-sm me-3 fs-4 fw-bold">
                📞
              </div>
              <div>
                <h6 className="fw-bold mb-1">เบอร์โทรศัพท์</h6>
                <p className="text-muted small mb-0">02-123-4567 (จันทร์ - ศุกร์ 09:00 - 18:00 น.)</p>
              </div>
            </div>

            {/* อีเมล */}
            <div className="d-flex align-items-center p-3 bg-light rounded-4 mb-4 shadow-sm border border-light-subtle">
              <div className="p-3 bg-white text-warning rounded-3 shadow-sm me-3 fs-4 fw-bold">
                ✉️
              </div>
              <div>
                <h6 className="fw-bold mb-1">อีเมลติดต่อ</h6>
                <p className="text-muted small mb-0">support@yourdomain.com</p>
              </div>
            </div>

            {/* แผนที่จำลอง (Mockup Map Location) */}
            <div className="bg-dark text-white p-4 rounded-4 text-center shadow-sm position-relative overflow-hidden">
              <div className="py-4">
                <span className="fs-1 d-block mb-2">🗺️</span>
                <h6 className="fw-bold mb-1">ดูแผนที่บน Google Maps</h6>
                <p className="small text-secondary mb-3">คลิกเพื่อดูเส้นทางมายังสำนักงานใหญ่ของเรา</p>
                <button className="btn btn-outline-warning btn-sm px-3 rounded-pill">เปิดแผนที่</button>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: ฟอร์มติดต่อ (Contact Form) */}
          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h3 className="fw-bold text-dark mb-4">ส่งข้อความหาเรา</h3>
              
              <form>
                <div className="row g-3">
                  {/* ชื่อ-นามสกุล */}
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold small text-secondary">ชื่อ-นามสกุล</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6" placeholder="สมชาย สายลุย" />
                  </div>
                  
                  {/* อีเมล */}
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold small text-secondary">อีเมลของคุณ</label>
                    <input type="email" className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6" placeholder="somchai@email.com" />
                  </div>

                  {/* หัวข้อเรื่อง */}
                  <div className="col-12">
                    <label className="form-label fw-semibold small text-secondary">หัวข้อติดต่อ</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6" placeholder="สอบถามราคาโปรเจกต์ / สมัครงาน / แจ้งปัญหา" />
                  </div>

                  {/* ข้อความ */}
                  <div className="col-12">
                    <label className="form-label fw-semibold small text-secondary">รายละเอียดข้อความ</label>
                    <textarea className="form-control bg-light border-0 rounded-3 text-dark fs-6" rows="4" placeholder="พิมพ์ข้อความที่คุณต้องการติดต่อเราที่นี่..."></textarea>
                  </div>

                  {/* ปุ่มกดส่ง */}
                  <div className="col-12 pt-2">
                    <button type="button" className="btn btn-warning btn-lg w-100 text-dark fw-bold shadow-sm rounded-3 py-3">
                      ส่งข้อความติดต่อ 🚀
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact