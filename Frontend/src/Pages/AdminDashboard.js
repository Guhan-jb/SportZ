// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Loader from './Loader'; 

const Dashboard = () => {
  const [loading, setLoading] = useState(true); 
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false); 
    }, 3000); 

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  const handleAdd=()=>{
    nav("/AddProduct")
  }
  
  const HandleLogout = () => {
    dispatch(logout());
    nav('/');
  };
  
  const handleView = () => {
    
    nav('/AllProduct');
  };
  const handleUser=()=>{
    nav("/AllUsers")
  }
  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Admin Dashboard</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Users</h5>
                  <p className="card-text">View and manage user accounts.</p>
                  <button href="" className="btn btn-primary" onClick={handleUser}>
                    Go to Users
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Products</h5>
                  <p className="card-text">
                    Track and manage customer orders.
                  </p>
                  <button href="" className="btn btn-primary" onClick={handleView}>
                    Go to products
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Manage Products</h5>
                  <p className="card-text">
                    Add, edit, or delete products in your inventory.
                  </p>
                  <button href="" className="btn btn-primary" onClick={handleAdd}>
                    Add Product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={HandleLogout}>
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
