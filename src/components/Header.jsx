// src/components/Header.jsx
import React from 'react';

const Header = ({ score, bestScore }) => (
  <div className="flex justify-between items-center bg-gray-800 p-4">
    <h1 className="text-white text-xl font-bold">Memory Game</h1>
    <div className="flex items-center">
      <p className="text-white mr-4">Score: {score}</p>
      <p className="text-white">Best Score: {bestScore}</p>
    </div>
  </div>
);

export default Header;