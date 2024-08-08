import React from 'react'
import './About.css';

const About = () => {
  return (
  <div className="About-Wrapper">
    <div className="About-container">

     <div className="Aboutcontent">
      <h1>International Conference on Advancement in Cyber Security and Digital Forensics</h1>

      <p>The International Conference on Advances in Cybersecurity and Digital Forensics is a crucial event that brings <br/>together cybersecurity experts, digital forensics researchers, and information security professionals. This conference<br/> is dedicated to tackling the ever-changing challenges in cybersecurity and digital forensics, underscoring the need <br/>for advanced solutions in today's rapidly evolving technological landscape. Attendees will participate in <br/>discussions, share insights, and collaborate on the latest advancements in cybersecurity strategies, threat <br/>mitigation, and digital forensic techniques. The conference serves as a vibrant platform for exploring emerging <br/>trends, fostering interdisciplinary dialogue, and shaping the future of cybersecurity and digital forensics amidst <br/>evolving threats and digital crimes.</p>
     </div>

     <div className="event-schedule">
      <h1>Schedule</h1>
      <p>Review Time Plan: Dec 2024 - Jan 2025</p>
     </div>

      <div className="event-timeline">
        <div className="timeline-1">
          <h1>Jan <br/>2025</h1>
        </div>

        <div className="timeline-2">
          <h1>31 Jan<br/> 2025</h1>
        </div>

        <div className="timeline-3">
          <h1>1st week<br/> of feb <br/>2025</h1>
        </div>

      </div>


      <div className="timeline-info">

        <div className="info1">
          <h1>Submission Deadline</h1>
        </div>

        <div className="info2">
          <h1>Submission Deadline<br/>
              for Revised Papers</h1>
        </div>

        <div className="info3">
          <h1>Notification of Acceptance</h1>
        </div>

      </div>

    </div>
  </div>
  )
}

export default About