import React from "react";

const FooterMap: React.FC = () => {
    return (
        <div className='footer-content__element-map' data-cy='footer-map'>
            <iframe className='footer-map'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.874717585675!2d6.077485012698523!3d52.49950737193929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7ded4e818a589%3A0x68b47bb437213d3b!2sWindesheim%20University%20of%20Applied%20Sciences!5e0!3m2!1sen!2snl!4v1685035598812!5m2!1sen!2snl'
                    allowFullScreen loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
            />
        </div>
    )
}

export default FooterMap