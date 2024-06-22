import './styles/App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Routes, Route } from 'react-router-dom';
import { UserContext } from './UserContext';
import { useLocation } from 'react-router-dom';
import Authenticate from './components/Authenticate';
import Form from './components/Form';
function App() {
  const location = useLocation(); // Use useLocation hook from react-router-dom

  useEffect(() => {
    const originalTitle = document.title;
  
    const handleBlur = () => {
      document.title = "Come back 😢";
    };
  
    const handleFocus = () => {
      document.title = originalTitle;
    };
  
    // Ensure correct event listener registration
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
  
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount


  return (
    <>
    <>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/farmer' element={<Authenticate />} />
      <Route path='/form' element={<Form />} />
      <Route path='/volunteer' element={<Authenticate />} />
      </Routes>
      
    </>
    <></>
    </>
  );
}

export default App;