import React from 'react'
import './Style.css'

const Main: React.FC = () => {
    return (
        <div>
            <div className='home'>
                <div className='home-content'>
                    <div className='home-content__element'>
                        <h1 className='home-content__element-welcome-message' data-cy='homepage-welcome-message'>
                            {new Date().getHours() < 12 ? 'Good morning! ' : 'Hello! '}
                            This is the home page!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main