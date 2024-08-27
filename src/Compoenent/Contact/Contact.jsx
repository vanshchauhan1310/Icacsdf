import React from 'react'
import './Contact.css';

const Contact = () => {
        
  return (
<>

    <div className="Contact-header">
    <h1 className='contact-heading'>Contact Us !</h1>
    <p className="contact-para">Reach out, we’d love to hear from you</p>
    </div>


    <div className="contactus-content">
    
    <div className="Enquiry-person">
        <h2 className='enquiry'>For Enquiry :</h2>
        <h2 className='person-name'>Dr. Ajay Prasad	(Convenor)</h2>
        <p className='person-adress'>Organizing Chairs <br/>
          School of Computer Science,UPES,<br/>
          Bidholi Via-Prem Nagar<br/>
          Dehradun-248007</p>

          <p className="person-contact">
          Email id: <a href="mailto:aprasad@ddn.upes.ac.in">aprasad@ddn.upes.ac.in</a><br/>
          </p>


          <h2 className='person-name'>Dr. Sushabhan Choudhury	(Convenor)</h2>
        <p className='person-adress'>Organizing Chairs <br/>
          School of Computer Science,UPES,<br/>
          Bidholi Via-Prem Nagar<br/>
          Dehradun-248007</p>

          <p className="person-contact">
          Email id: <a href="mailto:schoudhury@ddn.upes.ac.in">	schoudhury@ddn.upes.ac.in</a><br/>
          </p>

    </div>
        

  <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27526.118375268874!2d77.97266694999999!3d30.414414400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723602320202!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
    
    </div>
    
  </>
);
}

const styles = {
form: {
  display: 'flex',
  flexDirection: 'column',
  width: '700px',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderRadius: '5px',
},
inputGroup: {
  marginBottom: '15px',
},
input: {
  width: '100%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
},
textarea: {
  width: '100%',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '200px',
},
button: {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
},
};


export default Contact