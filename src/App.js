import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/Footer';
import VoterLogin from './components/pages/VoterLogin';
import AdminLogin from './components/pages/AdminLogin';
import Voting from './components/pages/Voting';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/contact" exact element={<Contact />}/>
        <Route path="/sign-in" exact element={<VoterLogin />}/>
        <Route path='/voting' exact element={<Voting />} />
        <Route path="/admin" exact element={<AdminLogin />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
