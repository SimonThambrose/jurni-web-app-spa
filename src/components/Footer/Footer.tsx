import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import "./Footer.css";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <Row className='footer-content'>
                <Col className='footer-content__element' offset='1' span='17'>
                    <Row className='footer-content__element-links'>
                        <Col className='footer-content__element-links-jurni' data-cy='footer-links-jurni' span='6'>
                            <p className='footer-head-jurni'>Jurni</p>
                            <Link to='' className='footer-link-about-us'>About us</Link>
                            <Link to=''>Lorem ipsum</Link>
                            <Link to=''>Dolor sit</Link>
                            <Link to=''>Amet consectetur</Link>
                        </Col>
                        <Col className='footer-content__element-links-support' data-cy='footer-links-support' offset='1'
                             span='6'>
                            <p className='footer-head-support'>Support</p>
                            <Link to=''>Lorem ipsum</Link>
                            <Link to=''>Dolor sit</Link>
                            <Link to=''>Amet consectetur</Link>
                            <Link to=''>Adipiscing elit</Link>
                        </Col>
                        <Col className='footer-content__element-links-contact' data-cy='footer-links-contact' offset='1'
                             span='6'>
                            <p className='footer-head-contact'>Contact</p>
                            <Link to='contact' className='footer-link-contact-us'>Contact us</Link>
                            <Link to=''>Lorem ipsum</Link>
                        </Col>
                    </Row>
                </Col>
                <Col className='footer-content__element' offset='1' span='5'>
                    <div className='footer-content__element-map'>

                    </div>
                </Col>
                <Col className='footer-content__element' span='24'>
                    <Row className='footer-content__element-disclaimers-row'>
                        <Col className='footer-content__element-disclaimers-col' offset='1' span='11'>
                            <p className='footer-copyright' data-cy='footer-copyright'>Jurni ©2023 Created by Simon
                                Kuperus</p>
                            <Link to=''>Terms & Conditions</Link>
                            <Link to=''>Privacy Policy</Link>
                            <Link to=''>Cookie Policy</Link>
                            <Link to=''>Disclaimer</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer