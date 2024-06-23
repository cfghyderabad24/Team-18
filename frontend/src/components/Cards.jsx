import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
    const navigate = useNavigate();

    const cardsData = [
        { id: 1, title: 'Data visualization with tables', icon: '📊', path: '/grid-example' },
        { id: 2, title: 'Data visualization with charts', icon: '📈' , path : '/data-charts'},
        { id: 3, title: 'Respond to given queries', icon: '💬', path: '/respond-to-query' },
        { id: 4, title: 'Send a new message', icon: '✉️', path: '/new-message' },
        { id: 5, title: 'Add a new volunteer', icon: '👥' , path : '/new-volunteer' },
        { id: 6, title: 'Add a new farmer', icon: '👩‍🌾' , path : '/new-farmer' },
    ];

    const handleCardClick = (path) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <>
            <h1 className="dashboard-heading" style={{color : '#32c36c'}}>THE ADMIN DASHBOARD</h1>
            <div className="cards-container">
                {cardsData.map((card) => (
                    <div key={card.id} className="card" onClick={() => handleCardClick(card.path)}>
                        <span className="card-icon">{card.icon}</span>
                        <span className="card-title">{card.title}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;
