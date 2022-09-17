import React from 'react';
import './Splash.css'


const Splash = ({Splash}) => {

    const slash = "//"

    return(
            <div className={`splash_background ${Splash}`}>
                <div className='splash_container'>
                    <div className='loading'>
                        <h1>{slash}</h1>
                        <h1>Rebbon</h1>
                        <span className='dot bounce firstb'></span>
                        <span className='dot bounce secondb'></span>
                        <span className='dot bounce thirdb'></span>
                    </div>
                </div>
            </div>

    );

}

export default Splash;