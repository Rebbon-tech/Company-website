import NavBar from '../Components/NavBar/NavBar';
import Splash from '../Pages/Splash/Splash';
import './App.css';
import React, {useState, useEffect} from 'react';
import Home from '../Pages/Home/Home';

function App() {

    const [splashdisplay, setSplashDisplay] = useState('show');
    // const [route, setroute] = useState('show');
    const delay = 5;

    useEffect(() => {
      setSplashDisplay('show');
      // window.setTimeout(() => setSplashDisplay('noShow'),delay * 500)
    },[]);
    
    

    return(
      <div>
        <Splash Splash={splashdisplay}/>
        <header className="App-header">
          <NavBar />
        </header>
        <section>
          <Home />
        </section>
      </div>
    );

}

export default App;
