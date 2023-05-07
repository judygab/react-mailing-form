import React from 'react';
import './App.css';
import ContactForm from "./ContactForm";

const App = () => {
  return (
    <div className="container">
      <div className="left-column">
        <div className="content">
          <img src="/astronaut.png" alt="your-image-description-here" />
        </div>
      </div>
      <div className="right-column">
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
