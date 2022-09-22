import NavBar from "../Components/NavBar/NavBar";
import Splash from "../Pages/Splash/Splash";
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "../Pages/Home/Home";
import SubmitProjectInfo from "../Pages/SubmitProjectInfo/SubmitProjectInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [splashdisplay, setSplashDisplay] = useState("show");
  // const [route, setroute] = useState('show');
  const delay = 5;

  useEffect(() => {
    setSplashDisplay("show");
    window.setTimeout(() => setSplashDisplay("noShow"), delay * 500);
  }, []);

  return (
    <Router>
      <div>
        <Splash Splash={splashdisplay} />
        <header className="App-header">
          <NavBar />
        </header>

        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SubmitProjectInfo" element={<SubmitProjectInfo />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
