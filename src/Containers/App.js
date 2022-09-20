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
  const [displayNav, setDisplayNav] = useState(true);
  const [mobileNavopen, setMobileNavOpen] = useState(false) 
  const delay = 5;

  useEffect(() => {
    setSplashDisplay("show");
    window.setTimeout(() => setSplashDisplay("noShow"), delay * 300);
    console.log(route);

    //to disallow nav to navigate to current route 
    disallowSameNav()

    //to display on swipe left
    swipeToShownav()
    

    window.addEventListener('scroll', navScrollFunction)

    return () =>{
      window.removeEventListener('scroll', navScrollFunction)
    }

  }, [route]);

  const navigate = (pickroute) => {
    if (pickroute !== route){
      setClickedRoute(pickroute);
      window.setTimeout(() => setSplashDisplay("show"), 200);
      window.setTimeout(() => setRoute(pickroute), delay * 300);
    }else{
    }
  }

  function disallowSameNav(){
    if (route === 'home'){
      setCurrentRoute(<Home />)
      setMobileNavOpen(false)
    }else if (route === 'about'){
      setCurrentRoute(<About />)
      setMobileNavOpen(false)
    }
  }
 
  let currentscrolly = 0;
  function navScrollFunction() {
    
    let st = window.scrollY;

    if (st > 0 && currentscrolly <= st){
      // console.log('currentscrolly',currentscrolly, ' st ', st )
      currentscrolly = st;
      setDisplayNav(false)
      setMobileNavOpen(false)
    }else{
      // console.log('currentscrolly',currentscrolly, ' st ', st )
      currentscrolly = st;
      setDisplayNav(true)
      // setMobileNavOpen(true)
    }

  }

  function swipeToShownav(){
    let touchstartX = 0
    let touchendX = 0
    let touchDiffleft = 0;
    let touchDiffright = 0;
        
    function checkDirection() {
      touchDiffleft = touchstartX - touchendX; 
      if (touchendX < touchstartX){
        // console.log("x-end ", touchendX, "x-start ", touchstartX, 'touch diff left', touchDiffleft )
        if( touchDiffleft > 60){
          // alert('swiped left!')
          setDisplayNav(true)
          setMobileNavOpen(true)
        }
      } 
      touchDiffright = touchendX - touchstartX; 
      if (touchendX > touchstartX) {
        // console.log("x-end ", touchendX, "x-start ", touchstartX, 'touch diff right', touchDiffright )
        if( touchDiffright > 60){
          // alert('swiped right!')
          setDisplayNav(false)
          setMobileNavOpen(false)
        }
      }
    }

    document.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })

  }
  

  
  return (
    <div>
      <Splash Splash={splashdisplay} />
      <header className="App-header">
        <NavBar navigate={navigate} clickedRoute={clickedRoute} displayNav={displayNav} mobileNavopen={mobileNavopen} setMobileNavOpen={setMobileNavOpen}/>
      </header>
      <section>
        {currentRoute}
      </section>
    </div>
  );
}

export default App;
