import React from 'react'
import './objective.css';

const Objective = () => {
  return (
   <div className="Objective-page">
    <div className="joinus">
        <h1 className="whyjoin">Why Join Us ?</h1>
        <ul>
        <li>Comprehensive Coverage</li>
        <li>Expert Insights</li>
        <li>Practical Solutions</li>
        <li>Interdisciplinary Approach</li>
        <li>Focus on Emerging Trends</li>
        <li>Interactive Sessions</li>
        <li>Continuous Improvement</li>
        <li className='last-li'><img src='/brain-strom.png' height={400} width={300}/></li>
        </ul>
    </div>

    <div className="objectives">
        <h1>Objectives</h1>
        <ul>
            <li>Share Knowledge, Research Findings, And Innovative Ideas, Products, And Services.</li>
            <li>Foster Collaboration, Partnerships, Joint Projects, And Business Opportunities.</li>
            <li>Discuss And Address Specific Challenges Or Issues Within The Cyber Security Industry.</li>
            <li>Engage With Regulatory Bodies And Policymakers To Address Regulatory Challenges.</li>
            <li>Explore The Impact Of Emerging Technologies On Cyber Security.</li>
            <li>Provide Opportunities For Skills Development And Training.</li>
            <li>Raise Awareness About The Importance Of Cyber Security.</li>
            <li>Encourage Sharing Of Threat Intelligence And Information On Latest Cyber Threats.</li>
            <li>Promote Research And Development In Cyber Security.</li>
            <li>Discuss And Promote Industry Standards, Frameworks, And Best Practices.</li>
            <li>Provide Insights Into Effective Incident Response And Crisis Management Strategies.</li>
        </ul>
    </div>
   </div>
  )
}

export default Objective