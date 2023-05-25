import React from "react";
import Header from "../components/Header/Header";
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer";

const Matchmaker: React.FC = () => {
    return (
        <>
            <Header activePage='/matchmaker'/>
            <div className='matchmaker'>
                <Row className='matchmaker-content'>
                    <Col className='matchmaker-content__element' offset='1' span='22'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam,
                            nunc nunc aliquet nunc, quis aliquam nunc nunc quis. Nulla facilisi.
                        </p>
                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default Matchmaker