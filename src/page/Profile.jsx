import React from 'react';

function Profile() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 text-center p-4">
            <div className="mx-auto bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '100px', height: '100px', fontSize: '36px' }}>
              U
            </div>
            <h4 className="fw-bold mb-1">สมศักดิ์ รักเรียน</h4>
            <p className="text-muted small">ประเภทสมาชิก: Premium Member</p>
            <hr />
            <div className="text-start">
              <p className="mb-2"><strong>อีเมล:</strong> somsak@example.com</p>
              <p className="mb-2"><strong>คอร์สที่ลงทะเบียนแล้ว:</strong> 2 คอร์ส</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;