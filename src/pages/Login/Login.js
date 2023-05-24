import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    function onNavigateToSignUp(){
        navigate('/sign-up');
    }
    const handleEmailChange = (event)=> {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      // Kiểm tra xem email và mật khẩu khớp với thông tin đã lưu trong local storage hay không
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        // Chuyển hướng đến trang chính
        navigate('/');
      } else {
        alert('Sai email hoặc mật khẩu');
      }
    };
  
    return (
      <div>
        <h2>Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Mật khẩu:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Đăng nhập</button>
          <button type='submit' onClick={onNavigateToSignUp}>Đăng ký</button>
        </form>
      </div>
    );
  };
  export default Login;