import React from "react"
import "./Style.css"
import Header from "../components/Header/Header";
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer";

const Main: React.FC = () => {
    return (
        <>
            <Header activePage='/'/>
            <div className='home'>
                <Row className='home-content'>
                    <Col className='home-content__element' offset='1' span='22'>
                        <h1 className='home-content__element-welcome-message' data-cy='homepage-welcome-message'>
                            {new Date().getHours() < 12 ? 'Good morning! ' : 'Hello! '}
                            This is the home page!
                        </h1>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default Main