import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Ensure this imports your custom CSS for styling

const Cards = ({}) => {
  //const history = useHistory();


  const handleCardClick = (path) => {
    // if (title === 'Data visualization with tables') {
    //   history.push('/grid-example');
    // }
    //Add handling for other cards if needed
    // navigate(path)
    //setPath(path)
  };

  const cardsData = [
    { id: 1, title: 'Data visualization with tables', icon: '📊',path:"/grid-example" },
    { id: 2, title: 'Data visualization with charts', icon: '📈' },
    { id: 3, title: 'Respond to given queries', icon: '💬' },
    { id: 4, title: 'Send a new message', icon: '✉️' },
    { id: 5, title: 'Add a new volunteer', icon: '👥' },
    { id: 6, title: 'Add a new farmer', icon: '👩‍🌾' },
  ];

  return (
    <div className="cards-container">
        {/* testcards */}
      {cardsData.map((card) => (
        <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
          <span className="card-icon">{card.icon}</span>
          <span className="card-title">{card.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
