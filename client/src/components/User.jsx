import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import toast from "react-hot-toast";
const API_BASE_URL = 'http://localhost:3000';
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response= await axios.get(`${API_BASE_URL}/api/getall`);
      toast.success("Data Fetched Successfully");
        setUsers(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      axios.delete(`${API_BASE_URL}/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success("User Deleted Successfully",{position:"top-right"});
    } catch (error) {}
  };

  return (
    <div className="container my-5 ">
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items mb-3">
            <h3>Users List</h3>

            <Link to={"/add"} className="btn btn-primary">
              <i className="fa fa-plus me-1"></i>Add User
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>
                      <div className="d-flex justify-center">
                        <button
                          className="btn btn-danger btn-sm me-2"
                          onClick={() => deleteUser(user._id)}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                        <Link to={`/edit/${user._id}`}className="btn btn-success btn-sm">
                          <i className="fa fa-pen"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
