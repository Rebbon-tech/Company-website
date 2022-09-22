import React from "react";
import img from "../../Assets/img (15).jpg";
// import glow from "../../Assets/glow.svg";
// import gradient from "../../Assets/Gradients.svg";
import "./About.css";
import Footer from "../../Components//Footer/Footer";

export default function About({revealAnimation}) {

  
  window.addEventListener("scroll", revealAnimation);
  return (
    <div className="about">
      <div className="about_section mnbground about-uppersection">
        <div className="about_section_container h100p fdcolumn">
          <div className="content about_first">
            <h1 className="Title  reveal fade-top">
              We are<br></br>Rebbon Tech.{" "}
            </h1>
          </div>
        </div>
        <div className="glow">
          <svg
            width="1187"
            height="1035"
            viewBox="0 0 1187 1035"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_2_3688)">
              <circle cx="395" cy="539" r="195" fill="#2BD4A4" />
            </g>
            <g filter="url(#filter1_f_2_3688)">
              <circle cx="691" cy="539" r="296" fill="#FFEF89" />
            </g>
            <g filter="url(#filter2_f_2_3688)">
              <circle cx="731" cy="395" r="195" fill="#89E3FF" />
            </g>
            <defs>
              <filter
                id="filter0_f_2_3688"
                x="0"
                y="144"
                width="790"
                height="790"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_2_3688"
                />
              </filter>
              <filter
                id="filter1_f_2_3688"
                x="195"
                y="43"
                width="992"
                height="992"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_2_3688"
                />
              </filter>
              <filter
                id="filter2_f_2_3688"
                x="336"
                y="0"
                width="790"
                height="790"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_2_3688"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="about_section twbground origin-container">
        <div className="about_section_container h100p fdcolumn origin  reveal fade-left">
          <div className="content about_second">
            <h1>OUR ORIGIN STORY</h1>
            <div className="origin_p_scroll  t">
              <p>
                Our business was created to meet the need for simple,
                affordable, fast and secure managed services. <br></br>
                <br></br>
                The Tech Company, formally SSH Consulting, was launch in 2021
                because our founder, Oluyoh Okiemute, was tired of watching
                companies, IT Managers and business owners struggle with
                ineffective and dated IT solutions, exorbitant prices and
                constant downtime.<br></br>
                <br></br>
                Today, we have become an industry trail blazing company
                specializing in hosted Infrastructure environments, outsourced
                technology solutions management and technology risk assessment.
                Our goal is to fulfil the increasing need for outsourced
                advisory & consulting services in Southern Africa and abroad.
                <br></br>
                <br></br>
                Our passion for providing the best quality end-to-end solutions
                from strategy to deployment and beyond has sustained the Tech
                Company’s sustainable growth since our founding. With a
                consistent retention rate and an uptime percentage that is as
                near perfect as you can get we believe our work speaks on our
                behalf.<br></br>
                <br></br>
                Our enterprise services span several corporate sectors and
                vertical markets, but we have achieved great success providing
                solutions in the Retail & Financial sectors specifically. Over
                time we have also invested and formed product relationships with
                large-scale software and product houses which enables us to
                translate value to our clients and provide best in market
                solutions.<br></br>
                <br></br>
                We have seen substantial growth in the past years, but our focus
                remains on serving our customers and providing the best
                solutions possible to them
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section cgbground drive-us-container">
        <div className="about_section_container h100p fdcolumn drive-us  reveal fade-bottom">
          <div className="content about_third">
            <h1>What Drives Us</h1>
            <div className="about_third_p_scroll">
              <p>
                We do what we do in large part because of the satisfaction that
                we get from implementing efficient, simple and reliable
                solutions that satisfy clients and support their business.
                Seeing companies overspend on solutions that were overpriced,
                outdated and hard to maintain led to the founding of the Tech
                Company with the objective of doing it right and doing it well,
                at an affordable price. Drawing from our experience and
                knowledge of the industry we are able to provide optimized
                solutions which continue to drive demand for our services in
                Southern Africa and abroad
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_section mnbground about-team-container">
        <div className="about_section_container h100p fdcolumn about-team">
          <div className="align">
            <h1>Meet The Team</h1>
            <div className="team">
              <div className="left">
                {" "}
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Oluyoh Okiemute</h4>
                    <p>Isekai Protagonist</p>
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Raji .M. Muzzammil</h4>
                    <p>Giga Chad</p>
                    {/* Full-Stack Dev and AI-Specialist */}
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Marnin Audu</h4>
                    <p>Front-End Dev</p>
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Otti Ken</h4>
                    <p>Front-End Dev</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="person  reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Karina Peretei</h4>
                    <p>Meme Master</p>
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Adedoyin fabian</h4>
                    <p>Graphics Desginer and Artist(2D/3D)</p>
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Aliyu .I. Musa</h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div className="person reveal fade-right">
                  <img src={img} alt="p" />
                  <div className="info">
                    <h4>Tyrone Ayomide</h4>
                    <p>Front-End Dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section twbground other-container">
        <div className="about_section_container h100p fdcolumn other reveal fade-top">
          <div className="content about_fifth">
            <h1>
              Optimized solutions with simple onboarding process to help us
              better understand and improve our client's needs.
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
