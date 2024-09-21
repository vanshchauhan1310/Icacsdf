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

        <div className="conference-track">

          <div className="track">
               <div className="track-heading">
                   <h1>Privacy and Information Security</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Ensuring fairness in algorithms and protecting privacy</li>
                      <li style={listItemStyle}>Safeguarding data and information security</li>
                      <li style={listItemStyle}>Web security and privacy measures</li>
                      <li style={listItemStyle}>Web security and privacy measures</li>
                   </ul>
               </div>
          </div>
          


          <div className="track">
               <div className="track-heading">
                   <h1>Advancements in Cryptography</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Protocols for secure communication</li>
                      <li style={listItemStyle}>Lightweight cryptography for resource-constrained devices</li>
                      <li style={listItemStyle}>Securing IoT devices and cloud environments</li>
                      <li style={listItemStyle}>Encryption techniques including homomorphic encryption</li>
                   </ul>
               </div>
          </div>


          <div className="track">
               <div className="track-heading">
                   <h1>Cyber Threat Intelligence and Mitigation</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Implementing effective intrusion detection and prevention systems</li>
                      <li style={listItemStyle}>Securing Cyber-Physical Systems (CPS)</li>
                      <li style={listItemStyle}>Addressing security challenges in Industry 5.0</li>
                      <li style={listItemStyle}>Frameworks for Cyber Threat Intelligence (CTI) development</li>
                      <li style={listItemStyle}>Digital forensics and malware analysis for actionable threat intelligence</li>

                   </ul>
               </div>
          </div>


          <div className="track">
               <div className="track-heading">
                   <h1>Quantum Cryptography</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Adapting cryptography for quantum-resistant security</li>
                      <li style={listItemStyle}>Quantum key distribution for secure communication</li>
                      <li style={listItemStyle}>Generating quantum random numbers for enhanced security</li>
                      <li style={listItemStyle}>Exploring quantum-safe algorithms</li>
                   </ul>
               </div>
          </div>



          <div className="track">
               <div className="track-heading">
                   <h1>Blockchain Technology: Innovations and Applications</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Utilizing blockchain technology in various sectors such as healthcare, finance, and governance</li>
                   
                   </ul>
               </div>
          </div>



          <div className="track">
               <div className="track-heading">
                   <h1>Role of AI & ML in Cybersecurity</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Detecting and mitigating cyber threats using AI and ML</li>
                      <li style={listItemStyle}>Addressing challenges such as deep fake algorithms</li>
                      <li style={listItemStyle}>Accelerating threat detection and response</li>
                      <li style={listItemStyle}>Enhancing endpoint security</li>
                      <li style={listItemStyle}>Automating cybersecurity processes and facilitating threat intelligence sharing</li>

                   </ul>
               </div>
          </div>



          <div className="track">
               <div className="track-heading">
                   <h1>Security Policies, Auditing, and Assurance</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Auditing and ensuring compliance with security policies</li>
                      <li style={listItemStyle}>Conducting risk analysis and implementing appropriate measures</li>
                      <li style={listItemStyle}>Establishing standards for security and privacy</li>
                      <li style={listItemStyle}>Managing access to assets and monitoring processes</li>
                      <li style={listItemStyle}>Governance, risk, and compliance (GRC) frameworks</li>
                   </ul>
               </div>
          </div>



          <div className="track">
               <div className="track-heading">
                   <h1>Digital Forensic</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Digital Evidence Extraction using Machine learning</li>
                      <li style={listItemStyle}>Malware Analysis and Attribution</li>
                      <li style={listItemStyle}>Forensics analysis and visualization of Big Data</li>
                      <li style={listItemStyle}>Non-traditional forensic scenarios/contexts</li>

                      <li style={listItemStyle}>Network and distributed system forensics</li>
                      <li style={listItemStyle}>Mobile and embedded device forensics</li>
                      <li style={listItemStyle}>Cloud and virtualized environments</li>
                      <li style={listItemStyle}>Medical devices</li>

                      <li style={listItemStyle}>Smart power grids</li>
                      <li style={listItemStyle}>Smart buildings</li>
                      <li style={listItemStyle}>Virtual currency</li>
                      <li style={listItemStyle}>Digital evidence and the law</li>

                      <li style={listItemStyle}>Anti-forensics and anti-anti-forensics</li>
                   </ul>
               </div>
          </div>



          <div className="track">
               <div className="track-heading">
                   <h1>Internet of Things Security</h1>
               </div>
              
               <div className="track-content">
                   <ul>
                      <li style={listItemStyle}>Ensuring fairness in algorithms and protecting privacy</li>
                      <li style={listItemStyle}>Safeguarding data and information security</li>
                   </ul>
               </div>
          </div>

        </div>













        </div>

    </div>
   </div>
   </>
  )
}

export default Callforpaper