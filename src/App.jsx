import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

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