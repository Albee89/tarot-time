import React from 'react';

const TheMagician = ({ card }) => {
  return (
    <div className="card" name="The Magician">
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
      <p>Meaning Upright: {card.meaning_up}</p>
      <p>Meaning Reversed: {card.meaning_rev}</p>
    </div>
  );
};

export default TheMagician;
