import React from 'react';
import './EventDetail.css';
import Countdown from 'react-countdown';

const EventDetail = () => {
  const endDate = new Date("2025-01-01T00:00:00");

  // Custom renderer for Countdown
  const renderer = ({ days, hours, minutes }) => (
    <div className="countdown-display">
      <span>{days} &nbsp; : </span>
      <span>{hours} &nbsp; : </span>
      <span>{minutes} </span>
    </div>
  );

  return (
    <div className="event-info">
      <div className="event-timming">
        <h1 className="info-heading">Event Starts in</h1>
        
        <div className="countdown">
          <Countdown 
            date={endDate} 
            renderer={renderer}
          />
        </div>

        <div className="horizontal-rule">
          <hr/>
        </div>

        <div className="Event-date">
          <h1 className='date'>Date: 9 April 25 - 10 April 25  </h1>
        </div>

        <div className="event-venue">
          <p className='venue'>Venue</p>
        </div>

        <div className="event-instituion">
          <img src="/upes-logo.png" height={53} width={228}/>
        </div>

        <div className="event-location">
          <h1 className="location">MAC Center, Dehradun</h1>
        </div>
      

      </div>
    </div>
  );
};

export default EventDetail;