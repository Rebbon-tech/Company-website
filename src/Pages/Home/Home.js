import React, { useEffect } from 'react'
import './Home.css'
import Aos from 'aos'
import buttonIcon from '../../Assets/Bold-Arrow-Right.svg'
import Showcase from '../../Assets/Showcase.png'
import StarOne from '../../Assets/StarOne.svg'
import StarTwo from '../../Assets/StarTwo.svg'
// import curveOne from '../../Assets/curveOne.svg'
// import curveTwo from '../../Assets/curveTwo.svg'
// import curveThree from '../../Assets/curveThree.svg'
// import curveFour from '../../Assets/curveFour.svg'
import buildingOne from '../../Assets/buildingOne.png'
import buildingTwo from '../../Assets/buildingTwo.png'
import Footer from '../../Components/Footer/Footer'

const Home = () =>{

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div>
            <div className='home'>
                <div data-aos="fade-up" className='section mnbground first_section'>
                    <div className='section_container fdcolumn'>
                        <div className='contents home_first'>
                            <h1 className='slogan_h1 colorchange'>High-end digital products for Enterprenuers and fast growing Startups.</h1>
                            <p className='what_we_do_p'>We build dynamic, scalable and unique digital products with users first and business goals in mind, for Small business owners and Startups.</p>
                            <div className='btn'>
                                <div className="Start_a_project_btn">
                                    <p className='btn_text'>Start a project</p>
                                    <img src={buttonIcon} alt='button icon'></img>
                                </div>
                            </div>
                        </div>
                        <div className='star_container'>
                            <div className='starOne_container'>
                                <img className='starOne' src={StarTwo} alt='star two'/>
                            </div>
                            <div className='starTwo_container'>
                                <img className='starTwo' src={StarOne} alt='star one'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='section mnbground second_section'>
                    <div className='section_container h100p'>
                        <div className='contents home_second'>
                            <img src={Showcase} alt='showcase' />
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='section twbground'>
                    <div className='section_container'>
                        <div className='contents home_third hfc'>
                            <div className='flex hfc home_third_container'>
                                <div className='ourapproach'>
                                    <div className='ourapproach_text'>
                                        <p>Crafting thoutghful and simple digital product solutions, through, research, and strategic planning to help users and business ownwers achieve their business goals.</p>
                                    </div>
                                    <div className='ourapproach_btn'>
                                        <p>Our approach</p>
                                        <div className='line'></div>
                                    </div>
                                </div>
                                <div className='ourapproach_diagram'>
                                    <div className='dia'>
                                        <div className='diagram_container'>
                                            <div className='diagram_contents'>
                                                <p className='discover .textanimate'>Discover</p>
                                                <div className='curveOne highlight'>
                                                    <svg width="109" height="73" viewBox="0 0 109 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.08433 0.428406C-1.41576 11.9284 87.5843 27.9284 108.084 71.9284" stroke="black" stroke-width="2"/>
                                                    </svg>
                                                </div>

                                                <p className='define'>Define</p>
                                                <div className='curveTwo'>
                                                    <svg width="114" height="83" viewBox="0 0 114 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.08447 0.428406C10.5845 60.4284 84.1845 33.2284 112.584 82.4284" stroke="black" stroke-width="2"/>
                                                    </svg>
                                                </div>

                                                <p className='design'>Design</p>
                                                <div className='curveThree'>
                                                    <svg width="166" height="77" viewBox="0 0 166 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M164.084 0.928406C164.084 65.4284 9.18447 7.92841 1.58447 75.9284" stroke="black" stroke-width="2"/>
                                                    </svg>
                                                </div>

                                                <p className='develop'>Develop</p>
                                                <div className='curveFour'>
                                                    <svg width="141" height="104" viewBox="0 0 141 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.58447 0.928406C1.91781 41.2617 30.1845 117.428 140.584 99.4284" stroke="black" stroke-width="2"/>
                                                    </svg>
                                                </div>

                                                <p className='launch'>Launch</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" className='section twbground' style={{height: 'fit-content'}}>
                    <div className='section_container'>
                        <div className='contents home_fourth'>
                            <div className='flex hfc fdcolumn'>
                                <h1>Featured<br></br>Works</h1>

                                <div className='flex fdrow featured_works_container' style={{margin: '10px 0px'}}>
                                    
                                    <div className='featured_works_box'>
                                        <div className='featured_works_box_image' style={{backgroundColor: '#216250'}}>  
                                            <h2>HiveHotels</h2>
                                        </div>
                                        <h4 className='featured_works_box_text'>HiveHotels -  Hotel management apps with customize websites for hotels.</h4>
                                    </div>

                                    <div className='featured_works_box fwbl'>
                                        <div className='featured_works_box_image' style={{backgroundColor: '#883E26'}}>
                                            <h2>Utilon</h2>
                                        </div>
                                        <h4 className='featured_works_box_text'>Utilon -  The all-in-one utility app for anything and all things.</h4>
                                    </div>

                                </div>

                                <div className='flex fdrow featured_works_container' style={{margin: '10px 0px'}}>

                                    <div className='featured_works_box'>
                                        <div className='featured_works_box_image' style={{backgroundColor: '#2D4E59'}}>  
                                            <h2>Roomy</h2>
                                        </div>
                                        <h4 className='featured_works_box_text'>Roomy -  A web application for clients to find houses and.</h4>
                                    </div>

                                    <div className='featured_works_box fwbl'>
                                        <div className='featured_works_box_image' style={{backgroundColor: '#3A123B'}}>
                                            <h2>HiveHotels</h2>
                                        </div>
                                        <h4 className='featured_works_box_text'>HiveHotels -  Hotel management apps with customize websites for hotels.</h4>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section pebground' style={{height: 'fit-content'}} >
                    <div className='section_container'>
                        <div className='contents home_fifth'>
                            <h1>Building high-end digital products that are impossible to ignore.</h1>
                            <div className='flex hfc building_container'>
                                
                                <div className='buildingOne_image'>
                                    <img src={buildingOne} alt='building one' />
                                </div>

                                <div className='building'>
                                    <div className='building_text_container'>
                                        <div className='building_text'>
                                            <p>African’s best leading digital agency with solid experties and experience in branding, design and development.</p>
                                        </div>
                                        <div className='building_btn'>
                                            <p>About Us</p>
                                            <div className='line'></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='buildingTwo_image'>
                                <img src={buildingTwo} alt='building two' />
                            </div>
                            
                        </div>
                    </div>
                </div>

                <Footer />
                
                
            </div>
        </div>
    );

}

export default Home;