// src/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import './App.css'; // Optional CSS for general styles

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Contact />
        </div>
    );
};

export default App;
