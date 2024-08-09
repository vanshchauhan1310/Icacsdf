import React from 'react'
import './ConferenceTopic.css'
import ConferenceCard from '../ConferenceCard/ConferenceCard'
import { ConferenceData } from '../ConferenceCard/ConferenceData';

const ConferenceTopic = () => {
    return (
      <div className="conferencewrapper">
        <h1 className="conference-heading">Conference Topics</h1>
        <div className="conference-container">
          {ConferenceData.map((cardData, index) => (
            <ConferenceCard key={index} {...cardData} />
          ))}
        </div>
      </div>
    );
  };

export default ConferenceTopic