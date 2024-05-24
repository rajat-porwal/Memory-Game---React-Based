import React from 'react';
import Card from './Card';

const CardGrid = ({ cards, onCardClick }) => (
  <div className="grid grid-cols-4 gap-4 p-8">
    {cards.map(card => (
      <Card key={card.id} card={card} onCardClick={onCardClick} />
    ))}
  </div>
);

export default CardGrid;