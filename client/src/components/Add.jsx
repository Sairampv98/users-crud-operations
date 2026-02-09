import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';


const Create = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/create`,
        user
      );
      toast.success(response.data.msg);
      navigate("/");
    } catch (error) {
      const message = error.response?.data?.msg||"An error occurered. Please try again";
      toast.error(message);
    }
  };

  return (
<div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow custom-card" style={{ maxWidth: "800px", width: "100%" ,padding:"2rem"}}>
        <Link to="/" className="text-decoration-none mb-3 d-block">
          &larr; Back
        </Link>
        <h3 className="text-center mb-4">Add User</h3>
        <form onSubmit={handleSubmit}>
        <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="name" className="form-label fw-semibold">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter name"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter email"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="age" className="form-label fw-semibold">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            id="age"
            name="age"
            autoComplete="off"
            placeholder="Enter age"
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="password" className="form-label fw-semibold">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter password"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100 fw-bold">
        ADD USER
      </button>
        </form>
      </div>
    </div>

  );
};

export default Create;
