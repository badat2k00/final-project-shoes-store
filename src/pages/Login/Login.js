import { useNavigate ,Link} from "react-router-dom";
import { useState } from "react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // function onNavigateToSignUp() {
  //   navigate('/sign-up');
  // }
  const handleEmailChange = (event) => {
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
      localStorage.setItem('isLogged', JSON.stringify(true));
      // Chuyển hướng đến trang chính
      navigate('/');
      
    } else {
      alert('Sai email hoặc mật khẩu');
    }
  };

  return (
    <div  className="box">
      <div className="form-login">
      <h2>Account Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email*
          <br/>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password*
          <br/>
          <input type="password" value={password} onChange={handlePasswordChange} placeholder=""/>
        </label>
        <br />
        <br />
        <button type="submit" className="login-button">Login</button>
        <Link to='/sign-up'>
            Don't have an account?
        </Link>
      </form>
      </div>
    </div>
  );
};
export default Login;