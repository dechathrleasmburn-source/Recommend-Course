import React from 'react'

const About = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      {/* 1. Header Section */}
      <div className="bg-success-subtle p-5 rounded-5 shadow-sm text-center border border-success-subtle m-3">
        <h1 className="display-4 fw-bold text-success mb-3">เกี่ยวกับเรา</h1>
        <p className="lead text-muted fs-4 max-width-md mx-auto">
          ทำความรู้จักทีมงานและพันธกิจของเราในการพัฒนาเทคโนโลยีเพื่อความสะดวกสบายของคุณ
        </p>
      </div>

      {/* 2. Story / Vision Section (Two Column) */}
      <div className="container my-5">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <span className="badge bg-success px-3 py-2 rounded-pill mb-3">วิสัยทัศน์ของเรา</span>
            <h2 className="fw-bold mb-4">เรามุ่งมั่นสร้างสรรค์ ผลงานที่มีคุณภาพ</h2>
            <p className="text-secondary mb-3">
              เริ่มต้นจากกลุ่มผู้พัฒนาขนาดเล็กที่ต้องการสร้างโซลูชันที่ง่ายและทรงพลัง 
              พวกเราพัฒนาทักษะการทำงานร่วมกันอย่างเป็นระบบและก้าวข้ามทุกข้อจำกัดเพื่อให้ผู้ใช้งานได้รับสิ่งที่ดีที่สุด
            </p>
            <p className="text-secondary">
              ด้วยการนำเทคโนโลยี React และการออกแบบระดับมาตรฐานสากลจาก Bootstrap 
              เรามั่นใจว่าผลงานทุกชิ้นจะสามารถตอบโจทย์ความต้องการได้อย่างมีประสิทธิภาพและสอดคล้องกับความต้องการของผู้ใช้ในปัจจุบัน
            </p>
          </div>
          
          <div className="col-12 col-md-6">
            <div className="p-4 bg-light rounded-4 shadow-sm border border-light-subtle">
              <div className="d-flex align-items-start mb-4">
                <div className="p-3 bg-white text-success rounded-3 shadow-sm me-3 fs-3 fw-bold">
                  🎯
                </div>
                <div>
                  <h5 className="fw-bold">เป้าหมายหลัก</h5>
                  <p className="text-muted small mb-0">ส่งมอบผลงานที่ตอบสนองความต้องการของผู้ใช้งานอย่างแท้จริงและเข้าถึงง่ายที่สุด</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <div className="p-3 bg-white text-success rounded-3 shadow-sm me-3 fs-3 fw-bold">
                  ❤️
                </div>
                <div>
                  <h5 className="fw-bold">ค่านิยมองค์กร</h5>
                  <p className="text-muted small mb-0">ทำงานด้วยใจรัก ใส่ใจทุกรายละเอียดของงาน และเปิดรับทุกข้อเสนอแนะเพื่อพัฒนาอย่างต่อเนื่อง</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Stat/Milestones (สถิติความสำเร็จ) */}
      <div className="bg-light py-5 rounded-5 m-3 shadow-sm border border-light-subtle">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="fs-1 fw-bold text-success">5+</div>
              <div className="text-muted small fw-semibold">ปีที่เชี่ยวชาญ</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-1 fw-bold text-success">150+</div>
              <div className="text-muted small fw-semibold">โปรเจกต์ที่สำเร็จ</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-1 fw-bold text-success">99%</div>
              <div className="text-muted small fw-semibold">ความพึงพอใจลูกค้า</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fs-1 fw-bold text-success">24/7</div>
              <div className="text-muted small fw-semibold">การดูแลช่วยเหลือ</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Team Section (ส่วนของทีมงาน) */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5 text-dark">ทีมงานมืออาชีพของเรา</h2>
        <div className="row g-4">
          
          {/* สมาชิกคนที่ 1 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="d-inline-flex mx-auto p-4 bg-success-subtle text-success rounded-circle mb-3 fs-1 fw-bold">
                🧑‍💻
              </div>
              <h5 className="card-title fw-bold mb-1">สมชาย ดีใจ</h5>
              <p className="text-success small fw-semibold mb-3">Lead Developer</p>
              <p className="card-text text-muted small">
                ผู้เชี่ยวชาญด้าน React และสถาปัตยกรรมระบบ คอยควบคุมและดูแลคุณภาพโค้ดรวมถึงระบบเบื้องหลังทั้งหมด
              </p>
            </div>
          </div>

          {/* สมาชิกคนที่ 2 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="d-inline-flex mx-auto p-4 bg-success-subtle text-success rounded-circle mb-3 fs-1 fw-bold">
                👩‍🎨
              </div>
              <h5 className="card-title fw-bold mb-1">สมศรี มีสุข</h5>
              <p className="text-success small fw-semibold mb-3">UI/UX Designer</p>
              <p className="card-text text-muted small">
                ผู้ออกแบบประสบการณ์การใช้งานและหน้าตาเว็บเพื่อให้ผู้ใช้งานได้รับความสะดวกและรู้สึกสนุกทุกครั้งที่เข้ามาใช้งาน
              </p>
            </div>
          </div>

          {/* สมาชิกคนที่ 3 */}
          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div className="d-inline-flex mx-auto p-4 bg-success-subtle text-success rounded-circle mb-3 fs-1 fw-bold">
                🕵️‍♂️
              </div>
              <h5 className="card-title fw-bold mb-1">สมศักดิ์ รักเรียน</h5>
              <p className="text-success small fw-semibold mb-3">Project Manager</p>
              <p className="card-text text-muted small">
                ผู้คอยประสานงานและดูแลภาพรวมของโปรเจกต์ให้ก้าวหน้าตามเป้าหมายและส่งมอบงานได้ตรงต่อเวลาอย่างสมบูรณ์แบบ
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About