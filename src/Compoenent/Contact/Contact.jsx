import React from 'react'
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
      };
    
  return (
<>

    <div className="Contact-header">
    <h1 className='contact-heading'>Contact Us !</h1>
    <p className="contact-para">Reach out, we’d love to hear from you</p>
    </div>


    <div className="contactus-content">
    <form onSubmit={handleSubmit} style={styles.form}>
    <div style={styles.inputGroup}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Value"
        style={styles.input}
      />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Value"
        style={styles.input}
      />
    </div>
    <div style={styles.inputGroup}>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Value"
        style={styles.textarea}
      />
    </div>
    <button type="submit" style={styles.button}>SEND</button>
  </form>


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