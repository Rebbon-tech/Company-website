import NavBar from "../Components/NavBar/NavBar";
import Splash from "../Pages/Splash/Splash";
import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Getstarted from "../Pages/Get-started/Get-started";

function App() {
  const [splashdisplay, setSplashDisplay] = useState("show");
  const [route, setRoute] = useState("home");
  const [clickedRoute, setClickedRoute] = useState("home");
  const [currentRoute, setCurrentRoute] = useState();
  const [displayNav, setDisplayNav] = useState(true);
  const [mobileNavopen, setMobileNavOpen] = useState(false);
  const [allowScroll, setAllowScroll] = useState(false);
  const delay = 5;
  let col;
  let back;

  useEffect(() => {
    // setSplashDisplay("show");
    // setAllowScroll(false)
    unShowSplash();
    setallowscrolltotrue();
    console.log(route);

    //to disallow nav to navigate to current route
    disallowSameNav();

    //to display on swipe left
    swipeToShownav();

    //no scroll before loading finishes
    noScrollBeforeLoad();

    //to hide bar on scroll
    window.addEventListener("scroll", navScrollFunction);

    return () => {
      window.removeEventListener("scroll", navScrollFunction);
    };
  }, [route, allowScroll]);

  function unShowSplash() {
    window.setTimeout(() => setSplashDisplay("noShow"), delay * 300);
  }

  function setallowscrolltotrue() {
    window.setTimeout(() => setAllowScroll(true), delay * 400);
  }
  const navigate = (pickroute) => {
    if (pickroute !== route) {
      setClickedRoute(pickroute);
      window.setTimeout(() => setSplashDisplay("show"), 200);
      window.setTimeout(() => window.scrollTo(0, 0), 1000);
      window.setTimeout(() => setAllowScroll(false), delay * 300);
      window.setTimeout(() => setRoute(pickroute), delay * 300);
    }
  };

  function disallowSameNav() {
    if (route === "home") {
      setCurrentRoute(<Home revealAnimation={revealAnimation} />);
      setMobileNavOpen(false);
    } else if (route === "about") {
      setCurrentRoute(<About revealAnimation={revealAnimation} />);
      setMobileNavOpen(false);
    } else if (route === "services") {
      setCurrentRoute(<Getstarted />);
      back = "#fafffe";
      col = "#1a222d";
      setMobileNavOpen(false);
    }
  }
  if (route === "services") {
    back = "#fafffe";
    col = "#1a222d";
  }

  let currentscrolly = 0;
  function navScrollFunction() {
    let st = window.scrollY;

    if (st > 0 && currentscrolly <= st) {
      // console.log('currentscrolly',currentscrolly, ' st ', st )
      currentscrolly = st;
      setDisplayNav(false);
      setMobileNavOpen(false);
    } else {
      // console.log('currentscrolly',currentscrolly, ' st ', st )
      currentscrolly = st;
      setDisplayNav(true);
      // setMobileNavOpen(true)
    }
  }

  function swipeToShownav() {
    let touchstartX = 0;
    let touchendX = 0;
    let touchDiffleft = 0;
    let touchDiffright = 0;

    function checkDirection() {
      touchDiffleft = touchstartX - touchendX;
      if (touchendX < touchstartX) {
        // console.log("x-end ", touchendX, "x-start ", touchstartX, 'touch diff left', touchDiffleft )
        if (touchDiffleft > 60) {
          // alert('swiped left!')
          setDisplayNav(true);
          setMobileNavOpen(true);
        }
      }
      touchDiffright = touchendX - touchstartX;
      if (touchendX > touchstartX) {
        // console.log("x-end ", touchendX, "x-start ", touchstartX, 'touch diff right', touchDiffright )
        if (touchDiffright > 60) {
          // alert('swiped right!')
          setDisplayNav(false);
          setMobileNavOpen(false);
        }
      }
    }

    document.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
  }

  function noScrollBeforeLoad() {
    if (!allowScroll) {
      document.body.classList.add("noscroll");
      // console.log('noscroll')
    } else {
      document.body.classList.remove("noscroll");
      // console.log('scroll')
    }
  }

  function revealAnimation() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      // console.log(elementTop)
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  return (
    <div>
      {/* <Splash Splash={splashdisplay} /> */}
      <header className="App-header">
        <NavBar
          navigate={navigate}
          clickedRoute={clickedRoute}
          displayNav={displayNav}
          mobileNavopen={mobileNavopen}
          setMobileNavOpen={setMobileNavOpen}
          colour={col}
          bg={back}
        />
      </header>
      <section>{currentRoute}</section>
    </div>
  );
}

export default App;
