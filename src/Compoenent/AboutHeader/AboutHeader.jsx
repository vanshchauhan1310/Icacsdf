import React from 'react'
import './About.css'


const AboutHeader = () => {
  return (
    <>
     <div className="About-header">
        <h1 className='header-heading'>About ICACSDF</h1>
    </div>
    <div className="About-content">
    <p className='content-para'>
    <span className='para1'>The International Conference on Advancement in Cyber Security and Digital Forensics (ICACSDF - 2025) </span>is a premier forum that brings<br/> 
    together researchers, practitioners, and professionals from academia, industry, and government who are working in the field of cyber security,<br/> 
    privacy, and digital forensics. The conference will be held in Dehradun, India during 25-27 March 2025. The conference will be <br/>
    technically co-sponsored by IEEE UP Section.<br/>
    <br/>
    The conference will feature keynote speeches, technical presentations, workshops, tutorials, and invited talks. The technical sessions will<br/>
     present original and fundamental research advances while the workshops will focus on the latest topics in cyber security, privacy,<br/>
      and digital forensics. The conference will also feature a panel discussion on the latest trends in cyber security, privacy, and digital forensics.<br/>
      <br/>
    Prospective authors are invited to submit full and original research papers, which have <span className='para1'>NOT</span> been submitted or published elsewhere <br/>
    or under consideration in other conferences or journals. All submissions are to be in electronic (PDF and MS Word both) format through<br/>
     conference website or e-mail. Authors may also submit their contributions directly to the <span className='para1'>Email id:</span> icacsdf@ddn.upes.ac.in</p>
    </div>

    <div className="upes-wrapper">
        <div className="About-upes">
        <h1 className='upes-heading'>About UPES</h1>
        <div className="upes-content">

        <p className='upes-para'>University of Petroleum and Energy Studies (UPES) is a multi-disciplinary university located in Dehradun, India. The university offers specialized undergraduate and postgraduate courses in the fields of engineering, management, law, design, health sciences, and modern media and communication. UPES is recognized by the University Grants Commission (UGC) and is a member of the Association of Indian Universities (AIU).
        The university has been ranked among the top 100 universities in India by the National Institutional Ranking Framework (NIRF) and has been awarded the QS Five Stars Global Rating for Employability and Facilities. UPES has also been accredited by the National Board of Accreditation (NBA) and has been awarded the QS I-Gauge Gold Rating for Teaching and Employability.</p>
        
        <div className="upes-img">
            <img src="/images/upes-pic.png" height={300} width={550}/>
        </div>

        </div>
        
        
        </div>

    </div>
    </>
  )
}

export default AboutHeader