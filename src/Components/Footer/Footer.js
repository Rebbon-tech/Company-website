import React from "react";
import "./Footer.css";
import buttonIcon from "../../Assets/Bold-Arrow-Right.svg";

export default function Footer() {
  return (
    <div className='section twbground' style={{height: 'fit-content'}} >
        <div className='section_container'>
            <div className='contents home_sixth'>
                
            <div className='start_a_project_panel'> 
                <h1>Have a project in mind?<br></br> Let’s work together.</h1>
                <div className='btn'>
                    <div className="Start_a_project_btn">
                        <p className='btn_text'>Start a project</p>
                        <img src={buttonIcon} alt='button icon'></img>
                    </div>
                </div>
            </div>

            <div className='flex fdcolumn hfc jcsevenly'>
                    <div className='flex fdrow footer_btn'>
                        <div className='get_in_touch_btn'>
                            <h1>Get in<br></br>touch</h1>
                        </div>

                        <div className='socials'>

                            <div className='btn'>
                                <a href="mailto:rebbon1tech@gmail.com?subject=Hello%20Rebbon%20Tech&body=My%20name%20is">
                                <div className="socials_btn">
                                    <p className='btn_text'>hello@rebbontech.co</p>
                                </div>
                                </a>
                            </div>
                            <div className='socials_btn_container'>
                                <div className='social_btn '>
                                    <h1 className='Instagram_btn'>Instagram</h1>
                                </div>
                                <div className='social_btn '>
                                    <h1 className='Twitter_btn'>Twitter</h1>
                                </div>
                                <div className='social_btn '>
                                    <h1 className='Facebook_btn'>Facebook</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex rights_and_privacy'>
                        <p>© Rebbon Tech 2022. All rights reserved. <p>Privacy policy</p></p>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  );
}
