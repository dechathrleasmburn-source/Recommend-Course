import React from 'react'

const Home = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* 1. Hero Section (ส่วนต้อนรับด้านบน) */}
      <div className="bg-light p-5 rounded-lg m-3 rounded-5 shadow-sm text-center border border-light-subtle">
        <h1 className="display-4 fw-bold text-primary mb-3">
          ยินดีต้อนรับสู่หน้าหลักของเรา!
        </h1>
        <p className="lead text-muted fs-4 max-width-md mx-auto">
          ยินดีต้อนรับเข้าสู่เว็บไซต์ที่พัฒนาด้วย React และตกแต่งอย่างสวยงามด้วย Bootstrap 5 
          ทำงานได้รวดเร็ว รองรับทุกหน้าจอ
        </p>
        <hr className="my-4 w-25 mx-auto text-primary border-2 opacity-50" />
        <p className="text-secondary mb-4">
          นี่คือตัวอย่างการใช้ Utilities Classes ทั้งหมดโดยไม่มีการเขียนไฟล์ CSS เพิ่มเติม
        </p>
        <button className="btn btn-primary btn-lg px-5 shadow-sm fw-semibold">
          เริ่มต้นใช้งาน
        </button>
      </div>

      {/* 2. Features Section (ส่วนแสดงข้อมูลแบบการ์ด 3 คอลัมน์) */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          
          {/* การ์ดใบที่ 1 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <div className="d-inline-flex p-3 bg-primary-subtle text-primary rounded-circle mb-3 fs-3 fw-bold">
                  ⚡
                </div>
                <h5 className="card-title fw-bold text-dark">รวดเร็วทันใจ</h5>
                <p className="card-text text-muted small">
                  โหลดหน้าเว็บได้อย่างรวดเร็วด้วยกลไกของ React Router และโครงสร้างเบาหวิวของ Bootstrap
                </p>
              </div>
            </div>
          </div>

          {/* การ์ดใบที่ 2 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <div className="d-inline-flex p-3 bg-success-subtle text-success rounded-circle mb-3 fs-3 fw-bold">
                  📱
                </div>
                <h5 className="card-title fw-bold text-dark">รองรับทุกอุปกรณ์</h5>
                <p className="card-text text-muted small">
                  แสดงผลได้อย่างสมบูรณ์แบบไม่ว่าจะเปิดบนคอมพิวเตอร์ แท็บเล็ต หรือสมาร์ทโฟน
                </p>
              </div>
            </div>
          </div>

          {/* การ์ดใบที่ 3 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
              <div className="card-body">
                <div className="d-inline-flex p-3 bg-warning-subtle text-warning rounded-circle mb-3 fs-3 fw-bold">
                  🎨
                </div>
                <h5 className="card-title fw-bold text-dark">ดีไซน์ทันสมัย</h5>
                <p className="card-text text-muted small">
                  ใช้ชุดสีและสัดส่วนที่ได้มาตรฐานสากล สบายตา ถูกใจผู้ใช้งานแน่นอน
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Footer Banner ด้านล่าง */}
      <div className="bg-dark text-white p-4 rounded-4 text-center shadow-sm mx-3 mb-5">
        <h4 className="fw-light mb-0">
          ขับเคลื่อนด้วยพลังของ <span className="text-info fw-bold">React</span> + <span className="text-warning fw-bold">Bootstrap 5</span>
        </h4>
      </div>
    </div>
  )
}

export default Home