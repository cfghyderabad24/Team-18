import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css'

const Cards = () => {
  const navigate = useNavigate();

  const cardsData = [
    { id: 1, title: 'Data visualization with tables', icon: '📊', path: '/grid-example' },
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
    <div className="cards-container">
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
