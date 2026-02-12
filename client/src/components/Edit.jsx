import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = 'http://localhost:3000';
const Edit = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/getone/${id}`
        );
        setUser(response.data);
      } catch (error) {
        const message =
          error.response?.data?.msg || "Failed to load user data.";
        toast.error(message);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/update/${id}`,
        user
      );
      toast.success(response.data.msg);
      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.msg || "Failed to update user data.";
      toast.error(message);
    }
  };

  return (
    <div>
      <div>
        <h3>Edit User</h3>
        <Link to={"/"}>Back</Link>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              value={user.name}
              onChange={handleChange}
              id="name"
              name="name"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              value={user.age}
              onChange={handleChange}
              id="age"
              name="age"
              placeholder="Enter age"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={user.password}
              onChange={handleChange}
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
