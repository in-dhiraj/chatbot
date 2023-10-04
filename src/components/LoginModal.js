import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";


const LoginModal = ({ showModal, closeModal }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    // You can use the phoneNumber, email, and password states for authentication
    // For example, you can send this data to an API for authentication
    // After successful authentication, you can close the modal
    console.log('Login logic here:', phoneNumber, email, password);

    // Close the modal after authentication (for example, if authentication is successful)
    closeModal();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="close btn-secondary" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
