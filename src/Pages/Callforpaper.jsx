import React from 'react'
import './Callforpaper.css'

const Callforpaper = () => {
    
    const cellStyle = {
        width: '500px',
        padding: '10px',
        backgroundColor: '#9F71A357',
        textAlign: 'center', // This centers the text horizontally
        verticalAlign: 'middle', // This centers the text vertically
      };
      const cellStyle2 = {
        width: '500px',
        padding: '10px',
        backgroundColor: '#9F71A32E',
        textAlign: 'center', // This centers the text horizontally
        verticalAlign: 'middle', // This centers the text vertically
      };

      const listItemStyle = {
        margin: 'unset',
        fontSize: '20px',  
        listStyleType: 'disc !important',
        listStylePosition: 'inside'
      }

  return (
   <>
     <div className="call-header">
        <h1 className='call-heading'>Call for Papers</h1>
    </div>

   <div className="callforpaper-header">
    <div className="callforpaper-content">
        <p className="call-para1">
        International Conference on Advancement in Cyber Security and Digital Forensics (ICACSDF - 2025)
We invite authors to contribute their research to the ICACSDF 2025 conference. We welcome high-quality, original, and unpublished research papers on conceptual, constructive, empirical, experimental, or theoretical work related to Cyber Security and Digital Forensics. Submissions can include papers and <span className="call1">e-posters</span> addressing the conference themes, with figures, tables, and references to novel research material. Papers should be written in English, <span className="call1">according to the Springer LNCS format</span>, and thoroughly checked for correct grammar and spelling. Each submission must indicate its technical/scientific contribution and applicable problems, domains, or environments.
The conference will cover themes such as Privacy and Information Security, Advancements in Cryptography, Cyber Threat Intelligence and Mitigation, Quantum Cryptography, Blockchain Technology, AI and ML in Cybersecurity, Digital Forensics, Security Policies, Auditing, and Assurance.
Accepted papers will be sent to <span className="call1">Springer </span>for publication <span className="call1">(SCOPUS Indexed, waiting for approval)</span>. Selected papers will appear in <span className="call1">Scopus, DBLP, and Google Scholar,</span>  while agencies such as <span className="call1">CiteSeerX, EBSCO, and ProQuest</span> will also index contributions.
Prospective authors must submit original research papers that have not been submitted or published elsewhere. Submissions should be in PDF and MS Word formats and can be made through the conference website or via email to <span className='call1'> <a href="mailto:conference_socs@ddn.upes.ac.in">conference_socs@ddn.upes.ac.in</a></span>.
We look forward to your valuable contributions to ICACSDF 2025.
        </p>

        <table border={1} align='center'>
        <tr>
          <th style={cellStyle}>Submission Deadline</th>
          <th style={cellStyle}>18th December 2024</th>
        </tr>

        <tr>
          <th style={cellStyle2}>Notification of Acceptance</th>
          <th style={cellStyle2}>30th January 2025</th>
        </tr>

        <tr>
          <th style={cellStyle}>Submission of Revised <br/> Camera Ready Version</th>
          <th style={cellStyle}>14th Feburary 2025</th>
        </tr>

        <tr>
          <th style={cellStyle2}>Conference Date</th>
          <th style={cellStyle2}>11-12th April 2025</th>
        </tr>
       
        </table>

        <div className="call-objective">
            <p className='paper-objective'>The conference invites original research papers, technical reports, and case studies on the following topics of interest but not limited to:</p>
            <ul>
{/* 
                <li>1	Privacy and Information Security</li> */}
                <li style={listItemStyle}>Access Control and Intrusion Detection</li>
                <li style={listItemStyle}>Biometrics and Cryptography</li>
                <li style={listItemStyle}>Cloud Computing Security</li>
                <li style={listItemStyle}>Computer Forensics</li>
                <li style={listItemStyle}>Cyber Physical Systems Security</li>
                <li style={listItemStyle}>Database and System Security</li>
                <li style={listItemStyle}>Information Hiding and Watermarking</li>
                <li style={listItemStyle}>Internet of Things Security</li>
                <li style={listItemStyle}>Key Management and Secure Communication</li>
                <li style={listItemStyle}>Malware Analysis and Detection</li>
                <li style={listItemStyle}>Network Security and Privacy</li>
                <li style={listItemStyle}>Security Protocols</li>
                <li style={listItemStyle}>Security Testing and Auditing</li>
                <li style={listItemStyle}>Software Security</li>
                <li style={listItemStyle}>Web Security</li>
            </ul>
        </div>

    </div>
   </div>
   </>
  )
}

export default Callforpaper