import React from "react";
import Header from "../../components/Header/Header";
import {Col, Row} from "antd";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login: React.FC = () => {
    return (
        <>
            <Header activePage='/contact'/>
            <div className='login'>
                <Row className='login-content'>
                    <Col className='login-content__element'>
                        <LoginForm/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Login