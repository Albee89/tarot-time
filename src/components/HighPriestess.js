import React from 'react';

const HighPriestess = ({ card }) => {
  return (
    <div className="card" name="The High Priestess">
      <h2>{card.name}</h2>
      <p>{card.desc}</p>
      <p>Meaning Upright: {card.meaning_up}</p>
      <p>Meaning Reversed: {card.meaning_rev}</p>
    </div>
  );
};

export default HighPriestess;
