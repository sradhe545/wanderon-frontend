import React, { useEffect } from "react";
import "../style/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authentication";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.removeAuthToken();
    navigate("/login");
  };
  useEffect(() => {
    if (auth.getAuthToken()) {
      navigate("/product");
    }
  }, []);
  return (
    <nav className="navbar">
      <div className="logo">WanderOn</div>
      <ul className="nav-links">
        {auth.getAuthToken() ? <li onClick={handleLogout}>Logout</li> : ""}
        <li>
          <Link to="/product">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
