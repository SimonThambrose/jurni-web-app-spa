import React from "react";
import {Link} from "react-router-dom";
import {Col, Row} from "antd";
import "./Footer.css";
import FooterMap from "./FooterMap";

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <Row className='footer-content'>
                <Col className='footer-content__element' offset='1' span='15'>
                    <Row className='footer-content__element-links'>
                        <Col className='footer-content__element-links-jurni' data-cy='footer-links-jurni' span='7'>
                            <h3 className='footer-head-jurni'>Jurni</h3>
                            <Link to='' className='footer-link'>About us</Link>
                            <Link to='' className='footer-link'>Lorem ipsum</Link>
                            <Link to='' className='footer-link'>Dolor sit</Link>
                            <Link to='' className='footer-link'>Amet consectetur</Link>
                        </Col>
                        <Col className='footer-content__element-links-support' data-cy='footer-links-support' offset='1' span='7'>
                            <h3 className='footer-head-support'>Support</h3>
                            <Link to='' className='footer-link'>Lorem ipsum</Link>
                            <Link to='' className='footer-link'>Dolor sit</Link>
                            <Link to='' className='footer-link'>Amet consectetur</Link>
                            <Link to='' className='footer-link'>Adipiscing elit</Link>
                        </Col>
                        <Col className='footer-content__element-links-contact' data-cy='footer-links-contact' offset='1' span='7'>
                            <h3 className='footer-head-contact'>Contact</h3>
                            <Link to='contact' className='footer-link'>Contact us</Link>
                            <Link to='' className='footer-link'>Lorem ipsum</Link>
                        </Col>
                    </Row>
                </Col>
                <Col className='footer-content__element' offset='1' span='6'>
                    <FooterMap/>
                </Col>
                <Col className='footer-content__element' span='24'>
                    <Row className='footer-content__element-disclaimers-row'>
                        <Col className='footer-content__element-disclaimers-col' data-cy='footer-disclaimers' offset='1' span='10'>
                            <p className='footer-copyright'>Jurni © 2023 All rights reserved.</p>
                            <Link to='' className='footer-link'>Terms & Conditions</Link>
                            <Link to='' className='footer-link'>Privacy Policy</Link>
                            <Link to='' className='footer-link'>Cookie Policy</Link>
                            <Link to='' className='footer-link'>Disclaimer</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Footer