import React, { useState } from "react";
import "../style/Form.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../utils/constant";
const Signup = () => {
  const initalFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initalFormData);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}signup`, formData);
      setFormData(initalFormData);
      setErrors("");
      alert(`${response.data.message}`);
      navigate("/login");
    } catch (error) {
      setErrors(error.response.data.error);
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Register</h2>
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
          />
          {errors && <span className="error">{errors}</span>}
        </div>
        <button type="submit">Register</button>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
