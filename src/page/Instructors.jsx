import React from 'react';

function Instructors() {
  const instructors = [
    { name: 'อาจารย์สมชาย สายโค้ด', expert: 'Web Developer' },
    { name: 'อาจารย์สมหญิง มิ่งมิตร', expert: 'UI/UX Designer' }
  ];

  return (
    <div className="container my-5">
      <h2 className="border-bottom pb-3 mb-4 fw-bold text-secondary">รายชื่อผู้สอน</h2>
      <div className="row g-4">
        {instructors.map((ins, index) => (
          <div className="col-md-6" key={index}>
            <div className="d-flex align-items-center p-3 bg-white border rounded shadow-sm">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '60px', height: '60px', fontSize: '24px' }}>
                {ins.name[6]}
              </div>
              <div className="ms-3">
                <h5 className="mb-1 fw-bold">{ins.name}</h5>
                <p className="text-muted mb-0 small">เชี่ยวชาญด้าน: {ins.expert}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;