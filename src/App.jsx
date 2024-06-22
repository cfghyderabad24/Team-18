// import React, { useEffect, useState } from 'react';
// import {  Route, Routes, useNavigate } from 'react-router-dom';
// import GridExample from './GridExample.jsx';
// import Cards from './Cards.jsx';

// const App = () => {
    
//     const navigate = useNavigate();

//     const cardsData = [
//         { id: 1, title: 'Data visualization with tables', icon: '📊',path:"/grid-example" },
//         { id: 2, title: 'Data visualization with charts', icon: '📈' },
//         { id: 3, title: 'Respond to given queries', icon: '💬' },
//         { id: 4, title: 'Send a new message', icon: '✉️' },
//         { id: 5, title: 'Add a new volunteer', icon: '👥' },
//         { id: 6, title: 'Add a new farmer', icon: '👩‍🌾' },
//       ];
//       const handleCardClick = (path) => {
//         // if (title === 'Data visualization with tables') {
//         //   history.push('/grid-example');
//         // }
//         //Add handling for other cards if needed
//         // navigate(path)
//         navigate(path)
//       };
//     // useEffect(()=>{
//     //     if(path){
//     //         navigate(path);
//     //     }
//     // },[path])
    
//   return (
 
//     <Routes>
//         <Route exact path="/" element={<div className="cards-container">
//       {cardsData.map((card) => (

//         <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
//           <span className="card-icon">{card.icon}</span>
//           <span className="card-title">{card.title}</span>
//         </div>
//       ))}
//     </div>}>
//         </Route>
//         <Route exact path="/grid-example" element={<GridExample/>}>

//         </Route>
       
//     </Routes>
   
//   );
// };


// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GridExample from './GridExample.jsx';
import Cards from './Cards.jsx';

const App = () => {
  const navigate = useNavigate();

  const cardsData = [
    { id: 1, title: 'Data visualization with tables', icon: '📊', path: "/grid-example" },
    { id: 2, title: 'Data visualization with charts', icon: '📈' },
    { id: 3, title: 'Respond to given queries', icon: '💬' },
    { id: 4, title: 'Send a new message', icon: '✉️' },
    { id: 5, title: 'Add a new volunteer', icon: '👥' },
    { id: 6, title: 'Add a new farmer', icon: '👩‍🌾' },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Routes>
      <Route exact path="/" element={
        <div className="cards-container">
          {cardsData.map((card) => (
            <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
              <span className="card-icon">{card.icon}</span>
              <span className="card-title">{card.title}</span>
            </div>
          ))}
        </div>
      } />
      <Route exact path="/grid-example" element={<GridExample />} />
    </Routes>
  );
};

export default App;
