import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainEditFormPage.css'
const App = () => {


  return (
    <div className="maincontainer">
      <div class="container1 ">
        <Link to="/page1" class="button-29">Edit the form details</Link>
        <Link to="/page2" class="button-29">Messages</Link>
        <Link to="/page3" class="button-29">Queries</Link>
      </div>
    </div>
  );
}

export default App;
