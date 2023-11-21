import React, { useState, useEffect } from "react";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/CSS/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "../redux/userSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Loader from './Loader.js';
import { userLogin,userRegister,getUserbyId } from "../Service/Api";
export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setrole] = useState("customer");
  const [password, setPassword] = useState("");
  let [authMode, setAuthMode] = useState(true);
  const nav = useNavigate();

  // Loading state and useEffect to simulate loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  const changeAuthMode = () => {
    setAuthMode(!authMode);
  };

  // Validate the email format
  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    const logincred={email,password}
    
    // Validate the email
    // if (!validateEmail(email)) {
      //   toast.error("Please enter a valid email address.");
      //   return;
      // }
      const cred=await userLogin(logincred)
    if(((cred.status) === 200))
    {  
    toast.success("Sign in successful!");
    const getuid = (cred.data.uid); 
    localStorage.setItem('uid',getuid)
    console.log(cred)
    //nav("/user")
    localStorage.setItem('Token',cred.data.token)
    const user=await getUserbyId(getuid)
    console.log(user)
    if(user.data.role==="ADMIN")
    {
      nav("/AdminDashBoard")
    }
    else{
    nav("/user");
    }
  }
    
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const signup={name,email,password,role}
    console.log(signup)
    if (!email || !name || !role || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    const cred=await userRegister(signup)

    // Validate the email
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    else if(cred.data === "User registered successfully" && cred.status===200)
    {
    toast.success("Sign Up successful!");
      changeAuthMode()
    const getuid = (cred.data.uid);
    console.log(getuid)
  };
}

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="background-container">
          {authMode ? (
            <div className="Auth-form-container">
              <div className="Auth-form">
                <div className="Auth-form-content">
                  <form>
                    <h3 className="Auth-form-title">Welcome Back!!</h3>
                    <div className="text-center">
                      New User ?{" "}
                      <span className="link-primary" onClick={changeAuthMode}>
                        Sign Up
                      </span>
                    </div>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control mt-1"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control mt-1"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary" onClick={handleSignIn}>
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-2">Forgot password?</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="Auth-form-container">
              <form className="Auth-form" onSubmit={handleFormSubmit}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">
                    Hello there new around here, fill this form!
                  </h3>
                  <div className="text-center">
                    Wanna go back?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                      Sign In
                    </span>
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="e.g Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Role</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="customer"
                      value={role}
                      onChange={(e) => setrole(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        </div>
      )}
    </>
  );
}
