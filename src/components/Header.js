import React, { useState, useEffect } from 'react';

const Header = () => {

    const [index, setIndex] = useState(0);
  const typedStrings = ['Full Stack Web Developer', 'AWS Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % typedStrings.length);
    }, 2000); // Change every 2 seconds (2000 milliseconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, []);
  return (
    <div className="container-fluid bg-light my-6 mt-0" id="home">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 py-6 pb-0 pt-lg-0">
          <h3 className="text-primary mb-3">I'm</h3>
          <h1 className="display-3 mb-3">Dhiraj Yadav</h1>
          <div className="typed-text-output d-inline">
          <div className='typed-text bold-sub'>
          {typedStrings[index]}
          </div>
          </div>
          <div className="d-flex align-items-center pt-5">
            <a href className="btn btn-primary py-3 px-4 me-5">Download CV</a>
            <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.udemy.com/user/dhiraj-yadav-26/" data-bs-target="#videoModal">
              <span />
            </button>
            <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
          </div>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid" src="img/profile.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header