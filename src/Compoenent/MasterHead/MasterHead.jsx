import React from 'react';
import './MasterHead.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MasterHead = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <div className="master-head">

    <div className="master-info">
       International Conference On <br/> Advancement In Cyber Security<br/> And Digital Forensics <br/> (ICACSDF-2025)

    <div className="master-button">
    <button class="boton-elegante"  onClick={handleClick}>
    {/* <Link to="/register">Register Now</Link> */}
    Register Now
    </button>
    </div>

    </div>

    </div>
  );
};

export default MasterHead;