import React from 'react';
import './Team.css';
import data from './data.json';

const Team = () => {
  const specialCategories = [
    'National Advisory Board',
    'International Advisory Board',
    'Technical Program Committee'
  ];

  return (
    <div className="Team-wrapper">
      <div className="Team">
        {Object.keys(data).map((category, index) => (
          <div key={index}>
            <h2 className='category'>{category}</h2>
            {specialCategories.includes(category) ? (
              // For special categories, render items directly without subcategories
              Array.isArray(data[category]) ? (
                <div>
                  {data[category].map((item, itemIndex) => (
                    <div className='nameofmember' key={itemIndex}>{item}</div>
                  ))}
                </div>
              ) : (
                <p className='nameofmember'>{data[category]}</p>
              )
            ) : (
              // For other categories, render with subcategories
              Object.keys(data[category]).map((subcategory, subindex) => (
                <div key={subindex}>
                  <h3 className='subcategory'>{subcategory}</h3>
                  {Array.isArray(data[category][subcategory]) ? (
                    <div>
                      {data[category][subcategory].map((item, itemIndex) => (
                        <div className='nameofmember' key={itemIndex}>{item}</div>
                      ))}
                    </div>
                  ) : (
                    <p className='nameofmember'>{data[category][subcategory]}</p>
                  )}
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
