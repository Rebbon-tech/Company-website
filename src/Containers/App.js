import NavBar from "../Components/NavBar/NavBar";
import Splash from "../Pages/Splash/Splash";
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";

function App() {
  const [splashdisplay, setSplashDisplay] = useState("show");
  const [route, setRoute] = useState('home');
  const [clickedRoute, setClickedRoute] = useState('home');
  const [currentRoute, setCurrentRoute] = useState();
  const delay = 5;

  useEffect(() => {
    setSplashDisplay("show");
    window.setTimeout(() => setSplashDisplay("noShow"), delay * 500);
    console.log(route);

    if (route === 'home'){
      setCurrentRoute(<Home />)
    }else if (route === 'about'){
      setCurrentRoute(<About />)
    }

  }, [route]);

  const navigate = (pickroute) => {
    
    if (pickroute !== route){
      setClickedRoute(pickroute);
      window.setTimeout(() => setSplashDisplay("show"), 400);
      window.setTimeout(() => setRoute(pickroute), delay * 500);
    }else{
    }
  }

  
  return (
    <div>
      <Splash Splash={splashdisplay} />
      <header className="App-header">
        <NavBar navigate={navigate} clickedRoute={clickedRoute}/>
      </header>
      <section>
        {currentRoute}
      </section>
    </div>
  );
}

export default App;
