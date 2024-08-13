import React from 'react';
import './Team.css';
import teamData from './TeamData';

const Team = () => {
  return (
    <div className="Team-wrapper">
      <div className="Team">
        {teamData.map((category, index) => (
          <React.Fragment key={index}>
            <h1 className='Comittee'>{category.category}</h1>
            {category.members.map((member, memberIndex) => (
              <React.Fragment key={memberIndex}>
                {/* <h1 className='Position'>{member.position}</h1> */}
                <h1 className='name'>{member.name} {member.position}</h1>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Team;