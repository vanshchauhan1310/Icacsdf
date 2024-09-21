import React, { useState } from 'react';
import './ConferenceCard.css';

const ConferenceCard = ({ title, imageSrc, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} aria-label={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {isHovered && <div className="hover-text">{hoverText}</div>}
      </div>
    </div>
  );
};

export default ConferenceCard;
