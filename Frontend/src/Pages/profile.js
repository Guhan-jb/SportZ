import React, { useState } from 'react';
import '../Assets/CSS/Profile.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user1=useSelector(selectUser)
  const [user, setUser] = useState({
    name: 'John Doe',
    mobileNumber: '123-456-7890',
    email: user1.email,
    address: '123 Main St, City, Country',
  });

  const [isDirty, setIsDirty] = useState(false);

  const handleUpdate = (field, value) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
    setIsDirty(true);
  };

  const handleSave = () => {
    console.log('Saving changes:', user);
    setIsDirty(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => handleUpdate('name', e.target.value)}
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            value={user.mobileNumber}
            onChange={(e) => handleUpdate('mobileNumber', e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={user.email}
            onChange={(e) => handleUpdate('email', e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            value={user.address}
            onChange={(e) => handleUpdate('address', e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;