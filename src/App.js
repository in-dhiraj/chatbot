import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import VideoModal from './components/VideoModal';
import Spinner from './utility/Spinner';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'; // Import your About component
import Skills from './components/Skills'; // Import your Skills component
import Projects from './components/Projects'; // Import your Projects component
import Courses from './components/Courses'; // Import your Courses component
import Contact from './components/Contact'; // Import your Contact component

function App() {
  const [loader, setLoader] = useState(true);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  return (
    <Router>
      <div className="App">
        {loader ? <Spinner /> : ""}
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Header />
        <VideoModal />
      </div>
    </Router>
  );
}

export default App;
