import './Home.css'
import buttonIcon from '../../Assets/Bold-Arrow-Right.svg'
import Showcase from '../../Assets/Showcase.png'
import StarOne from '../../Assets/StarOne.svg'
import StarTwo from '../../Assets/StarTwo.svg'
import curveOne from '../../Assets/curveOne.svg'
import curveTwo from '../../Assets/curveTwo.svg'
import curveThree from '../../Assets/curveThree.svg'
import curveFour from '../../Assets/curveFour.svg'

const Home = () =>{

    return(
        <div>
            <div className='home'>
                    <div className='section mnbground'>
                        <div className='section_container'>
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
                            <img className='starOne' src={StarTwo} alt='star two'/>
                            <img className='starTwo' src={StarOne} alt='star one'/>
                        </div>
                </div>

                <div className='section mnbground'>
                    <div className='section_container'>
                        <div className='contents home_second'>
                            <img src={Showcase} alt='showcase' />
                        </div>
                    </div>
                </div>

                <div className='section twbground'>
                    <div className='section_container'>
                        <div className='contents home_third'>
                            <div className='flex h600'>
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

                <div className='section twbground'>
                    <div className='section_container'>
                        <div className='contents home_fourth'>
                            <div className='flex h600'>
                                <h1>Feath</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );

}

export default Home;