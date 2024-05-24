import React from 'react';

const Card = ({ card, onCardClick }) => (
  <div className="card p-4 border rounded-lg shadow-md cursor-pointer" onClick={() => onCardClick(card)}>
    <img src={card.image} alt={card.title} className="w-full h-40 object-cover rounded-lg" />
    <p className="text-center mt-2 text-gray-800 font-semibold">{card.title}</p>
  </div>
);

export default Card;