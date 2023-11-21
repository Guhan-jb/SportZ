import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserbyId } from '../Service/Api';
import { useState,useEffect } from 'react';
const UserDashboard = () => {
  const uid=localStorage.getItem('uid')
  const [user,setUser]=useState([]) 
  useEffect(() => {
    const fetchOrders = async () => {
        try {
            const response = await getUserbyId(localStorage.getItem('uid'));
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user orders:", error);
        }
    }

    fetchOrders();
}, []);

  const nav=useNavigate()
  const handleCartbtn=()=>{
    nav("/cart")
  }
  return (
    <div className="container mt-5">
      <div className="row"> 
        <div className="col-md-9">
          <h2>Welcome {user.name} to your profile</h2>
        </div>
      </div>
      <br />
      <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Cart</h5>
                  <p className="card-text">View and manage your orders.</p>
                  <button className="btn btn-primary" onClick={handleCartbtn}>Go to cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Edit Profile</h5>
                  <p className="card-text">Edit your profile information.</p>
                  <button className="btn btn-primary">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Subscription Details</h5>
                  <p className="card-text">Manage your subscription details.</p>
                  <button className="btn btn-primary">Manage Subscription</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default UserDashboard;
