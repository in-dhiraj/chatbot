import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const SignupModal = ({ showModal, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    // You can use the name, email, phoneNumber, and password states for registration
    // For example, you can send this data to an API for user registration
    // After successful registration, you can close the modal
    console.log('Signup logic here:', name, email, phoneNumber, password);

    // Close the modal after registration (for example, if registration is successful)
    closeModal();
  };

    console.log("process.env.REACT_APP_SITE_KEY",process.env.REACT_APP_SITE_KEY)

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Signup</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
            <button type="button" className="btn btn-primary" onClick={handleSignup}>
              Signup
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

export default SignupModal;
