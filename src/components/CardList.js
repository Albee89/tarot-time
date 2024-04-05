import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => {
        const CardComponent = getCardComponent(card.name);
        return (
          <div key={index}>
            <CardComponent card={card} />
          </div>
        );
      })}
    </div>
  );
};

// Function to dynamically import card components based on card name
const getCardComponent = (cardName) => {
  switch (cardName) {
    case 'The Magician':
      return React.lazy(() => import('./TheMagician'));
    case 'High Priestess':
      return React.lazy(() => import('./HighPriestess'));
    // Add cases for other card components as needed
    default:
      return null; // Default case if no matching component found
  }
};

export default CardList;
