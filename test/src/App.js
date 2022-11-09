import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/contact-us" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          <b>BAMANA DUSTY HORDOFEL</b>, I'm a <b>frontend</b> and creative{" "}
          <b>developer</b>, an UI and UX developer who loves to bring something
          new.
        </h5>
      </div>
    </div>
  );
}
export default App;
