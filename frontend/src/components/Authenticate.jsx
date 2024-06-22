import React, { useState,useEffect } from "react";
import bg from '../assets/bg.jpg';
import axios from 'axios';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import Alert from './Alert'; // Corrected import path
import { Link } from "react-router-dom";

const Authenticate = () => {
  const [firstname, setFirstName] = useState('');
  const[lastname,setLastName]=useState('');
  const [regphone, setRegphone] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [logphone, setLogphone] = useState('');
  const [logpassword, setLogpassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const [alertt, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstname,
        lastname,
        regphone,
        regpassword
      });

      console.log(response.data);

      if (response.data.message === 'success') {
        showAlert("Registration success", "success");
        navigate('/form');
        setIsLoggedIn(true);
      } else {
        navigate('/farmer');
        showAlert("Registration failed", "warning");
      }
    } catch (error) {
      console.error('Error registering user:', error);
      showAlert("Registration failed", "warning");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        phone: logphone,
        password: logpassword
      });

      console.log(response.data);

      if (response.data.message === 'success') {
        showAlert("Login success", "success");
        setIsLoggedIn(true);
      } else {
        showAlert("Login failed. Please check your credentials.", "danger");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      showAlert("Enter valid information", "danger");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
      
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    return null; // Don't render the component if logged in
  }

  return (
    <>

      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body login">
            <div className="container">
              <div className="row full-height justify-content-center">
                <div className="section text-center">
                <Alert alertt={alertt} className="modal "/> {/* Corrected prop name */}
                  <h6 className="mb-0 pb-3">
                    <pre><span style={{ color: 'white'  }} className="mt-2">Log In     Sign Up </span></pre>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto slide-fwd-center">
                    <div className="card-3d-wrapper">
                      <div className="card-front">

                        <form style={{ backgroundImage:` url(${bg}) `, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Log In</h4>
                              <div className="form-group mt-3">
                                <input type="tel" name="phone" className="form-style" placeholder="Your Phone Number" id="logphone" autoComplete="off" required onChange={(e) => setLogphone(e.target.value)} />
                                <i className="input-icon uil uil-mobile-android-alt"></i>
                              </div>
                              <div className="form-group mt-3">
                                <input type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required onChange={(e) => setLogpassword(e.target.value)} />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <Link to='./MainBody'  className="forbuttons" onClick={handleLogin}><span></span><span></span><span></span><span></span>Login</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-back">
                        <form onSubmit={handleRegister} style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mt-3">Sign Up</h4>
                              <div className="form-group mt-2">
                                <input type="text" name="firstname" className="form-style" placeholder="Your First Name" id="logname" autoComplete="off" required onChange={(e) => setLastName(e.target.value)} />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-2">
                                <input type="text" name="lastname" className="form-style" placeholder="Your Last Name" id="logname" autoComplete="off" required onChange={(e) => setFirstName(e.target.value)} />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-3">
                                <input type="tel" name="regphone" className="form-style" placeholder="Your Phone Number" id="logphone" autoComplete="off" required onChange={(e) => setRegphone(e.target.value)} />
                                <i className="input-icon uil uil-mobile-android-alt"></i>
                              </div>
                             
                              <div className="form-group mt-3 ">
                                <input type="password" name="regpassword" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required onChange={(e) => setRegpassword(e.target.value)} />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <Link to='./form'  className="forbuttons" onClick={handleRegister}><span></span><span></span><span></span><span></span>Register</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authenticate;