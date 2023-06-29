import React from "react"
import "./Style.css"
import Header from "../components/Header/Header";
import {Col, Row} from "antd";

const NotFound: React.FC = () => {
    return (
        <>
            <Header activePage='/'/>
            <div className='not-found'>
                <Row className='not-found-content'>
                    <Col className='not-found-content__element' offset='1' span='22'>
                        <h1 className='not-found-content__element-warning-message' data-cy='not-found-warning-message'>
                            Oh no! The page you are looking for does not exist.
                        </h1>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default NotFound