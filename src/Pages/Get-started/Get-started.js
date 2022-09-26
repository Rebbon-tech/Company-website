import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "./Get-started.css";
import buttonIcon from "../../Assets/Bold-Arrow-Right.svg";

export default function Getstarted() {
  const [form, setform] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  }
  console.log(form);
  return (
    <div>
      <div className="get-started">
        <div className="get-started_section intro-container">
          <div className="get-started_section_container">
            <h1>Lets start your project together</h1>
          </div>
        </div>
        <div className="get-started_section mnbground form-container">
          <div className=" get-started_section_container project_info">
            <div className="tag">
              <div className="h1">
                <h1>
                  First to making your ideas come to life
                </h1>
              </div>
              <div className="p">
                <p>
                  Have a great project idea? No problem!
                  Fill out the form below and We'll be in
                  touch ASAP!
                </p>
              </div>
            </div>
            <div className="form">
              <form action="">
                <label htmlFor="Fullname">Full name</label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g John Doe"
                  id="Fullname"
                  name="Fullname"
                  onChange={handleChange}
                />
                
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="input"
                  id="Email"
                  placeholder="e.g Johndoe@gmail.com"
                  name="Email"
                  onChange={handleChange}
                />

                <label htmlFor="Type">Type</label>
                <select
                  id="Type"
                  className="input formbold"
                  name="Type"
                  placeholder="select one..."
                  onChange={handleChange}
                >
                  <option value="Web Development">Web Development</option> 
                  <option value="App Development">App Development</option>
                  <option value="Game Development">Game Development</option>
                  <option value="Business">Business</option>
                  <option value="Others">Others</option>
                </select>

                <label htmlFor="Estimate">Estimated Budget</label>
                <input
                  className="input formbold"
                  id="Estimate"
                  type="number"
                  placeholder="Estimate"
                  name="Estimate"
                  onChange={handleChange}
                />

                <label htmlFor="tell">Tell us a bit about the project</label>
                <textarea
                  type="text"
                  className="text"
                  id="tell"
                  placeholder="Project description here..."
                  name="About-project"
                  onChange={handleChange}
                />

                <div className="Start_a_project_sub_btn">
                    <p className='btn_text'>Start a project</p>
                    <img src={buttonIcon} alt='button icon'></img>
                </div>
              </form>
            </div>
            <div className="svg">
              <svg
                width="706"
                height="669"
                viewBox="0 0 706 669"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_2_4313)">
                  <path
                    d="M334.443 350.211C305.042 422.487 312.485 507.816 357.931 571.271C373.126 592.488 361.367 600.413 333.038 603.373C292.256 607.634 255.709 628.689 227.549 658.453C90.7046 803.094 -36.7265 533.704 9.75125 405.573C19.9466 377.466 52.2145 369.352 79.9124 358.007C162.693 324.1 170.174 200 266.908 200C341.036 200 366.835 270.581 334.443 350.211Z"
                    fill="#FFEF89"
                  />
                  <path
                    d="M340.365 387.266C386.866 459.123 407.765 630.506 322.153 633.895C291.957 635.09 256.587 648.858 232.677 667.312C92.8983 775.192 -39.1454 584.018 10.7707 496.047C21.9089 476.417 46.6384 472.331 68.8088 467.979C162.354 449.616 166.139 357.165 267.14 357.165C303.662 357.165 328.463 368.874 340.365 387.266Z"
                    fill="#FAFFFE"
                  />
                  <path
                    d="M350.304 637.565C277.922 608.207 192.467 615.64 128.919 661.018C107.67 676.192 99.7338 664.45 96.7696 636.163C92.5023 595.44 71.4163 558.946 41.6092 530.828C-103.245 394.184 166.541 266.94 294.86 313.35C323.008 323.53 331.134 355.751 342.496 383.408C376.453 466.067 500.735 473.537 500.735 570.129C500.735 644.148 430.05 669.91 350.304 637.565Z"
                    fill="#2BD4A4"
                  />
                  <path
                    d="M297.44 636.226C241.854 697.434 62.9176 703.142 60.5729 620.548C59.811 593.711 48.1131 560.624 32.0583 539.087C-73.1605 397.943 107.394 263.355 189.176 314.82C207.118 326.111 210.559 349.266 214.073 370.15C230.145 465.676 317.124 468.733 317.124 570.361C317.124 600.569 309.681 622.747 297.44 636.226Z"
                    fill="#FFAC89"
                  />
                  <path
                    d="M301.56 482.261C352.294 473.077 444.049 532.176 454.184 481.696C459.489 455.274 472.174 433.952 490.121 413.826C546.072 351.083 441.536 294.031 372.275 300.644C342.527 303.484 334.084 338.479 313.949 360.53C288.579 388.314 242.507 397.963 242.507 440.738C242.507 473.391 268.509 488.245 301.56 482.261Z"
                    fill="#89E3FF"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2_4313"
                    x="-200"
                    y="0"
                    width="906"
                    height="900"
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
                      result="effect1_foregroundBlur_2_4313"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
