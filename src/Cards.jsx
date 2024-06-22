import React from 'react';

const Cards = ({ handleCardClick }) => {
  const cardsData = [
    {
      id: 1,
      title: 'Data visualization with tables',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Data visualization with charts',
      icon: '📈',
    },
    {
      id: 3,
      title: 'Respond to given queries',
      icon: '💬',
    },
    {
      id: 4,
      title: 'Send a new message',
      icon: '✉️',
    },
    {
      id: 5,
      title: 'Add a new volunteer',
      icon: '👥',
    },
    {
      id: 6,
      title: 'Add a new farmer',
      icon: '👩‍🌾',
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card" onClick={() => handleCardClick(card.title)}>
          <span className="card-icon">{card.icon}</span>
          <span className="card-title">{card.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;
