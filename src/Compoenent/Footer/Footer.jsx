import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<div className="footer-wrapper">
    <div className="footer-container">
        <div className="upes-logo">
            <img src="/UPES.png" alt="UPES"/>
        </div>

        <div className="About-Section">
            <h2 className='About-heading'>About</h2>
            <p className='About-para'>Established through the UPES Act, 2003, of the<br/> State Legislature of Uttarakhand, UPES is a <br/>top-ranked, UGC-recognised, private <br/> university in India.</p>
        </div>

        <div className="contact-section">
            <h2 className='Contact-heading'>Contact Us</h2>
            <p className='Contact-para'>Contact
UPES, Bidholi Campus, Dehradun <br/> P.O. Bidholi Via Premnagar, <br/> Dehradun-248007 <br/> Phone: 1800 1028 737 <br/> Email: email@ddn.upes.ac.in</p>
        </div>
    </div>
</div>
  )
}

export default Footer