import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import gradient from "../../Assets/Bold-Arrow-Right.svg";
import img from "../../Assets/img (15).jpg";
import glow from "../../Assets/glow.svg";
import "./About.css";
import Footer from "../../Components/Footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="about-containter">
        <div className="about-uppersection">
          <h1 className="Title">We are </h1>
          <h1 className="Title">Rebbon Tech </h1>
          <img src={glow} alt="g" />
        </div>
        <div className="drive-us-container">
          <div className="drive-us">
            <h1>What Drives Us</h1>
            <p>
              We do what we do in large part because of the satisfaction that we
              get from implementing efficient, simple and reliable solutions
              that satisfy clients and support their business. Seeing companies
              overspend on solutions that were overpriced, outdated and hard to
              maintain led to the founding of the Tech Company with the
              objective of doing it right and doing it well, at an affordable
              price. Drawing from our experience and knowledge of the industry
              we are able to provide optimized solutions which continue to drive
              demand for our services in Southern Africa and abroad
            </p>
          </div>
        </div>

        <div className="about-team">
          <div className="align">
            <h1>Meet The Team</h1>
            <div className="team">
              <div className="left">
                {" "}
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
                <div className="person">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji Muhammad Muzzammil</h4>
                    <p>full-stack dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="more words">
          <p>
            Optimized solutions with simple onboarding process to help us better
            understand and improve our client's needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
