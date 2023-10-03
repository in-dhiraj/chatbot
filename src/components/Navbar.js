import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSignUpModal, setSignUpModal] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    const closeModal = () =>{
        setShowModal(!showModal)
    }

    const closeSignUpModal = () =>{
        setSignUpModal(!showSignUpModal)
    }
  
    return (
    <>
    <LoginModal showModal={showModal} closeModal={closeModal}/>
    <SignupModal showModal={showSignUpModal} closeModal={closeSignUpModal}/>
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5" style={{display:'flex'}}>
      <Link to="/" className="navbar-brand d-block d-lg-none">
        <h1 className="text-primary fw-bold m-0">Dhiraj Y</h1>
      </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/skills" className="nav-item nav-link">Skills</Link>
          <Link to="/projects" className="nav-item nav-link">Projects</Link>
        </div>
        <Link to="/" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
          <h1 className="text-primary fw-bold m-0">Dhiraj Y</h1>
        </Link>
        <div className="navbar-nav me-auto py-0">
          <Link to="/courses" className="nav-item nav-link">My Udemy Courses</Link>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
          {isLoggedIn ? (
            <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
          ) : (
            <><button className="btn btn-primary m-2" onClick={closeModal}>Login</button>
            <button className="btn btn-primary m-2" onClick={closeSignUpModal}>SignUp</button>
            </>
          )}
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
