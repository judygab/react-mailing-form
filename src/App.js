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
{/*        <div className="form-container">
          <h1>Subscribe to Our Newsletter 🚀</h1>
          <p>The Tech Insider is your go-to newsletter for all the latest news in the world of technology, startups, and devtools.</p>
          <form>
            <label htmlFor="email">Email:</label>
            <div className='input-container'>
              <input type="email" id="email" name="email" />
              <button type="submit">Submit</button>
            </div>
          </form>
  </div>*/}
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
