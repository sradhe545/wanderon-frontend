import React, { useState } from "react";
import "../style/Form.css";
import axios from "axios";
import { useAuth } from "../context/authentication";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../utils/constant";
const Login = () => {
  const initalFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initalFormData);
  const [errors, setErrors] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${URL}login`,
        formData
      );
      auth.setAuthToken(response?.data?.token);
      navigate("/product");
      setErrors("");
    } catch (error) {
      setErrors(error.response.data.error);
    }
  };

  return (
      <div className="registration-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
            />
            {errors && <span className="error">{errors}</span>}
          </div>
          <button type="submit">Login</button>
        <p><Link to='/'>Signup</Link></p>

        </form>
      </div>
  );
};
export default Login;
