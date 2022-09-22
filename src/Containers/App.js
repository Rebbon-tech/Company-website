import NavBar from "../Components/NavBar/NavBar";
import Splash from "../Pages/Splash/Splash";
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "../Pages/Home/Home";
import SPJ from "../Pages/SubmitProjectInfo/SubmitProjectInfo";
// SPJ = SubmitProjectInfo
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [splashdisplay, setSplashDisplay] = useState("show");
  // const [route, setroute] = useState('show');
  const delay = 5;

  useEffect(() => {
    setSplashDisplay("show");
    window.setTimeout(() => setSplashDisplay("noShow"), delay * 500);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Splash Splash={splashdisplay} />
        <header className="App-header">
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SubmitProjectInfo" element={<SPJ />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
