import React from 'react';
import './App.css';
import ContactForm from "./ContactForm";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  }, [])
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
