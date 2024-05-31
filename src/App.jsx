import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

const fetchCards = async () => {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'ZbCnHbhVgF7lijFsBZauXEYaBTboFnJl',
          limit: 12,
        },
      });

const cardsData = response.data.data.map(gif => ({
    id: gif.id,
    image: gif.images.fixed_height.url,
    title: gif.title,
    }));
setCards(cardsData);
shuffleCards(cardsData);
} catch (error) {
console.error('Error fetching cards:', error);
}
};

const shuffleCards = cardsArray => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    setCards(cardsArray);
    };

const handleCardClick = clickedCard => {
    const updatedCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, clicked: true } : card
    );
    shuffleCards(updatedCards);

    // Check if the card has already been clicked
    if (clickedCard.clicked) {
      handleGameOver();
    } else {
      updateScore(score + 1);
    }
  };

const handleGameOver = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);
    resetCards();
  };

const updateScore = newScore => {
    setScore(newScore);
  };

const resetCards = () => {
    const resetCards = cards.map(card => ({
      ...card,
      clicked: false,
    }));
    shuffleCards(resetCards);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
};

export default App;