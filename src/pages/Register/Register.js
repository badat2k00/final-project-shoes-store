import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    //Kiểm tra xem email và mật khẩu đã đủ dài và đúng định dạng hay chưa
    if (email.length < 8 || password.length < 8 || !email.includes('@')) {
      alert('Email và mật khẩu cần có ít nhất 8 ký tự và định dạng email hợp lệ');
      return;
    }

    // Lưu thông tin người dùng vào local storage
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert("Đăng ký thành công");
    // Chuyển hướng đến trang chính
    navigate('/log-in')
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center rounded-3 '>
      <h2>Đăng ký</h2>
      <form onSubmit={handleRegister} >
        <label>
          Email:
          <br/>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Mật khẩu:
          <br/>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <div className='d-flex flex justify-content-center align-items-center mt-2'>
        <button type="submit">Đăng ký</button>
        </div>
      </form>
    </div>
  );
};



export default Register;