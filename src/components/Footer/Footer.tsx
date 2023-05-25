import React from "react";

const Footer: React.FC = () => {
    return (
        <div className='footer' style={{textAlign: 'center'}}>
            <div className='footer-content'>
                <div className='footer-content__element'>
                    <p className='footer-content__element-copyright' data-cy='footer-copyright'>
                        Jurni ©2023 Created by Simon Kuperus
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer