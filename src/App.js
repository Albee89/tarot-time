import React, { useState } from 'react';
import jsonData from './tarot_card_data.json';
import witchImage from './witchy.png';

function App() {
  const [randomCard, setRandomCard] = useState(null);
  const [isReversed, setIsReversed] = useState(false); // State to track if the card is reversed
  const cardsData = jsonData.cards;

  // Function to select a random card and its orientation (upright or reversed)
  const pullCard = () => {
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    const card = cardsData[randomIndex];
    const isReversed = Math.random() < 0.5; // Randomly determine if the card is reversed
    setRandomCard({ ...card, isReversed }); // Update state with selected card and its orientation
    setIsReversed(isReversed); // Update state to track if the card is reversed
  };

  // Function to reload the homepage
  const shuffleCards = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <img src={witchImage} alt="Witchy" style={{ width: '200px', marginBottom: '20px', marginLeft: '525px' }} />
      <h2 style={{ width: '200px', marginBottom: '20px', marginLeft: '125px' }}>Welcome, beloved...</h2>
      <h3 style={{ width: '200px', marginBottom: '20px', marginLeft: '125px' }}>Take a moment to meditate on your question. Take a deep breath and... go forth!</h3>

      <div>
        {randomCard ? (
          <div>
            <h2>{randomCard.name}</h2>
            {isReversed ? (
              <p>Meaning Reversed: {randomCard.meaning_rev}</p> // Display reversed meaning
            ) : (
              <p>Meaning Upright: {randomCard.meaning_up}</p> // Display upright meaning
            )}
          </div>
        ) : (
          <button onClick={pullCard}>Pull a Card</button>
        )}
      </div>
      {randomCard && (
        <div>
          <button style={{ width: '200px', marginBottom: '20px', marginLeft: '125px' }} onClick={shuffleCards}>Shuffle</button>
        </div>
      )}
    </div>
  );
}

export default App;
