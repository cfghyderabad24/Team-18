import React, { useState,useEffect } from "react";
import bg from '../assets/bg.jpg';
import axios from 'axios';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import Alert from './Alert'; // Corrected import path
import { Link } from "react-router-dom";

const Authenticate = () => {
  const [reguser, setReguser] = useState('');
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
        reguser,
        regphone,
        regpassword
      });

      console.log(response.data);
