import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'
const Header = (props) => {
  const { cart } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // React hooks được cung cấp từ thư viện react-router-dom
  const navigate = useNavigate();
  const cartAmount = cart.length;

  const onNavigateToCartPage = () => {
    console.log(" I am here");
    navigate("/cart");
  };
  const handleLogout = () => {
    // logic hendleLogout
    localStorage.removeItem("isLogged");
    setIsLoggedIn(!isLoggedIn);
    navigate("/log-in");
   
  };
  
  
  return (
    <header>
     {isLoggedIn ?  (<nav>
        <div className="header">
          <div>
          <Link className="nav-link active" to="/">
            <img src="https://conversestore.vn/wp-content/uploads/2020/09/store-giay.png" alt="logo"/>
          </Link>
          </div>>
          <div className="center">
            <div className="center-item">
              <Link className="nav-link active" to="/">
                Home
              </Link></div>
            <div className="center-item">
              <Link className="nav-link" to="/about-us">
                About us
              </Link></div>
            <div className="center-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </div>
          </div>
          <div className="header-right">
            <div onClick={handleLogout}>Logout</div>
            <div
              // className="d-flex align-items-center gap-3 pointer-event"
              onClick={onNavigateToCartPage}
            >
              <FaCartPlus />
              <span>({cartAmount})</span>
            </div>
          </div>
        </div>
      </nav>)
      :(<nav>
        <div className="header">
          <div>
            <img src="https://conversestore.vn/wp-content/uploads/2020/09/store-giay.png" alt="logo"/>
          </div>
          <div className="center">
            <div className="center-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              </div>
            <div className="center-item">
              <Link className="nav-link" to="/about-us">
                About us
              </Link></div>
            <div className="center-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </div>
            
          </div>
          <div className="header-right">
            <div onClick={handleLogout}>Login</div>
            {/* <div
              // className="d-flex align-items-center gap-3 pointer-event"
              onClick={onNavigateToCartPage}
            >
              <FaCartPlus />
              <span>({cartAmount})</span>
            </div> */}
          </div>
        </div>
      </nav>)}
    </header>
  );
};

export default Header;



