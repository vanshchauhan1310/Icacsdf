import React from 'react';
import './ConferenceCard.css';

const ConferenceCard = ({ title, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} aria-label={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default ConferenceCard;